<?php
namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Interfaces\IncorporationInterface;
use Illuminate\Support\Facades\DB;
use Cloudinary\Api\HttpStatusCode;
use App\Models\RegistrationProgress;
use App\Models\Company;
use App\Models\DocumentType;
use App\Models\RegisteredCompany;
use App\Notifications\CompanyIncorporated;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }

    public function CompanyIncorporation($company_id){
        try{
        $company = Company::where(['id' => $company_id])->first();
            $company?->load('RegisteredCompany', 'RegisterOfAllotments', 'RegisterOfCharge', 'RegisterOfCompanyName','RegisterOfDirector','RegisterOfSecretary','RegisterOfShareholders','RegisterOfTransfer', 'SignificantController', 'ComplianceReporting', 'DesignatedRepresentative', 'OfficeContract', 'mainContact');
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
            $progress = $this->IncorporationInterface->UpdateIncorporatedStatus($request);
            return response()->json(['data' => $progress], HttpStatusCode::OK);
        }catch(\Exception $e){
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function getAllCompanies(){
        try{
            $company = Company::latest()->paginate(20);
            $data['companies'] =  $company->load('Names', 'Billing', 'mainContact');
            $data['form_completed'] = Company::where('is_complete', 1)->get();
            $data['is_incorporated'] = Company::where('is_incorporated', 1)->get();
            $company->load('RegisteredCompany');
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }catch(\Exception $e){
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function getCompany($company_id){
       
        try{
            $data =  Company::where('id', $company_id)->first();
            $data?->load('mainContact');
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }catch(\Exception $e){
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
        }
    public function PublishUserContent($company_id)
    {
        $check = Company::where('id', $company_id)->first();
        if($check) 
        {$check->update(['is_published' => 1, 'is_approved' => 1]);
            $data = RegisteredCompany::where('company_id', $company_id)->first();
            $data->update(['is_published' => 1]);
            return response()->json(['data' => $check], HttpStatusCode::OK);
        }
        return response()->json(['error' =>'company not found'],203);

    }

    public function getActiveCompany($company_id = null){
        try{
                $company = Company::where(['id' => $company_id])->first();
        if($company){
           $company->Load(['names','address', 'activity','Users', 'Billing', 'Secretary', 'Shares','ownerShare','fundSource', 'businessNature']);
           $company->CompanyEntity->load('Individual', 'Corporate');
           $company->shares->load('Ownershares');
        return response()->json([
            'company' => $company
        ], HttpStatusCode::OK);
    }else{
        return response()->json([
            'company' => null
        ], HttpStatusCode::OK);
    }
     }catch(\Exception $e)
    {

    }

 }
}
