<?php
namespace App\Services;

use App\Interfaces\SharesInterface;
use App\Models\CompanyOwnership;
use App\Models\CompanyShare;
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
          $founders =  $this->SharesToCompanyEntities($request, $owner);
        }
        $data  = [
            'CompanyOwnershipShare' => $owner,
            'founderShare' => $founders
        ];
        return $data;
    }
    
    public function SharesToCompanyEntities($requests, $owner)
    {
        foreach($requests->founders as $request){
        $data = OwnershipShare::create([
           'company_id' => $requests->company_id,
           'company_ownership_share_id' => $owner->id,
           'company_entity_id' => $request['company_entity_id'],
           'share_percentage' => $request['share_percentage'],
           'total_amount' => $request['total_amount']
        ]);
    }
    return $data;
    }
}