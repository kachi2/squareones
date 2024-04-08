<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Individual extends Model
{
    use HasFactory;

    use HasFactory;

    protected $fillable = ['company_entity_id','is_founder', 'entity_type_id', 'entity_capacity_id', 'first_name', 'last_name', 'chn_first_name', 'chn_last_name', 'dob', 'nationality', 'id_info', 'phone', 'email', 'occupation'];

    public function companyFounder():BelongsTo
    {
        return $this->belongsTo(CompanyEntity::class);
    }

    public function corAddress(): HasOne{
        return $this->hasOne(IndividualCorAddress::class);
    }

    public function resAddress():HasOne
    {
        return $this->hasOne(IndividualResAddress::class);
    }

    public function getIdentity(){
        return $this->hasOne(IdentityInfo::class);
    }



}
