<?php

namespace App\Traits;

use Illuminate\Support\Facades\Validator;

trait FoundersData
{

    public function IndividualFoundersData($request)
    { 
        $valid = Validator::make($request->all(), [
            'company_id' => 'nullable',
            'founder_type_id' => 'nullable',
            'capacity' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
            'chn_first_name' => 'required',
            'chn_last_name' => 'required',
            'dob' => 'required',
            'nationality' => 'required',
            'hkid_no' => 'required',
            'passport_no' => 'required',
            'issuing_country' => 'required',
            'nationality' => 'required',
            'id_type' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'occupation' => 'required',
            'addresses' => 'required',
            'is_corAddress' => 'required'
        ]);
        return $valid;
    }


    public function CorporateFoundersData($request)
    {
        $valid = Validator::make($request->all(), [
            'company_id' => 'nullable',
            'founder_type_id' => 'nullable',
            'capacity' => 'required',
            'company_name' => 'required',
            'chn_company_name' => 'required',
            'date_incorporated' => 'required',
            'country_registered' => 'required',
            'address' => 'required',
            'street_no' => 'required',
            'city' => 'required',
            'state' => 'required',
            'postal_code' => 'required',
            'country' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
            'phone' => 'required',
            'email' => 'required|email',
            'country_registered' => 'required',
            'registeration_no' => 'required',
            'business_nature_id' => 'required'
        ]);
        return $valid;
    }

    public function BasefounderRequest($request){
        return [
            'company_id' => $request->company_id,
            'founder_type_id' => $request->founder_type_id,
            'capacity' => $request->capacity
        ];

    }
}
