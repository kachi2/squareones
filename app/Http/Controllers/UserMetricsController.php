<?php

namespace App\Http\Controllers;

use App\Services\UserMetricsService;
use Illuminate\Http\Request;

class UserMetricsController extends Controller
{
    //

    public function __construct(
        public readonly UserMetricsService $UserMetricsService
    )
    {
        
    }

    public function getCompanyAnnualReturn(Request $req)
    {
        $payment = $this->UserMetricsService->getCompanyAnnualReturn($req->company_id);
        if($payment)
        {
            return response()->json([
               'data' => $payment
            ]);
        }
        return [];
    }

    public function getCompanyCount(Request $req)
    {
        $company = $this->UserMetricsService->getCcompanyCount($req->company_id);
        if($company)
        {
            return response()->json([
                'data' =>  $company
            ]);
        }
        return [];
    }

    public function BillingInformation()
    {
        return $this->UserMetricsService->getPaymentInfo();
    }

    public function UserSubscription()
    {
        return $this->UserMetricsService->getUserSubscription();
    }

}
