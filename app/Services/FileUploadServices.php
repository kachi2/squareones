<?php 
namespace App\Services;

use App\Interfaces\FileUploadInterface;
use App\Models\Document;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileUploadServices  implements FileUploadInterface{

    public function upload($request)
    {
        foreach($request->document as $files){
            if($files['docs'] instanceof UploadedFile){
                $base64Image = base64_encode(file_get_contents($files['docs']->getRealPath()).auth()->user()?->name);
            }
        $documents =    Document::create([
                'company_id' => $request->company_id,
                'document' => $base64Image,
                'document_type_id' => $files['document_type_id']
            ]);

            $docs[] =  $documents;
        }
        return  $docs;
    }
}