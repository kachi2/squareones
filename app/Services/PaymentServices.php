<?php 
namespace App\Services;

use App\Interfaces\PaymentInterface;
use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\Billing;
use Illuminate\Support\Carbon;
use Cartalyst\Stripe\Laravel\Facades\Stripe;

class PaymentServices implements PaymentInterface
 {

    public function PaymentIntent(Request $request){
        try{
            $payment_ref = str_replace(['(',')','\\','/','%','#','$','@','!'],'',base64_encode(random_bytes(10)));
          
        $paymentIntent = Stripe::paymentIntents()->create([
            'amount' => 5000,
            'currency' => 'usd',
            'payment_method_types' => [
                'card',
            ],
        ]);
        $company = Company::where(['user_id' =>1, 'is_complete' => 1])->first();
        Billing::updateOrcreate([
            'company_id' => $company->id,
        ],[
            'user_id' => 1,
            'company_id' => $company->id,
            'amount' => '5000',
            'payment_intent' => $paymentIntent['id'],
            'status' => '',
            'payment_ref' => $payment_ref,
        ]);
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
        return $request->all();
    }
    }catch(\Exception $e){
        return $e->getMessage();
    }

    }


}