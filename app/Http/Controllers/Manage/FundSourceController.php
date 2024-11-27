<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\FundSourceDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\FundSourceRequest;
use App\Interfaces\CompanyFormationInterface;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
