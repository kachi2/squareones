<?php

namespace App\Http\Controllers;

use App\Events\GeneratePDF;
use App\Models\Company;
use App\Models\Corporate;
use App\Models\Individual;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\DB;
class HomeController extends Controller
{
    //

    public function __invoke()
    {
        $company = Company::whereId(1)->first() 
        ->Load([
            'names' ,'secretary','shares','documents','fundSource','ownerShare','CompanyEntity' 
        ]);
        $data['individual'] = Individual::where(['company_entity_id' => $company->companyEntity->id, 'is_founder' => 0])->get();
        $data['corporate'] = Corporate::where(['company_entity_id' => $company->companyEntity->id, 'is_founder' => 0])->get();
        $company->founders =  $data;
        return view('pdf/pdf')->with('company', $company);
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





}
