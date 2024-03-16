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
            'company' => $company->load([
            'names' ,
            'secretary',
            'shares',
            'documents',
            'fundSource',
            'ownerShare',
            'CompanyEntity' 
            ])
    ];

    $options = PDF::getDomPDF()->getOptions();
     $options->set('isFontSubsettingEnabled', true);
     $pdf = PDF::setPaper('a4', 'portraite');
     $pdf->getDomPDF()->setOptions($options);
      $pdf->loadView('pdf/pdf', ['companyDetails' =>  $company])
        ->save('documents/test.pdf');
    
        
        
    }
}
