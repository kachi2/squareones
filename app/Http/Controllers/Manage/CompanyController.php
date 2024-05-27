<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\ComplianceReportingDto;
use App\Dtos\DesignatedRepresentativeDto;
use App\Dtos\RegisteredCompanyDto;
use App\Dtos\RegisterOfAllotmentDto;
use App\Dtos\RegisterOfChargeDto;
use App\Dtos\RegisterOfCompanyNameDto;
use App\Dtos\RegisterOfDirectorsDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisteredCompanyRequest;
use App\Http\Requests\RegisterOfficeRequest;
use App\Interfaces\IncorporationInterface;
use Illuminate\Support\Facades\DB;
use Cloudinary\Api\HttpStatusCode;
use App\Dtos\RegisterOfficeContractDto;
use App\Dtos\RegisterOfSecretaryDto;
use App\Dtos\RegisterOfShareholdersDto;
use App\Dtos\SignificantControllerDto;
use App\Http\Requests\ComplianceReportingRequest;
use App\Http\Requests\DesignatedRepresentativeRequest;
use App\Http\Requests\RegisterOfAllotmentRequest;
use App\Http\Requests\RegisterOfChargeRequest;
use App\Http\Requests\RegisterOfCompanyNameRequest;
use App\Http\Requests\RegisterOfDirectorsRequest;
use App\Http\Requests\RegisterOfSecretaryRequest;
use App\Http\Requests\RegisterOfShareholdersRequest;
use App\Http\Requests\SignificantControllerRequest;
use App\Models\Company;
use App\Models\RegisterOfShareholder;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }


    public function getAllCompanies(){
       
        try{
            $data['companies'] =  Company::latest()->get();
            $data['form_completed'] = Company::where('is_complete', 1)->get();
            $data['is_incorporated'] = Company::where('is_incorporated', 1)->get();
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }catch(\Exception $e){
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function getCompany($company_id){
       
        try{
            $data =  Company::where('id', $company_id)->first();
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }catch(\Exception $e){
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
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

    public function RegisterOfficeAndContract(RegisterOfficeRequest $request){
        try{
        $contract = RegisterOfficeContractDto::fromRequest($request->validated());
        $data = $this->IncorporationInterface->RegisterOfficeContract($contract);
        return response()->json(['data', $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
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

    public function RegisterOfCharge(RegisterOfChargeRequest $req){
        try{
        $charge = RegisterOfChargeDto::fromRequest($req->validated());
        $data = $this->IncorporationInterface->RegisterOfCharges($charge);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }

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
    public function SignificantController(SignificantControllerRequest $request){
 
        try{
        $SignificantDto = SignificantControllerDto::fromRequest($request->validated());
        $data = $this->IncorporationInterface->SignificantControllers($SignificantDto);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

    public function DesignatedRepresentatives(DesignatedRepresentativeRequest $req){
        try{
        $designatedDto = DesignatedRepresentativeDto::fromRequest($req->validated());
        $data = $this->IncorporationInterface->DesignatedRepresentative($designatedDto);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

}
