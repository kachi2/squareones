<?php

namespace App\Services;

use App\Interfaces\SecretaryInterface;
use App\Models\CompanySecretary;

class SecretaryService implements SecretaryInterface

{

    public function SaveFromData($request)
    {

        $record = CompanySecretary::updateOrCreate([
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
            'street' => '194-204 Johnston Road',
            'city' => 'Wanchai',
            'state' => 'Wanchai',
             'postal_code' => '',
            'country' => 'Hong Kong'

        ]);
        return $record;

    }
}
