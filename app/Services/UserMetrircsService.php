<?php
namespace App\Services;
use App\Models\Company;
use App\Models\userActivity;

class UserMetricsService 
{

    public function getCompanyAnnualReturn($company_id)
    {
        $company = Company::where('id', $company_id)->first();
        if($company)
        {
            return $company->load('RegisteredCompany');
        }
    }


    public function getCcompanyCount()
    {
      return Company::where('user_id', auth_user()->id)->count();
    }
}