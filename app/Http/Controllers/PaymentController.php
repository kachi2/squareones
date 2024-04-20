<?php

namespace App\Http\Controllers;

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
            'amount' => 2000,
            'currency' => 'usd',
            'payment_method_types' => [
                'card',
            ],
        ]);
       return response()->json($paymentIntent, 200);
    }

    public function ProcessPayment(Request $request){

        return $request->all();

    }


}
