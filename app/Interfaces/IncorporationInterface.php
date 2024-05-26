<?php 
namespace App\Interfaces;



interface IncorporationInterface {


    public function CompanyCorporation($data);
    public function RegisterOfficeContract($data);
    public function ComplianceReporting($data);
    public function RegisterOfCharges($RegisterOfChargeDto);
    public function RegisterOfSecretary($RegisterOfSecretaryDto);
    public function RegisterOfShareholders($RegisterOfShareholdersDto);
    public function RegisterOfDirectors($RegisterOfDirectorsDto);
    public function RegisterOfChangeOfName($RegisterOfCompanyNameDto);

}