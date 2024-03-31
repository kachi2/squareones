<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class KycController extends Controller
{
    //

    public function loadKyc(){

        // $client = new Client();
        // $req = $client->request('post', 'https://api.complycube.com/v1/tokens', [
        //     'headers' => 
        //     [
        //         'Authorization' => 'test_d1BmZ0VlczJiV1FKZVRUUkY6NmRjMzIxMWFjYTgyMzFlZGFiOGI0YzRjZDZiOGU5YzhkNjA2YmU1Y2UxMWY0ZGI0Y2UwZDlhM2ZhYTRkYzY0OA==',
        //         'Content-Type' => 'application/json',
        //         'Accept' => 'application/json'
        //     ],
        //      'json' => [
        //         'clientId' => '6608a1fc64d2fc0008269fba',
        //         'referrer'=> 'https://www.example.com/*'
        //      ] 
        // ]);
        // dd(json_decode($req->getBody(), true));
        return view('kyc');
    }
}
