<?php

namespace App\Http\Controllers;

use App\Dtos\ActivityDto;
use App\Events\GeneratePDF;
use Illuminate\Http\Request;
use App\Http\Requests\CompanyActivityRequest;
use App\Interfaces\ActivitiesInterface;
use App\Interfaces\CompanyFormationInterface;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\DB;

class CompanyActivityController extends Controller
{
    public function __construct(
        public readonly CompanyFormationInterface $activitiesInterface
    )
    {
    }

    public function CompanyActivities(CompanyActivityRequest $request){
       try{
        DB::beginTransaction();
        $requestDto = ActivityDto::fromRequest($request->validated());
        $store = $this->activitiesInterface->StoreActivties($requestDto);
        DB::commit();
        //run the generate PDF script here
        // event(new GeneratePDF($requestDto->company_id));
        return response()->json(['data', $store], HttpStatusCode::OK);
       }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }
}
