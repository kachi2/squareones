<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\RegisterOfChargeDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterOfChargeRequest;
use App\Interfaces\IncorporationInterface;
use Illuminate\Http\Request;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\DB;

class RegisterOfCharge extends Controller
{
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }

    public function RegisterOfCharge(RegisterOfChargeRequest $req){
        try{
        $charge = RegisterOfChargeDto::fromRequest($req->validated());
        $data = $this->IncorporationInterface->RegisterOfCharges($charge);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }

    }
    
}
