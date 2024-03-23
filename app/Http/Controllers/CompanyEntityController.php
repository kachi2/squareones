<?php

namespace App\Http\Controllers;

use App\Dtos\CorporateDto;
use App\Dtos\IndividualDto;
use App\Interfaces\FounderInterface;
use App\Models\IdentityType;
use App\Services\CompanyEntityService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Traits\CompanyEntityData;
use Cloudinary\Api\HttpStatusCode;

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
        try {
            DB::beginTransaction();
            $company_entity = $this->EntityInterface->SaveParentEntity($request);
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
