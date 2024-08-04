<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\ComplianceReportingDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\ComplianceReportingRequest;
use App\Interfaces\IncorporationInterface;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ComplianceReportings extends Controller
{
    
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }

    public function ComplianceReportings(ComplianceReportingRequest $request){
        try{
        $reptDto = ComplianceReportingDto::fromRequest($request->validated());
        $data = $this->IncorporationInterface->ComplianceReporting($reptDto);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

}
