<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\DB;
use App\Dtos\FundSourceDto;
use App\Http\Requests\FundSourceRequest;
use App\Interfaces\CompanyFormationInterface;
use Cloudinary\Api\HttpStatusCode;

class FundSourceController extends Controller
{

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
        return response()->json(['data' => $store], HttpStatusCode::OK);
       }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::INTERNAL_SERVER_ERROR);
       }
    }
}
