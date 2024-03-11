<?php

namespace App\Services;

use App\Interfaces\SecretaryInterface;
use App\Models\CompanySecretary;

class SecretaryService implements SecretaryInterface

{

    public function SaveFromData($request)
    {
      $record =   CompanySecretary::updateOrCreate([
            'company_id' => $request->company_id,
            'name' => $request->name,
            'chn_name' => $request->chn_name,
            'company_reg_no' => $request->company_reg_no,
            'country_registered' => $request->country_registered,
            'licence_no' => $request->licence_no,
            'email' => $request->email,
            'address' => $request->address,
            'city' => $request->city,
            'state' => $request->state,
            'postal_code' => $request->postal_code,
            'country' => $request->country
        ]);
        return $record;

    }
}
