<?php

namespace App\Http\Controllers;

use App\Dtos\UserDto;
use App\Http\Requests\UserRequest;
use App\Interfaces\AuthInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function __construct(
        public readonly AuthInterface $authInterface
    )
    {
        
    }
    //

    public function Register(UserRequest $user)
    {
        $userDto = UserDto::fromRequest($user->validated());
        if($userDto){
         return $this->authInterface->StoreUser($userDto);
        }
        
    }

    public function LoginUser(Request $request){

        $valid = Validator::make($request->all(),[
            'email' => 'required',
            'password' => 'required',
        ]);
        if($valid->fails()){
            return response()->json($valid->errors()->first());
        }
            $user = $this->authInterface->LoginUser($request);
            if($user){
               return response()->json(['data' =>  $user], 200);
            }
        return response()->json(['error' => 'Email or password is incoreect']);
    }

    
}
