<?php

namespace App\Http\Controllers;

use App\Models\Billing;
use App\Models\Company;
use App\Models\CompanyEntity;
use App\Models\Document;
use App\Models\SignDocument;
use Illuminate\Support\Facades\Hash;
use App\Models\userActivity;
use App\Models\User;
use App\Models\UserDocument;
use App\Traits\Teams as TraitTeams;
use App\Dtos\FileUploadDto;
use App\Dtos\UserDto;
use App\Interfaces\DocumentInterface;
use App\Models\Notification;
use App\Services\AuthService;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DashboardController extends Controller
{
    //
    use TraitTeams;
    public function __construct(
        public readonly DocumentInterface $fileUpload,
        public readonly AuthService $userService
    )
    {
        
    }

    public function GetAllCompany(){
        try{
            // $team = $this->belongsToTeam(auth_user());
            // if($team){
            //     $company = Company::whereUserId($team->user_id)->get();
            // }else{ 
               
            // }
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
            $company->roles = $this->loadRolePermission();
            $company->teams = $this->hasTeams($company->id);
            return response()->json(['data' => $company], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function GetUserDocuments(){
        try{
            $documents = UserDocument::whereUserId(auth_user())->paginate(20);
            return response()->json(['data' => $documents], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function Billing(){
        try{
            $billing = Billing::whereUserId(auth_user())->paginate(20);
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
            $activity = userActivity::whereUserId(auth_user())->paginate(20);
            return response()->json(['data' => $activity], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }


    public function ListFounders($company_id){
        try{
            $company_entities = CompanyEntity::whereCompanyId($company_id)->paginate(20);
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

        public function DeleteDoc($document_id)
        {
            try{
                $processDoc = $this->fileUpload->DeleteDocument($document_id);
                return response()->json(['data' => $processDoc], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           } 
        }

    public function UpdatePassword(Request $request)
    {
      return   $this->userService->ChangePassword($request);
    }
        
    public function UpdateUserDetails(Request $request)
    {
        $userDto = UserDto::fromRequest($request->all());
     return $this->userService->UpdateUserDetails($userDto);
    }


        
  
    
}
