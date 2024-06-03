<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Models\AdminActivityLog;
use App\Models\Billing;
use App\Models\Company;
use Cartalyst\Stripe\Api\Cards;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class DashboardController extends Controller
{
    //

    public function AdminActivityLog(){
        try{
        $activities = AdminActivityLog::latest()->paginate(20);
        return response()->json(['data' => $activities], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

    public function GetCompanyStats(){

        try{
        $data['allCompany'] = Company::latest()->get();
        $data['thisMonth'] = Company::where('created_at', '<=', Carbon::now()->addDays(-30))->get();
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

    public function getRevenueStats(){
        try{
            $data['revenue'] = Billing::latest()->get();
            $data['thisMonth'] = Billing::where('created_at', '<=', Carbon::now()->addDays(-30))->get();
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }


}
