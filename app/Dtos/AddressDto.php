<?php 

namespace App\Dtos;

class AddressDto extends BaseDto{

    public function __construct(
public readonly string $address,
public readonly string $street_no,
public readonly string $city,
public readonly string $state, 
public readonly string $postal_code,
public readonly string $country,
public readonly int $company_id

    )
    {
        
    }
}