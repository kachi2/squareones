<?php

namespace App\Http\Controllers;

use App\Dtos\LoginDto;
use App\Dtos\UserDto;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\UserRequest;
use App\Interfaces\AuthInterface;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Models\userActivity;
use Carbon\Carbon;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function __construct(
        public readonly AuthInterface $authInterface
    ) {
    }

    public function Register(UserRequest $user)
    {
        $userDto = UserDto::fromRequest($user->validated());
        if ($userDto) {
            return $this->authInterface->StoreUser($userDto);
        }
    }

    public function LoginUser(LoginRequest $request)
    {
        $userDto = LoginDto::fromRequest($request->validated());
        try{
        $user = User::where('email', $userDto->email)->first();
        if ($user->status == USER::BLOCKED) {
            return response()->json(['error' => 'You account temporary Blocked, please contact support'], HttpStatusCode::FORBIDDEN);
        }
         $usr =   $this->authInterface->LoginUser($request);
        return response()->json(['data' =>  $usr], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => 'Password is wrong, try again'], HttpStatusCode::UNAUTHORIZED);
    }
}
}
