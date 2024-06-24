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

class PaymentServices implements PaymentInterface
 {

    public function PaymentIntent(Request $request){
        try{
            $plans = Plan::where('id', $request->plan_id)->first();
            $payment_ref = str_replace(['(',')','\\','/','%','#','$','@','!'],'',base64_encode(random_bytes(10)));
          
        $paymentIntent = Stripe::paymentIntents()->create([
            'amount' => $plans->amount,
            'currency' => 'usd',
            'payment_method_types' => [
                'card',
            ],
        ]);
        $company = Company::where(['user_id' => auth_user(), 'is_complete' => 0])->first();
        if($company){
        Billing::updateOrcreate([
            'company_id' => $company->id,
        ],[
            'user_id' => auth_user(),
            'company_id' => $company->id,
            'amount' => $plans->amount,
            'payment_intent' => $paymentIntent['id'],
            'payment_ref' => $payment_ref,
        ]);
        UserSubscription::create([
            'user_id' => auth_user(),
            'company_id' => $company->id,
            'plan_id' =>  $plans->id, 
            'expiry_date' => null, 
            'contact_person' => null,
            'amount_paid' => $plans->amount,
            'payment_id' => $paymentIntent['id'],
        ]);
        
        Notification::create([
            'title' => 'Payment Completed Successfully',
            'content' => 'Hi, '.auth_name().' Your payment '.$plans->amount .' for compamy registration is completed',
            'user_id'=> auth_user()
        ]);

        AdminNotification::create([
            'title' => 'New Incoming Payment',
            'content' => 'The payment of '.$plans->amount.' was received from '.auth_user() .' for their company registration',
            'admin_id'=> 1 
        ]);




      }
        // dd($paymentIntent);
        return  $paymentIntent;
    }catch(\Exception $e){
        return $e->getMessage();
    }
    }

    public function ProcessPayment(Request $request)
    {  
    try{
            $billing = Billing::where('payment_intent', $request->payment_intent)->first();
            if($billing){
           $billing->update([
            'status' => $request->redirect_status,
           ]);
        //    $sub = UserSubscription::where('payment_id', $request->payment_intent)->first();
        //    $sub->update([
        //     'user_id' => auth_user(),
        //     'expiry_date' => null, 
        //     'contact_person' => null,
        //    ]);
    

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
      
        return $request->all();
    }
    }catch(\Exception $e){
        return $e->getMessage();
    }

    }


}