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

}
