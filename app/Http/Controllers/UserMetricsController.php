<?php

namespace App\Http\Controllers;

use App\Models\ActivityLog;
use App\Services\UserMetricsService;
use Cloudinary\Api\HttpStatusCode;
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
        try{
            return response()->json(['data' =>  $company], HttpStatusCode::OK);
       }catch(\Exception $e){
           return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
          } 
    }

    public function BillingInformation()
    {
        return $this->UserMetricsService->getPaymentInfo();
    }

    public function UserSubscription()
    {
        try{
         $sub = $this->UserMetricsService->getUserSubscription();
         return response()->json($sub, HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       } 
    }

    public function UserActivityLog()
    {
        try{
        $activity =$this->UserMetricsService->UserActivityLog();
        return response()->json(['data' => $activity], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       } 
    }

}
