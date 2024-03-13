<?php 
namespace App\Dtos;


class UserDto extends BaseDto

{

public function __construct(
    public readonly string $name,
    public readonly string $email,
    public readonly string $phone,
    public readonly string $password,
) {
}

}