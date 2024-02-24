<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FounderIndividual extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'founder_type_id', 'first_name', 'last_name', 'chn_first_name', 'chn_last_name', 'dob', 'nationality', 'id_info', 'phone', 'email', 'occupation'];

    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
