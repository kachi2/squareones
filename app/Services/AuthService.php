<?php 
namespace App\Services;
use App\Models\User;
use App\Dtos\UserDto;
use Laravel\Jetstream\Jetstream;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRequest;
use App\Interfaces\AuthInterface;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Models\Team;


class AuthService  implements AuthInterface{

    public function StoreUser($input){

        $user = DB::transaction(function () use ($input) {
            return tap(User::create([
                'name' => $input->name,
                'email' => $input->email,
                'password' => Hash::make($input->password),
            ]), function (User $user) {
                // $this->createTeam($user);
            });

        });

        return $user;
    }

    public function LoginUser($request){
        $check = Auth()->attempt(['email' => $request->email, 'password' => $request->password]);
        if($check){
            $token =  $request->user()->createToken("UserToken")->plainTextToken;
            return [
                'user' => $request->user(),
                'UserToken' =>$token 
            ];
        }
        return false;        
    }
    public function UpdateUserDetails(UserDto $request){
        return User::class;
    }
    public function ChangePassword($password){
        return $password;
    }




}