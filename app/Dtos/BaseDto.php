<?php 
namespace App\Dtos;


class BaseDto {

    public function __construct(...$args)
    {
        
    }

    public function fromRequest(array $array)
    {
        return new static(...$array);
    }
}