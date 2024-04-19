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
        ],[
        'company_id' => $request->company_id,
        'name' => 'Square One Limited',
        'chn_name' => '',
        'company_reg_no' => '68891673',
        'country_registered' => 'Hong Kong',
        'licence_no' => 'TC000012',
        'email' => '',
        'flat' => 'Rooms 502-503, 5th Floor',
        'building' => 'Wanchai Commercial Centre',
        'city' => '194-204 Johnston Road',
        'state' => 'Wanchai',
        // 'postal_code' => $request->postal_code,
        'country' => 'Hong Kong'

            // 'company_id' => $request->company_id,
            // 'name' => $request->name,
            // 'chn_name' => $request->chn_name,
            // 'company_reg_no' => $request->company_reg_no,
            // 'country_registered' => $request->country_registered,
            // 'licence_no' => $request->licence_no,
            // 'email' => $request->email,
            // 'address' => $request->address,
            // 'city' => $request->city,
            // 'state' => $request->state,
            // // 'postal_code' => $request->postal_code,
            // 'country' => $request->country
        ]);
        return $record;

    }
}
