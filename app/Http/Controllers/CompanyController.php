<?php

namespace App\Http\Controllers;

use App\Dtos\AddressDto;
use App\Dtos\CompanyDescription;
use App\Dtos\CompanyDescriptionDto;
use App\Dtos\CompanyDto;
use App\Dtos\NamesDto;
use App\Http\Requests\CompanyAddressRequest;
use App\Http\Requests\CompanyDescription as RequestsCompanyDescription;
use App\Http\Requests\CompanyDescriptionReq;
use App\Http\Requests\CompanyRequest;
use App\Http\Requests\NamesRequest;
use Illuminate\Support\Facades\DB;
use App\Services\CompanyServices;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    //

    public function __construct(
        public readonly CompanyServices $companyServices
    ) {
    }

    public function InitiateCompanyCreation(NamesRequest $req){

        $check = $this->companyServices->CheckNameExist($req->names);
        if ($check) {
            return  response()->json(['error' => "Names already exist on our database, please choose another name"]);
        }
            $namesDto = NamesDto::fromRequest($req->validated());
            $initiateCompany = $this->companyServices->InitiateCompany($namesDto);
            return $initiateCompany;
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
            return response()->json(['company_details' =>$company]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['errors', $e->getMessage()]);
            // return redirect()->back()->with('errors', $e->getMessage());
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
         return response()->json(['company_details' =>$address]);
        }catch(\Exception $e)
        {
            DB::rollBack();
            return response()->json(['error' =>$e->getMessage()]);
        }


    }
}
