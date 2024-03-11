<?php

namespace App\Traits;

use Illuminate\Support\Facades\Validator;

trait CompanyEntityData
{

    public function IndividualEntityData($request)
    { 
        $valid = Validator::make($request->all(), [
            'company_id' => 'nullable',
            'entity_type_id' => 'nullable',
            'entity_capacity_id' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
            'chn_first_name' => 'required',
            'chn_last_name' => 'required',
            'dob' => 'required',
            'nationality' => 'required',
            'identity_no' => 'nullable',
            'passport_no' => 'nullable',
            'issuing_country' => 'nullable',
            'nationality' => 'required',
            'identity_type_id' => 'required',
            'phone' => 'required',
            'email' => 'required', 
            'occupation' => 'required',
            'addresses' => 'required',
            'is_corAddress' => 'required',
            'card_name' => 'nullable',
        ]);
        return $valid;
    }


    public function CorporateEntitysData($request)
    {
        $valid = Validator::make($request->all(), [
            'company_id' => 'nullable',
            'entity_type_id' => 'nullable',
            'entity_capacity_id' => 'required',
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

  
}
