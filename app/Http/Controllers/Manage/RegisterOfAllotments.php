<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\RegisterOfAllotmentDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterOfAllotmentRequest;
use App\Interfaces\IncorporationInterface;
use Illuminate\Http\Request;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\DB;

class RegisterOfAllotments extends Controller
{
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }

    public function RegisterOfAllotments(RegisterOfAllotmentRequest $req){

        try{
        $allotment = RegisterOfAllotmentDto::fromRequest($req->validated());
        $data = $this->IncorporationInterface->RegisterOfAllotment($allotment);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }
}
