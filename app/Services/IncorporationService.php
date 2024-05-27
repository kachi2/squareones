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
    RegisteredOfficeContract,
    SignificantController,
    ControllersParticulars,
    DesignatedRepresentative,
    DesignatedParticulars
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
                'allotment_date' => $RegisterOfCompanyNameDto->allotment_date,
                'name' => $RegisterOfCompanyNameDto->name,
                'address' => $RegisterOfCompanyNameDto->address,
                'class_of_shares' => $RegisterOfCompanyNameDto->class_of_shares,
                'no_of_shares_allocated' => $RegisterOfCompanyNameDto->no_of_shares_allocated
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

    public function RegisterOfAllotment($RegisterOfAllotmentDto)
    {
        $data = RegisterOfAllotment::updateOrCreate(
            [
                'company_id' => $RegisterOfAllotmentDto->company_id
            ],
            [
                'company_id' => $RegisterOfAllotmentDto->company_id,
                'allotment_date' => $RegisterOfAllotmentDto->allotment_date,
                'name' => $RegisterOfAllotmentDto->name,
                'address' => $RegisterOfAllotmentDto->address,
                'class_of_shares' => $RegisterOfAllotmentDto->class_of_shares,
                'no_of_shares_allocated' => $RegisterOfAllotmentDto->no_of_shares_allocated,
                'denomination' => $RegisterOfAllotmentDto->denomination,
                'total_consideration' => $RegisterOfAllotmentDto->total_consideration,
                'remarks' => $RegisterOfAllotmentDto->remarks
            ]
        );
        return $data;
    }

    public function SignificantControllers($SignificantControllersDto)
    {
        $data = SignificantController::updateOrCreate(
            [
                'company_id' => $SignificantControllersDto->company_id
            ],
            [
                'company_id' => $SignificantControllersDto->company_id,
                'entry_date' => $SignificantControllersDto->entry_date,
                'date_becoming_rep_person' => $SignificantControllersDto->date_becoming_rep_person,
                'date_ceased_to_be_rep_person' => $SignificantControllersDto->date_ceased_to_be_rep_person
            ]
        );

        if ($data) {
            $particulars = ControllersParticulars::updateOrCreate(
                [
                    'significant_controller_id' => $data->id,
                ],
                [
                    'significant_controller_id' =>  $data->id,
                    'corresponding_address' => $SignificantControllersDto->corresponding_address,
                    'resdential_address' => $SignificantControllersDto->resdential_address,
                    'identiy_info' => $SignificantControllersDto->identiy_info,
                    'place_of_registration' => $SignificantControllersDto->place_of_registration,
                    'nature_of_control_over_the_company' => $SignificantControllersDto->nature_of_control_over_the_company,
                ]
            );
        }

        $data->particulars =  $particulars;
        return $data;
    }

    public function DesignatedRepresentative($DesignatedRepresentative)
    {

        $data = DesignatedRepresentative::updateOrCreate(
            [
                'company_id' => $DesignatedRepresentative->company_id
            ],
            [
                'company_id' => $DesignatedRepresentative->company_id,
                'entry_date' => $DesignatedRepresentative->entry_date,
                'name' => $DesignatedRepresentative->name,
                'remarks' => $DesignatedRepresentative->remarks
            ]
        );
        if ($data) {
            $particulars = DesignatedParticulars::updateOrCreate(
                [
                    'designated_representative_id' => $data->id,
                ],
                [
                    'identiy_info' => $DesignatedRepresentative->identiy_info,
                    'place_of_registration' => $DesignatedRepresentative->place_of_registration,
                    'nature_of_control_over_the_company' => $DesignatedRepresentative->nature_of_control_over_the_company
                ]
            );
        }
        $data->particulars =  $particulars;
        return $data;
    }
}
