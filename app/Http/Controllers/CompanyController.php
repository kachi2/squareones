<?php

namespace App\Http\Controllers;

use App\Dtos\AddressDto;
use App\Dtos\CompanyDto;
use App\Dtos\NamesDto;
use App\Http\Requests\CompanyAddressRequest;
use App\Http\Requests\CompanyDescriptionReq;
use App\Http\Requests\NamesRequest;
use App\Models\BusinessNature;
use App\Models\Company;
use App\Models\CompanyName;
use App\Models\NamePrefix;
use Illuminate\Support\Facades\DB;
use App\Services\CompanyServices;
use Cloudinary\Api\HttpStatusCode;

class CompanyController extends Controller
{
    public function __construct(
        public readonly CompanyServices $companyServices
    ) {
    }

    public function getBusinessNature(){
        return response()->json(
            [
                'data' => [
                    'business_nature' => BusinessNature::orderBy('name', 'DESC')->get()
                ],
            ],200
            );
    }
public function getActiveCompany(){
    try{
    $company = Company::where([ 'is_complete' => 0, 'user_id' => auth_user()])->first();
    if($company){
       $company->Load(['names', 'activity', 'Secretary', 'Shares','ownerShare', 'fundSource', 'businessNature']);
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

}catch(\Exception $e){
    return response()->json([
        'error' =>  $e->getMessage(),
      ], HttpStatusCode::OK);
}
}
    public function getNamePrefix(){
        return response()->json([
            'data' => NamePrefix::get()
        ], HttpStatusCode::OK);
    }

    public function InitiateCompanyCreation(NamesRequest $req){
        try{ 
        //check if the company is same befor checking for names similarities
        $comp = CompanyName::where('company_id', $req?->company_id)->first();
        if(isset($comp)){
            $check = $this->companyServices->CheckNameExist($req->names);
            if ($check) {
                return  response()->json(['error' => "Names already exist on our database, please choose another name"]);
            }
        }
            $namesDto = NamesDto::fromRequest($req->validated());
            $initiateCompany = $this->companyServices->InitiateCompany($namesDto);
            return response()->json(['data' => $initiateCompany], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::INTERNAL_SERVER_ERROR); 
    }
}

    public function StoreCompanyDescription(CompanyDescriptionReq $req)
    {
        try {
            DB::beginTransaction();
            $companyDto = CompanyDto::fromRequest($req->validated());
            if ($companyDto) {
                $company = $this->companyServices->StoreCompanyInfo($companyDto);
            }
            DB::commit();
            return response()->json(['data' =>$company], HttpStatusCode::OK);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['errors', $e->getMessage()], HttpStatusCode::BAD_REQUEST);
        }
    }

    public function StoreCompanyAddress(CompanyAddressRequest $req){
        try{
            DB::beginTransaction();
            $addressDto = AddressDto::fromRequest($req->validated());
            if($addressDto){
                $address = $this->companyServices->StoreCompanyAddress($addressDto);
            }
            DB::commit();
         return response()->json(['data' =>$address], HttpStatusCode::OK);
        }catch(\Exception $e)
        {
            DB::rollBack();
            return response()->json(['error' =>$e->getMessage()], HttpStatusCode::BAD_REQUEST);
        }
    }
}
