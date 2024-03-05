<?php 
namespace App\Dtos;


class BaseDto {

    public function __construct(...$args)
    {
        
    }

    public  static function fromRequest(array $array)
    {
        return new static(...$array);
    }
}