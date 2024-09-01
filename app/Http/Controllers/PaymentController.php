<?php

namespace App\Http\Controllers;

use App\Events\GenerateCompanyData;
use App\Interfaces\PaymentInterface;

use App\Interfaces\KycInterface;
use App\Jobs\ProcessFounderKyc;
use App\Models\CompanyEntity;
use App\Models\User;
use App\Services\TeamServices;
use Illuminate\Http\Request;
use Cartalyst\Stripe\Laravel\Facades\Stripe;

class PaymentController extends Controller
{
    public function __construct(
        public readonly PaymentInterface $paymentInterface,
        public readonly KycInterface $kycInterface,
        public readonly TeamServices $teamServices
    )
    {  
    }

    public function PaymentIntents(Request $request){
     return $this->paymentInterface->InitiateSubscriptionPayment($request);
    
    }

    public function PaymentIntent(Request $request){
        $paymentIntent = $this->paymentInterface->PaymentIntent($request);
       return response()->json($paymentIntent, 200);
    }

    public function ProcessPayment(Request $request){
        $user = User::where('id', auth_user())->first();
       $procespayment = $this->paymentInterface->ProcessPayment($request);
       GenerateCompanyData::dispatch(['company_id' => $user->activeCompany()->id]);
        $this->teamServices->create($user->activeCompany(), $request->role, $user);
    return response()->json([
        $procespayment
    ]);
}




}
