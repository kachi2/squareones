<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Dtos\FileUploadDto;
use App\Http\Requests\DocumentRequest;
use App\Interfaces\DocumentInterface;
use App\Models\Document;
use Illuminate\Http\Request;
use Cloudinary\Api\HttpStatusCode;

class DocumentController extends Controller
{
    //
    public function __construct(
        public readonly DocumentInterface $fileUpload
    )
    {
        
    }

    public function ProcessDocuments( Request $request){
        try{
       
            $data = FileUploadDto::fromRequest($request->all());
               $processDoc = $this->fileUpload->upload($data);
            return response()->json(['data' => $processDoc], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
           }
    }

    public function Getdocuments($company_id){
        try{
            $documents = Document::where('company_id', $company_id)->paginate(20);
            return response()->json(['data' => $documents], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
        }
    }

    public function deleteDocument($document_id){
        try{
            $document = Document::where('id', $document_id)->first();
            if($document){
                $document->delete();
                return response()->json(['data' => 'Item Deleted'], HttpStatusCode::OK);
            }
            return response()->json(['data' => 'No document found'], HttpStatusCode::OK);
        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
        }
    }
    
    
}
