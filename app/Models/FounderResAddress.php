<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FounderResAddress extends Model
{
    use HasFactory;

    protected $fillable = ['founder_individual_id', 'address', 'street_no', 'city', 'state', 'postal_code', 'country', 'is_corAddress'];

    public function FounderCorperate():BelongsTo
    {
        return $this->belongsTo(FounderCorperate::class);
    }
}
