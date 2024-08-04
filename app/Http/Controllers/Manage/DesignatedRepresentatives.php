<?php

namespace App\Http\Controllers\Manage;

use Illuminate\Http\Request;
use App\Http\Requests\DesignatedRepresentativeRequest;
use App\Dtos\DesignatedRepresentativeDto;
use App\Http\Controllers\Controller;
use App\Interfaces\IncorporationInterface;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\DB;

class DesignatedRepresentatives extends Controller
{
    public function __construct(
        public readonly IncorporationInterface $IncorporationInterface
    )
    {
        
    }
    public function DesignatedRepresentatives(DesignatedRepresentativeRequest $req){
        try{
        $designatedDto = DesignatedRepresentativeDto::fromRequest($req->validated());
        $data = $this->IncorporationInterface->DesignatedRepresentative($designatedDto);
        return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }
}
