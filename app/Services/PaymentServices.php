<?php

namespace App\Services;

use App\Interfaces\PaymentInterface;
use App\Jobs\ProcessFounderKyc;
use App\Models\AdminNotification;
use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\Billing;
use App\Models\CompanyEntity;
use App\Models\Notification;
use App\Models\Plan;
use App\Models\User;
use App\Models\UserBillingInfo;
use App\Models\UserSubscription;
use App\Notifications\PaymentCompleted;
use Stripe\Stripe;
use App\Notifications\CompanyFomationCompleted;
use Carbon\Carbon;
use App\Services\BaseClient;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class PaymentServices implements PaymentInterface
{

    protected $stripe;
    protected $stripeClient;
    protected $stripeKey;

    public function __construct()
    {
        $this->stripeKey =  Stripe::setApiKey('sk_test_51P7LhqRxBSKsFyqbRwW3yHYcBxVldQori1jhWvT2yS8VtNSloJWAlI4bB2Yyqwh1ywjJeU6oMWUkAxSMKbldViKb00SP28Wht2');
        $this->stripeClient = new \Stripe\StripeClient('sk_test_51P7LhqRxBSKsFyqbRwW3yHYcBxVldQori1jhWvT2yS8VtNSloJWAlI4bB2Yyqwh1ywjJeU6oMWUkAxSMKbldViKb00SP28Wht2');
    }

    public function PaymentIntent(Request $request)
    {
        $plans = Plan::latest()->first();
        if(empty($plans))
        {
        return response()->json(['error' => 'Payment information is not set'], 500);
        }
        try {
            DB::beginTransaction();
            $payment_ref = generateRef(10);
            $stripe = $this->stripeClient;
            $session = $stripe->checkout->sessions->create([
                'payment_method_types' => ['card'],
                'line_items' => [[
                    'price' => $plans->default_price_id, 
                    // 'price_data' => [
                    //     'currency' => $plans->currency,
                    //     'product_data' => [
                    //         'name' => $plans->plan,
                    //     ],
                    //     'unit_amount' => $plans->amount * 100,
                    // ],
                    'quantity' => 1,
                ]],
                'mode' => 'subscription',
                'saved_payment_method_options' => ['payment_method_save' => 'enabled'],
                // 'success_url' => url('/kcy/verifications'),
                'success_url' => route('ProcessPayment'),
                'cancel_url' => url('/start_company'),
            ]);
            $company = Company::where(['user_id' => 1, 'is_complete' => 0])->first();
            if ($company) {
              $this->AddSubscriptionInfo($company,$session, $payment_ref, $plans);
            }
            DB::commit();
            return response()->json($session->url);
        } catch (\Exception $e) {
            DB::rollBack();
            return $e->getMessage();
        }
    }

    public function ProcessPayment($request)
    {
        try {
            $user = User::where('id', auth_user())->first();
            $company = Company::where(['is_complete' => 0])->first();
            if($company){
            $billing = Billing::where('company_id', $company->id)->first();
            [$session, $stripe, $paymentInfo] =  $this->processStripeRequest($billing);
            if ($session->status == 'complete') {
                if ($billing ) {
                    $billing->update(['status' => $session->status, 'date_paid' => Carbon::now()]);
                    // $this->SendNotification($user,$billing,$company, $paymentInfo, $session);
                     $Subs = $this->AddBillingInfo($paymentInfo, $billing);
                    $companies = CompanyEntity::where('company_id', $billing->company_id)->get();
                    foreach ($companies as $companyEntity) {
                        $datas['company_id'] = $companyEntity->company_id;
                        $datas['company_entity_id'] = $companyEntity->id;
                        ProcessFounderKyc::dispatch($datas);
                    }
                    //  $user->notify(new CompanyFomationCompleted($company));
                    //  $user->notify(new PaymentCompleted($Subs));

                    return $company;
                }
                return false;
            }
        }
        return false;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

  

    public function AddSubscriptionInfo($company,$session, $payment_ref, $plans)
    {
        Billing::updateOrcreate([
            'company_id' => $company->id,
        ], [
            'user_id' => auth_user(),
            'company_id' => $company->id,
            'amount' => $plans->amount,
            'payment_intent' => $session->id,
            'payment_ref' => $payment_ref,
        ]);
        UserSubscription::create([
            'user_id' => auth_user(),
            'company_id' => $company->id,
            'plan_id' =>  $plans->id,
            'expiry_date' => null,
            'contact_person' => null,
            'amount_paid' => $plans->amount,
            'payment_id' => $session->id,
        ]);
    }

    public function AddBillingInfo($paymentInfo, $billing)
    {
        $data = [
            'user_id' => auth_user(),
            'card_name' => $paymentInfo['card']['brand'],
            'card_no' => $paymentInfo['card']['last4'],
            'email' => $paymentInfo['billing_details']['email'],
            'name' => $paymentInfo['billing_details']['name'],
            'country' => $paymentInfo['billing_details']['address']['country'],
            'expiry' => $paymentInfo['card']['exp_month'].'/'.$paymentInfo['card']['exp_year'],
            'payment_id' => $billing->payment_intent
        ];
                UserBillingInfo::create($data);
        $sub   = UserSubscription::where('payment_id', $data['payment_id'])->first();
        if ($sub) {
            $sub->update([
                'contact_person' => $data['name'],
                'customer' => $paymentInfo['customer'],
                'default_payment_method' => $paymentInfo['type'],
                'charge_automatically' => 1
            ]);
        }
        return $sub;
    }
    public function SendNotification($user,$billing) 
    {
        Notification::create([
            'title' => 'Payment Completed Successfully',
            'content' => `Hi,  $user?->name   Your payment  $billing?->amount for compamy registration is completed`,
            'user_id' => $user->id
        ]);
        AdminNotification::create([
            'title' => 'New Incoming Payment',
            'content' => `The payment of  $billing->amount  was received from $user?->name  for their company registration`,
            'admin_id' => 1
        ]);
       
        
    }

    public function processStripeRequest($billing,) 
    {
        $stripe = $this->stripeClient;
        $session = $stripe->checkout->sessions->retrieve($billing->payment_intent);
        $intent =  \Stripe\PaymentIntent::all(['limit' => 10, 'customer' => $session['customer']]);
        $paymentInfo = $stripe?->paymentMethods?->retrieve($intent['data']['0']['payment_method'], []);
        return [$session, $stripe, $paymentInfo];
    }

   

    public function InitiateSubscriptionPayment($request)
    {
        $user = User::where('id',auth_user())->first();
        $plan = Plan::latest()->first();
        $checkout = $user
                 ->newSubscription($plan->stripe_product_id, $plan->default_price_id)
                ->checkout([
                    'success_url' => route('ProcessPayment'),
                    'cancel_url' => url('/start_company'),
        ]);

        return response()->json([
             "headers" => "",
           "original" =>   $checkout->url,
            "exception" => ''
        ]);

    }


    public function CreateSubscription($customer)
    {
         $customer = UserSubscription::where('customer', $customer)->first();
        $strp = $this->stripeClient ->subscriptions->create([
            'customer' => $customer->customer,
            'items' => [['price' => $customer->default_price_id]],
          ]);
        dd($strp);

    }



}
