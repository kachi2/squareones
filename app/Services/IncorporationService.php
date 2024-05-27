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

        $data =  [
            'company_id' => $RegisteredOfficeContractDto->company_id,
            'directors' => $RegisteredOfficeContractDto->directors,
            'shareholders' => $RegisteredOfficeContractDto->shareholders,
            'company_secretary' => $RegisteredOfficeContractDto->company_secretary,
            'registered_office' => $RegisteredOfficeContractDto->registered_office,
            'business_address' => $RegisteredOfficeContractDto->business_address,
            'scr_designated_representative' => $RegisteredOfficeContractDto->scr_designated_representative
        ];

        if($RegisteredOfficeContractDto->officecontract_id){
            $contract = RegisteredOfficeContract::whereId($RegisteredOfficeContractDto->officecontract_id)->first();
            $contract->update($data);
            return $contract;

        }
        $contract = RegisteredOfficeContract::Create($data);
        return $contract;
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
        $data = [
            'company_id' => $RegisterOfDirectorsDto->company_id,
            'date_of_appointment' => $RegisterOfDirectorsDto->date_of_appointment,
            'name' => $RegisterOfDirectorsDto->name,
            'reg_no' => $RegisterOfDirectorsDto->reg_no,
            'registered_office' => $RegisterOfDirectorsDto->registered_office,
            'ceasing_of_act' => $RegisterOfDirectorsDto->ceasing_of_act,
            'remarks' => $RegisterOfDirectorsDto->remarks
        ];

        if($RegisterOfDirectorsDto->directors_id){
            $director = RegisterOfDirector::whereId($RegisterOfDirectorsDto->directors_id)->first();
            $director->update($data);
            return $director;

        }
        $director = RegisterOfDirector::create($data);
        return $director;
    }

    public function RegisterOfShareholders($RegisterOfShareholdersDto)
    {
        $data =  [
            'company_id' => $RegisterOfShareholdersDto->company_id,
            'name' => $RegisterOfShareholdersDto->name,
            'address' => $RegisterOfShareholdersDto->address,
            'class_of_shares' => $RegisterOfShareholdersDto->denomination,
            'denomination' => $RegisterOfShareholdersDto->denomination,
            'current_holding' => $RegisterOfShareholdersDto->current_holding,
            'total_consideration' => $RegisterOfShareholdersDto->total_consideration,
            'date_entered_as_member' => $RegisterOfShareholdersDto->date_entered_as_member,
            'date_cease_to_be_member' => $RegisterOfShareholdersDto->date_cease_to_be_member
        ];
        if($RegisterOfShareholdersDto->shareholders_id){
            $shareholders = RegisterOfShareholder::whereId($RegisterOfShareholdersDto->shareholders_id)->first();
            $shareholders->update($data);
            return $shareholders;
        }
        $shareholders = RegisterOfShareholder::updateOrcreate($data);
        return $shareholders;
    }

    public function RegisterOfSecretary($RegisterOfSecretaryDto)
    {
        $data =    [
            'company_id' => $RegisterOfSecretaryDto->company_id,
            'appointment_date' => $RegisterOfSecretaryDto->appointment_date,
            'name' => $RegisterOfSecretaryDto->name,
            'identity_info' => $RegisterOfSecretaryDto->identity_info,
            'address' => $RegisterOfSecretaryDto->address,
            'cease_to_act' => $RegisterOfSecretaryDto->cease_to_act,
            'remarks' => $RegisterOfSecretaryDto->remarks
        ];
        if($RegisterOfSecretaryDto->secretary_id){
            $secretary = RegisterOfSecretary::whereId($RegisterOfSecretaryDto->secretary_id)->first();
            $secretary->update($data);
            return $secretary;
        }
        $secretary = RegisterOfSecretary::create($data);
        return $secretary;
    }


    public function RegisterOfChangeOfName($RegisterOfCompanyNameDto)
    {
        $data = 
        [
            'company_id' => $RegisterOfCompanyNameDto->company_id,
            'allotment_date' => $RegisterOfCompanyNameDto->allotment_date,
            'name' => $RegisterOfCompanyNameDto->name,
            'address' => $RegisterOfCompanyNameDto->address,
            'class_of_shares' => $RegisterOfCompanyNameDto->class_of_shares,
            'no_of_shares_allocated' => $RegisterOfCompanyNameDto->no_of_shares_allocated
        ];
        if($RegisterOfCompanyNameDto->namechange_id){
            $namechange = RegisterOfCompanyName::whereId($RegisterOfCompanyNameDto->namechange_id)->first();
            $namechange->update($data);
            return $namechange;
        }
        $data = RegisterOfCompanyName::create($data);
        return $data;
    }
    public function RegisterOfTransfer($RegisterOfTransferDto)
    {
        $data = [
            'company_id' => $RegisterOfTransferDto->company_id,
            'registration_date' => $RegisterOfTransferDto->registration_date,
            'transferee' => $RegisterOfTransferDto->transferee,
            'no_of_shares_transfered' => $RegisterOfTransferDto->no_of_shares_transfered,
            'total_consideration' => $RegisterOfTransferDto->total_consideration,
            'transfer_method' => $RegisterOfTransferDto->transfer_method
        ];
        if($RegisterOfTransferDto->transfer_id){
            $register = RegisterOfTransfer::where('id', $RegisterOfTransferDto->transfer_id)->first();
            $register->update($data);
            return $register;
        }
        $register = RegisterOfTransfer::create($data);
        return $register;
    }
    public function RegisterOfCharges($RegisterOfChargeDto)
    {
        $data =  [
            'company_id' => $RegisterOfChargeDto->company_id,
            'charge_creation_date' => $RegisterOfChargeDto->charge_creation_date,
            'account_secured_by_charge' => $RegisterOfChargeDto->account_secured_by_charge,
            'type_of_charge' => $RegisterOfChargeDto->type_of_charge,
            'charge_description' => $RegisterOfChargeDto->charge_description,
            'names_of_charge' => $RegisterOfChargeDto->names_of_charge,
            'terms_of_charge' => $RegisterOfChargeDto->terms_of_charge,
            'registration_details' => $RegisterOfChargeDto->registration_details
        ];

         if($RegisterOfChargeDto->charges_id){
            $charges = RegisterOfCharge::where('id', $RegisterOfChargeDto->charges_id)->first();
            $charges->update($data);
            return $charges;
        }
        $charges = RegisterOfCharge::create($data);
        return $charges;
    }

    public function RegisterOfAllotment($RegisterOfAllotmentDto)
    {
        $data = [
            'company_id' => $RegisterOfAllotmentDto->company_id,
            'allotment_date' => $RegisterOfAllotmentDto->allotment_date,
            'name' => $RegisterOfAllotmentDto->name,
            'address' => $RegisterOfAllotmentDto->address,
            'class_of_shares' => $RegisterOfAllotmentDto->class_of_shares,
            'no_of_shares_allocated' => $RegisterOfAllotmentDto->no_of_shares_allocated,
            'denomination' => $RegisterOfAllotmentDto->denomination,
            'total_consideration' => $RegisterOfAllotmentDto->total_consideration,
            'remarks' => $RegisterOfAllotmentDto->remarks
        ];
        if($RegisterOfAllotmentDto->allotments_id){
            $allotments = RegisterOfAllotment::where('id', $RegisterOfAllotmentDto->allotments_id)->first();
            $allotments->update($data);
            return $allotments;
        }
        $allotments = RegisterOfAllotment::Create($data);
        return $allotments;
    }

    public function SignificantControllers($SignificantControllersDto)
    {
        $data =   [
            'company_id' => $SignificantControllersDto->company_id,
            'entry_date' => $SignificantControllersDto->entry_date,
            'date_becoming_rep_person' => $SignificantControllersDto->date_becoming_rep_person,
            'date_ceased_to_be_rep_person' => $SignificantControllersDto->date_ceased_to_be_rep_person
        ];
        
        if($SignificantControllersDto->controllers_id){
            $controllers = SignificantController::where('id', $SignificantControllersDto->controllers_id)->first();
            $controllers->update($data);
        }else{
            $controllers = SignificantController::Create($data);
        }

        if ($controllers) {
            $particulars = ControllersParticulars::updateOrCreate(
                [
                    'significant_controller_id' => $controllers->id,
                ],
                [
                    'significant_controller_id' =>  $controllers->id,
                    'corresponding_address' => $SignificantControllersDto->corresponding_address,
                    'resdential_address' => $SignificantControllersDto->resdential_address,
                    'identiy_info' => $SignificantControllersDto->identiy_info,
                    'place_of_registration' => $SignificantControllersDto->place_of_registration,
                    'nature_of_control_over_the_company' => $SignificantControllersDto->nature_of_control_over_the_company,
                ]
            );
        }

        $controllers->particulars =  $particulars;
        return $controllers;
    }

    public function DesignatedRepresentative($DesignatedRepresentative)
    {
        $data =  [
            'company_id' => $DesignatedRepresentative->company_id,
            'entry_date' => $DesignatedRepresentative->entry_date,
            'name' => $DesignatedRepresentative->name,
            'remarks' => $DesignatedRepresentative->remarks
        ];
        if($DesignatedRepresentative->representatives_id){
            $representatives = SignificantController::where('id', $DesignatedRepresentative->representatives_id)->first();
            $representatives->update($data);
        }else{
        $representatives = DesignatedRepresentative::Create($data);
        }
        if ($data) {
            $particulars = DesignatedParticulars::updateOrCreate(
                [
                    'designated_representative_id' => $representatives->id,
                ],
                [
                    'identiy_info' => $DesignatedRepresentative->identiy_info,
                    'place_of_registration' => $DesignatedRepresentative->place_of_registration,
                    'nature_of_control_over_the_company' => $DesignatedRepresentative->nature_of_control_over_the_company
                ]
            );
        }
        $representatives->particulars =  $particulars;
        return $representatives;
    }
}
