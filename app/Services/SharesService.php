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


    //send only user that are shareholders or that are both shareholders and directors 


    public function ListShareHolders($company_id){
        $shareholders = CompanyEntity::where('company_id',$company_id)->get();
        if($shareholders){

            return  $shareholders;
        }

        // dd($entity );
    }




}