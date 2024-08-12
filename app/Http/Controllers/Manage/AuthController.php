<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Interfaces\AuthInterface;
use App\Dtos\LoginDto;
use App\Http\Requests\LoginRequest;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(
        public readonly AuthInterface $authInterface
    ) {
    }

    public function LoginAdmin(LoginRequest $request)
    {
        $userDto = LoginDto::fromRequest($request->validated());
        try{
         $usr =   $this->authInterface->LoginAdmin($request);
        if($usr['status'] == 'success'){
            return response()->json(['data' =>  $usr], HttpStatusCode::OK);
        }
        return response()->json(['error' => $usr], HttpStatusCode::UNAUTHORIZED);
    }catch(\Exception $e){
        return response()->json(['error' => $e], HttpStatusCode::UNAUTHORIZED);
    }

}
}
