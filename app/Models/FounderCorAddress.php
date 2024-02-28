<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FounderCorAddress extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'founder_type_id', 'address', 'street_no', 'city', 'state', 'postal_code', 'country'];

    public function FounderIndividual():BelongsTo
    {
        return $this->belongsTo(FounderIndividual::class);
    }
}
