<?php

namespace App\Http\Controllers\Manage;

use App\Dtos\CorporateDto;
use App\Dtos\IndividualDto;
use App\Http\Controllers\Controller;
use App\Models\CompanyEntity;
use App\Models\IdentityType;
use App\Services\CompanyEntityService;
use App\Traits\CompanyEntityData;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CompanyEntityController extends Controller
{
    use CompanyEntityData;

    public function __construct(
        public readonly CompanyEntityService $EntityInterface
    ) {
    }

    public function StoreEntity(Request $request)
    {
        $check = CompanyEntity::where('company_id', $request->company_id)->get();
        if(count($check) >= 6 && !isset($request->company_entity_id)){
           return response()->json(['error' => 'You cannot add more than 6 founders/directors']); 
        }
        try {
            $data  = [];
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
            return response()->json([ 'data' => $data], HttpStatusCode::OK);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::INTERNAL_SERVER_ERROR);
        }
    }

    public function removeEntity($entity_id){
        return $this->EntityInterface->RemoveEntity($entity_id);
    }
}
