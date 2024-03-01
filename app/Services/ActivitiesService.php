<?php

namespace App\Services;

use App\Interfaces\ActivitiesInterface;
use App\Models\CompanyActivity;
use App\Models\CompanyFundSource;

class ActivitiesService implements ActivitiesInterface
{

    public function SaveActivtiesRequest($request)
    {
        $store = CompanyActivity::create([
            'company_id' => $request->company_id,
            'description' => $request->description,
            'activity_level' => $request->activity_level,
            'activity_nature' => $request->activity_nature,
            'customer_location_operation' => $request->customer_location_operation,
            'country' => $request->country
        ]);
        $funds = $this->SaveFundSourceRequest($request);
        $data = [
            'CompanyFundSource' => $funds,
            'activity' => $store
        ];
        return $data;
    }

    public function SaveFundSourceRequest($request)
    {
        return CompanyFundSource::create([
            'company_id' => $request->company_id,
            'income_expected_source' => $request->income_expected_source,
            'origin_funds' => $request->origin_funds,
            'wealth_initial_source' => $request->wealth_initial_source,
            'income_outgoing_source' => $request->income_outgoing_source,
        ]);
    }
}
