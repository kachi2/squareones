<?php
namespace App\Interfaces;

interface OwnershipInterface {

    public function  SaveFromData($request);
    public function SharesToFounders($request, $owner);

}