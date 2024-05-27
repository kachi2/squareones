<?php 
namespace App\Dtos;

class DesignatedRepresentativeDto extends BaseDto
{

    public function __construct(
        public readonly string   $company_id,
        public readonly ?string   $entry_date = null,
        public readonly ?string   $name= null,
        public readonly ?string   $remarks= null,
        public readonly ?string   $income_outgoing_source= null,
        public readonly ?string   $identiy_info= null,
        public readonly ?string   $designated_representative_id= null,
        public readonly ?string   $place_of_registration= null,
        public readonly ?string   $nature_of_control_over_the_company= null,
    )
    {
    }
}