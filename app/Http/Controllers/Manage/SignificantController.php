<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\SignificantControllerDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignificantControllerRequest;
use App\Interfaces\IncorporationInterface;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SignificantController extends Controller
{

    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    { 
    }
    public function SignificantController(SignificantControllerRequest $request){
 
        try{
        $SignificantDto = SignificantControllerDto::fromRequest($request->validated());
        $data = $this->IncorporationInterface->SignificantControllers($SignificantDto);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }
}
