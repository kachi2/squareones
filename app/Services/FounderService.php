<?php

namespace App\Services;

use App\Interfaces\FounderInterface;
use App\Models\Company;
use App\Models\CompanyFounder;
use App\Dtos\FounderCorDto;
use App\Dtos\FoundersIndDto;
use App\Models\FounderCorAddress;
use App\Models\FounderCorperate;
use App\Models\FounderIndividual;
use App\Models\FounderResAddress;

class FounderService implements FounderInterface

{

    public function ProcessIndividualFounders(FoundersIndDto $request, $founders)
    {
        $id_info = [
            'hkid_no' => $request->hkid_no,
            'passport_no' => $request->passport_no,
            'issuing_country' => $request->issuing_country,
            'id_type' => $request->id_type
        ];
        $individual = FounderIndividual::create([
            'company_founder_id' =>  $founders->id,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'chn_first_name' => $request->chn_first_name,
            'chn_last_name' => $request->chn_last_name,
            'dob' => $request->dob,
            'nationality' => $request->nationality,
            'id_info' => json_encode($id_info),
            'phone' => $request->phone,
            'email' => $request->email,
            'occupation' => $request->occupation,
        ]);

        $this->processResidentialAddress($request, $individual);
        return $individual;
    }
    public function SaveParentFounders($request)
    {
        $create = CompanyFounder::create($request);
        return $create;
    }

    public function processResidentialAddress($request, $individual){

            $address = $request->addresses[0];
                FounderResAddress::create([
                'founder_individual_id' => $individual->id ,
                'address' => $address['address'],
                'street_no'  => $address['street_no'],
                'city'  => $address['city'],
                'state' => $address['state'],
                'postal_code'  => $address['postal_code'],
                'country' => $address['country'],
                'is_corAddress' => $address['is_corAddress']
            ]);

            if($address['is_corAddress'] != 1){
                $address = $request->addresses[1];
                  FounderCorAddress::create([
                    'founder_individual_id' => $individual->id??null,
                    'address' => $address['address']??null,
                    'street_no'  => $address['street_no']??null,
                    'city'  => $address['city']??null,
                    'state' => $address['state']??null,
                    'postal_code'  => $address['postal_code']??null,
                    'country' => $address['country']??null
                ]);
            }
       

        return $address;
    }

    public function ProcessCorperateFounders(FounderCorDto $request, $founder)
    {

        $ss = FounderCorperate::create([
            'company_founder_id' => $founder->id,
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
        ]);

      return $ss;
    }
}
