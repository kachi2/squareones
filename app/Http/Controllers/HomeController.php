<?php

namespace App\Http\Controllers;

use App\Events\GeneratePDF;
use Inertia\Inertia as views;
use App\Models\Company;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //

    public function __invoke()
    {
        return view('pdf/pdf');
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
