<?php 
namespace App\Dtos;

class FundSourceDto extends BaseDto
{

    public function __construct(
        public readonly string   $company_id,
        public readonly string   $income_expected_source,
        public readonly string   $origin_funds,
        public readonly string   $wealth_initial_source, 
        public readonly string   $income_outgoing_source,
    )
    {
        
    }
 

}