<?php 

namespace App\Interfaces;

use App\Dtos\CompanyDto;
use App\Dtos\NamesDto;
use App\Models\Company;
use App\Models\CompanyName;

interface CompanyFormationInterface 
{

    public function SaveBaseCompanyInfo(CompanyDto $companyDto): ?Company;
    public function SaveBusinessName(NamesDto $company) : ?CompanyName;

}