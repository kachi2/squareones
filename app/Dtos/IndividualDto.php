<?php
namespace App\Dtos;

class IndividualDto extends BaseDto
{

    public function __construct(
        public readonly int $entity_type_id, 
        public readonly array $entity_capacity_id, 
        public readonly ?string $is_founder = null,
        public readonly ?string $company_id, 
        public readonly string $first_name,
        public readonly ?string $last_name, 
        public readonly ?string $chn_first_name = null,
        public readonly ?string $chn_last_name = null,  
        public readonly string $dob,
        public readonly string $nationality,
        public readonly string $phone,
        public readonly string $email,
        public readonly string $occupation,
        public readonly ?string $identity_no=null,
        public readonly ?string $passport_no =null,
        public readonly ?string $issuing_country = null,
        public readonly ?string $identity_type_id,
        public readonly array $addresses,
    )
    {
        
    }
}