<?php

namespace App\Traits;

use Illuminate\Support\Facades\Validator;

trait CompanyEntityData
{

    public function IndividualEntityData($request)
    { 
        $valid = Validator::make($request->all(), [
            'company_id' => 'required',
            'entity_type_id' => 'required',
            'entity_capacity_id' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
            'chn_first_name' => 'nullable',
            'chn_last_name' => 'nullable',
            'dob' => 'required',
            'nationality' => 'required',
            'identity_no' => 'nullable',
            'passport_no' => 'nullable',
            'issuing_country' => 'nullable',
            'identity_type_id' => 'required',
            'phone' => 'required',
            'email' => 'required', 
            'occupation' => 'required',
            'addresses' => 'required',
            'is_corAddress' => 'nullable',
            'card_name' => 'nullable',
            'is_founder' => 'nullable'
        ]);
        return $valid;
    }


    public function CorporateEntitysData($request)
    {
        $valid = Validator::make($request->all(), [
            'company_id' => 'required',
            'entity_type_id' => 'required',
            'entity_capacity_id' => 'required',
            'company_name' => 'required',
            'chn_company_name' => 'required',
            'date_incorporated' => 'required',
            'country_registered' => 'required',
            'flat' => 'required',
            'street' => 'required',
            'city' => 'nullable',
            'building' => 'nullable',
            'state' => 'required',
            'postal_code' => 'nullable',
            'country' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
            'phone' => 'required',
            'email' => 'required|email',
            'country_registered' => 'required',
            'registeration_no' => 'required',
            'business_nature_id' => 'required',
            'is_founder' => 'nullable' 
        ]);
        return $valid;
    }

  
}
