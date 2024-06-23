<?php

namespace App\Http\Controllers;

use App\Dtos\LoginDto;
use App\Dtos\UserDto;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\UserRequest;
use App\Interfaces\AuthInterface;
use App\Models\NotificationSettings;
use App\Models\User;
use App\Enums\twoFactor;
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

            $user = $this->authInterface->StoreUser($userDto);
      
            return $user;
        }
        return false;
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
         $user->update(['2fa_verified' => twoFactor::UN_VERIFIED]);
        return response()->json(['data' =>  $usr], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e], HttpStatusCode::UNAUTHORIZED);
    }
}
}
