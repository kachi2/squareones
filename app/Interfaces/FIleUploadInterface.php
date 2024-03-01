<?php 

namespace App\Interfaces;

use Illuminate\Http\UploadedFile;

interface FileUploadInterface 

{

    public function upload($request);

}