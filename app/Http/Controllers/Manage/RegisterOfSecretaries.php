<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\RegisterOfSecretaryDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterOfSecretaryRequest;
use App\Interfaces\IncorporationInterface;
use Illuminate\Http\Request;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\DB;

class RegisterOfSecretaries extends Controller
{
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }

    public function RegisterOfSecretaries(RegisterOfSecretaryRequest $req){
        try{
        $secretaryDto = RegisterOfSecretaryDto::fromRequest($req->validated());
        $data = $this->IncorporationInterface->RegisterOfSecretary($secretaryDto);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }
}
