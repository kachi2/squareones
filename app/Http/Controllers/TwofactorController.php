<?php

namespace App\Http\Controllers;

use App\Http\Requests\VerifyTwoFactorRequest;
use PragmaRX\Google2FALaravel\Facade as Google2FA;
use App\Models\User;
use Cloudinary\Api\HttpStatusCode;
use BaconQrCode\Writer;
use App\Enums\twoFactor;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TwofactorController extends Controller
{
    //
 
    public function generateSecretKey(){
        $user = User::whereId(auth_user())->first();
        $secret = Google2FA::generateSecretKey();
        $qrCodeUrl = Google2FA::getQRCodeInline(
            'SquareOne',
            $user->email,
            $secret
        );
        $user->google2fa_secret = $secret;
        $user->barcode = $qrCodeUrl;
        $user->save();
        return [
            $user,
            $qrCodeUrl
        ];
    }

    public function Enable(VerifyTwoFactorRequest $request)
    {
        $user = User::whereId(auth_user())->first();
 
           if(!$request->ValidateToken()){
            return response()->json(['error' => 'Token provided is incorrect'], HttpStatusCode::UNAUTHORIZED);
           }

           [$user, $qrCodeUrl] = $this->generateSecretKey();
           $user->update(['enable_2fa_at' => Carbon::now(), 'secret' => $user, 'barcode' => $qrCodeUrl]);
           return response()->json(['success' => 'Two Factor Authentication activated Successfully', 'data' => $user], HttpStatusCode::OK);

    }

    public function Disable(VerifyTwoFactorRequest $request)
    {
        $user = User::whereId(auth_user())->first();
        if(!$user->enable_2fa_at)
        if(!$request->ValidateToken()){
            return response()->json(['error' => 'Token provided is incorrect'], HttpStatusCode::OK);
           }
            $user->update(['enable_2fa_at' => null, '2fa_verified' => twoFactor::UN_VERIFIED]);
            return response()->json(['success' => 'Two Factor Authentication deactivated Successfully', 'data' => $user], HttpStatusCode::OK);

    }
    public function VerifyKey(VerifyTwoFactorRequest $request)
    {
        if(!$request->ValidateToken()){
            return response()->json(['error' => 'Token provided is incorrect'], HttpStatusCode::UNAUTHORIZED);
           }
           $user = User::whereId(auth_user())->first();
           $user->update(['2fa_verified' => twoFactor::VERIFIED]);
           return response()->json(['success' => 'Token validated successfully', 'data' => $user], HttpStatusCode::OK);  
   }

   public function check2faStatus()
   {
          $user = User::whereId(auth_user())->first();
        
            return response()->json(['2fastatus' => $user->enable_2fa_at, 'data' => $user], HttpStatusCode::OK); 
  }

    

}
