<?php

namespace App\Http\Controllers\Manage;

use App\Models\CompanyService;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\RegisteredCompany;

class CompanyServiceController extends Controller
{

    public function getServices() 
    {
        try{
        $service = CompanyService::get();
        return response()->json(['data' => $service], 200);
        }catch(\Exception $e)
        {
        return response()->json(['error' => $e->getMessage()], 203);
        }
    }

    public function StoreService($company_id, Request $req)
    {
        try{
            $items = json_decode($req->service);
            $services = CompanyService::get();
            foreach($items as $servi){
            $check = $services->where('name', 'LIKE', $servi)->first();
            if(!$check)CompanyService::create(['name' => $servi]);    
            } 
        
        $company = Company::where('id', $company_id)->first();
         $regsCo = RegisteredCompany::where('company_id', $company_id)->first();
        if($company->exists())
        {
            $company->update(['services' => json_encode($req->service)]);
            // $regsCo->update(['services' => json_encode($req->service)]);
        }
        return response()->json(['data' => $company->load('mainContact')], 200);
        }catch(\Exception $e)
        {
        return response()->json(['error' => $e->getMessage()], 203);
        }
    }


    
}
