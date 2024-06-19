<?php

namespace App\Http\Controllers;

use App\Interfaces\PaymentInterface;

use App\Interfaces\KycInterface;
use App\Jobs\ProcessFounderKyc;
use App\Models\CompanyEntity;
use Illuminate\Http\Request;
use Cartalyst\Stripe\Laravel\Facades\Stripe;

class PaymentController extends Controller
{
    public function __construct(
        public readonly PaymentInterface $PaymentInterface,
        public readonly KycInterface $KycInterface
    )
    {  
    }

    public function PaymentIntent(Request $request){
        $paymentIntent = $this->PaymentInterface->PaymentIntent($request);
       return response()->json($paymentIntent, 200);
    }

    public function ProcessPayment(Request $request){
        $procespayment = $this->PaymentInterface->ProcessPayment($request);
    return response()->json([
        $procespayment
    ]);
}



}
