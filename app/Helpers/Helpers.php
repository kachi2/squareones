<?php

use App\Models\ActivityLog;
use App\Models\AdminActivityLog;
use App\Models\Company;
use App\Models\Notification;
use App\Models\User;
use App\Models\userActivity;

if(!function_exists('auth_user')){

    function auth_user(){
         return auth()->user()->id;
        // return 1;
    }
}

if(!function_exists('auth_name')){

    function auth_name(){
         return auth()->user()->name;
    }
}


   function filter($query, $relationship, $delimeter, $pointer = "id")
	{
			$query->whereHas($relationship, function ($queries) use ($delimeter, $pointer) {
				$queries->where($pointer, [$delimeter]);
			
			});
			return $query;
}

if(!function_exists('filter_vars'))
{
    function filter_vars($text)
    {
        if($text == 'undefined' || $text == 'null')
    {
        return null;
    }
    return $text;
    }
}

if(!function_exists('generateRef'))
{
    function generateRef($length)
    {
        return str_replace(['(', ')', '\\', '/', '%', '#', '$', '@', '!'], '', base64_encode(random_bytes($length)));
    }
}


if(!function_exists('UploadFiles'))
{
    function UploadFiles($request, $path, $name)
    {
        $image_url = cloudinary()->uploadFile($request->getRealPath(), [
                'folder' => $path,
                'public_id' => $name
            ])->getSecurePath();
       return $image_url;
    }
}

if(!function_exists('UserActivities'))
{
    function UserActivities($action, $location=null, $type=null)
    {
        userActivity::create([
            'user_id' => auth_user(),
            'action' => $action,
            'name' => auth_name(),
            'status' => 'success',
            'type' => $type,
            'ip_address' =>  request()->ip(),
            'location' => $location,
        ]);
    }
}


if(!function_exists('UserNotification')){
 function UserNotification($request){
     Notification::create(
        [
        'title' => $request['title'], 
        'content' => $request['content'], 
        'user_id' => auth_user(), 
        'link' => isset($request['link'])?$request['link']:null,
        'type' => $request['type']
        ]
    );}
}

if(!function_exists('AdminActivityLog')){
 function AdminActivityLog($message, $type)
{
    AdminActivityLog::create([
        'type' => $type,
        'activity' => $message,
        'action_status' => "COMPLETED",
    ]);
}
}

if(!function_exists('ActivityLogs'))
{
    function ActivityLogs($activity, $type)
    {
        ActivityLog::create([
            'user_id' => auth_user(),
            'activity' => $activity,
            'type' => $type
        ]);
    }
}

if(!function_exists('checkCompanyPublished'))
{
    function checkCompanyPublished($company_id)
    {
        $compan = Company::where('id', $company_id)->first();
        if($compan->is_published) return true;
        return false;
    }
}

function getUserName($user_id)
{
    $user = User::where('id', $user_id)->first();
    return $user->name;
}

	
