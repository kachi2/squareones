<?php
namespace App\Dtos;

class FoundersIndDto extends BaseDto
{

    public function __construct(
        public readonly ?string $founder_type_id, 
        public readonly ?string $capacity, 
        public readonly ?string $company_id, 
        public readonly string $first_name,
        public readonly ?string $last_name, 
        public readonly ?string $chn_first_name,
        public readonly ?string $chn_last_name,  
        public readonly string $dob,
        public readonly string $nationality,
        public readonly string $phone,
        public readonly string $email,
        public readonly string $occupation,
        public readonly string $hkid_no,
        public readonly string $passport_no,
        public readonly string $issuing_country,
        public readonly string $id_type,
        public readonly array $addresses,
    )
    {
        
    }
}