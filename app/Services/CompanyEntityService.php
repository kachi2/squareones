<?php

namespace App\Services;

use App\Dtos\CorporateDto;
use App\Interfaces\CompanyEnityInterface;
use App\Models\CompanyEntity;
use App\Dtos\IndividualDto;
use App\Models\Corporate;
use App\Models\CorporateAuthPersons;
use App\Models\IdentityInfo;
use App\Models\Individual;
use App\Models\IndividualCorAddress;
use App\Models\IndividualResAddress;

class CompanyEntityService implements CompanyEnityInterface

{

    public function SaveParentEntity($request)
    {
            $entity = CompanyEntity::updateOrCreate([
                'company_id' => $request->company_id,
           ]);
           return $entity;
    }

    public function ProcessIndividualEntity(IndividualDto $IndividualDto, $company_entity)
    {
        $individualData = Individual::updateOrcreate([
            'entity_type_id' => $IndividualDto->entity_type_id,
            'entity_capacity_id' => json_encode($IndividualDto->entity_capacity_id),
            'company_entity_id' =>  $company_entity->id,
            'first_name' => $IndividualDto->first_name,
            'last_name' => $IndividualDto->last_name,
            'chn_first_name' => $IndividualDto->chn_first_name,
            'chn_last_name' => $IndividualDto->chn_last_name,
            'dob' => $IndividualDto->dob,
            'nationality' => $IndividualDto->nationality,
            'phone' => $IndividualDto->phone,
            'email' => $IndividualDto->email,
            'occupation' => $IndividualDto->occupation,
            'is_founder' => $IndividualDto->is_founder,
        ]);

        $id_info = IdentityInfo::create([
            'identity_type_id' =>  $IndividualDto->identity_type_id, 
            'passport_no' =>$IndividualDto->passport_no, 
            'issueing_country' => $IndividualDto->issuing_country, 
            'identity_no' => $IndividualDto->identity_no
        ]);

      $res =  $this->processResidentialAddress($IndividualDto, $individualData);
      return [
        'Entity_individual' => $individualData,
        'address' => $res,
        'identify_info' => $id_info
      ];
    }

    public function processResidentialAddress($request, $individual)
    {
       $ind =  IndividualResAddress::whereIndividualId($individual->id)->first();
   
       $address = $request->addresses[0];
       if(!$ind){
               $datas = IndividualResAddress::updateOrCreate([
                'individual_id' => $individual->id ,
                'address' => $address['address'],
                'street_no'  => $address['street_no'],
                'city'  => $address['city'],
                'state' => $address['state'],
                'postal_code'  => $address['postal_code'],
                'country' => $address['country'],
                'is_corAddress' => $address['is_corAddress']
            ]);
       }else{
        $ind->fill($address)->save();
       }
            if($address['is_corAddress'] != 1){
                $address = $request->addresses[1];
                 $data = IndividualCorAddress::updateOrCreate([
                    'individual_id' => $individual->id??null,
                    'address' => $address['address']??null,
                    'street_no'  => $address['street_no']??null,
                    'city'  => $address['city']??null,
                    'state' => $address['state']??null,
                    'postal_code'  => $address['postal_code']??null,
                    'country' => $address['country']??null
                ]);
            }
            return [
                'residential_address' => $datas??null,
                'correspondence_address' => $data??null
            ];
    }

    public function ProcessCorporateEntity(CorporateDto $request, $founder)
    {
       $corporate = Corporate::updateOrCreate([
            'entity_type_id' => $request->entity_type_id,
            'entity_capacity_id' => json_encode($request->entity_capacity_id),
            'company_entity_id' => $founder->id,
            'company_name' =>  $request->company_name,
            'chn_company_name'=>  $request->chn_company_name,
            'date_incorporated'=>  $request->date_incorporated,
            'country_registered'=>  $request->country_registered,
            'address'=>  $request->address,
            'street_no'=>  $request->street_no,
            'city'=>  $request->city,
            'state'=>  $request->state,
            'postal_code'=>  $request->postal_code,
            'country'=>  $request->country,
            'registeration_no' =>   $request->registeration_no,
            'business_nature_id'=>  $request->business_nature_id,
            'is_founder' => $request->is_founder,
        ]);

        if($corporate){
         $authorized_person =   CorporateAuthPersons::updateOrcreate([
                'corporate_id' => $corporate->id,
                'first_name' => $request->first_name,
                 'last_name' =>$request->last_name, 
                 'phone' => $request->phone, 
                 'email' => $request->email
            ]);
        }

        return [$authorized_person,$corporate ];
    }
}
