<?php

namespace App\Http\Controllers;

use App\Models\CompanyService;
use Illuminate\Http\Request;

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
