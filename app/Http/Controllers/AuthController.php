<?php

namespace App\Http\Controllers;

use App\Dtos\UserDto;
use App\Http\Requests\UserRequest;
use App\Interfaces\AuthInterface;
use App\Models\User;
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

    public function LoginUser(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ]);
        if ($valid->fails()) {
            return response()->json($valid->errors()->first());
        }
        $user = User::where('email', $request->email)->first();
        if ($user->status == USER::BLOCKED) {
            return response()->json(['error' => 'You account temporary banned, please contact support'], HttpStatusCode::FORBIDDEN);
        }
         $usr =   $this->authInterface->LoginUser($request);
        $users = User::where('id', auth_user())->first();
        // return $users;
        if ($user) {
            $users->update([
                'last_login' => Carbon::now(),
                'login_ip' => request()->ip()
            ]);
            userActivity::create([
                'action' => 'Login to account on' . Carbon::now(),
                'name' => $users->name,
                'status' => 'success',
                'type' => 'Login Request'
            ]);

            return response()->json(['data' =>  $usr], HttpStatusCode::OK);
        }
        return response()->json(['error' => 'Email or password is incoreect'], HttpStatusCode::UNAUTHORIZED);
    }
}
