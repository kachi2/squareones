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
use Carbon\Carbon;

class CompanyEntityService implements CompanyEnityInterface

{

    public function SaveParentEntity($request)
    {
        $CompanyEntity = CompanyEntity::where('id', $request?->company_entity_id)->first();
        if(!$CompanyEntity){
            $entity = CompanyEntity::create(
                [ 
                'entity_type_id' => $request->entity_type_id,
                'company_id' => $request->company_id,
                'entity_type_id' => $request->entity_type_id,
                'entity_capacity_id' => $request->entity_capacity_id,
                'is_founder' => $request->is_founder,
                ]);
        }else{
            $CompanyEntity->update([
                'company_id' => $request->company_id,
                // 'entity_type_id' => $request->entity_type_id,
                'entity_capacity_id' => $request->entity_capacity_id,
                'is_founder' => $request->is_founder,
            ]);
        }

           return $entity??$CompanyEntity;
    }

    public function ProcessIndividualEntity(IndividualDto $IndividualDto, $company_entity)
    {
        $individualData = Individual::updateOrcreate([
            'company_entity_id' =>  $company_entity->id
        ],[
            'first_name' => $IndividualDto->first_name,
            'last_name' => $IndividualDto->last_name,
            'chn_first_name' => $IndividualDto->chn_first_name,
            'chn_last_name' => $IndividualDto->chn_last_name,
            'dob' => $IndividualDto->dob,
            'nationality' => $IndividualDto->nationality,
            'phone' => $IndividualDto->phone,
            'email' => $IndividualDto->email,
            'occupation' => $IndividualDto->occupation,
        ]);

        $id_info = IdentityInfo::updateOrcreate([
            'individual_id' =>  $individualData->id,
        ],[
            'individual_id' =>  $individualData->id,
            'identity_type' =>  $IndividualDto->identity_type_id, 
            'passport_no' => filter_vars($IndividualDto->passport_no), 
            'issueing_country' => filter_vars($IndividualDto->issuing_country), 
            'identity_no' => filter_vars($IndividualDto->identity_no),
            'identity_no_suffix' => filter_vars($IndividualDto->identity_no_suffix),
        ]);

        ActivityLogs('Added '.$IndividualDto->first_name.' '.$IndividualDto->last_name.' as Director/Shareholder',  'Company Formation');
      $res =  $this->processResidentialAddress($IndividualDto, $individualData);
      return [
        'company_entity' => $company_entity,
        'entity_individual' => $individualData,
        'address' => $res,
        'identify_info' => $id_info
      ];
    }

    public function processResidentialAddress($request, $individual)
    {
            $address = $request->addresses[0];
            $datas = IndividualResAddress::updateOrCreate([
                'individual_id' => $individual->id,
            ],[
                'individual_id' => $individual->id,
                'flat'=>  $address['flat']??null,
                'building'=>  filter_vars($address['building']),
                'street' => $address['street']??null,
                'city'=>  $address['city']??null,
                'state'=>  $address['state']??null,
                // 'postal_code'=>  $address['postal_code']??null,
                'country'=>  $address['country']??null,
                'is_corAddress' => $address['is_corAddress']
            ]);
            if($address['is_corAddress'] != 1){
                $addressCor = $request->addresses[1];
                $cor =  IndividualCorAddress::updateOrCreate([
                    'individual_id' => $individual->id
                ],[
                    'individual_id' => $individual->id,
                    'flat'=>  $addressCor['flat']??null,
                    'building'=> filter_vars($addressCor['building']),
                    'street' => $addressCor['street']??null,
                    'city'=>  $addressCor['city']??null,
                    'state'=>  $addressCor['state']??null,
                    // 'postal_code'=>  $addressCor['postal_code']??null,
                    'country'=>  $addressCor['country']??null,
                ]);
            }else{
                $cor = IndividualCorAddress::where('individual_id', $individual->id)->first();
                if($cor) $cor->delete();
            }
            return [
                'residential_address' => $datas??null,
                'correspondence_address' =>  $cor??null
            ];
    }

    public function ProcessCorporateEntity(CorporateDto $request, $entity)
    {
       $corporate = Corporate::updateOrcreate([
        'company_entity_id' => $entity->id,
       ],[
            'company_name' =>  filter_vars($request->company_name),
            'chn_company_name'=>  filter_vars($request->chn_company_name),
            'date_incorporated'=>  $request->date_incorporated,
            'country_registered'=>  $request->country_registered,
            'flat'=>  $request->flat,
            'building'=>  filter_vars($request->building) ,
            'street' => $request->street,
            'city'=>  $request->city,
            'state'=>  $request->state,
            'business_nature_id' => $request->business_nature_id,
            // 'postal_code'=>  $request->postal_code,
            'country'=>  $request->country,
            'registeration_no' =>   $request->registeration_no,
            'business_nature_id'=>  $request->business_nature_id,
        ]);

        if($corporate){
         $authorized_person =   CorporateAuthPersons::updateOrcreate([
            'corporate_id' => $corporate->id,
         ],[
                'corporate_id' => $corporate->id,
                'first_name' => $request->first_name,
                 'last_name' =>$request->last_name, 
                 'phone' => $request->phone, 
                 'email' => $request->email
            ]);
        }
        ActivityLogs('Added '.$request->company_name.' '.$request->chn_company_name.' as Director/Shareholder',  'Company Formation');

        return ['company_entity' => $entity, 'entity_corporate' => $corporate, 'authorized_person' => $authorized_person];
    }

    public function RemoveEntity($entity_id){
        $entity = CompanyEntity::whereId($entity_id)->first();
        //  return response()->json(['data' => $entity->load('Individual','Corporate' )]);
        if($entity){
        if($entity->has('Individual') && $entity->Individual != null ){
            $data = [
                'company_entity' =>$entity->load('Individual')
            ];
            ActivityLogs('Removed '.$entity->Individual->first_name.' '.$entity->Individual->last_name.' as Director/Shareholder',  'Company Formation');
            $entity->Individual?->corAddress?->delete();
            $entity->Individual?->resAddress?->delete();
            $entity->Individual?->getIdentity?->delete();
            $entity->Individual?->share?->delete();
            $entity->Individual?->delete();
            $entity->share?->delete();
            $entity->delete();
            return response()->json(['data' => $data]);
        }elseif($entity->has('Corporate') && $entity->Corporate != null ){
            $data = [
                'company_entity' =>$entity->load('Corporate')
            ];
            ActivityLogs('Removed '.$entity->Corporate->company_name.' as Director/Shareholder',  'Company Formation');
            $entity->Corporate?->authorizedPersons?->delete();
            $entity->Corporate?->delete();
            $entity->share?->delete();
            $entity->delete();
            return response()->json(['data' => $data]);
        }
    }
    return response()->json(['error' => 'The requested resources does not exist']);
}

  public function UpdateEntitySignature($request){
    try {
    $entity = CompanyEntity::where(['company_id' => $request->company_id, 'id' =>$request->company_entity_id])->first();
   
    if(!empty($entity)){
        $entity->update([
            'signature' => $request->signature??$entity->signature,
            'date_signed'=> Carbon::now(),
            'client_id'=> $request->client_id??$entity->client_id,
            'kyc_status'=> $request->kyc_status??$entity->kyc_status,
            'user_token'=> $request->user_token??$entity->user_token,
            'is_founder' => $request->is_founder??0,
        ]);
    }
    $entity['success'] = true;
    // ActivityLogs('Director/Founder added signature',  'Company Formation');
    return $entity;
}catch(\Exception $e){
    return $e->getMessage();
}

  }

  public function deleteSignatures($request)
  {
    $entity = CompanyEntity::where(['company_id' => $request->company_id, 'id' =>$request->company_entity_id])->first();
    if($entity){
        $entity->update([
            'signature' => null,
            'date_signed'=> null,
            'is_founder' => 0
        ]);
        ActivityLogs('Director/Founder removed signature',  'Company Formation');
        return $entity;
    }
    return false;
  }
}
