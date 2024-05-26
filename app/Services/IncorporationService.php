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
        // try {
        $data = RegisteredCompany::UpdateOrCreate(
            [
                'company_id' => $RegisteredCompanyDto->company_id
            ],
            [
                'company_id' => $RegisteredCompanyDto->company_id,
                'company_registered_name' => $RegisteredCompanyDto->company_registered_name,
                'business_registered_number' => $RegisteredCompanyDto->business_registered_number,
                'incorporated_date' => $RegisteredCompanyDto->incorporated_date,
                'company_structure' => $RegisteredCompanyDto->company_structure,
                'company_registered' => $RegisteredCompanyDto->company_registered,
                'business_classification' => $RegisteredCompanyDto->business_classification,
                'tax_id' => $RegisteredCompanyDto->tax_id,
                'registration_progress_id' => $RegisteredCompanyDto->registration_progress_id,
            ]
        );
        return $data;
        // } catch (\Exception $e) {
        //     return $e->getMessage();
        // }
    }

    public function RegisterOfficeContract($RegisteredOfficeContractDto)

    {

        $data = RegisteredOfficeContract::UpdateOrCreate(
            [
                'company_id' => $RegisteredOfficeContractDto->company_id
            ],
            [
                'company_id' => $RegisteredOfficeContractDto->company_id,
                'directors' => $RegisteredOfficeContractDto->directors,
                'shareholders' => $RegisteredOfficeContractDto->shareholders,
                'company_secretary' => $RegisteredOfficeContractDto->company_secretary,
                'registered_office' => $RegisteredOfficeContractDto->registered_office,
                'business_address' => $RegisteredOfficeContractDto->business_address,
                'scr_designated_representative' => $RegisteredOfficeContractDto->scr_designated_representative
            ]
        );
        return $data;
    }

    public function ComplianceReporting($ComplianceReportingDto)
    {

        $data = ComplianceAndReporting::UpdateOrCreate(
            [
                'company_id' => $ComplianceReportingDto->company_id
            ],
            [
                'company_id' => $ComplianceReportingDto->company_id,
                'auditor_name' => $ComplianceReportingDto->auditor_name,
                'accounting_reference_date' => $ComplianceReportingDto->accounting_reference_date,
                'business_registration_renewal_date' => $ComplianceReportingDto->business_registration_renewal_date,
                'annual_return_date' => $ComplianceReportingDto->annual_return_date
            ]
        );
        return $data;
    }


    public function RegisterOfDirectors($RegisterOfDirectorsDto)
    {

        $data = RegisterOfDirector::updateOrcreate(
            [
                'company_id' => $RegisterOfDirectorsDto->company_id
            ],
            [
                'company_id' => $RegisterOfDirectorsDto->company_id,
                'date_of_appointment' => $RegisterOfDirectorsDto->date_of_appointment,
                'name' => $RegisterOfDirectorsDto->name,
                'reg_no' => $RegisterOfDirectorsDto->reg_no,
                'registered_office' => $RegisterOfDirectorsDto->registered_office,
                'ceasing_of_act' => $RegisterOfDirectorsDto->ceasing_of_act,
                'remarks' => $RegisterOfDirectorsDto->remarks
            ]
        );
        return $data;
    }

    public function RegisterOfShareholders($RegisterOfShareholdersDto)
    {
        $data = RegisterOfShareholder::updateOrcreate(
            [
                'company_id' => $RegisterOfShareholdersDto->company_id
            ],
            [
                'company_id' => $RegisterOfShareholdersDto->company_id,
                'name' => $RegisterOfShareholdersDto->name,
                'address' => $RegisterOfShareholdersDto->address,
                'class_of_shares' => $RegisterOfShareholdersDto->denomination,
                'denomination' => $RegisterOfShareholdersDto->denomination,
                'current_holding' => $RegisterOfShareholdersDto->current_holding,
                'total_consideration' => $RegisterOfShareholdersDto->total_consideration,
                'date_entered_as_member' => $RegisterOfShareholdersDto->date_entered_as_member,
                'date_cease_to_be_member' => $RegisterOfShareholdersDto->date_cease_to_be_member
            ]
        );
        return $data;
    }

    public function RegisterOfSecretary($RegisterOfSecretaryDto)
    {
        $data = RegisterOfSecretary::updateOrcreate(
            [
                'company_id' => $RegisterOfSecretaryDto->company_id
            ],
            [
                'company_id' => $RegisterOfSecretaryDto->company_id,
                'appointment_date' => $RegisterOfSecretaryDto->appointment_date,
                'name' => $RegisterOfSecretaryDto->name,
                'identity_info' => $RegisterOfSecretaryDto->identity_info,
                'address' => $RegisterOfSecretaryDto->address,
                'cease_to_act' => $RegisterOfSecretaryDto->cease_to_act,
                'remarks' => $RegisterOfSecretaryDto->remarks
            ]
        );
        return $data;
    }


    public function RegisterOfChangeOfName($RegisterOfCompanyNameDto)
    {
        $data = RegisterOfCompanyName::updateOrcreate(
            [
                'company_id' => $RegisterOfCompanyNameDto->company_id
            ],
            [
                'company_id' => $RegisterOfCompanyNameDto->company_id,
                'allotment_date'=> $RegisterOfCompanyNameDto->allotment_date,
                'name' => $RegisterOfCompanyNameDto->name,
                'address'=> $RegisterOfCompanyNameDto->address,
                'class_of_shares'=> $RegisterOfCompanyNameDto->class_of_shares,
                'no_of_shares_allocated'=> $RegisterOfCompanyNameDto->no_of_shares_allocated
            ]
        );
        return $data;
    }

    public function RegisterOfCharges($RegisterOfChargeDto)
    {
        $data = RegisterOfCharge::updateOrcreate(
            [
                'company_id' => $RegisterOfChargeDto->company_id
            ],
            [
                'company_id' => $RegisterOfChargeDto->company_id,
                'charge_creation_date' => $RegisterOfChargeDto->charge_creation_date,
                'account_secured_by_charge' => $RegisterOfChargeDto->account_secured_by_charge,
                'type_of_charge' => $RegisterOfChargeDto->type_of_charge,
                'charge_description' => $RegisterOfChargeDto->charge_description,
                'names_of_charge' => $RegisterOfChargeDto->names_of_charge,
                'terms_of_charge' => $RegisterOfChargeDto->terms_of_charge,
                'registration_details' => $RegisterOfChargeDto->registration_details
            ]
        );
        return $data;
    }
}
