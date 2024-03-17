<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'business_nature_id', 'description', 'website', 'address', 'street_no', 'city', 'state', 'postal_code', 'country', 'is_complete'];


    public function names(){
        return $this->hasMany(CompanyName::class);
    }

    public function activity(){
        return $this->hasOne(CompanyActivity::class);
    }


    public function CompanyEntity(){
        return $this->hasOne(CompanyEntity::class);
    }

    public function Secretary(){
        return $this->hasMany(CompanySecretary::class);
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


    public function founders($company_id){

        $company =CompanyEntity::where('company_id', $company_id)->with(['Individual', 'Corporate']);
     $test =   filter($company, 'Individual', "0", 'is_founder');
   
     return $test;

        $company->with(['Individual' => function ($query) {
            $query->where('is_founder', 1);
        }])->get();    

        $company->with(['Corporate' => function($query){
            $query->where('is_founder', 1);
        }])->get();
        return $company;

    }
}
