<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Models\User;

class KycController extends Controller
{
    //

    public function loadKyc(){
        $user = User::where('id', auth_user())->first();
        $name = explode(' ',$user->name);
        $client = new Client();
        $req = $client->request('post', 'https://api.complycube.com/v1/clients', [
            'headers' => 
            [
                'Authorization' => 'test_d1BmZ0VlczJiV1FKZVRUUkY6MWQwODA4NWVkOTNmOTQ4MTk4NmE0N2VjYjhmZTY0MDY1MjFkNzg3NjQ4NmU3YTc2NTg0YzA0NWEzMTRmMGY4NQ==',
                'Content-Type' => 'application/json',
                'Accept' => 'application/json'
            ],
             'json' => [
                'type' => 'person',
                'email'=> $user->email,
                'personDetails' => [
                    'firstName' => $name['0']??null,
                    'lastName' => $name['1']??null,
                    'dob' => '1990-01-01'
                ],
             ] 
        ]);

        $data = json_decode($req->getBody(), true);
        if($data['id']){
            $user->update([
                'client_id' => $data['id']
            ]);
           $res = $this->GetUserToken();
           return $res;

        }

        return view('kyc');
    }


    public function GetUserToken(){
        $client = new Client();
        $user = User::where('id', auth_user())->first();
        $request = $client->request('post', 'https://api.complycube.com/v1/tokens', [
            'headers' => 
            [
                'Authorization' => 'test_d1BmZ0VlczJiV1FKZVRUUkY6MWQwODA4NWVkOTNmOTQ4MTk4NmE0N2VjYjhmZTY0MDY1MjFkNzg3NjQ4NmU3YTc2NTg0YzA0NWEzMTRmMGY4NQ==',
                'Content-Type' => 'application/json',
                'Accept' => 'application/json'
            ],
             'json' => [
                'clientId' => $user->client_id,
                'referrer' => '*://*/*'
             ] 
        ]);
        $res = json_decode($request->getBody(), true);
        $user->update([
            'user_token' => $res['token']
        ]);
        return $res;
    }
}
