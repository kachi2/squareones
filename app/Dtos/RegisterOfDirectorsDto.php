<?php 
namespace App\Dtos;


class RegisterOfDirectorsDto extends BaseDto
{

    public function __construct(
public readonly string $company_id,
public readonly ?string $date_of_appointment= null,
public readonly ?string $name= null,
public readonly ?string $reg_no= null,
public readonly ?string $registered_office= null,
public readonly ?string $ceasing_of_act= null,
public readonly ?string $remarks= null,
public readonly ?string $directors_id= null,

    )
    { 
    }
    
}