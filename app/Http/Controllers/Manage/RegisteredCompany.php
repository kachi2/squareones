<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\RegisteredCompanyDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisteredCompanyRequest;
use App\Interfaces\IncorporationInterface;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RegisteredCompany extends Controller
{
    //
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }


    public function RegisteredCompany(RegisteredCompanyRequest $request){
        try{
        $RegDto = RegisteredCompanyDto::fromRequest($request->validated());
        $registered = $this->IncorporationInterface->CompanyCorporation($RegDto);
        return response()->json(['data' => $registered], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }
}
