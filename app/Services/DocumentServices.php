<?php 
namespace App\Services;

use App\Interfaces\DocumentInterface;
use App\Models\Document;
use Illuminate\Http\UploadedFile;

class DocumentServices  implements DocumentInterface{

    public function upload($request)
    {
        foreach($request->document as $files){
            if($files['docs'] instanceof UploadedFile){
                $base64Image = base64_encode(file_get_contents($files['docs']->getRealPath()));
            }
              $documents =  Document::create([
                'company_id' => $request->company_id,
                'document' => $base64Image,
                'document_type_id' => $files['document_type_id']
            ]);
            $docs[] =  $documents;
        }
        return  $docs;
    }

    public function DocumentToPDF($document){

        

    }
    public function SignDocument($request){

    }
}