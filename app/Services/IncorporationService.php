<?php

namespace App\Services;

use App\Interfaces\IncorporationInterface;
use App\Models\{
    AdminActivityLog,
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
    DesignatedParticulars,
    RegisterOfAllotmentLog,
    RegisterOfChargeLog,
    RegisterOfCompanyNameLog,
    RegisterOfDirectorLog,
    RegisterOfSecretaryLog,
    RegisterOfShareholderLog,
    RegisterOfTransferLog,
    SignificantControllerLog
};

class IncorporationService implements IncorporationInterface
{


    public function CompanyCorporation($RegisteredCompanyDto)
    {
        // try {
        $data = RegisteredCompany::updateOrcreate(
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
            ]
        );
        return $data;
        // } catch (\Exception $e) {
        //     return $e->getMessage();
        // }
    }

    public function RegisterOfficeContract($RegisteredOfficeContractDto)

    {
        $contract = RegisteredOfficeContract::updateOrcreate(
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
        if ($contract) {
            AdminActivityLog::create([
                'type' => 'update',
                'activity' => auth_name() . ' Updated the  Registered Office Contract table with the following details: ' . $RegisteredOfficeContractDto->directors . ', ' . $RegisteredOfficeContractDto->shareholders . ', ' . $RegisteredOfficeContractDto->company_secretary . ', ' . $RegisteredOfficeContractDto->business_address . ', ' . $RegisteredOfficeContractDto->scr_designated_representative,
                'action_status' => 'COMPLETED',
            ]);
        }

        // if($RegisteredOfficeContractDto->officecontract_id){
        //     $contract = RegisteredOfficeContract::whereId($RegisteredOfficeContractDto->officecontract_id)->first();
        //     $contract->update($data);
        //     return $contract;

        // }
        // $contract = RegisteredOfficeContract::Create($data);
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
        if ($data) {
            AdminActivityLog::create([
                'type' => 'update',
                'activity' => auth_name() . ' Updated the Compliance and Reporting table with the following details: ' . $ComplianceReportingDto->auditor_name . ', ' . $ComplianceReportingDto->accounting_reference_date . ', ' . $ComplianceReportingDto->business_registration_renewal_date . ', ' . $ComplianceReportingDto->annual_return_date,
                'action_status' => 'COMPLETED',
            ]);
        }
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

        if ($RegisterOfDirectorsDto->directors_id) {
            $director = RegisterOfDirector::whereId($RegisterOfDirectorsDto->directors_id)->first();
            $dir = $director->toArray();
            $dir['director_id'] = $director->id;
            RegisterOfDirectorLog::create($dir);
            AdminActivityLog::create([
                'type' => 'update',
                'activity' => auth_name() . ' Updated the Register Of Director table with the following details: ' . $RegisterOfDirectorsDto->date_of_appointment. ',' . $RegisterOfDirectorsDto->name . ',' . $RegisterOfDirectorsDto->reg_no . ',' . $RegisterOfDirectorsDto->registered_office.','.$RegisterOfDirectorsDto->ceasing_of_act.','.$RegisterOfDirectorsDto->remarks,
                'action_status' => 'COMPLETED',
            ]);
            $director->update($data);
            return ['recent' => $director,
                    'old' => $dir];
        }
        $director = RegisterOfDirector::create($data);
        AdminActivityLog::create([
            'type' => 'New Entry',
            'activity' => auth_name() . ' Updated the Register Of Director table with the following details: ' . $RegisterOfDirectorsDto->date_of_appointment. ',' . $RegisterOfDirectorsDto->name . ',' . $RegisterOfDirectorsDto->reg_no . ',' . $RegisterOfDirectorsDto->registered_office.','.$RegisterOfDirectorsDto->ceasing_of_act.','.$RegisterOfDirectorsDto->remarks,
            'action_status' => 'COMPLETED',
        ]);
        return $director;
    }

    public function RegisterOfShareholders($RegisterOfShareholdersDto)
    {
        $data =  [
            'company_id' => $RegisterOfShareholdersDto->company_id,
            'name' => $RegisterOfShareholdersDto->name,
            'address' => $RegisterOfShareholdersDto->address,
            'class_of_shares' => $RegisterOfShareholdersDto->class_of_shares,
            'denomination' => $RegisterOfShareholdersDto->denomination,
            'current_holding' => $RegisterOfShareholdersDto->current_holding,
            'total_consideration' => $RegisterOfShareholdersDto->total_consideration,
            'date_entered_as_member' => $RegisterOfShareholdersDto->date_entered_as_member,
            'date_cease_to_be_member' => $RegisterOfShareholdersDto->date_cease_to_be_member
        ];
        if ($RegisterOfShareholdersDto->shareholders_id) {
            $shareholders = RegisterOfShareholder::whereId($RegisterOfShareholdersDto->shareholders_id)->first();
            $shard = $shareholders->toArray();
            $shard['shareholder_id'] = $shareholders->id;
            RegisterOfShareholderLog::create($shard);
            AdminActivityLog::create([
                'type' => 'update',
                'activity' => auth_name() . ' Updated the Register Of Shareholder table with the following details: ' . $RegisterOfShareholdersDto->name .',' . $RegisterOfShareholdersDto->address . ',' . $RegisterOfShareholdersDto->denomination . ',' . $RegisterOfShareholdersDto->denomination.','.$RegisterOfShareholdersDto->current_holding.','.$RegisterOfShareholdersDto->total_consideration.', '.$RegisterOfShareholdersDto->date_entered_as_member.', '.$RegisterOfShareholdersDto->date_cease_to_be_member,
                'action_status' => 'COMPLETED',
            ]);
            $shareholders->update($data);
            return $shareholders;
        }
        $shareholders = RegisterOfShareholder::updateOrcreate($data);
        AdminActivityLog::create([
            'type' => 'New Entry',
            'activity' => auth_name() . ' Added new Entry on the Register Of SHAREHOLDER TABLE  with the following details: ' . $RegisterOfShareholdersDto->name .',' . $RegisterOfShareholdersDto->address . ',' . $RegisterOfShareholdersDto->denomination . ',' . $RegisterOfShareholdersDto->denomination.','.$RegisterOfShareholdersDto->current_holding.','.$RegisterOfShareholdersDto->total_consideration.', '.$RegisterOfShareholdersDto->date_entered_as_member.', '.$RegisterOfShareholdersDto->date_cease_to_be_member,
            'action_status' => 'COMPLETED',
        ]);
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
        if ($RegisterOfSecretaryDto->secretary_id) {
            $secretary = RegisterOfSecretary::whereId($RegisterOfSecretaryDto->secretary_id)->first();
            $sec = $secretary;
            $sec['secretary_id'] = $secretary->id;
            RegisterOfSecretaryLog::create($sec);
            AdminActivityLog::create([
                'type' => 'Update',
                'activity' => auth_name() . ' Updated the Register Of Secretary table with the following details: ' . $RegisterOfSecretaryDto->appointment_date.',' . $RegisterOfSecretaryDto->name . ',' . $RegisterOfSecretaryDto->identity_info. ',' . $RegisterOfSecretaryDto->address.','.$RegisterOfSecretaryDto->cease_to_act.','.$RegisterOfSecretaryDto->remarks,
                'action_status' => 'COMPLETED',
            ]);
            $secretary->update($data);
            return $secretary;
        }
        $secretary = RegisterOfSecretary::create($data);
        AdminActivityLog::create([
            'type' => 'New Entry',
            'activity' => auth_name() . ' Added New entry on the Register Of Secretary table with the following details: ' . $RegisterOfSecretaryDto->appointment_date.',' . $RegisterOfSecretaryDto->name . ',' . $RegisterOfSecretaryDto->identity_info. ',' . $RegisterOfSecretaryDto->address.','.$RegisterOfSecretaryDto->cease_to_act.','.$RegisterOfSecretaryDto->remarks,
            'action_status' => 'COMPLETED',
        ]);
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
        if ($RegisterOfCompanyNameDto->namechange_id) {
            $namechange = RegisterOfCompanyName::whereId($RegisterOfCompanyNameDto->namechange_id)->first();
            $name = $namechange->toArray();
            $name['company_name_id'] = $namechange->id;
            RegisterOfCompanyNameLog::create($name);
            AdminActivityLog::create([
                'type' => 'Update',
                'activity' => auth_name() . ' Updated the Register Of Company Name  table with the following details: ' .  $RegisterOfCompanyNameDto->allotment_date.',' . $RegisterOfCompanyNameDto->name . ',' . $RegisterOfCompanyNameDto->address. ',' . $RegisterOfCompanyNameDto->class_of_shares.','.$RegisterOfCompanyNameDto->no_of_shares_allocated,
                'action_status' => 'COMPLETED',
            ]);
            $namechange->update($data);
            return $namechange;
        }
        $data = RegisterOfCompanyName::create($data);
        AdminActivityLog::create([
            'type' => 'New Entry',
            'activity' => auth_name() . 'Added new entry on the Register Of Company Name  table with the following details: ' .  $RegisterOfCompanyNameDto->allotment_date.',' . $RegisterOfCompanyNameDto->name . ',' . $RegisterOfCompanyNameDto->address. ',' . $RegisterOfCompanyNameDto->class_of_shares.','.$RegisterOfCompanyNameDto->no_of_shares_allocated,
            'action_status' => 'COMPLETED',
        ]);
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
        if ($RegisterOfTransferDto->transfer_id) {
            $register = RegisterOfTransfer::where('id', $RegisterOfTransferDto->transfer_id)->first();
            $reg = $register->toArray();
            $reg['transfer_id'] = $register->id;
            RegisterOfTransferLog::create($reg);
            AdminActivityLog::create([
                'type' => 'Update',
                'activity' => auth_name() . 'Updated the Register Of Transfer   table with the following details: ' .$RegisterOfTransferDto->registration_date.', ' . $RegisterOfTransferDto->transferee . ', ' .$RegisterOfTransferDto->no_of_shares_transfered. ', ' . $RegisterOfTransferDto->total_consideration.', '.$RegisterOfTransferDto->transfer_method,
                'action_status' => 'COMPLETED',
            ]);
            $register->update($data);
            return $register;
        }
        $register = RegisterOfTransfer::create($data);
        AdminActivityLog::create([
            'type' => 'Update',
            'activity' => auth_name() . 'Added new entry on the Register Of Transfer  table with the following details: ' .$RegisterOfTransferDto->registration_date.', ' . $RegisterOfTransferDto->transferee . ', ' .$RegisterOfTransferDto->no_of_shares_transfered. ', ' . $RegisterOfTransferDto->total_consideration.', '.$RegisterOfTransferDto->transfer_method,
            'action_status' => 'COMPLETED',
        ]);
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

        if ($RegisterOfChargeDto->charges_id) {
            $charges = RegisterOfCharge::where('id', $RegisterOfChargeDto->charges_id)->first();
            $charge = $charges->toArray(); 
            $charge['charge_id'] = $charges->id;
            RegisterOfChargeLog::create($charge);
            AdminActivityLog::create([
                'type' => 'Update',
                'activity' => auth_name() . 'updated  the Register Of Charge  table with the following details: ' .$RegisterOfChargeDto->charge_creation_date.', ' . $RegisterOfChargeDto->account_secured_by_charge . ', ' .$RegisterOfChargeDto->type_of_charge. ', ' .$RegisterOfChargeDto->charge_description.', '.$RegisterOfChargeDto->names_of_charge.', '.$RegisterOfChargeDto->registration_details,
                'action_status' => 'COMPLETED',
            ]);
            $charges->update($data);
            return $charges;
        }
        $charges = RegisterOfCharge::create($data);
        AdminActivityLog::create([
            'type' => 'New Entry',
            'activity' => auth_name() . 'Added new entry on the  Register Of Charge  table with the following details: ' .$RegisterOfChargeDto->charge_creation_date.', ' . $RegisterOfChargeDto->account_secured_by_charge . ', ' .$RegisterOfChargeDto->type_of_charge. ', ' .$RegisterOfChargeDto->charge_description.', '.$RegisterOfChargeDto->names_of_charge.', '.$RegisterOfChargeDto->registration_details,
            'action_status' => 'COMPLETED',
        ]);
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
        if ($RegisterOfAllotmentDto->allotments_id) {
            $allotments = RegisterOfAllotment::where('id', $RegisterOfAllotmentDto->allotments_id)->first();
            $allot = $allotments->toArray();
            $allot['allotment_id'] = $allotments->id;
            RegisterOfAllotmentLog::create($allot);
            AdminActivityLog::create([
                'type' => 'Update',
                'activity' => auth_name() . 'updated the  REGISTER OF CHARGE TABLE  with the following details: ' .$RegisterOfAllotmentDto->allotment_date.', ' . $RegisterOfAllotmentDto->name . ', ' .$RegisterOfAllotmentDto->address. ', ' .$RegisterOfAllotmentDto->class_of_shares.', '.$RegisterOfAllotmentDto->no_of_shares_allocated.', '.$RegisterOfAllotmentDto->denomination.', '.$RegisterOfAllotmentDto->total_consideration.', '.$RegisterOfAllotmentDto->remarks,
                'action_status' => 'COMPLETED',
            ]);
            $allotments->update($data);
            return $allotments;
        }
        $allotment = RegisterOfAllotment::Create($data);
        AdminActivityLog::create([
            'type' => 'Update',
            'activity' => auth_name() . 'Added new entry on the  REGISTER OF CHARGE TABLE with the following details: ' .$RegisterOfAllotmentDto->allotment_date.', ' . $RegisterOfAllotmentDto->name . ', ' .$RegisterOfAllotmentDto->address. ', ' .$RegisterOfAllotmentDto->class_of_shares.', '.$RegisterOfAllotmentDto->no_of_shares_allocated.', '.$RegisterOfAllotmentDto->denomination.', '.$RegisterOfAllotmentDto->total_consideration.', '.$RegisterOfAllotmentDto->remarks,
            'action_status' => 'COMPLETED',
        ]);
        return $allotment;
    }

    public function SignificantControllers($SignificantControllersDto)
    {
        $data =   [
            'company_id' => $SignificantControllersDto->company_id,
            'entry_date' => $SignificantControllersDto->entry_date,
            'date_becoming_rep_person' => $SignificantControllersDto->date_becoming_rep_person,
            'date_ceased_to_be_rep_person' => $SignificantControllersDto->date_ceased_to_be_rep_person,
            'legal_entity_name' => $SignificantControllersDto->legal_entity_name
        ];

        if ($SignificantControllersDto->controllers_id) {
            $controllers = SignificantController::where('id', $SignificantControllersDto->controllers_id)->first();
            $contrl = $controllers->toArray();
            $particulars = ControllersParticulars::where('significant_controller_id',$controllers->id)->first();
            $contrl['controller_id'] = $controllers->id;
            $contrl['corresponding_address'] = $particulars->corresponding_address;
            $contrl['resdential_address'] = $particulars->resdential_address;
            $contrl['identiy_info'] = $particulars->identiy_info;
            $contrl['place_of_registration'] = $particulars->place_of_registration;
            $contrl['nature_of_control_over_the_company'] = $particulars->nature_of_control_over_the_company;
            SignificantControllerLog::create($contrl);
            AdminActivityLog::create([
                'type' => 'Update',
                'activity' => auth_name() . 'Updated the  Significant Controller  table with the following details: ' .$SignificantControllersDto->legal_entity_name.', ' . $SignificantControllersDto->entry_date . ', ' .$SignificantControllersDto->date_becoming_rep_person. ', ' .$SignificantControllersDto->date_ceased_to_be_rep_person,
                'action_status' => 'COMPLETED',
            ]);
            $controllers->update($data);
        } else {
            AdminActivityLog::create([
                'type' => 'New Entry',
                'activity' => auth_name() . 'Added new entry on the  Significant Controller  table with the following details: ' .$SignificantControllersDto->name.', ' . $SignificantControllersDto->entry_date . ', ' .$SignificantControllersDto->date_becoming_rep_person. ', ' .$SignificantControllersDto->date_ceased_to_be_rep_person,
                'action_status' => 'COMPLETED',
            ]);
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
        if ($DesignatedRepresentative->representatives_id) {
            $representatives = DesignatedRepresentative::where('id', $DesignatedRepresentative->representatives_id)->first();
            $particulars = DesignatedParticulars::where('designated_representative_id', $representatives->id)->first();
            $reps = $representatives->toArray();
            $reps['controller_id'] = $representatives->id;
            $reps['identiy_info'] = $particulars->identiy_info;
            $reps['place_of_registration'] = $particulars->place_of_registration;
            $reps['nature_of_control_over_the_company'] = $particulars->nature_of_control_over_the_company;
            DesignatedRepresentative::create($reps);
            $representatives->update($data);
            AdminActivityLog::create([
                'type' => 'Update',
                'activity' => auth_name() . 'updated the  Designated Representative table with the following details: ' .$DesignatedRepresentative->name.', ' .  $DesignatedRepresentative->entry_date . ', ' .$DesignatedRepresentative->remarks,
                'action_status' => 'COMPLETED',
            ]);
        } else {
            AdminActivityLog::create([
                'type' => 'New Entry',
                'activity' => auth_name() . 'Added new entry on the  Significant Controller  table with the following details: ' .$DesignatedRepresentative->name.', ' .  $DesignatedRepresentative->entry_date . ', ' .$DesignatedRepresentative->remarks,
                'action_status' => 'COMPLETED',
            ]);
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
