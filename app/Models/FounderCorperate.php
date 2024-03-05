<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class FounderCorperate extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_founder_id', 'company_name', 'chn_company_name', 'date_incorporated', 'address', 'street_no', 'city', 'state', 'postal_code', 'country', 'created_at', 'updated_at', 'country_registered', 'registeration_no'
    ];

    public function CompanyFounder():BelongsTo
    {
        return $this->belongsTo(CompanyFounder::class);
    }

    public function AuthorizedPersons():HasOne
    {
        return $this->hasOne(FounderAuthPerson::class);
    }

}
