<?php
namespace App\Dtos;

class NamesDto extends BaseDto 
{

    public function __construct(
    public readonly ?array $names,
    public readonly ?string $company_id = null, 
    )
    {
        
    }

}