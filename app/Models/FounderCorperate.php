<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class FounderCorperate extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'founder_type_id', 'capacity', 'company_name', 'chn_company_name', 'date_incorporated', 'company_registered', 'business_nature_id'];

    public function CompanyFounder():BelongsTo
    {
        return $this->belongsTo(CompanyFounder::class);
    }

    public function AuthorizedPersons():HasOne
    {
        return $this->hasOne(FounderAuthPerson::class);
    }


}
