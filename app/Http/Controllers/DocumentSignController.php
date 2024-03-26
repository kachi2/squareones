<?php

namespace App\Http\Controllers;

use App\Interfaces\DocumentInterface;
use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\Individual;
use App\Models\CompanyEntity;
use App\Events\GeneratePDF;
use App\Models\Corporate;
use App\Models\SignDocument;
use App\Services\BaseClient;

class DocumentSignController extends Controller
{
    //

    public function __construct(
        // public readonly DocumentInterface $documentInterface
    )
    {
        
    }

    public function BuildPDF($company_id){
//when a user clicks on submit documents// this generates PDF and stores on the database and displays to the user
//the user then clicks on sign document
//the user redirecte to docsign api to sign documents, after siging, the user redirected back to the page
//and proceed to make payment 
//once the payment is completed, the user is redirected to the dashboard

    $company = Company::whereId($company_id)->first()
    ->Load([
        'names' ,'secretary','shares','fundSource','ownerShare'
    ]);
   $data['individual'] =  $company->CompanyEntity->load('Individual');
   $data['corporate'] =  $company->CompanyEntity->load('Corporate');
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
        $shareholder[] = CompanyEntity::where('id', $shareho)->first()->load('Individual', 'Corporate');
    };
    foreach($directors as $direc){
        $director[] = CompanyEntity::where('id', $direc)->first()->load('Individual', 'Corporate');
    };
}
    // $company->shares = $shareholder;
    $company->directos = $director;
    // return $data['company'];
    return view('pdf/pdf', [
        'company' => $company,
    ]);
        // event(new GeneratePDF(''));
}

    public function GetPDFDoc(){
      $pdf = SignDocument::where('user_id', auth_user())->first();
      if($pdf){
      return response()->json([
        'data' => $pdf
      ]);
    }else{
        return response()->json([
            'error' => []
        ]);
    }
    }

    public function ProcessSignature(Request $req){
        dd($req->all());

    }



}
