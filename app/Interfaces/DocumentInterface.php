<?php 

namespace App\Interfaces;

use Illuminate\Http\UploadedFile;
use Illuminate\Http\Request;

interface DocumentInterface

{

    public function upload($request);
    public function uploadDoc($request);
    public function DocumentToPDF(Request $request);
    public function RenderPagePDF($request);
    public function uploadUserDocument($request);

}