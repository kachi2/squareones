<?php

namespace App\Services;

use App\Interfaces\PaymentInterface;
use App\Jobs\ProcessFounderKyc;
use App\Models\AdminNotification;
use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\Billing;
use App\Models\CompanyEntity;
use App\Models\Invoices;
use App\Models\Notification;
use App\Models\Plan;
use App\Models\User;
use App\Models\userActivity;
use App\Models\UserBillingInfo;
use App\Models\UserSubscription;
use App\Notifications\PaymentCompleted;
use Stripe\Stripe;
use App\Notifications\CompanyFomationCompleted;
use Carbon\Carbon;
use App\Services\BaseClient;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Stripe\Invoice;

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
        return response()->json(['error' => 'Payment information is not set'], 203);
        }
        try {
            DB::beginTransaction();
            $payment_ref = generateRef(10);
            $stripe = $this->stripeClient;
            $session = $stripe->checkout->sessions->create([
            'payment_method_types' => ['card'],
            'customer_email' => auth()->user()->email,
            'line_items' => [[
                'price_data' => [
                    'currency' => $plans->currency,
                    'product_data' => [
                        'name' => $plans->plan,
                    ],
                    'unit_amount' => $plans->amount * 100,
                ],
                'quantity' => 1,
            ]],
                'mode' => 'payment',
                'billing_address_collection' => 'required',
                'invoice_creation' => ['enabled' => true],
                'customer_creation' => 'always',
                'saved_payment_method_options' => ['payment_method_save' => 'enabled'],
                // 'success_url' => route('process.payment'),
                // 'success_url' => url('/kcy/verifications'),
                'payment_intent_data' => [
                    'setup_future_usage' => 'off_session', 
                ],
                'success_url' => 'http://127.0.0.1:5173/kcy/verifications',
                'cancel_url' => url('/start_company'),
            ]);
            $company = Company::where(['user_id' => auth_user(), 'is_complete' => 0])->first();
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
            $company = Company::where(['is_complete' => 0, 'user_id' => auth_user()])->first();
            if($company){
            $billing = Billing::where('company_id', $company->id)->first();
            [$session, $stripe, $paymentInfo] =  $this->processStripeRequest($billing);
            if ($session->status == 'complete') {
                if ($billing ) {
                    $billing->update(['status' => $session->status, 'date_paid' => Carbon::now()]);
                    $this->SendNotification($user,$billing,$company, $paymentInfo);
                    $this->AddBillingInfo($paymentInfo, $billing, $session);
            
                    $companies = CompanyEntity::where('company_id', $billing->company_id)->get();
                    foreach ($companies as $companyEntity) {
                        $datas['company_id'] = $companyEntity->company_id;
                        $datas['company_entity_id'] = $companyEntity->id;
                        ProcessFounderKyc::dispatch($datas);
                    }
                    //  $user->notify(new CompanyFomationCompleted($company));
                    //  $user->notify(new PaymentCompleted($Subs));
                    UserActivities('Completed Company Payment', $location=null, "Payment");
                    $this->createSubscription();
                    return $session;
                }
                return 
                [
                    "error" => "No company active found", 203
                ];
            }
        }
        return 
        [
            'error' => 'Payment link expired or broken, please contact support', 203
        ];
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

  

    public function AddSubscriptionInfo($company,$session, $payment_ref, $plans)
    {
        Billing::create([
            'company_id' => $company?->id,
            'user_id' => auth_user(),
            'company_id' => $company?->id,
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

    public function AddBillingInfo($paymentInfo, $billing, $session)
    {
        $biling = UserBillingInfo::whereUserId(auth_user())->get();
        if($biling) foreach($biling as $b) $b->update(['is_default' => 0]);
        $data = [
            'user_id' => auth_user(),
            'card_name' => strtoupper($paymentInfo['card']['brand']),
            'card_no' => $paymentInfo['card']['last4'],
            'email' => $paymentInfo['billing_details']['email'],
            'is_default' => 1,
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
                'customer' => $session['customer'],
                'default_payment_method' => $paymentInfo['id'],
                'charge_automatically' => 1
            ]);
        }    
        UserActivities('Updated  Billing Information', $location=null, 'Billing');
        return $sub;
    }
    public function SendNotification($user,$billing) 
    {
        Notification::create([
            'title' => 'Payment Completed Successfully',
            'content' => `Hi,  $user?->name   Your payment  $billing?->amount for compamy registration is completed`,
            'user_id' => $user->id
        ]);
        // AdminNotification::create([
        //     'title' => 'New Incoming Payment',
        //     'content' => `The payment of  $billing->amount  was received from $user?->name  for their company registration`,
        //     'admin_id' => 1
        // ]);  
    }

    public function processStripeRequest($billing) 
    {
        $stripe = $this->stripeClient;
        $session = $stripe->checkout->sessions->retrieve($billing->payment_intent);
        $intent =  \Stripe\PaymentIntent::all(['limit' => 2, 'customer' => $session['customer']]);
        $paymentInfo = $stripe?->paymentMethods?->retrieve($intent['data']['0']['payment_method'], []);
        return [$session, $stripe, $paymentInfo];
    }

   public function getUserInvoice()
   {
    $data['invoice'] = Invoices::where('user_id', auth_user())->with('subscription')->paginate(10);
    $data['unpaid'] = Invoices::where(['user_id' => auth_user(), 'status' => 'open'])->get();
    $data['paid'] = Invoices::where(['user_id' => auth_user(), 'status' => 'paid'])->get();
    $data['monthly_paid'] = Invoices::whereBetween('created_at', [Carbon::now()->subDays(7)->startOfDay(),  Carbon::now()->addDays(7)->endOfDay()])->where(['user_id' => auth_user(), 'status' => 'paid'])->get();
    $data['monthly_unpaid'] = Invoices::whereBetween('created_at', [Carbon::now()->subDays(7)->startOfDay(),  Carbon::now()->addDays(7)->endOfDay()])->where(['user_id' => auth_user(), 'status' => 'open'])->get();
    return $data;
   }

   public function getSubcriptionStatus()
   {
    $data['subscription'] = UserSubscription::where('user_id', auth_user())->latest()->get();
    $data['active_subs'] = UserSubscription::where(['user_id' => auth_user(), 'status' => 'active'])->latest()->get();
    $data['cancelled_subs'] = UserSubscription::where(['user_id' => auth_user(), 'status' => 'paused'])->latest()->get();
  return $data;
  } 

  public function createSubscription()
  {
    $user = User::where('id', auth_user())->first();
    $plan = Plan::latest()->first();
    $subsc = UserSubscription::where(['user_id' => auth_user(), 'company_id' => $user->activeCompany()?->id])->first();
    $stripe = $this->stripeClient;
    // $stripe->paymentMethods->attach(
    //     $subsc->default_payment_method,
    //     ['customer' =>  $subsc->customer]
    //   );
    \Stripe\Customer::update(
        $subsc->customer,
        [
            'invoice_settings' => [
                'default_payment_method' => $subsc->default_payment_method,
            ]
        ]
      );
    $subscription = $stripe->subscriptions->create([
        'customer' => $subsc->customer,
        'items' => [['price' => $plan->default_price_id]],
        ]);
    
        // return $subsc->company->names[0]->eng_name . $subsc->company->names[0]->chn_name ;
    $subsc->update([
        'subscription_id' => $subscription->id,
        'status' => 'active',
        'next_billing_cycle' => Date('d-m-Y', $subscription->next_billing_cycle),
        'current_period_start' => Date('d-m-Y', $subscription->current_period_start),
        'company_name' => $subsc->company->names[0]->eng_name . $subsc->company->names[0]->chn_name 
    ]);

    return $subsc;
  }

  public function cancelSubscription($subscription)
  {
    $stripe = $this->stripeClient;
    $userSub = UserSubscription::where('subscription_id',$subscription)->first();
     $stripe->subscriptions->cancel($subscription, []);
    $userSub->update(['status' => 'cancelled']);
    return $userSub; 
  }

  public function updatePaymentDetails($request)
  {
    try{
    $user = UserSubscription::where('user_id', auth_user())->first();
    $paymentIntent = \Stripe\PaymentIntent::create([
        'amount' => 100, 
        'currency' => 'usd',
        'customer' => $user->customer,
        'setup_future_usage' => 'off_session', 
    ]);
   return ['client_secret' => $paymentIntent->client_secret];
}catch(\Exception $e)
{
    return $e->getMessage();
}
  }

  public function MakeDefaultPayment($paymentIntentId)
  {
    try{
    $stripe = $this->stripeClient;
    $paymentIntent = \Stripe\PaymentIntent::retrieve($paymentIntentId);
   $user = UserSubscription::where('user_id', auth_user())->latest()->first();
   $pays = \Stripe\Customer::update(
        $user->customer,
        [
            'invoice_settings' => [
                'default_payment_method' => $paymentIntent->payment_method,
            ]
        ]
      );
      $user->update(['default_payment_method' => $paymentIntent->payment_method]);
      $paymentInfo = $stripe?->paymentMethods?->retrieve($pays['invoice_settings']['default_payment_method'], []);
      $biling = UserBillingInfo::whereUserId(auth_user())->get();
      UserActivities('Update payment Informaiton', $location=null, 'Subcription');
      if($biling) foreach($biling as $b) $b->update(['is_default' => 0]);
     $data = [
        'user_id' => auth_user(),
        'card_name' => strtoupper($paymentInfo['card']['brand']),
        'card_no' => $paymentInfo['card']['last4'],
        'email' => $paymentInfo['billing_details']['email'],
        'is_default' => 1,
        'name' => $paymentInfo['billing_details']['name'],
        'country' => $paymentInfo['billing_details']['address']['country'],
        'expiry' => $paymentInfo['card']['exp_month'].'/'.$paymentInfo['card']['exp_year'],
        'payment_id' => $paymentIntentId
    ];
        UserBillingInfo::create($data);
      return $user;
    }catch(\Exception $e)
    {
        return $e->getMessage();
    }
  }



public function PauseSubscription($subscription_id)
{
    try{
    $user = UserSubscription::where('subscription_id', $subscription_id)->first();
    $stripe = $this->stripeClient;
    if($user)
    {
        $stripe->subscriptions->update(
            $subscription_id,
            ['pause_collection' => ['behavior' => 'keep_as_draft']]
          );
    }
    $user?->update(['status' => 'paused']);
    return $user;
}catch(\Exception $e)
{
    return $e->getMessage();
}

}

public function resumeSubscription($subscription)
{
    $stripe = $this->stripeClient;
    $stripe->subscriptions->update($subscription, [
        'pause_collection' => '', 
    ]);
   $userSub = UserSubscription::where('subscription_id',$subscription)->first();
  $userSub->update(['status' => 'active']);
  return $userSub;
}
  //add company on invoices





}
