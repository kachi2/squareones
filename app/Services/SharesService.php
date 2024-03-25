<?php
namespace App\Services;

use App\Interfaces\SharesInterface;
use App\Models\CompanyOwnership;
use App\Models\CompanyShare;
use App\Models\Company;
use App\Models\CompanyEntity;
use App\Models\OwnershipShare;

class SharesService implements SharesInterface 
{

    public function  SaveFromData($request){

        $owner = CompanyShare::create([
            'company_id' => $request->company_id,
            'share_type_id' => $request->share_type_id,
            'no_of_share' => $request->no_of_share,
            'total_amount_paid' => $request->total_amount_paid,
            'currency' => $request->currency
        ]);

        if($owner){
          $entity =  $this->SharesToCompanyEntities($request, $owner);
        }
        $data  = [
            'CompanyShare' => $owner,
            'Owners_Share' => $entity
        ];
        return $data;
    }
    
    public function SharesToCompanyEntities($requestsDto, $owner)
    {
        foreach($requestsDto->company_entity as $request){
        $data = OwnershipShare::create([
           'company_id' => $requestsDto->company_id,
           'company_share_id' => $owner->id,
           'company_entity_id' => $request['company_entity_id'],
           'share_percentage' => $request['share_percentage'],
           'total_amount' => $request['total_amount']
        ]);
    }
    return $data;
    }

 
    public function ListShareHolders($company_id){
        $company = CompanyEntity::where(['company_id' => $company_id])->get();
        $shareholder = [];
        $shares = [];
        if($company){
        foreach($company as $com){
            $entity = json_decode($com->entity_capacity_id, true);
            if($entity != null){
            if(in_array(CompanyEntity::SHAREHOLDER, $entity)){
                $shareholder[] = $com->id;
            }
        }
        }
        foreach($shareholder as $shareholders){
            $shares[] = CompanyEntity::where('id', $shareholders)->first()->load('Individual', 'Corporate');
        };
        return [
           'data' =>  count($shares) <= 0?'No results found':$shares
        ];
        }
    }
}