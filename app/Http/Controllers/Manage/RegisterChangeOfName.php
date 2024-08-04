<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\RegisterOfCompanyNameDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterOfCompanyNameRequest;
use App\Interfaces\IncorporationInterface;
use Illuminate\Http\Request;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\DB;

class RegisterChangeOfName extends Controller
{
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }
    public function RegisterChangeOfName(RegisterOfCompanyNameRequest $req){
        try{
        $name = RegisterOfCompanyNameDto::fromRequest($req->validated());
        $data = $this->IncorporationInterface->RegisterOfChangeOfName($name);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }
}
