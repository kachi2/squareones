<?php 
namespace App\Dtos;


class RegisterOfTransferDto extends BaseDto
{

    public function __construct(
public readonly string $company_id, 
public readonly ?string $registration_date= null,
public readonly ?string $transferee= null,
public readonly ?string $transferor= null,
public readonly ?string $no_of_shares_transfered= null,
public readonly ?string $total_consideration= null,
public readonly ?string $transfer_method= null,
public readonly ?string $transfer_id= null,
public readonly ?string $remarks= null,


    )
    {   
    }
}

