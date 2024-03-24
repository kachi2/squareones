<?php 
namespace App\Dtos;

class CorporateDto extends BaseDto 
{

    public function __construct( 
    public readonly ?string $entity_type_id, 
    public readonly ?string $entity_capacity_id,
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
    public readonly string $phone,
    public readonly string $email,
    public readonly string $first_name,
    public readonly string $last_name,
    public readonly ?string $registeration_no,
    public readonly ?string $business_nature_id,
    public readonly ?string $is_founder = null,
    
    )
    { 
    }

}