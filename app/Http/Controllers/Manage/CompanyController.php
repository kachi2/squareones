<?php
namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Interfaces\IncorporationInterface;
use Illuminate\Support\Facades\DB;
use Cloudinary\Api\HttpStatusCode;
use App\Models\RegistrationProgress;
use App\Models\Company;
use App\Models\RegisteredCompany;
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
                    'registration_progress_id' => $request->registration_progress_id,
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
    public function PublishUserContent($company_id)
    {
        $check = Company::where('id', $company_id)->first();
        if($check) 
        {$check->update(['is_published' => 1]);
            return response()->json(['data' => $check], HttpStatusCode::OK);
        }
        return response()->json(['error' =>'company not found'],203);

    }


 }

