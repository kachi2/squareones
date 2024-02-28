<?php

namespace App\Http\Controllers;

use App\Dtos\CompanyDto;
use App\Http\Requests\CompanyRequest;
use Illuminate\Support\Facades\DB;
use App\Services\CompanyServices;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    //

    public function __construct(
        public readonly CompanyServices $companyServices
    )
    {

    }

    public function SaveFromRequest(CompanyRequest $req){

        try{
        DB::beginTransaction();
    $companyDto = CompanyDto::fromRequest($req->validated());
        if($companyDto)
        {
           $created = $this->companyServices->SaveBaseCompanyInfo($companyDto);
        }
        DB::commit();
        return response($created);
    }catch(\Exception $e){
    
        DB::rollBack();
    return $e;
    }
    }
}
