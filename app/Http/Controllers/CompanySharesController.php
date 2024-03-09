<?php

namespace App\Http\Controllers;

use App\Dtos\SharesDto;
use App\Http\Requests\CompanySharesRequest;
use App\Interfaces\SharesInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CompanySharesController extends Controller
{
    //

    
    public function __construct(
        public readonly SharesInterface $OwnershipInterface
    )
    {
    }

    public function StoreShares(CompanySharesRequest  $req){
        try {
        DB::beginTransaction();
        $ownerDto = SharesDto::fromRequest($req->validated());
        $service = $this->OwnershipInterface->SaveFromData($ownerDto);
        DB::commit();
        return $service;
    }catch(\Exception $e){
        DB::rollBack();
        return $e->getMessage();
    }
    }
}
