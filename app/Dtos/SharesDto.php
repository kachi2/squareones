<?php 

namespace App\Dtos;

class SharesDto extends BaseDto
{
    public function __construct(
        public readonly string $company_id, 
        public readonly string $share_type_id, 
        public readonly string $no_of_share, 
        public readonly string $total_amount_paid,
        public readonly string $currency,
        public readonly array $company_entity
    )
    {
        
    }
}