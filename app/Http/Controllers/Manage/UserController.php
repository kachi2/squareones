<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Models\User;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUsers(){
        try{
            $users = User::latest()->paginate(10);
            $users->load('company', 'getUserDocuments');
            return response()->json(['data' => $users], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }
}
