<?php

namespace App\Http\Controllers;

use App\Interfaces\KycInterface;
use Illuminate\Http\Request;

class KycController extends Controller
{
    //

    public function __construct(
        public readonly KycInterface $KycInterface
    )
    {
        
    }
    public function loadKyc(Request $request){
   
        $kyc = $this->KycInterface->InitiateKycProcess($request);
  
        return response()->json(['data' => $kyc]);
    }
   
}
