<?php 
namespace App\Dtos;

class CompanyDto extends BaseDto
{

    public function __construct(
 public readonly ?int $business_nature_id,
 public readonly ?string $website = null,
 public readonly ?string $user_id = null,
 public readonly ?string $description = null,
 public readonly AddressDto $address,

    )
    {
        
    }

    public function fromRequest(array $data)
    {
        return new static (
            $data['business_nature_id'],
            $data['description'],
            $data['user_id'] = auth()->user()->id??null, 
            $data['website'],
            ...$data
        );
    }
}