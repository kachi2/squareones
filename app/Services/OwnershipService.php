<?php
namespace App\Services;

use App\Interfaces\OwnershipInterface;
use App\Models\CompanyOwnership;
use App\Models\CompanyOwnershipShare;

class OwnershipService implements OwnershipInterface 
{

    public function  SaveFromData($request){

        $owner = CompanyOwnershipShare::create([
            'company_id' => $request->company_id,
            'share_type' => $request->share_type,
            'no_of_share' => $request->no_of_share,
            'total_amount_paid' => $request->total_amount_paid,
            'currency' => $request->currency
        ]);

        if($owner){
          $founders =  $this->SharesToFounders($request, $owner);
        }
        $data  = [
            'CompanyOwnershipShare' => $owner,
            'founderShare' => $founders
        ];
        return $data;
    }
    
    public function SharesToFounders($requests, $owner){

        foreach($requests->founders as $request){
        $data = CompanyOwnership::create([
           'company_id' => $requests->company_id,
           'company_ownership_share_id' => $owner->id,
           'company_founder_id' => $request['company_founder_id'],
           'share_percentage' => $request['share_percentage'],
           'total_amount' => $request['total_amount']
        ]);
    }
    return $data;
    }
}