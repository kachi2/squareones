<?php 

namespace App\Dtos;

class AddressDto extends BaseDto{

    public function __construct(
public readonly string $street,
public readonly string $city,
public readonly string $state, 
public readonly string $country,
public readonly int $company_id,
public readonly ?string $postal_code = null,
public readonly ?string $flat = null,
public readonly ?string $building = null,

    )
    {
        
    }
}