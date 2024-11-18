<?php 
namespace App\Services;

use App\Models\Company;
use App\Models\CompanyEntity;
use App\Models\Notification;
use App\Traits\Teams;
class UserServices
{
    use Teams;

    public function UserCompanies(){
        $team = $this->belongsToTeam(auth_user());
        if($team){
            $company = Company::where('user_id', $team->user_id)->get();
        }else{ 
            $company = Company::where('user_id', auth_user())->get();
        }
        //  $company = Company::where('user_id', auth_user())->get();
        $data['companies'] =  $company?->load('Names', 'Billing', 'mainContact');
        $data['form_completed'] = Company::where(['user_id' => auth_user(), 'is_complete' => 1])->get();
        $data['is_incorporated'] = Company::where(['user_id' => auth_user(), 'is_incorporated' => 1])->get();
        return $data;
    }

    public function companyInfo($company_id)
    { 
        $company = Company::where(['id' => $company_id, 'is_approved' => 1])->first();
        if($company){
            $company?->load('RegisteredCompany', 'RegisterOfAllotments', 'RegisterOfCharge', 'RegisterOfCompanyName','RegisterOfDirector','RegisterOfSecretary','RegisterOfShareholders','RegisterOfTransfer', 'SignificantController', 'ComplianceReporting', 'DesignatedRepresentative', 'OfficeContract', 'documents', 'mainContact');
            $company->roles = $this->loadRolePermission();
            $company->teams = $this->hasTeams($company->id);
            return $company;
        }
        return null ;
    }

    public function Listfounders($company_id)
    {
        $company_entities = CompanyEntity::whereCompanyId($company_id)->paginate(20);
            if($company_entities){
                $company_entities->load('Individual', 'Corporate');
            return $company_entities;
            }
            return false;
    }

    public function ActiveCompany()
    {
        $company = Company::where(['user_id' => auth_user(), 'is_complete' => 0])->first();
            if($company){
                $company->load('Names', 'Billing', 'mainContact');
            return $company;
            }
            return false;
    }

   
}
