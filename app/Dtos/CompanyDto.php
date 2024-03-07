<?php 
namespace App\Dtos;
use App\Models\User;

class CompanyDto extends BaseDto
{

    public function __construct(
public readonly ?string $business_nature_id,
 public readonly ?string $website = null,
 public readonly ?string $description = null,
    )
    {
        
    }
}