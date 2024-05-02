<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\IndividualResAddress;

class CompanyEntity extends Model
{
    use HasFactory;

    CONST SHAREHOLDER = 1;
    CONST DIRECTOR = 2;


    protected $fillable = [ 'company_id', 'entity_type_id', 'entity_capacity_id'];

    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function entityType(){
        return $this->belongsTo(EntityType::class);
    }

    public function Individual(){
        return $this->hasOne(Individual::class, 'company_entity_id', 'id')->with('resAddress', 'corAddress', 'getIdentity','ownerShares');
    }

    public function Corporate(){
        return $this->hasOne(Corporate::class, 'company_entity_id', 'id')->with('AuthorizedPersons', 'ownerShares');
    }

    public function share(){
        return $this->hasOne(OwnershipShare::class, 'company_entity_id', 'id');
    }

    // public function resAddress(){
    //     return $this->hasOneThrough(IndividualResAddress::class, Individual::class, 'company_entity_id', 'individual_id', 'id', 'id'); 
    // }

    // public function corAddress(){
    //     return $this->hasOneThrough(IndividualCorAddress::class, Individual::class, 'company_entity_id', 'individual_id', 'id', 'id'); 
    // }
    // public function getIdentity(){
    //     return $this->hasOneThrough(IdentityInfo::class, Individual::class, 'company_entity_id', 'individual_id', 'id', 'id'); 
    // }

    // public function AuthorizedPersons(){
    //     return $this->hasOneThrough(CorporateAuthPersons::class, Corporate::class, 'company_entity_id', 'corporate_id', 'id', 'id'); 
    // }

    // public function individualFounder(){
    //     return $this->hasMany(Individual::class, 'company_entity_id', 'id');
    // }
}
