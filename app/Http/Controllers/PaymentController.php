<?php

namespace App\Http\Controllers;

use App\Events\GenerateCompanyData;
use App\Interfaces\PaymentInterface;

use App\Interfaces\KycInterface;
use App\Models\Company;
use App\Models\User;
use App\Services\TeamServices;
use Illuminate\Http\Request;

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
       if(!$this->checkifCompanyPaid($user->activeCompany()?->id))GenerateCompanyData::dispatch(['company_id' => $user->activeCompany()?->id]);
       $this->teamServices->create($user->activeCompany(),$user, $request->role);
    return response()->json([
        $procespayment
    ]);
}

public function getSubcription()
{
    return $this->paymentInterface->getSubcriptionStatus();
}
public function createSubscription($customer)
{
    return $this->paymentInterface->createSubscription($customer);
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


public function UpdateCard()
{
    return view('payment');
}

public function checkifCompanyPaid($company_id)
{
    $company = Company::whereId($company_id)->first();
    if($company->is_paid == 1)return true;
    return false;
}



}
