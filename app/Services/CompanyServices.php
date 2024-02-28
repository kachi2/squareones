<?php 
namespace App\Services;

use App\Dtos\CompanyDto;
use App\Interfaces\CompanyFormationInterface;
use App\Models\Company;
use App\Models\CompanyName;

class CompanyServices  implements CompanyFormationInterface
{

    public function SaveBaseCompanyInfo(CompanyDto $companyDto): ?Company
    {

        $data = Company::create([
            'user_id' => 1, //auth()->user()->id
             'business_nature_id' => $companyDto->business_nature_id,
              'description'=> $companyDto->description,
              'website'=> $companyDto->website,
               'address'=> $companyDto->address, 
               'street_no'=> $companyDto->street_no,
               'city'=> $companyDto->city,
               'state'=> $companyDto->state,
               'postal_code'=> $companyDto->postal_code,
               'country'=> $companyDto->country,

            ]);
        return $data;
    }

    public function SaveBusinessName($NameDto, $compnay_id = null): ?CompanyName
    {
        return CompanyName::first();

    }

}