<?php

namespace App\Http\Controllers;
use App\Dtos\CorporateDto;
use App\Dtos\IndividualDto;
use App\Models\CompanyEntity;
use App\Models\IdentityType;
use App\Services\CompanyEntityService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Traits\CompanyEntityData;
use Cloudinary\Api\Exception\BadRequest;
use App\Events\FounderKyc;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\Validator;

use App\Jobs\ProcessFounderKyc;

class CompanyEntityController extends Controller
{
    use CompanyEntityData;

    public function __construct(
        public readonly CompanyEntityService $EntityInterface
    ) {
    }

    public function getIdType(){
        return response()->json([
            'identity_type' => IdentityType::get()
        ]);
    }
    public function StoreEntity(Request $request)
    {
        $check = CompanyEntity::where('company_id', $request->company_id)->get();
        if(count($check) >= 6 && !isset($request->company_entity_id)){
           return response()->json(['error' => 'You cannot add more than 6 founders/directors']); 
        }
        try {
            DB::beginTransaction();
            $company_entity = $this->EntityInterface->SaveParentEntity($request);
            // dd($company_entity);
            if ($company_entity) {
                if ($request->entity_type_id == 1) {
                    $validateRequest = $this->IndividualEntityData($request);
                    if ($validateRequest) {
                        $IndividualEntity = IndividualDto::fromRequest($validateRequest->validated());
                        $data = $this->EntityInterface->ProcessIndividualEntity($IndividualEntity, $company_entity);
                    }
                } elseif ($request->entity_type_id == 2) {
                    $validateRequest = $this->CorporateEntitysData($request);
                    $CorporateEntity = CorporateDto::fromRequest($validateRequest->validated());
                    $data = $this->EntityInterface->ProcessCorporateEntity($CorporateEntity,  $company_entity);
                }
            }
            DB::commit();
            if(!isset($request->isEdit)){
            $datas['company_id'] = $company_entity->company_id;
            $datas['company_entity_id'] = $company_entity->id;
            //  event(new FounderKyc($datas));
            ProcessFounderKyc::dispatch($datas);
            }
            return response()->json([ 'data' => $data], HttpStatusCode::OK);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::INTERNAL_SERVER_ERROR);
        }
    }

    public function removeEntity($entity_id){
        return $this->EntityInterface->RemoveEntity($entity_id);
    }

    public function RegisterEntitySignature(Request $request){
        $valid = Validator::make($request->all(),[
            'signature' => 'required',
            'date_signed' => 'required',
            'company_id' => 'required',
            'company_entity_id' => 'required'
        ]);
        if($valid->fails()){
            return response()->json([
            'error' => $valid->errors()->first()
            ], HttpStatusCode::BAD_REQUEST);
        }

        $res = $this->EntityInterface->UpdateEntitySignature($request);
        if($res['success']){
            return response()->json([
                'data' => $res
                ], HttpStatusCode::OK);
        }
        return response()->json([
            'error' => $res 
            ], HttpStatusCode::INTERNAL_SERVER_ERROR);

    }
    
}
