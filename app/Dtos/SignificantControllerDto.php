<?php 
namespace App\Dtos;

class SignificantControllerDto extends BaseDto
{

    public function __construct(
        public readonly string   $company_id,
        public readonly ?string   $entry_date = null,
        public readonly ?string   $legal_entity_name = null,
        public readonly ?string   $date_becoming_rep_person = null,
        public readonly ?string   $date_ceased_to_be_rep_person= null,
        public readonly ?string   $corresponding_address = null,
        public readonly ?string   $resdential_address = null,
        public readonly ?string   $identity_info = null,
        public readonly ?string   $place_of_registration = null,
        public readonly ?string   $nature_of_control_over_the_company= null,
        public readonly ?string   $controllers_id= null,
        public readonly ?string   $name= null,
        public readonly ?string   $remarks= null,
    )
    {
        
    }
 

}