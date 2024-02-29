<?php 
namespace App\Dtos;

class FounderDto extends BaseDto 
{

    public function __construct( 
    public readonly string $founder_type_id,
    public readonly string $business_nature_id,
    public readonly string $capacity,
    public readonly string $company_id,
    public readonly string $company_name,
    public readonly string $chn_company_name,
    public readonly string $date_incorporated,
    public readonly string $company_registered, 
    public readonly ?string $first_name,
    public readonly ?string $last_name,
    public readonly ?string $chn_first_name,
    public readonly ?string $chn_last_name,

    )
    {
        
    }

}