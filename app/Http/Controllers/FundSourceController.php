<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\ActivitiesInterface;
use App\Http\Requests\CompanyActivityRequest;
use Illuminate\Support\Facades\DB;
use App\Dtos\ActivityDto;
use App\Dtos\FundSourceDto;
use App\Http\Requests\FundSourceRequest;
use App\Interfaces\CompanyFormationInterface;

class FundSourceController extends Controller
{
    //

    public function __construct(
        public readonly CompanyFormationInterface $fundsource
    )
    {
    }

    public function FundSource(FundSourceRequest $request){
       try{
        DB::beginTransaction();
        $requestDto = FundSourceDto::fromRequest($request->validated());
        $store = $this->fundsource->StoreFundSource($requestDto);
        DB::commit();
        return $store;
       }catch(\Exception $e){
        DB::rollback();
        return $e->getMessage();
       }
    }
}
