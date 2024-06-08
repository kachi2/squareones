<?php

namespace App\Http\Controllers;

use App\Dtos\FileUploadDto;
use App\Interfaces\DocumentInterface;
use Illuminate\Http\Request;
use Cloudinary\Api\HttpStatusCode;

class FileUploadController extends Controller
{
    public function __construct(
        public readonly DocumentInterface $fileUpload
    )
    {
        
    }

    public function ProcessDocuments( Request $request){

        try{
            $data = FileUploadDto::fromRequest($request->all());
            if($data){
               $processDoc = $this->fileUpload->upload($request);
            return response()->json(['data' => $processDoc], HttpStatusCode::OK);
            }
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           } 
        }

}
