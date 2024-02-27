<?php
namespace App\Dtos;

class NamesDto extends BaseDto 
{

    public function __construct(
    public readonly ?array $eng_name,
    public readonly ?array $chn_name, 
    public readonly ?string $first_name = null,
    public readonly ?string $last_name = null,
    public readonly ?string $chn_first_name = null,
    public readonly ?string $chn_last_name = null,
    )
    {
        
    }

}