<?php 

namespace App\Dtos;

class SecretatyDto extends BaseDto
{
    public function __construct(
        public readonly string $company_id, 
        public readonly string $business_nature_id,
        public readonly string $name,
        public readonly string $chn_name,
        public readonly string $company_reg_no,
        public readonly string $country_registered, 
        public readonly string $licence_no,
        public readonly string $email,
        public readonly string $address, 
        public readonly string $city,
        public readonly string $state,
        public readonly string $postal_code
    )
    {
        
    }
}