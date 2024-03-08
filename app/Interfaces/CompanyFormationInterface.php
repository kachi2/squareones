<?php 

namespace App\Interfaces;

use App\Dtos\AddressDto;
use App\Dtos\CompanyDescriptionDto;
use App\Dtos\CompanyDto;
use App\Dtos\NamesDto;
use App\Models\Company;
use App\Models\CompanyName;

interface CompanyFormationInterface 
{

    public function StoreCompanyInfo(CompanyDto $companyDto, $company_id): ?Company;
    // public function SaveBusinessName(array $companyNames, string $company_id);
    public function CheckNameExist(array $names):bool;
    public function InitiateCompany(NamesDto $namesDto);
    public function StoreDescription(CompanyDescriptionDto $companyDescription);
    public function StoreCompanyAddress(AddressDto $addressDto);

}