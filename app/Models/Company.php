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
        return $this->hasMany(CompanyShare::class);
    }

    public function documents(){
        return $this->hasMany(Document::class);
    }

    public function fundSource(){
        return $this->hasMany(FundSource::class);
    }

    public function ownerShare(){
        return $this->hasMany(OwnershipShare::class);
    }

    public function businessNature(){
        return $this->belongsTo(BusinessNature::class);
    }

    public function Users(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function Billing(){
        return $this->hasOne(Billing::class, 'id');
    }

//     public function Kyc(){
//         return $this->hasOne(KYc)
//     }
}
