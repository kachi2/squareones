<?php

namespace App\Http\Controllers;

use App\Dtos\ActivityDto;
use Illuminate\Http\Request;
use App\Http\Requests\CompanyActivityRequest;
use App\Interfaces\ActivitiesInterface;
use Illuminate\Support\Facades\DB;

class CompanyActivityController extends Controller
{
    //

    public function __construct(
        public readonly ActivitiesInterface $activitiesInterface
    )
    {
        
    }

    public function ActivityFundSource(CompanyActivityRequest $request){
       try{
        DB::beginTransaction();
        $requestDto = ActivityDto::fromRequest($request->validated());
        $store = $this->activitiesInterface->SaveActivtiesRequest($requestDto);
        return $store;

        DB::commit();
       }catch(\Exception $e){
        DB::rollback();

        return $e->getMessage();
       }
    }
}
