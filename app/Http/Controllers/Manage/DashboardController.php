<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Models\AdminActivityLog;
use App\Models\Billing;
use App\Models\Company;
use App\Models\userActivity;
use Cartalyst\Stripe\Api\Cards;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class DashboardController extends Controller
{
    //

    public function AdminActivityLog(){
        try{
        $activities = userActivity::latest()->paginate(10);
        return response()->json(['data' => $activities], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

    public function GetCompanyStats(Request $request){
        try{
            if(isset($request->start_date) || isset($request->end_date)){
            $dates = $request->only(['start_date', 'end_date']);
            $start_date = carbon::createFromFormat('Y-m-d', $dates['start_date']);
            $end_date = carbon::createFromFormat('Y-m-d',$dates['end_date']);
            $data = Company::whereBetween('created_at', [$start_date,  $end_date])->paginate(10);
            return $data;
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }
        $data = Company::paginate(10);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

    public function getRevenueStats(Request $request){
        if(isset($request->start_date) || isset($request->end_date)){
        $dates = $request->only(['start_date', 'end_date']);
        $start_date = carbon::createFromFormat('Y-m-d',$dates['start_date']);
        $end_date = carbon::createFromFormat('Y-m-d',$dates['end_date']);
        $data = Billing::whereBetween('created_at', [$start_date, $end_date])->get();
        $data->load('user', 'company');
        return response()->json(['data' => $data], HttpStatusCode::OK);
        }else
        {
            $data = Billing::paginate(10);
            $data->load('user', 'company');
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }
    }

}
