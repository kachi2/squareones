<?php

namespace App\Listeners;

use App\Events\GeneratePDF;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Barryvdh\DomPDF\Facade\Pdf;

use App\Models\{Company, CompanyActivity, CompanyEntity, CompanySecretary, CompanyName, CompanyAddress, CompanyShare, CorporateAuthPersons, Corporate, 
    EntityCapacity, EntityType, EntityTypeCapacity, FundSource, Individual, IndividualCorAddress, IdentityInfo, IdentityType, NamePrefix, User, Document, DocumentType, BusinessNature};

class GeneratePDFListener implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(GeneratePDF  $events)
    {
       
        $company = Company::whereId($events->company_id)->first()
        ->Load([
            'names' ,'secretary','shares','fundSource','ownerShare'
        ]);
       $data['Individual'] =  $company->CompanyEntity->load('Individual');
       $data['Corporate'] =  $company->CompanyEntity->load('Corporate');
       $company->founders = $data;
       $CompanyEntity = CompanyEntity::where(['company_id' => $events->company_id])->get();
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
        $company->directors = $director;
        $company->shareholder = $shareholder;
        // $company->founders = $company->CompanyEntity->where('is_founder', 0)->load('Individual', 'Corporate');
        
        // dd($company->founders['Individual']);
        // return $data['company'];
        
        return $company;
     PDF::loadView('pdf/pdf', ['company' =>  $company])
        ->save('documents/test2.pdf');
    }


}
