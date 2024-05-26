<?php

namespace App\Services;

use App\Interfaces\IncorporationInterface;
use App\Models\{
    ComplianceAndReporting,
    RegisteredCompany,
    RegisterOfAllotment,
    RegisterOfCharge,
    RegisterOfCompanyName,
    RegisterOfDirector,
    RegisterOfSecretary,
    RegisterOfShareholder,
    RegisterOfTransfer,
    RegisteredOfficeContract
};

class IncorporationService implements IncorporationInterface
{


    public function CompanyCorporation($RegisteredCompanyDto)
    {
        try{
        $data = RegisteredCompany::UpdateOrCreate(
            [
                'company_id' => $RegisteredCompanyDto->company_id
            ],
            [
                'company_id' => $RegisteredCompanyDto->company_id,
                'company_registered_name'=> $RegisteredCompanyDto->company_registered_name,
                'business_registered_number'=> $RegisteredCompanyDto->business_registered_number,
                'incorporated_date'=> $RegisteredCompanyDto->incorporated_date,
                'company_structure'=> $RegisteredCompanyDto->company_structure,
                'company_registered'=> $RegisteredCompanyDto->company_registered,
                'business_classification'=> $RegisteredCompanyDto->business_classification,
                'tax_id'=> $RegisteredCompanyDto->tax_id,
                'registration_progress_id'=> $RegisteredCompanyDto->registration_progress_id,
            ]
        );
        return $data;
    }catch(\Exception $e){
        return $e->getMessage();
    }
    }

    public function RegisterOfficeContract($RegisteredOfficeContractDto)
    
    {
        try{
        $data = RegisteredOfficeContract::UpdateOrCreate(
            [
                'company_id' => $RegisteredOfficeContractDto->company_id
            ],
            [
                'company_id'=> $RegisteredOfficeContractDto->company_id, 
                'directors'=> $RegisteredOfficeContractDto->directors, 
                'shareholders'=> $RegisteredOfficeContractDto->shareholders, 
                'company_secretary'=> $RegisteredOfficeContractDto->company_secretary,
                 'registered_office'=> $RegisteredOfficeContractDto->registered_office, 
                 'business_address'=> $RegisteredOfficeContractDto->business_address, 
                 'scr_designated_representative'=> $RegisteredOfficeContractDto->scr_designated_representative
            ]
        );
        return $data;
    }catch(\Exception $e){
        return $e->getMessage();
    }
    }

    public function ComplianceReporting($ComplianceReportingDto){
        try{
        $data = ComplianceAndReporting::UpdateOrCreate(
            [
                'company_id' => $ComplianceReportingDto->company_id
            ],
            [
                'company_id'=> $ComplianceReportingDto->company_id,
                 'auditor_name'=> $ComplianceReportingDto->auditor_name, 
                 'accounting_reference_date'=> $ComplianceReportingDto->accounting_reference_date, 
                 'business_registration_renewal_date'=> $ComplianceReportingDto->business_registration_renewal_date, 
                 'annual_return_date'=> $ComplianceReportingDto->annual_return_date
            ]
        );
        return $data;
    }catch(\Exception $e){
        return $e->getMessage();
    }
    }
}
