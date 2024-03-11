<?php 

namespace App\Dtos;

class CompanyDescriptionDto extends BaseDto
{

    public function __construct(
        public readonly string $description,
        public readonly ?string $website,
        public readonly int $business_nature_id,
        public readonly string $company_id,
    )
    {
        
    }

}