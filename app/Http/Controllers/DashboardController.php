<?php

namespace App\Http\Controllers;

use App\Models\Billing;
use App\Models\Company;
use App\Models\CompanyEntity;
use App\Models\Document;
use App\Models\SignDocument;
use App\Models\userActivity;
use App\Models\User;
use App\Models\UserDocument;
use App\Dtos\FileUploadDto;
use App\Interfaces\DocumentInterface;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function __construct(
        public readonly DocumentInterface $fileUpload
    )
    {
        
    }

    public function GetAllCompany(){
        try{
            $company = Company::whereUserId(auth_user())->get();
            $data['companies'] =  $company->load('Names', 'Billing');
            $data['form_completed'] = Company::where('is_complete', 1)->get();
            $data['is_incorporated'] = Company::where('is_incorporated', 1)->get();
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function CompanyInfo($company_id){
        try{
            $company = Company::where(['id' => $company_id, 'user_id' => auth_user()])->first();
            $company->load('RegisteredCompany', 'RegisterOfAllotments', 'RegisterOfCharge', 'RegisterOfCompanyName','RegisterOfDirector','RegisterOfSecretary','RegisterOfShareholders','RegisterOfTransfer', 'SignificantController', 'ComplianceReporting', 'DesignatedRepresentative', 'OfficeContract', 'documents');
            return response()->json(['data' => $company], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function GetUserDocuments(){
        try{
            $documents = UserDocument::whereUserId(auth_user())->get();
            return response()->json(['data' => $documents], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function Billing(){
        try{
            $billing = Billing::whereUserId(auth_user())->get();
            return response()->json(['data' => $billing], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function getAccountDetails(){
        try{
            $account = User::whereId(auth_user())->first();
            return response()->json(['data' => $account], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function UserActivityLog(){
        try{
            $activity = userActivity::whereUserId(auth_user())->get();
            return response()->json(['data' => $activity], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }


    public function ListFounders($company_id){
        try{
            $company_entities = CompanyEntity::whereCompanyId($company_id)->get();
            if($company_entities){
                $company_entities->load('Individual', 'Corporate');
            }
            return response()->json(['data' => $company_entities], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           } 
    }

   public function UploadUserDocument(Request $request)
   {
        try{
            $data = FileUploadDto::fromRequest($request->all());
            if($data){
               $processDoc = $this->fileUpload->uploadUserDocument($request);
            return response()->json(['data' => $processDoc], HttpStatusCode::OK);
            }
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           } 
        }


    
}
