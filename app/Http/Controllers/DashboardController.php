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
use App\Events\GenerateCompanyData;
use App\Interfaces\DocumentInterface;
use App\Models\Notification;
use App\Services\AuthService;
use App\Services\UserServices;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DashboardController extends Controller
{
    //
    use TraitTeams;
    public function __construct(
        public readonly DocumentInterface $fileUpload,
        public readonly AuthService $userService,
        public readonly UserServices $UserServices
    )
    {
        
    }

    public function GetAllCompany(){

        try{
           $data = $this->UserServices->UserCompanies();
            return response()->json(['data' => $data], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function getActiveCompany()
    {
        try{
            $data = $this->UserServices->ActiveCompany();
             return response()->json(['data' => $data], HttpStatusCode::OK);
         }catch(\Exception $e){
             return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
            }

    }

    public function CompanyInfo($company_id){
        try{
             $company = $this->UserServices->companyInfo($company_id);
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
            return response()->json(['error' => $e->getMessage()], 203);
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
            $activity = userActivity::whereUserId(auth_user())->latest()->paginate(20);
            return response()->json(['data' => $activity], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }


    public function ListFounders($company_id){
        try{
            $company_entities = $this->UserServices->Listfounders($company_id);
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


    public function generateIncorporatedData(Request $request)
    {
        GenerateCompanyData::dispatch($request->all());
    }

    public function getActiveUser(){
        try{
            $data = User::where('id', auth_user())->get();
            if($data){
            return response()->json(['data' => $data], HttpStatusCode::OK);
            }
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           } 

    }


    
  
    
}
