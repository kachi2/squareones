<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Models\Billing;
use App\Models\Company;
use App\Models\User;
use App\Services\AdminStats;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;

class UserController extends Controller
{

public function __construct(
    public readonly AdminStats $adminstates
)
{
    
}
    public function getUsers(){
        try{
           $users = $this->adminstates->getUsers();
            return response()->json(['data' => $users], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function UserCompanies($user_id){

        try{
            $data = $this->adminstates->getCompanies($user_id);
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function UserBilling($user_id){

        try{
            $billing = $this->adminstates->getBilling($user_id);
             return response()->json(['data' => $billing], HttpStatusCode::OK);
            }catch(\Exception $e){
             return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
            }
         }
         
     public function UsersBilling(){
            try{
                $billing = $this->adminstates->getUsersBilling();
                 return response()->json(['data' => $billing], HttpStatusCode::OK);
                }catch(\Exception $e){
                 return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
                }
             }

    public function UpdateUserStatus(Request $request){
    try{
       $user = $this->adminstates->getUserStats($request);
        return response()->json(['data' => $user], HttpStatusCode::OK);
    }catch(\Exception $e){
     return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
    }
    }

    


}
