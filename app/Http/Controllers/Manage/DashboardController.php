<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Models\AdminActivityLog;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;

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
}
