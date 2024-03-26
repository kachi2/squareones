<?php 
namespace App\Services;

use App\Interfaces\DocumentInterface;
use App\Models\Document;
use App\Models\CompanyEntity;
use App\Models\Company;
use Illuminate\Http\UploadedFile;
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
                'document_type_id' => $files['document_type_id']
            ]);
            $docs[] =  $documents;
        }
        return  $docs;
    }


    public function DocumentToPDF($company_id){

        $company = Company::whereId($company_id)->first()
        ->Load([
            'names' ,'secretary','shares','fundSource','ownerShare'
        ]);
    //    $data['individual'] =  $company->CompanyEntity->load('Individual');
    //    $data['corporate'] =  $company->CompanyEntity->load('Corporate');
    //    $company->founders = $data;
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
            $shareholder[] = CompanyEntity::where('id', $shareho)->first()->load('Individual', 'Corporate');
        };
        foreach($directors as $direc){
            $director[] = CompanyEntity::where('id', $direc)->first()->load('Individual', 'Corporate');
        };
    }
        // $company->shares = $shareholder;
        $company->directos = $director;
        $company->shareholder = $shareholder;
        $company->founders = $company->CompanyEntity->where('is_founder', 1)->load('Individual', 'Corporate');
        // return $data['company'];
       return [
        'data' => $company
       ];

    }
    public function SignDocument($request){

    }


}