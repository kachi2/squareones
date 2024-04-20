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

    public function PaymentIntent(){
        try{
        $paymentIntent = Stripe::paymentIntents()->create([
            'amount' => 5000,
            'currency' => 'usd',
            'payment_method_types' => [
                'card',
            ],
        ]);
        return  $paymentIntent;
    }catch(\Exception $e){
        return $e->getMessage();
    }
    }

    public function ProcessPayment(Request $request)
    {  
    try{
        $company = Company::where(['user_id' => auth_user(), 'is_complete' => 0])->first();
        if($company){
            $payment_ref = str_replace(['(',')','\\','/','%','#','$','@','!'],'',base64_encode(random_bytes(10)));
            Billing::create([
                'user_id' => auth_user(),
                'company_id' => $company->id,
                'amount' => $company->amount,
                'payment_intend' => $request->payment_intent,
                'status' => $request->redirect_status,
                'payment_ref' => $payment_ref,
                'date_paid' =>Carbon::now(),
                'due_date' => Carbon::now()->addDays(365)
        ]);
        $company->update([
            'is_complete' => 1
        ]);
        return $company;
        }
    }catch(\Exception $e){
        return $e->getMessage();
    }

    }


}