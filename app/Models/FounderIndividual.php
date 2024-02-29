<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class FounderIndividual extends Model
{
    use HasFactory;

    protected $fillable = ['company_founder_id', 'first_name', 'last_name', 'chn_first_name', 'chn_last_name', 'dob', 'nationality', 'id_info', 'phone', 'email', 'occupation'];

    public function companyFounder():BelongsTo
    {
        return $this->belongsTo(CompanyFounder::class);
    }

    public function CorAddress(): HasOne{
        return $this->hasOne(FounderCorAddress::class);
    }

    public function ResAddress():HasOne
    {
        return $this->hasOne(FounderResAddress::class);
    }
}
