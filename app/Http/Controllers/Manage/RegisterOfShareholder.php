<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\RegisterOfShareholdersDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterOfShareholdersRequest;
use App\Interfaces\IncorporationInterface;
use Illuminate\Http\Request;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\DB;

class RegisterOfShareholder extends Controller
{
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }

    public function RegisterOfShareholder(RegisterOfShareholdersRequest $req){
        try{
            $shareholdDto = RegisterOfShareholdersDto::fromRequest($req->validated());
            $data = $this->IncorporationInterface->RegisterOfShareholders($shareholdDto);
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }catch(\Exception $e){
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }
}
