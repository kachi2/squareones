<?php

namespace App\Http\Controllers;

use App\Dtos\FounderCorDto;
use App\Dtos\FoundersIndDto;
use App\Interfaces\FounderInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Traits\FoundersData;

class FounderController extends Controller
{
    //
    use FoundersData;

    public function __construct(
        public readonly FounderInterface $founderInterface
    )
    {
        
    }

    public function StoreFounders(Request $request){
        try{
        DB::beginTransaction();
       $founders = $this->founderInterface->SaveParentFounders($this->BasefounderRequest($request));
       if($founders){
        if($request->founder_type_id == 1){
            $validateRequest = $this->IndividualFoundersData($request);
            if($validateRequest){
                $founderDto = FoundersIndDto::fromRequest($validateRequest->validated());
               $ss = $this->founderInterface->ProcessIndividualFounders($founderDto, $founders);
               return $ss;
            }
        }elseif($request->founder_type_id == 2){
            $validateRequest = $this->CorporateFoundersData($request);
            $founderCoDto = FounderCorDto::fromRequest($validateRequest->validated());
           $ss = $this->founderInterface->ProcessCorperateFounders($founderCoDto, $founders);
           return $ss;
        }
       }
        
        DB::commit();
        }catch(\Exception $e){
        DB::rollBack();
            return $e;
        }
    }
}
