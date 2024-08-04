<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\RegisterOfTransferDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterOfTransferRequest;
use App\Interfaces\IncorporationInterface;
use Illuminate\Http\Request;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\DB;

class RegisterOfTransfer extends Controller
{
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }

    public function RegisterOfTransfer(RegisterOfTransferRequest $req){
        try{
        $transferDto = RegisterOfTransferDto::fromRequest($req->validated());
        $data = $this->IncorporationInterface->RegisterOfTransfer($transferDto);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }
}
