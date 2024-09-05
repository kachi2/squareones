<?php
namespace App\Services;
use App\Models\Company;
use App\Models\userActivity;
use App\Models\UserBillingInfo;
use App\Models\UserSubscription;

class UserMetricsService 
{

    public function getCompanyAnnualReturn($company_id)
    {
        $company = Company::where(['user_id' => auth_user(), 'is_incorporated' => 1])->latest()->first();
        if($company)
        {
            return $company->load('RegisteredCompany');
        }
    }


    public function getCcompanyCount()
    {
      return Company::where('user_id', auth_user())->count();
    }

    public function getPaymentInfo()
    {
        $data = UserBillingInfo::where(['user_id' => auth_user(), 'is_default' => 1])->latest()->first();
        return $data;
    }

    public function getUserSubscription()
    {
        $data = UserSubscription::where('user_id', auth_user())->latest()->first();
        if($data)return $data->load('plans');
        return [];
    }
}