<?php

namespace App\Http\Controllers;

use App\Interfaces\KycInterface;
use Illuminate\Http\Request;
use App\Events\FounderKyc;
use App\Models\CompanyEntity;

class KycController extends Controller
{
    //

    public function __construct(
        public readonly KycInterface $KycInterface
    )
    {
        
    }
    public function loadKyc(Request $request){
        $kyc = $this->KycInterface->InitiateKycProcess($request);
        return response()->json(['data' => $kyc]);
    }

    public function LoadFounderKyc($company_id, $company_entity_id){
        $data['company_id'] = 4;
        $data['company_entity_id'] = 26;
        $res = event(new FounderKyc($data));
        return $res;
    }

    public function loadFounderView($company_id, $company_entity_id){
        $founder = CompanyEntity::where(['id' => decrypt($company_entity_id), 'company_id' => decrypt($company_id)])->first();
       return view('founderkyc')->with([
        'company_id' => $company_id,
        'founder' => $founder
       ]);
    }
   
}
