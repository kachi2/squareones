<?php

namespace App\Http\Controllers;

use App\Models\Billing;
use App\Models\Company;
use App\Models\SignDocument;
use App\Models\User;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //

    public function GetAllCompany(){
        try{
            $company = Company::whereUserId(auth_user())->get();
            $company->load('RegisteredCompany', 'RegisterOfAllotments', 'RegisterOfCharge', 'RegisterOfCompanyName','RegisterOfDirector','RegisterOfSecretary','RegisterOfShareholders','RegisterOfTransfer', 'SignificantController', 'ComplianceReporting', 'DesignatedRepresentative', 'OfficeContract');
            return response()->json(['data' => $company], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function CompanyInfo($company_id){
        try{
            $company = Company::whereId($company_id)->first();
            $company->load('RegisteredCompany', 'RegisterOfAllotments', 'RegisterOfCharge', 'RegisterOfCompanyName','RegisterOfDirector','RegisterOfSecretary','RegisterOfShareholders','RegisterOfTransfer', 'SignificantController', 'ComplianceReporting', 'DesignatedRepresentative', 'OfficeContract', 'documents');
            return response()->json(['data' => $company], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function GetUserDocuments(){
        try{
            $documents = SignDocument::whereUserId(auth_user())->get();
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


}
