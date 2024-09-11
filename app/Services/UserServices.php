<?php 
namespace App\Services;

use App\Models\Company;
use App\Models\CompanyEntity;
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
        // $company = Company::whereUserId(auth_user())->get();
        $data['companies'] =  $company->load('Names', 'Billing');
        $data['form_completed'] = Company::where('is_complete', 1)->get();
        $data['is_incorporated'] = Company::where('is_incorporated', 1)->get();
        return $data;
    }

    public function companyInfo($company_id)
    { 
        $company = Company::where(['id' => $company_id])->first();
        if($company){
            $company?->load('RegisteredCompany', 'RegisterOfAllotments', 'RegisterOfCharge', 'RegisterOfCompanyName','RegisterOfDirector','RegisterOfSecretary','RegisterOfShareholders','RegisterOfTransfer', 'SignificantController', 'ComplianceReporting', 'DesignatedRepresentative', 'OfficeContract', 'documents');
            $company->roles = $this->loadRolePermission();
            $company->teams = $this->hasTeams($company->id);
            return $company;
        }
        return [];
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
}