<?php
namespace App\Dtos;

class NamesDto extends BaseDto 
{

    public function __construct(
    public readonly ?array $name,
    public readonly int $business_nature_id,
    )
    {
        
    }

}