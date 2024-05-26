<?php 
namespace App\Dtos;

class RegisterOfChargeDto extends BaseDto
{
    public function __construct(
public readonly string $company_id,
public readonly ?string $charge_creation_date= null,
public readonly ?string $account_secured_by_charge= null,
public readonly ?string $type_of_charge= null,
public readonly ?string $charge_description= null,
public readonly ?string $names_of_charge= null,
public readonly ?string $terms_of_charge= null,
public readonly ?string $registration_details= null,
    )
    {   
    }
}