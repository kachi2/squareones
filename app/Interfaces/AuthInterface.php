<?php 
namespace App\Interfaces;

use App\Dtos\LoginDto;
use App\Models\User;
use Illuminate\Http\Request;
use App\Dtos\UserDto;

interface AuthInterface {


    public function StoreUser( UserDto $user);
    public function UpdateUserDetails(UserDto $request);
    public function ChangePassword($password);
    public function LoginUser($req);
    public function LoginAdmin($request);

}