<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Corporate extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_entity_id','is_founder', 'entity_type_id', 'entity_capacity_id', 'company_name', 'business_nature_id', 'chn_company_name', 'date_incorporated', 'address', 'street_no', 'city', 'state', 'postal_code', 'country', 'created_at', 'updated_at', 'country_registered', 'registeration_no'
    ];

    public function companyentity():BelongsTo
    {
        return $this->belongsTo(CompanyEntity::class)->withDefault();
    }

    public function authorizedPersons():HasOne
    {
        return $this->hasOne(CorporateAuthPersons::class)->withDefault();
    }

    
}
