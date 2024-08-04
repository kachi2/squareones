<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\RegisterOfDirectorsDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterOfDirectorsRequest;
use App\Interfaces\IncorporationInterface;
use Illuminate\Http\Request;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\DB;

class RegisterOfDirector extends Controller
{
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }

    public function RegisterOfDirector(RegisterOfDirectorsRequest $req){
        try{
        $dirDto = RegisterOfDirectorsDto::fromRequest($req->validated());
        $data = $this->IncorporationInterface->RegisterOfDirectors($dirDto);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }
}
