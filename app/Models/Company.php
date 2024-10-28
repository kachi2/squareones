<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Company extends Model
{
    use HasFactory;

    static $team = 'App\Model\Teams';
    protected $fillable = [
        'user_id',
        'business_nature_id',
        'description',
        'website',
        'flat',
        'street',
        'building',
        'city',
        'state',
        'postal_code',
        'country',
        'is_complete',
        'pdf_doc',
        'signature', 
        'date_signed',
        'is_approved',
        'is_incorporated',
        'tax_id',
        'business_reg_no',
        'date_incorporated',
        'country_registered',
        'business_classification',
        'is_published',
        'is_paid',
        'is_kyc_completed',
        'services',
        'main_contact',
    ];


    public function names()
    {
        return $this->hasMany(CompanyName::class);
    }

    public function activity()
    {
        return $this->hasOne(CompanyActivity::class);
    }


    public function CompanyEntity()
    {
        return $this->hasMany(CompanyEntity::class);
    }

    public function Secretary()
    {
        return $this->hasOne(CompanySecretary::class, 'company_id', 'id');
    }

    public function Shares()
    {
        return $this->hasMany(CompanyShare::class, 'company_id', 'id');
    }

    public function documents()
    {
        return $this->hasMany(Document::class);
    }

    public function fundSource()
    {
        return $this->hasOne(FundSource::class);
    }

    public function ownerShare()
    {
        return $this->hasMany(OwnershipShare::class, 'company_id', 'id');
    }

    public function businessNature()
    {
        return $this->belongsTo(BusinessNature::class);
    }

    public function Users()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function Billing()
    {
        return $this->hasOne(Billing::class, 'company_id', 'id');
    }

    public function address()
    {
        return $this->hasOne(CompanyAddress::class, 'company_id', 'id');
    }

    public function RegisteredCompany()
    {
        return $this->hasOne(RegisteredCompany::class);
    }

    public function RegisterOfAllotments()
    {
        return $this->hasMany(RegisterOfAllotment::class);
    }

    public function RegisterOfCharge()
    {
        return $this->hasMany(RegisterOfCharge::class);
    }

    public function RegisterOfCompanyName()
    {
        return $this->hasMany(RegisterOfCompanyName::class);
    }

    public function RegisterOfDirector()
    {
        return $this->hasMany(RegisterOfDirector::class)
        ->orderByRaw('ceasing_of_act IS NOT NULL')
        ->orderBy('created_at', 'DESC');
    }

    public function RegisterOfSecretary()
    {
        return $this->hasMany(RegisterOfSecretary::class)
        ->orderByRaw('cease_to_act IS NOT NULL')
        ->orderBy('created_at', 'DESC');
    }

    public function RegisterOfShareholders()
    {
        return $this->hasMany(RegisterOfShareholder::class)
        ->orderByRaw('date_cease_to_be_member IS NOT NULL')
        ->orderBy('created_at', 'DESC');
    }

    public function RegisterOfTransfer()
    {
        return $this->hasMany(RegisterOfTransfer::class);
    }

    public function SignificantController()
    {
        return $this->hasMany(SignificantController::class)->with('ControllersParticulars');
    }

    public function ComplianceReporting()
    {
        return $this->hasMany(ComplianceAndReporting::class);
    }

    public function DesignatedRepresentative()
    {
        return $this->hasMany(DesignatedRepresentative::class)->with('DesignatedParticulars');
    }

    public function OfficeContract()
    {
        return $this->hasMany(RegisteredOfficeContract::class);
    }

    public function teams()
    {
        return $this->hasOne(Team::class);
    }
    public function hasTeams()
    {
        return Team::where('company_id', $this->id)->first();
    }

    public function mainContact()
    {
        return $this->belongsTo(User::class, 'main_contact', 'id');
    }

}
