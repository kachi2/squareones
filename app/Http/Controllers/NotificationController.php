<?php

namespace App\Http\Controllers;

use App\Models\Notification;
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

    public function UserNotification()
    {
        try{
        $notify = Notification::whereUserId(auth_user())->take(4)->latest()->get();
        return response()->json(['data' => $notify], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       } 
    }

    
    public function UpdateUserNotifications()
    {
        $notify = Notification::where('user_id', auth_user())->get();
        $status = 1;
        if($notify){ 
            $notify->map(function($notify) use ($status)
            {
                $notify->update(['is_read' => $status]);
            });

           return $notify;
        }
    }

    public function DeleteNotification($notify_id){
        try{
            $notify = Notification::whereId($notify_id)->first();
            if($notify){
                $notify->delete();
             return response()->json(['data' => 'Item Deleted successful'], HttpStatusCode::OK);
            }
            return response()->json(['data' => 'Notification does not exist'], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           } 
        }
 
}
