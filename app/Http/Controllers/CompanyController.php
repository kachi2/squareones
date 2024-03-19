<?php

namespace App\Http\Controllers;

use App\Dtos\AddressDto;
use App\Dtos\CompanyDescription;
use App\Dtos\CompanyDescriptionDto;
use App\Dtos\CompanyDto;
use App\Dtos\NamesDto;
use App\Http\Requests\CompanyAddressRequest;
use App\Http\Requests\CompanyDescriptionReq;
use App\Http\Requests\CompanyRequest;
use App\Http\Requests\NamesRequest;
use App\Models\BusinessNature;
use App\Models\NamePrefix;
use Illuminate\Support\Facades\DB;
use App\Services\CompanyServices;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;

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
                    'business_natiure' => BusinessNature::get()->orderBy('name', 'DESC')
                ],
            ],200
            );
    }

    public function getNamePrefix(){
        return response()->json([
            'data' => NamePrefix::get()
        ], HttpStatusCode::OK);
    }

    public function InitiateCompanyCreation(NamesRequest $req){

        $check = $this->companyServices->CheckNameExist($req->names);
        if ($check) {
            return  response()->json(['error' => "Names already exist on our database, please choose another name"]);
        }
            $namesDto = NamesDto::fromRequest($req->validated());
            $initiateCompany = $this->companyServices->InitiateCompany($namesDto);
            return response()->json(['data' => $initiateCompany], HttpStatusCode::OK);
    }

    public function StoreCompanyDescription(CompanyDescriptionReq $req)
    {
        try {
            DB::beginTransaction();
            $companyDto = CompanyDescriptionDto::fromRequest($req->validated());
            if ($companyDto) {
                $company = $this->companyServices->StoreDescription($companyDto);
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
