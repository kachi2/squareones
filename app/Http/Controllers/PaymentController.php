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


    public function PaymentIntent(Request $request){
        $paymentIntent = $this->paymentInterface->PaymentIntent($request);
       return response()->json($paymentIntent, 200);
    }

    public function ProcessPayment(Request $request){
        $user = User::where('id', auth_user())->first();
       $procespayment = $this->paymentInterface->ProcessPayment($request);
       GenerateCompanyData::dispatch(['company_id' => $user->activeCompany()->id]);
       $this->teamServices->create($user->activeCompany(),$user, $request->role);
    return response()->json([
        $procespayment
    ]);
}

public function getSubcription()
{
    return $this->paymentInterface->getSubcriptionStatus();
}
public function createSubscription()
{
    return $this->paymentInterface->createSubscription();
}

public function cancelSubscription($subcription_id)
{
    return $this->paymentInterface->cancelSubscription($subcription_id);
}

public function updatePaymentDetails(Request $request)
{
    return $this->paymentInterface->updatePaymentDetails($request);
}


public function MakeDefaultPayment($payment_id)
{
   return $this->paymentInterface->MakeDefaultPayment($payment_id);
}

public function getUserInvoice()
{
    return $this->paymentInterface->getUserInvoice();
}

public function pauseSubscription($subcription_id)
{
    return $this->paymentInterface->PauseSubscription($subcription_id);
}


public function resumeSubscription($subcription_id)
{
    return $this->paymentInterface->resumeSubscription($subcription_id);
}




}
