<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Models\Billing;
use App\Models\Company;
use App\Models\User;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUsers(){
        try{
            $users = User::latest()->paginate(20);
            $users->load('company', 'getUserDocuments', 'billing');
            return response()->json(['data' => $users], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function UserCompanies($user_id){

        try{
            $company = Company::where('user_id', $user_id)->paginate(20);
            $data['companies'] =  $company->load('Names', 'Billing');
            $data['form_completed'] = Company::where('is_complete', 1)->get();
            $data['is_incorporated'] = Company::where('is_incorporated', 1)->get();
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function UserBilling($user_id){

        try{
             $billing = Billing::where('user_id', $user_id)->paginate(20);
             $billing->load('company','user');
             return response()->json(['data' => $billing], HttpStatusCode::OK);
            }catch(\Exception $e){
             return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
            }
         }
         
     public function UsersBilling(){
            try{
                 $billing = Billing::paginate(20);
                 $billing->load('company','user');
                 return response()->json(['data' => $billing], HttpStatusCode::OK);
                }catch(\Exception $e){
                 return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
                }
             }

    public function UpdateUserStatus(Request $request){
    try{
        $user = User::where('id', $request->user_id)->first();
        if($user){
            switch($request->status)
            {
                case 1: $user->update(['status' => user::ACTIVE]);
                break;
                case 2: $user->update(['status' => User::BLOCKED]);
            }
        }
        return response()->json(['data' => $user], HttpStatusCode::OK);
    }catch(\Exception $e){
     return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
    }
    }


}
