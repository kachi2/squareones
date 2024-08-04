<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\RegisterOfficeContractDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterOfficeRequest;
use App\Interfaces\IncorporationInterface;
use Illuminate\Http\Request;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\DB;

class RegisterOfficeAndContract extends Controller
{
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }

    public function RegisterOfficeAndContract(RegisterOfficeRequest $request){
        try{
        $contract = RegisterOfficeContractDto::fromRequest($request->validated());
        $data = $this->IncorporationInterface->RegisterOfficeContract($contract);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }
}
