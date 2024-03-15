<?php

namespace App\Http\Controllers;

use Inertia\Inertia as views;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //

    public function __invoke()
    {
        views::render('/CompanyFormation/FormationPage.vue');
    }


    public function PDF(){
        return view('pdf.pdf');
    }
}
