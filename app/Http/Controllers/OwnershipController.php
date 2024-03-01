<?php

namespace App\Http\Controllers;

use App\Dtos\OwnerDto;
use App\Http\Requests\OwnershipRequest;
use App\Interfaces\OwnershipInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OwnershipController extends Controller
{
    //

    
    public function __construct(
        public readonly OwnershipInterface $OwnershipInterface
    )
    {
    }

    public function StoreOwnership(OwnershipRequest $req){

        try {
        DB::beginTransaction();
        $ownerDto = OwnerDto::fromRequest($req->validated());
        $service = $this->OwnershipInterface->SaveFromData($ownerDto);
        DB::commit();
        return $service;
    }catch(\Exception $e){
        DB::rollBack();
        return $e->getMessage();
    }
    }
}
