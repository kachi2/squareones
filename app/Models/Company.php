<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'business_nature_id', 'description', 'website', 'address', 'street_no', 'city', 'state', 'postal_code', 'country', 'is_complete'];


    public function names(){
        return $this->hasMany(CompanyName::class)->withDefault();
    }

    public function activity(){
        return $this->hasOne(CompanyActivity::class)->withDefault();
    }


    public function CompanyEntity(){
        return $this->hasMany(CompanyEntity::class)->withDefault();
    }

    public function Secretary(){
        return $this->hasOne(CompanySecretary::class)->withDefault();
    }

    public function Shares(){
        return $this->hasMany(CompanyShare::class)->withDefault();
    }

    public function documents(){
        return $this->hasMany(Document::class)->withDefault();
    }

    public function fundSource(){
        return $this->hasMany(FundSource::class)->withDefault();
    }

    public function ownerShare(){
        return $this->hasMany(OwnershipShare::class)->withDefault();
    }

    public function businessNature(){
        return $this->belongsTo(BusinessNature::class)->withDefault();
    }
}
