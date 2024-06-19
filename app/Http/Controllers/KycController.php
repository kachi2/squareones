<?php

namespace App\Http\Controllers;

use App\Interfaces\KycInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Cloudinary\Api\HttpStatusCode;
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
        if(!$request->company_id){
            return response()->json(['error' => 'company_id is required'], HttpStatusCode::BAD_REQUEST);
        }
        try{
        if($request->all_founders){
            $founders = CompanyEntity::where('company_id', $request->company_id)->get();
            foreach($founders as $entity){
                $datas['company_id'] = $entity->company_id;
                $datas['company_entity_id'] = $entity->id;
                 ProcessFounderKyc::dispatch($datas);
            }
        }else{
        $founders  = CompanyEntity::where('id', $request->company_entity_id)->get();
        $data['company_id'] = $request->company_id;
        $data['company_entity_id'] = $request->id;
        ProcessFounderKyc::dispatch($data);
        // $res = event(new FounderKyc($data));
       }
        return response()->json(['data' => $founders, 'status' => 'success'], HttpStatusCode::OK);
       }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::INTERNAL_SERVER_ERROR);
        }
}

    public function UpdateKycStatus($company_id, $company_entity_id){
        $founder = CompanyEntity::where(['id' => decrypt($company_entity_id), 'company_id' => decrypt($company_id)])->first();
       
        if($founder){
            $founder->update([
                'kyc_status' => 'pending'
            ]);
        }
    }

   
    // public function loadFounderView($company_id, $company_entity_id){
    //     $founder = CompanyEntity::where(['id' => decrypt($company_entity_id), 'company_id' => decrypt($company_id)])->first();
    //     if(!$founder){
    //         return 404;
    //     }
    //    return view('founderkyc')->with([
    //     'company_id' => $company_id,
    //     'founder' => $founder
    //    ]);
    // }


   
}
