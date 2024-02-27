<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use  Inertia\Inertia;
class HomeController extends Controller
{
    //

    public function getForm(){
      return  Inertia::render('Test/form');
    }

    public function getFormSubmit(Request $req){

        $res = [
            'email' => $req->email,
            'password' => $req->pass
        ];
     
        return redirect()->back()->withViewData($res);

    }
}
