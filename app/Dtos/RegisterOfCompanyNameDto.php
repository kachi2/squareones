<?php 
namespace App\Dtos;

class RegisterOfCompanyNameDto extends BaseDto
{
    public function __construct(
public readonly string $company_id,
public readonly ?string $allotment_date= null,
public readonly ?string $name= null,
public readonly ?string $address= null,
public readonly ?string $class_of_shares= null,
public readonly ?string $no_of_shares_allocated= null,
    )
    {   
    }
}