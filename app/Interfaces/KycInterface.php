<?php 
namespace App\Interfaces;


interface KycInterface {

    public function InitiateKycProcess($request);
    public function GetUserToken();
    public function ProcessKYCVerification($request);

}