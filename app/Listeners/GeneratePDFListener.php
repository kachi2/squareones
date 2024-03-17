<?php

namespace App\Listeners;

use App\Events\GeneratePDF;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Barryvdh\DomPDF\Facade\Pdf;

use App\Models\{Company, CompanyActivity, CompanyEntity, CompanySecretary, CompanyName, CompanyAddress, CompanyShare, CorporateAuthPersons, Corporate, 
    EntityCapacity, EntityType, EntityTypeCapacity, FundSource, Individual, IndividualCorAddress, IdentityInfo, IdentityType, NamePrefix, User, Document, DocumentType, BusinessNature};

class GeneratePDFListener
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
       
        $company = Company::whereId($events->company_id)->first();

        $companyDetails =  [
            'company' => $company->Load([
            'names' ,'secretary','shares','documents','fundSource','ownerShare','CompanyEntity' 
            ])
    ];

    //  PDF::loadView('pdf/pdf', ['company' =>  $companyDetails])
    //     ->save('documents/test.pdf');
        
    }


    public function founders($company_id){
        $company =CompanyEntity::where('company_id', $company_id)->first()
        ->with(['Individual' => function ($query) {
            // Add condition to fetch specific children
            $query->where('is_founder', 1);
        }])->get();    

        return $company;
        // $query = CompanyEntity::where('company_id', $company_id)->first();
        // $query->individual = Individual::where(['company_entity_id' => $query->id, 'is_founder' => 0])->get();
        // $query->corporate = Corporate::where(['company_entity_id' => $query->id, 'is_founder' => 0])->get();
        // return $query;
    }

}
