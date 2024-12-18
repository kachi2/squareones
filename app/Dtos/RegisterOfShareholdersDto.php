<?php 
namespace App\Dtos;


class RegisterOfShareholdersDto extends BaseDto
{

    public function __construct(
public readonly string $company_id,
public readonly ?string $name= null,
public readonly ?string $address= null,
public readonly ?string $class_of_shares= null,
public readonly ?string $denomination= null,
public readonly ?string $shareholders_id= null,
public readonly ?string $current_holding= null,
public readonly ?string $total_consideration= null,
public readonly ?string $date_entered_as_member= null,
public readonly ?string $date_cease_to_be_member= null,
public readonly ?string $remarks= null,

    )
    {
        
    }
    
}