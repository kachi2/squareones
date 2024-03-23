<?php

namespace App\Http\Controllers;

use App\Events\GeneratePDF;
use Inertia\Inertia as views;
use App\Models\Company;
use App\Models\Corporate;
use App\Models\Individual;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //

    public function __invoke()
    {
        $company = Company::whereId(1)->first() 
        ->Load([
            'names' ,'secretary','shares','documents','fundSource','ownerShare','CompanyEntity' 
        ]);
        $data['individual'] = Individual::where(['company_entity_id' => $company->companyEntity->id, 'is_founder' => 0])->get();
        $data['corporate'] = Corporate::where(['company_entity_id' => $company->companyEntity->id, 'is_founder' => 0])->get();
        $company->founders =  $data;

            //  dd($company);
        // return view('pdf/articles')->with('company', $company);
        return view('pdf/pdf')->with('company', $company);
    }


    public function CompleteCompanyFormation($company_id){

        //pull up all the data available for the company ID
        //conver them to pdf and store them
        //send them back to frontend for the user to proceeed to payment

        $company = Company::whereId($company_id)->first();

   $ss =  event(new GeneratePDF($company->id));

   dd($ss);

    }
}