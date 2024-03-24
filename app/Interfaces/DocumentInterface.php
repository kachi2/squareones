<?php 

namespace App\Interfaces;

use Illuminate\Http\UploadedFile;

interface DocumentInterface

{

    public function upload($request);
    public function DocumentToPDF($document);
    public function SignDocument($request);
    public function HttpClients();

}