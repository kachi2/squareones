<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'business_nature_id', 'description', 'website', 'address','flat', 'building', 'street', 'city', 'state', 'postal_code', 'country', 'is_complete', 'pdf_doc', 'signature', 'date_signed'];


    public function names(){
        return $this->hasMany(CompanyName::class);
    }

    public function activity(){
        return $this->hasOne(CompanyActivity::class);
    }


    public function CompanyEntity(){
        return $this->hasMany(CompanyEntity::class);
    }

    public function Secretary(){
        return $this->hasOne(CompanySecretary::class, 'company_id', 'id');
    }

    public function Shares(){
        return $this->hasMany(CompanyShare::class, 'company_id', 'id');
    }

    public function documents(){
        return $this->hasMany(Document::class);
    }

    public function fundSource(){
        return $this->hasOne(FundSource::class);
    }

    public function ownerShare(){
        return $this->hasMany(OwnershipShare::class, 'company_id', 'id');
    }

    public function businessNature(){
        return $this->belongsTo(BusinessNature::class);
    }

    public function Users(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function Billing(){
        return $this->hasOne(Billing::class, 'company_id', 'id');
    }

    public function address(){
        return $this->hasOne(CompanyAddress::class, 'company_id', 'id');
    }

    public function RegisteredCompany(){
        return $this->hasMany(RegisteredCompany::class);
    }

    public function RegisterOfAllotments(){
        return $this->hasMany(RegisterOfAllotment::class);
    }

    public function RegisterOfCharge(){
        return $this->hasMany(RegisterOfCharge::class);
    }

    public function RegisterOfCompanyName(){
        return $this->hasMany(RegisterOfCompanyName::class);
    }

    public function RegisterOfDirector(){
        return $this->hasMany(RegisterOfDirector::class);
    }

    public function RegisterOfSecretary(){
        return $this->hasMany(RegisterOfSecretary::class);
    }

    public function RegisterOfShareholders(){
        return $this->hasMany(RegisterOfShareholder::class);
    }

    public function RegisterOfTransfer(){
        return $this->hasMany(RegisterOfTransfer::class);
    }

    public function SignificantController(){
        return $this->hasMany(SignificantController::class)->with('ControllersParticulars');
    }

    public function ComplianceReporting(){
        return $this->hasMany(ComplianceAndReporting::class);
    }

    public function DesignatedRepresentative(){
        return $this->hasMany(DesignatedRepresentative::class)->with('DesignatedParticulars');
    }

}
