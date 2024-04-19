<?php 

namespace App\Interfaces;

use Illuminate\Http\UploadedFile;
use Illuminate\Http\Request;

interface DocumentInterface

{

    public function upload($request);
    public function DocumentToPDF(Request $request);
    // public function SignDocument($request);

}