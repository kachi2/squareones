<?php 
namespace App\Services;

use App\Interfaces\DocumentInterface;
use App\Models\Document;
use App\Models\CompanyEntity;
use App\Models\Company;
use App\Models\UserDocument;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use GuzzleHttp\Client;

class DocumentServices  implements DocumentInterface{

  
    public function upload($request)
    {
        $docs = [];
        foreach($request->document as $files){
            // if($files instanceof UploadedFile){
             $name = \pathinfo($files->getClientOriginalName(), PATHINFO_FILENAME);
                $file =  UploadFiles($files, 'documents', $name);
                $docs[] =  $file;
            }
      
        // }
        $documents =  Document::create([
            'company_id' => $request->company_id,
            'document' => json_encode($docs),
            'title' => $request?->title,
            'year' => $request->year,
            'document_type_id' => $request->document_type_id
        ]);
        return  $documents;
    }



    public function DocumentToPDF($request){
    $company = Company::whereId($request->company_id)->first();
    $fileNames = [];
    foreach($request->documents as $document){
    if($document instanceof UploadedFile){ 
        $fileName = $company->names[0]->eng_name?$company->names[0]->eng_name:'documents';
         $file =  UploadFiles($document,'/documents', $fileName);
        $fileNames[] = $file;
    }
   }
    if($company){
          Document::create([
            'company_id' => $company->id,
            'user_id' => auth_user(),
            'document' => json_encode($fileNames),
            'title' => $request->title??$fileName,
            'year' => $request->year,
            'document_type_id' => 1
        ]);
        $company->update([
            'pdf_doc' => json_encode($fileNames),
            'date_signed' => $request->date_signed,
            'main_contact' => auth_user(),
            'services' => 'Incorporation'
        ]);
        return $fileNames;
    }
    return [];
    }

    public function RenderPagePDF($company_id){

    $company = Company::whereId($company_id)->first()
        ->Load([
            'names' ,'Secretary','shares','fundSource','ownerShare'
        ]);
       $data['Individual'] =  $company->CompanyEntity->load('Individual');
       $data['Corporate'] =  $company->CompanyEntity->load('Corporate');
       $company->founders = $data;
       $CompanyEntity = CompanyEntity::where(['company_id' => $company_id])->get();
        if($CompanyEntity){
        foreach($CompanyEntity as $com){
            $entity = json_decode($com->entity_capacity_id, true);
            if($entity != null){
            if(in_array(CompanyEntity::SHAREHOLDER, $entity)){
                $shareholders[] = $com->id;
            }
            if(in_array(CompanyEntity::DIRECTOR, $entity)){
                $directors[] = $com->id;
            }
        }
       }
        foreach($shareholders as $shareho){
            $shareholder[] = CompanyEntity::where('id', $shareho)->first()->load('Individual');
            $corporateShareHolder[] = CompanyEntity::where('id', $shareho)->first()->load('Corporate');
        };
        foreach($directors as $direc){
            $individualDirector[] = CompanyEntity::where('id', $direc)->first()->load('Individual');
            $director[] = CompanyEntity::where('id', $direc)->first()->load('Corporate');
        };
    }
        // $company->shares = $shareholder;
        $company->directors = $director;
        $company->shareholder = $shareholder;
        $company->corporateShareHolder = $corporateShareHolder;
        $company->individualDirector = $individualDirector;

        // PDF::loadView('pdf/pdf', ['company' =>  $company])
        //    ->save('documents/test2.pdf');

        return $company;
        // return view('pdf.pdf', ['company' =>$company]);
    }

    public function uploadUserDocument($request)
    {
        foreach($request->document as $files){
            if($files instanceof UploadedFile){
                $base64Image = base64_encode(file_get_contents($files->getRealPath()));
                $docs[] =  $base64Image;
            }
              $documents =  
              UserDocument::create([
                'user_id' => auth_user(),
                'document' => json_encode($docs),
                'title' => $request->title,
            ]);
            $docs[] =  $documents;
        }
        return  $docs;
    }

    public function DeleteDocument($doc_id){
        $doc = UserDocument::whereId($doc_id)->first();
        if($doc){
            $doc->delete();
            return true;
        }
        return false;
    }

    public function uploadDoc($request)
    {
        $docs = [];
        foreach($request->document as $files){
            if($files['docs'] instanceof UploadedFile){;
                $name = \pathinfo($$files['docs']->getClientOriginalName(), PATHINFO_FILENAME);
                $file =  UploadFiles($files,'/documents', $name);
                $docs[] =  $file;
               }
         }
              $documents =  Document::create([
                'company_id' => $request->company_id,
                'document' => json_encode($docs),
                'title' => $request?->title,
                'year' => $request?->year,
                'document_type_id' => $request->document_type_id
            ]);
           
    
        return  $documents;
    }

}