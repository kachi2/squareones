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

    public function GetCompanyStats(Request $request){
        try{
            if(!isset($request->start_date) || !isset($request->end_date)){
                return response()->json(['error' => 'Dates are missing in your request'], HttpStatusCode::BAD_REQUEST);
            }
            $dates = $request->only(['start_date', 'end_date']);
            $start_date = carbon::createFromFormat('Y-m-d', $dates['start_date']);
            $end_date = carbon::createFromFormat('Y-m-d',$dates['end_date']);
            // return $end_date;
        $data = Company::whereBetween('created_at', [$start_date,  $end_date])->get();
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

    public function getRevenueStats(Request $request){
        if(!isset($request->start_date) || !isset($request->end_date)){
            return response()->json(['error' => 'Dates are missing in your request'], HttpStatusCode::BAD_REQUEST);
        }
        $dates = $request->only(['start_date', 'end_date']);
        $start_date = carbon::createFromFormat('Y-m-d',$dates['start_date']);
        $end_date = carbon::createFromFormat('Y-m-d',$dates['end_date']);

        try{
            $data= Billing::whereBetween('created_at', [$start_date, $end_date])->get();
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }


    


}
