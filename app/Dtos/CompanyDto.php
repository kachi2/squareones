<?php 
namespace App\Dtos;
use App\Models\User;

class CompanyDto extends BaseDto
{

    public function __construct(
 public readonly int $business_nature_id,
 public readonly ?string $website = null,
 public readonly ?string $description = null,
public readonly ?string $address,
public readonly ?string $street_no,
public readonly ?string $city,
public readonly ?string $state, 
public readonly ?string $postal_code,
public readonly ?string $country,

    )
    {
        
    }

    // public function fromRequest(array $data)
    // {
    //     return new static (
    //         $data['business_nature_id'],
    //         $data['description'],
    //         $data['user_id'] = auth()->user()->id??null, 
    //         $data['website'],
    //         ...$data
    //     );
    // }
}