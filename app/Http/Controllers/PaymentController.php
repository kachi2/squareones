<?php

namespace App\Http\Controllers;

use App\Models\Billing;
use App\Models\Company;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Cartalyst\Stripe\Laravel\Facades\Stripe;

class PaymentController extends Controller
{
    //


    public function loadPyamentPage(){
        return view('payment');
    }

    public function PaymentIntent(Request $request){
        $paymentIntent = Stripe::paymentIntents()->create([
            'amount' => 5000,
            'currency' => 'usd',
            'payment_method_types' => [
                'card',
            ],
        ]);
       return response()->json($paymentIntent, 200);
    }

    public function ProcessPayment(Request $request){
        $company = Company::where(['user_id' => 1, 'is_complete' => 0])->first();

        $payment_ref = str_replace(['(',')','\\','/','%','#','$','@','!'],'',base64_encode(random_bytes(10)));
    $payment = Billing::create([
            'user_id' => 1,
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
    return response()->json([
        $request->all()
    ]);

    }


}
