<?php

namespace App\Listeners;

use App\Events\GenerateCompanyData;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\Company;
use App\Models\RegisteredCompany;
use App\Models\RegisterOfAllotment;

class GenerateIncoporatedData implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(GenerateCompanyData $event)
    {
        $company = Company::where('id', $event->data['company_id'])->first();
        $company?->load( 'names' ,'secretary','shares','documents','fundSource','ownerShare','CompanyEntity','businessNature');
        $this->ProcessRegisterOfAllotments($company);
    }


    public function processRegisteredCompany($resource)
    {
      $ss =  RegisteredCompany::updateOrCreate([
            'company_id' => $resource->id
        ],[
            'company_id' => $resource->id,
            'company_structure' =>  $resource->businessNature->name,
            'registration_progress_id' => 1
        ]);
    }

    public function ProcessRegisterOfAllotments($resource)
    {
        foreach($resource['CompanyEntity'] as $entity)
        {
            $data = json_decode($entity['entity_capacity_id']);
            if(in_array('1',$data)){
            $entities = $entity['individual']??$entity['corporate'];
            if($entities){
                $allotment = RegisterOfAllotment::updateOrCreate(
                [
                    'company_id' => $resource->id
                ],    
                [
                    'company_id' => $resource->id,
                    'name' => ($entities['first_name'].' ' .$entities['last_name']. ' '.$entities['chn_last_name'].' ' .$entities['chn_first_name'] )??$entities['company_name']. ' '.$entities['chn_company_name'],
                    'address' => $this->prepareAddress($entities, $entity),
                    'class_of_shares' => $entities?->ownerShares?->companyShares?->shareType?->name,
                    'no_of_shares_allocated' => $entities['ownerShares']['total_amount'],
                    'denomination' => $entities?->ownerShares?->companyShares['currency'],
                    'total_consideration'  => $entities?->ownerShares?->companyShares['total_amount_paid']
                    
                ]);
            }
            }
        }
    }


    public function prepareAddress($address, $entity_type)
    {
        if($entity_type->entity_type_id == 1)
        {
            // dd($address);
        $address = $address['corAddress']??$address['resAddress'];
          return   $address['flat'].', '.$address['street'].', '.$address['building'].', '.$address['state'].', '.$address['country'];
    }else{
      return $address['flat'].', '.$address['street'].', '.$address['building'].', '.$address['state'].', '.$address['country'];
    }
        return $data;

    }
}
