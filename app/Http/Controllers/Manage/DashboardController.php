<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Models\AdminActivityLog;
use App\Models\Billing;
use App\Models\Company;
use App\Models\DocumentType;
use App\Models\userActivity;
use Cartalyst\Stripe\Api\Cards;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Services\AdminStats;

class DashboardController extends Controller
{
    //
    public function __construct(
        public readonly AdminStats $adminStats
    )
    {
        
    }

    public function AdminActivityLog(){
        try{
        $activities = $this->adminStats->AdminActivityLog();
        return response()->json(['data' => $activities], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

    public function UserActivities(){
        try{
        $activities = $this->adminStats->UserActivities();
        return response()->json(['data' => $activities], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }


    public function GetCompanyStats(Request $request){
        try{
            $data = $this->adminStats->companyStats($request);
            return response()->json(['data' => $data], HttpStatusCode::OK);
            }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

    public function getRevenueStats(Request $request){
        try{
            $data = $this->adminStats->getRevenueStats($request);
         return response()->json(['data' => $data], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
        
    }

    
    public function getDocType()
    {
        $type = DocumentType::get();
        return response()->json(['data' => $type], HttpStatusCode::OK);
    }
}
