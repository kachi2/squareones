<?php 
namespace App\Dtos;

class FounderCorDto extends BaseDto 
{

    public function __construct( 
    public readonly ?string $founder_type_id, 
    public readonly ?string $capacity, 
    public readonly ?string $company_id, 
    public readonly string $company_name,
    public readonly string $chn_company_name,
    public readonly string $date_incorporated,
    public readonly string $country_registered, 
    public readonly ?string $address,
    public readonly ?string $street_no,
    public readonly ?string $city,
    public readonly ?string $state,
    public readonly ?string $postal_code,
    public readonly ?string $country,
    public readonly ?string $registeration_no,
    public readonly ?string $business_nature_id,
    
    )
    { 
    }

}