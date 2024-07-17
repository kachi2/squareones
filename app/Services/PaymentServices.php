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
use App\Models\UserSubscription;
use App\Notifications\CompanyFomationCompleted;
use App\Notifications\PaymentCompleted;
use Illuminate\Support\Carbon;
use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class PaymentServices implements PaymentInterface
 {

    public function PaymentIntent(Request $request){
        try{
            DB::beginTransaction();
            $plans = Plan::latest()->first();
            $payment_ref = str_replace(['(',')','\\','/','%','#','$','@','!'],'',base64_encode(random_bytes(10)));

        // $paymentIntent = Stripe::paymentIntents()->create([
        //     'amount' => $plans->amount,
        //     'currency' => 'usd',
        //     'payment_method_types' => [
        //         'card',
        //     ],
        // ]);
        $stripe = new \Stripe\StripeClient("sk_test_51P7LhqRxBSKsFyqbRwW3yHYcBxVldQori1jhWvT2yS8VtNSloJWAlI4bB2Yyqwh1ywjJeU6oMWUkAxSMKbldViKb00SP28Wht2");
        $session = $stripe->checkout->sessions->create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => 'T-shirt',
                    ],
                    'unit_amount' => $plans->amount*100,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => url('/https://squareone.portrec.ng/kcy/verifications'),
            'cancel_url' => url('/cancel'),
        ]);

        Session::put('session_id',$session->id);
        $company = Company::where(['user_id' => auth_user(), 'is_complete' => 0])->first();
        if($company){
        Billing::updateOrcreate([
            'company_id' => $company->id,
        ],[
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
      DB::commit();
      return response()->json($session->url);
    }catch(\Exception $e){
    DB::rollBack();
        return $e->getMessage();
    }
    }

    public function ProcessPayment(Request $request)
    {  
    try{
        $stripe = new \Stripe\StripeClient('sk_test_51NgNdcEAO4xwJMdypdJNh2azXY9H1Aloq1V841Be4kkzTdxDAVRzkmpk1EsNDeyf3TFss6gr2jSG5JP7RTAlOdiL00P6uaN2dx');
        $session = $stripe->checkout->sessions->retrieve(Session::get('session_id'));
        if($session->status == 'complete'){
            $billing = Billing::where('payment_intent', $session->payment_intent)->first();
            if($billing){
           $billing->update([
            'status' => $session->status,
           ]);

        Notification::create([
            'title' => 'Payment Completed Successfully',
            'content' => 'Hi, '.auth_name().' Your payment '.$billing->amount .' for compamy registration is completed',
            'user_id'=> auth_user()
        ]);
        AdminNotification::create([
            'title' => 'New Incoming Payment',
            'content' => 'The payment of '.$billing->amount.' was received from '.auth_user() .' for their company registration',
            'admin_id'=> 1 
        ]);

        $companies = Company::where('id', $billing->company_id)->first();
        if($companies){
        $companies->update([
            'is_completed' => 1
        ]);
        }
        $company = CompanyEntity::where('company_id', $billing->company_id)->get();
         foreach($company as $companyEntity){
            $datas['company_id'] = $companyEntity->company_id;
            $datas['company_entity_id'] = $companyEntity->id;
            ProcessFounderKyc::dispatch($datas);
            // $sss = event(new FounderKyc($datas));
        }
        $companies->User->notify(new CompanyFomationCompleted($companies));
        // $companies->User->notify(new PaymentCompleted($billing));
      
        return $session;
    }
    }
    }catch(\Exception $e){
        return $e->getMessage();
    }

    }


}