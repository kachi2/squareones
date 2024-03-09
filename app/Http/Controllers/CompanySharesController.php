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
        public readonly SharesInterface $shareInterface
    )
    {
    }

    public function StoreShares(CompanySharesRequest  $req){
        try {
        DB::beginTransaction();
        $shareDto = SharesDto::fromRequest($req->validated());
        $service = $this->shareInterface->SaveFromData($shareDto);
        DB::commit();
        return $service;
    }catch(\Exception $e){
        DB::rollBack();
        return $e->getMessage();
    }
    }
}
