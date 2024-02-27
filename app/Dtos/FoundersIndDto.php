<?php
namespace App\Dtos;

class FoundersIndDto extends BaseDto
{

    public function __construct(
        public readonly ?string $found_type_id, 
        public readonly NamesDto $names,
        public readonly string $dob,
        public readonly string $nationality,
        public readonly array $id_info,
        public readonly string $phone,
        public readonly string $email,
        public readonly string $occupation
    )
    {
        
    }



}