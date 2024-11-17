<?php

namespace App\Listeners;

use App\Events\GenerateCompanyData;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\Company;
use App\Models\ControllersParticulars;
use App\Models\DesignatedParticulars;
use App\Models\DesignatedRepresentative;
use App\Models\RegisteredCompany;
use App\Models\RegisteredOfficeContract;
use App\Models\RegisterOfAllotment;
use App\Models\RegisterOfCharge;
use App\Models\RegisterOfCompanyName;
use App\Models\RegisterOfDirector;
use App\Models\RegisterOfSecretary;
use App\Models\RegisterOfShareholder;
use App\Models\SignificantController;

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
    return $this->processRegisteredCompany($company);
    }


    public function processRegisteredCompany($resource)
    {
        RegisteredCompany::updateOrCreate([
            'company_id' => $resource->id
        ],[
            'company_id' => $resource->id,
            'company_structure' =>  $resource->businessNature->name,
            'registration_progress_id' => 1,
            'company_registered_name' => $resource?->names['0']->eng_name. ' '.$resource?->names['0']->eng_prefix.' '.$resource?->names['0']->chn_name .$resource?->names['0']->chn_prefix
        ]);
        $this->ProcessRegisterOfDirectors($resource);
    }

    // public function ProcessRegisterOfAllotments($resource)
    // {
    //     foreach($resource['CompanyEntity'] as $entity)
    //     {
    //         $data = json_decode($entity['entity_capacity_id']);
    //         if(in_array('1',$data)){
    //         $entities = $entity['individual']??$entity['corporate'];
    //         if($entities){
    //             $allotment = RegisterOfAllotment::Create(
    //             [
    //                 'company_id' => $resource->id,
    //                 'name' => $entity->entity_type_id == 1? ($entities['first_name'].' ' .$entities['last_name']. ' '.$entities['chn_last_name'].' ' .$entities['chn_first_name'] ) :$entities['company_name']. ' '.$entities['chn_company_name'],
    //                 'address' => $this->prepareAddress($entities, $entity),
    //                 'class_of_shares' => $entities?->ownerShares?->companyShares?->shareType?->name,
    //                 'no_of_shares_allocated' => $entities['ownerShares']['total_amount'],
    //                 'denomination' => $entities?->ownerShares?->companyShares['currency'],
    //                 'total_consideration'  => $entities?->ownerShares?->companyShares['total_amount_paid']
                    
    //             ]);
    //         }
    //         }
    //     }
    //     $this->ProcessRegisterOfCompanyNames($resource);
    // }

    // public function ProcessRegisterOfCompanyNames($resource) 
    // {
    //     foreach($resource['CompanyEntity'] as $entity)
    //     {
    //         $data = json_decode($entity['entity_capacity_id']);
    //         if(in_array('1',$data)){
    //         $entities = $entity['corporate'];
    //         if($entities){
    //             $CompanyName = RegisterOfCompanyName::Create(
    //             [
    //                 'company_id' => $resource->id,
    //                 'name' => $entities['company_name']. ' '.$entities['chn_company_name'],
    //                 'address' => $this->prepareAddress($entities, $entity),
    //                 'class_of_shares' => $entities?->ownerShares?->companyShares?->shareType?->name,
    //                 'no_of_shares_allocated' => $entities['ownerShares']['total_amount'],
                    
    //             ]);
    //         }
    //         }
    //     }
    //     $this->ProcessRegisterOfDirectors($resource);
    // }


    public function ProcessRegisterOfDirectors($resource) 
    {
        foreach($resource['CompanyEntity'] as $entity)
        {
            $data = json_decode($entity['entity_capacity_id']);
            
            if(in_array('2',$data)){
                $entities = $entity['individual']??$entity['corporate'];
            if($entities){
                RegisterOfDirector::Create(
                [
                    'company_id' => $resource->id,
                    'name' => $entity->entity_type_id == 1? ($entities['first_name'].' ' .$entities['last_name']. ' '.$entities['chn_last_name'].' ' .$entities['chn_first_name'] ) :$entities['company_name']. ' '.$entities['chn_company_name'],
                    'registered_office' => $this->prepareAddress($entities, $entity),
                    'reg_no' => $entity->entity_type_id == 1? $entities['getIdentity']['passport_no']??$entities['getIdentity']['identity_no'].$entities['getIdentity']['identity_no_suffix']:$entities['registeration_no']
                ]);
            }
            }
        }
  $this->ProcessRegisterOfShareholders($resource);
    }


    public function ProcessRegisterOfShareholders($resource)
    {
        foreach($resource['CompanyEntity'] as $entity)
        {
            $data = json_decode($entity['entity_capacity_id']);
            if(in_array('1',$data)){
            $entities = $entity['individual']??$entity['corporate'];
            if($entities){
                 RegisterOfShareholder::Create(
                [
                    'company_id' => $resource->id,
                    'name' => $entity->entity_type_id == 1? ($entities['first_name'].' ' .$entities['last_name']. ' '.$entities['chn_last_name'].' ' .$entities['chn_first_name'] ) :$entities['company_name']. ' '.$entities['chn_company_name'],
                    'address' => $this->prepareAddress($entities, $entity),
                    'class_of_shares' => $entities?->ownerShares?->companyShares?->shareType?->name,
                    'current_holding' => $entities['ownerShares']['total_amount'],
                    'denomination' => $entities?->ownerShares?->companyShares['currency'],
                     'total_consideration'  => $entities['ownerShares']['total_amount']
                    // 'total_consideration'  => $entities?->ownerShares?->companyShares['total_amount_paid']
                    
                ]);
            }
            }
        }
     $this->ProcessRegisterOfSecretary($resource);
    }

    public function ProcessRegisterOfSecretary($resource)
    {

            $secretary = $resource['secretary'];
            if($secretary){
               RegisterOfSecretary::Create(
                [
                    'company_id' => $resource->id,
                    'name' => $secretary['name'].' '.$secretary['chn_name'],
                    'address' => $secretary['flat'].', '.$secretary['street'].', '.$secretary['building'].', '.$secretary['state'].', '.$secretary['country'],
                    'identity_info' =>$secretary['company_reg_no']
                ]);
            }
          $this->ProcessRegisterOfSignificantControllers($resource);
    }

    public function ProcessRegisterOfSignificantControllers($resource)
    {
        foreach($resource['CompanyEntity'] as $entity)
        {
            $data = json_decode($entity['entity_capacity_id']);
            if(in_array('1',$data)){
            $entities = $entity['individual']??$entity['corporate'];
            if($entities){
                $Controller = SignificantController::Create(
                [
                    'company_id' => $resource->id,
                    'legal_entity_name' => $entity->entity_type_id == 1? ($entities['first_name'].' ' .$entities['last_name']. ' '.$entities['chn_last_name'].' ' .$entities['chn_first_name'] ) :$entities['company_name']. ' '.$entities['chn_company_name'],
                    'type' => $entity['individual']?'individual' : 'corporate'
                ]);
                  ControllersParticulars::create([
                    'significant_controller_id' => $Controller->id,
                    'corresponding_address' => $this->prepareAddress($entities, $entity),
                    'resdential_address' => $entities['flat'].', '.$entities['street'].', '.$entities['building'].', '.$entities['state'].', '.$entities['country'],
                    'identity_info' => $entity->entity_type_id == 1? $entities['getIdentity']['passport_no']??$entities['getIdentity']['identity_no'].$entities['getIdentity']['identity_no_suffix']:$entities['registeration_no'],
                    'place_of_registration' => $entity->entity_type_id == 1? $entities['country_registered']:'',
                    
                ]);

            }
        }
    }
    $this->ProcessRegisterOfDesignatedParticulars($resource);
    }

    public function ProcessRegisterOfDesignatedParticulars($resource)
    {
            $secretary = $resource['secretary'];
            if($secretary){
                $Controller = DesignatedRepresentative::Create(
                [
                    'company_id' => $resource->id,
                    'name' => $secretary['name'].' '.$secretary['chn_name']
                ]);
                DesignatedParticulars::create([
                    'designated_representative_id' => $Controller->id,
                    'corresponding_address' => $secretary['flat'].', '.$secretary['street'].', '.$secretary['building'].', '.$secretary['state'].', '.$secretary['country'],
                    'identity_info' =>$secretary['company_reg_no'],
                    'place_of_registration' =>$secretary['country_registered'],
                ]);

            }
            $this->ProcessRegisteredOfficeContracts($resource);
    }

    public function ProcessRegisteredOfficeContracts($resource)
    {
        $secretary = $resource['secretary'];
        foreach($resource['CompanyEntity'] as $entity)
        { 
            $data = json_decode($entity['entity_capacity_id']);
            $entities = $entity['individual']??$entity['corporate'];
            if(in_array('2',$data)){
                $directors[] = $entity?->entity_type_id == 1? ($entities['first_name'].' ' .$entities['last_name']. ' '.$entities['chn_last_name'].' ' .$entities['chn_first_name'] ) :$entities['company_name']. ' '.$entities['chn_company_name'];
           }
            if(in_array('1',$data))
            {
                $shareholder[] = $entity?->entity_type_id == 1? ($entities['first_name'].' ' .$entities['last_name']. ' '.$entities['chn_last_name'].' ' .$entities['chn_first_name'] ) :$entities['company_name']. ' '.$entities['chn_company_name'];
            }
            }
        RegisteredOfficeContract::create([
            'company_id' => $resource->id,
            'directors' => json_encode($directors),
            'shareholders' => json_encode($shareholder),
            'company_secretary' => $secretary['name'],
            'registered_office' => $secretary['flat'].', '.$secretary['street'].', '.$secretary['building'].', '.$secretary['state'].', '.$secretary['country'],
            'business_address' => $secretary['flat'].', '.$secretary['street'].', '.$secretary['building'].', '.$secretary['state'].', '.$secretary['country'],
            'scr_designated_representative' => $secretary['name'],
        ]);


    }

    public function prepareAddress($address, $entity_type)
    {
        if($entity_type->entity_type_id == 1)
        {
        $address = $address['resAddress']??$address['corAddress'];
          return   $address['flat'].', '.$address['street'].', '.$address['building'].', '.$address['state'].', '.$address['country'];
    }else{
      return $address['flat'].', '.$address['street'].', '.$address['building'].', '.$address['state'].', '.$address['country'];
    }
        return $data;
    }

}


