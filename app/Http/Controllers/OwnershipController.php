<?php

namespace App\Http\Controllers;

use App\Dtos\OwnerDto;
use App\Http\Requests\OwnershipRequest;
use App\Interfaces\OwnershipInterface;
use Illuminate\Http\Request;

class OwnershipController extends Controller
{
    //

    
    public function __construct(
        public readonly OwnershipInterface $OwnershipInterface
    )
    {
    }

    public function StoreOwnership(OwnershipRequest $req){

        $ownerDto = OwnerDto::fromRequest($req->validated());
        $service = $this->OwnershipInterface->SaveFromData($ownerDto);
        return $service;
    }
}
