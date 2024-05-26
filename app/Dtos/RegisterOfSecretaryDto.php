<?php 
namespace App\Dtos;


class RegisterOfSecretaryDto extends BaseDto
{

    public function __construct(
public readonly string $company_id,
public readonly ?string $appointment_date= null,
public readonly ?string $name= null,
public readonly ?string $identity_info= null,
public readonly ?string $address= null,
public readonly ?string $cease_to_act= null,
public readonly ?string $remarks= null,
    )
    {
        
    }
    
}