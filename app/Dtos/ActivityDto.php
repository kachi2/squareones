<?php 
namespace App\Dtos;

class ActivityDto extends BaseDto
{

    public function __construct(
        public readonly string   $company_id,
        public readonly string   $description, 
        public readonly string   $activity_level,
        public readonly string   $activity_nature, 
        public readonly string   $customer_location_operation,
        public readonly ?string   $country,
    )
    {
        
    }
 

}