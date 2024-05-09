<?php

namespace App\Http\Controllers;

use App\Interfaces\KycInterface;
use Illuminate\Http\Request;
use App\Events\FounderKyc;
use App\Models\CompanyEntity;
use App\Jobs\ProcessFounderKyc;

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

    public function LoadFounderKyc(Request $request){
        $data['company_id'] = $request->company_id;
        $data['company_entity_id'] = $request->company_entity_id;

        $res = ProcessFounderKyc::dispatch($data);
        // $res = event(new FounderKyc($data));
        return $res;
    }

    public function loadFounderView($company_id, $company_entity_id){
        $founder = CompanyEntity::where(['id' => decrypt($company_entity_id), 'company_id' => decrypt($company_id)])->first();
        if(!$founder){
            return 404;
        }
       return view('founderkyc')->with([
        'company_id' => $company_id,
        'founder' => $founder
       ]);
    }
   
}
