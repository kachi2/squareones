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
use App\Dtos\RegisterOfTransferDto;
use App\Dtos\SignificantControllerDto;
use App\Http\Requests\ComplianceReportingRequest;
use App\Http\Requests\DesignatedRepresentativeRequest;
use App\Http\Requests\RegisterOfAllotmentRequest;
use App\Http\Requests\RegisterOfChargeRequest;
use App\Http\Requests\RegisterOfCompanyNameRequest;
use App\Http\Requests\RegisterOfDirectorsRequest;
use App\Http\Requests\RegisterOfSecretaryRequest;
use App\Http\Requests\RegisterOfShareholdersRequest;
use App\Http\Requests\RegisterOfTransferRequest;
use App\Http\Requests\SignificantControllerRequest;
use App\Models\Billing;
use App\Models\RegistrationProgress;
use App\Models\Company;
use App\Models\DesignatedRepresentativeLog;
use App\Models\RegisteredCompany;
use App\Models\RegisterOfAllotmentLog;
use App\Models\RegisterOfChargeLog;
use App\Models\RegisterOfCompanyNameLog;
use App\Models\RegisterOfDirectorLog;
use App\Models\RegisterOfSecretaryLog;
use App\Models\RegisterOfShareholder;
use App\Models\RegisterOfShareholderLog;
use App\Models\RegisterOfTransferLog;
use App\Models\SignificantControllerLog;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Svg\Tag\Rect;

class CompanyController extends Controller
{
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }

    public function CompanyIncorporation($company_id){
        try{
        $company = Company::where('id', $company_id)->first();
        $company->load('RegisteredCompany', 'RegisterOfAllotments', 'RegisterOfCharge', 'RegisterOfCompanyName','RegisterOfDirector','RegisterOfSecretary','RegisterOfShareholders','RegisterOfTransfer', 'SignificantController', 'ComplianceReporting', 'DesignatedRepresentative', 'OfficeContract');
        return response()->json(['data' => $company], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

    public function GetIncorporationStatuses(){
        try{
            $progress = RegistrationProgress::latest()->get();
            return response()->json(['data' => $progress], HttpStatusCode::OK);
        }catch(\Exception $e){
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function UpdateIncorporationStatus(Request $request){
        try{
            $progress = RegisteredCompany::where('id', $request->company_id)->first();
            if($progress){
                $progress->update([
                    'registration_progress_id' => $request->registration_progress_id
                ]);
            }
            return response()->json(['data' => $progress], HttpStatusCode::OK);
        }catch(\Exception $e){
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function getAllCompanies(){

        try{
            $company = Company::latest()->paginate(20);
            $data['companies'] =  $company->load('Names', 'Billing');
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
        return response()->json(['data' => $data], HttpStatusCode::OK);
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

    public function GetRegisteredLogs(Request $request)
    {
        try {
            $data = [];
        if($request->charge_id)
         $data['RegisterOfChargeLog'] = RegisterOfChargeLog::where('charge_id', $request->charge_id)->paginate(20);
        if($request->shareholder_id)
        $data['RegisterOfShareholderLog'] = RegisterOfShareholderLog::where('shareholder_id', $request->shareholder_id)->paginate(20);
        if($request->allotment_id)
        $data['RegisterOfAllotmentLog'] = RegisterOfAllotmentLog::where('allotment_id', $request->allotment_id)->paginate(20);
        if($request->company_name_id)
        $data['RegisterOfCompanyNameLog'] = RegisterOfCompanyNameLog::where('company_name_id', $request->company_name_id)->paginate(20);
        if($request->director_id)
        $data['RegisterOfDirectorLog'] = RegisterOfDirectorLog::where('director_id', $request->director_id)->paginate(20);
        if($request->secretary_id)
        $data['RegisterOfSecretaryLog'] = RegisterOfSecretaryLog::where('secretary_id', $request->secretary_id)->paginate(20);
        if($request->transfer_id)
        $data['RegisterOfTransferLog'] = RegisterOfTransferLog::where('transfer_id', $request->transfer_id)->paginate(20);
        if($request->controller_id)
        $data['SignificantControllerLog'] = SignificantControllerLog::where('controller_id', $request->controller_id)->paginate(20);
        if($request->representative_id)
        $data['DesignatedRepresentativeLog'] = DesignatedRepresentativeLog::where('representative_id', $request->representative_id)->paginate(20);
    return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

}
