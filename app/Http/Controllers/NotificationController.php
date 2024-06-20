<?php

namespace App\Http\Controllers;

use App\Models\NotificationSettings;
use Illuminate\Support\Facades\DB;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;

class NotificationController extends Controller
{

    public function ToggleNofication(Request $request)
    {
        $notify = NotificationSettings::where(['user_id' => $request->user_id, 'type' => strtolower($request->type)])->first();
        if($notify){
            $notify->update([
                'status' => $request->status
            ]);
        return response()->json(['data' => $notify], HttpStatusCode::OK);
    }
    return response()->json(['error' => 'Notification Settings not found'], HttpStatusCode::INTERNAL_SERVER_ERROR);
      
    }

    public function getNoficationStatus(Request $request)
    {
        $notify = NotificationSettings::where(['user_id' => $request->user_id, 'type' => strtolower($request->type)])->first();
        if($notify){
        return response()->json(['data' => $notify], HttpStatusCode::OK);
        }
        return false;
    }

}
