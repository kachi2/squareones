<?php 
namespace App\Services;
use App\Models\User;
use App\Dtos\UserDto;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Interfaces\AuthInterface;
use App\Mail\LoginNotificationMail;
use App\Models\Admin;
use App\Models\AdminActivity;
use App\Models\NotificationSettings;
use App\Models\userActivity;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;

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
        if($user){
            $data = [
               [ 'user_id' => $user->id,
                'name' => 'email Notificaiton', 
                'type' => 'email',
                'status' => 1
              ],
              [ 'user_id' => $user->id,
              'name' => 'App notifications', 
              'type' => 'app',
              'status' => 1
            ],

            ];
        foreach($data as $ss){
        NotificationSettings::create($ss);
        }
    }
        return $user;
    }

    public function LoginUser($request){
        $check = Auth()->attempt(['email' => $request->email, 'password' => $request->password]);
        if($check){
            $token =  $request->user()->createToken("UserToken")->plainTextToken;
               $user =   User::where('email', $request->email)->first();
                  $request->user()->update([
                    'last_login' => Carbon::now(),
                    'login_ip' => request()->ip()
                ]);
                $ip = request()->ip();
                    $this->getIpLocation($ip);
                    $this->SendLoginNotification($request, $user,  $location);
                    self::addActivityLog($request, $location);

            return [
                'status' => 'success',
                'user' => $request->user(),
                'UserToken' =>$token,
            ];
        }
        return [
            'status' => 'error',
            'message' => 'Email or password is incorrect'
        ];        
    }

    public function UpdateUserDetails(UserDto $request){
        if($request->name){
            $data['name'] = $request->name;
        }
        if($request->phone){
            $data['phone'] = $request->phone;
        }
        if($request->email){
            $data['email'] = $request->email;
        }
        $user = User::whereId(auth_user())->first();
        $user->fill($data)->save();
        return response()->json(['data' => 'Account Updated successfully'], HttpStatusCode::OK);
    }


    public function ChangePassword($request){
        $valid = Validator::make($request->all(), [
            'oldPassword' => 'required',
            'password' => 'required|min:8',
            ]);
        if($valid->fails()){
            return response()->json(['data' => $valid->errors()->first()], HttpStatusCode::OK);
        }
           $hashedPassword = auth()->user()->password;
            if (Hash::check($request->oldPassword , $hashedPassword)) {
            if (!Hash::check($request->password , $hashedPassword)) {
                  $users_password = bcrypt($request->password);
                  User::where( 'id' , auth_user())->update(['password' =>  $users_password]);
                  return response()->json(['data' => 'Password Updated successfully'], HttpStatusCode::OK);
                }else{
                    return response()->json(['error' => 'Old Password cannot be same with New Password'], HttpStatusCode::FORBIDDEN);
                 } 
            } else{
                return response()->json(['error' => 'Old Passowrd is not correct'], HttpStatusCode::BAD_REQUEST);
            }
    }


    public function SendLoginNotification($request, $user, $location)
    { 
            $data = [
                'ip' => $request->ip(),
                'location' => $location??null,
                'client' => $request->header('user_agent'),
                'subject' => 'Login Attempted from New IP address '.request()->ip() .' - '. Carbon::now(),
                'email' => $user->email,
                'name' => $user->name,
                'date' => Carbon::now()
            ];
             $data = Mail::to($user->email)->send( new LoginNotificationMail($data));
             return $data;
    }


    public function getIpLocation($ip)
    {
                
                $details = json_decode(file_get_contents("http://ipinfo.io/$ip/json"));
                // $location  = $details?->city.", ".$details?->country;
                return $details;
    }


    public function addActivityLog($request, $location)
     {
       $acr = userActivity::create([
            'user_id' => $request->user()->id,
            'action' => 'Login to account on' . Carbon::now(),
            'name' => $request->user()->name,
            'status' => 'success',
            'type' => 'Login Request',
            'ip_address' =>  request()->ip(),
            'location' => $location??'',
        ]);
        return $acr;
    }

    public function LoginAdmin($request){

        $check = Auth('admin')->attempt(['email' => $request->email, 'password' => $request->password]);
        if($check){
            $token =  $request->user('admin')->createToken("AdminToken")->plainTextToken;
               $admin =   Admin::where('email', $request->email)->first();
                  $request->user('admin')->update([
                    'last_login' => Carbon::now(),
                    'login_ip' => request()->ip()
                ]);
                $ip = request()->ip();
                AdminActivity::create([
                    'admin_id' => $admin->id, 
                    'login_ip' => $ip, 
                    'login_date' => Carbon::now(),
                     'activity' => 'New Login Request'
                ]);
            return [
                'status' => 'success',
                'user' => $request->user('admin'),
                'AdminToken' =>$token,
            ];
        }
        return [
            'status' => 'error',
            'message' => 'Email or password is incorrect'
        ];        
    }


}