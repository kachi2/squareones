<?php

namespace App\Http\Controllers;

use App\Dtos\SecretaryDto;
use App\Http\Requests\SecretaryRequest;
use App\Interfaces\SecretaryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SecretaryController extends Controller
{
    //
    public function __construct(
        public readonly SecretaryInterface $SecretaryInterface
    )
    {
    }

    public function StoreSecretary(SecretaryRequest $req){

        try {
        DB::beginTransaction();
        $ownerDto = SecretaryDto::fromRequest($req->validated());
        $service = $this->SecretaryInterface->SaveFromData($ownerDto);
        DB::commit();
        return $service;
    }catch(\Exception $e){
        DB::rollBack();
        return $e->getMessage();
    }
    }
}
    

