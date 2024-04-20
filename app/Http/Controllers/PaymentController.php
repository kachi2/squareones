<?php

namespace App\Http\Controllers;

use App\Interfaces\PaymentInterface;
use App\Models\Billing;
use App\Models\Company;
use App\Services\PaymentServices;
use Carbon\Carbon;
use Cartalyst\Stripe\Api\PaymentIntents;
use Illuminate\Http\Request;
use Cartalyst\Stripe\Laravel\Facades\Stripe;

class PaymentController extends Controller
{

    public function __construct(
        public readonly PaymentInterface $PaymentInterface
    )
    {
        
    }
    //


    public function loadPyamentPage(){
        return view('payment');
    }

    public function PaymentIntent(){
        $paymentIntent = $this->PaymentInterface->PaymentIntent();
       return response()->json($paymentIntent, 200);
    }

    public function ProcessPayment(Request $request){
        $procespayment = $this->PaymentInterface->ProcessPayment($request);
    return response()->json([
        $procespayment
    ]);

}


}
