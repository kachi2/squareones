<?php

namespace App\Http\Controllers;

use App\Dtos\FileUploadDto;
use App\Interfaces\FileUploadInterface;
use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    //

    public function __construct(
        public readonly FileUploadInterface $fileUpload
    )
    {
        
    }

    public function ProcessDocuments( Request $request){

            $data = FileUploadDto::fromRequest($request->all());
            if($data){
               $processDoc = $this->fileUpload->upload($request);
               dd($processDoc);
            }
    }
}
