<?php 
namespace App\Services;

use App\Interfaces\DocumentInterface;
use App\Models\Document;
use App\Models\CompanyEntity;
use App\Models\Company;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use GuzzleHttp\Client;

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
                'title' => $request->title,
                'document_type_id' => $files['document_type_id']
            ]);
            $docs[] =  $documents;
        }
        return  $docs;
    }


    public function DocumentToPDF(Request $request){

    $company = Company::whereId($request->company_id)->first();
    $fileNames = [];
    foreach($request->documents as $document){
    if($document instanceof UploadedFile){ 
        // $name = \pathinfo($document->getClientOriginalName(), PATHINFO_FILENAME);
        // $fileName = str_replace("['/', '(', ')', ' ']","", $name).'.'.'pdf';
        $fileName = $company->names[0]->eng_name?$company->names[0]->eng_name.'.pdf':$company->names[0]->chn_name.'.pdf';
        $document->move('documents', $fileName );
        $fileNames[] = $fileName;
    }
}
    if($company){
        $company->update([
            'pdf_doc' => $fileNames,
            'date_signed' => $request->date_signed
        ]);
        return $company;
    }

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



}