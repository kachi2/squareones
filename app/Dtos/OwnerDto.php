<?php 

namespace App\Dtos;

class OwnerDto extends BaseDto
{
    public function __construct(
        public readonly string $company_id, 
        public readonly string $company_ownership_share_id, 
        public readonly string $share_percentage, 
        public readonly string $total_amount

    )
    {
        
    }
}