<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\ComplianceReportingDto;
use App\Dtos\RegisteredCompanyDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisteredCompanyRequest;
use App\Http\Requests\RegisterOfficeRequest;
use App\Interfaces\IncorporationInterface;
use App\Dtos\RegisterOfficeContractDto;
use App\Http\Requests\ComplianceReportingRequest;
use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    //

    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }

    public function IncorporationProgress($company_id = null){

        $company = Company::where('id', $company_id)->first();
        
    }

    public function RegisteredCompany(RegisteredCompanyRequest $request){
        $RegDto = RegisteredCompanyDto::fromRequest($request->validated());
        $registered = $this->IncorporationInterface->CompanyCorporation($RegDto);
        return $registered;
    }

    public function RegisterOfficeAndContract(RegisterOfficeRequest $request){
        $contract = RegisterOfficeContractDto::fromRequest($request->validated());
        $data = $this->IncorporationInterface->RegisterOfficeContract($contract);
        return $data;
        
    }

    public function ComplianceReportings(ComplianceReportingRequest $request){
        $reptDto = ComplianceReportingDto::fromRequest($request->validated());
        $data = $this->IncorporationInterface->ComplianceReporting($reptDto);
        return $data;
    }
}
