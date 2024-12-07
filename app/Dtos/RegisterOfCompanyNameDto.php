<?php 
namespace App\Dtos;

class RegisterOfCompanyNameDto extends BaseDto
{
    public function __construct(
public readonly string $company_id,
public readonly ?string $date_of_name_changed= null,
public readonly ?string $previous_company_name= null,
public readonly ?string $namechange_id= null,
public readonly ?string $new_company_name= null, 
public readonly ?string $remarks= null, 
    )
    {   
    }
}