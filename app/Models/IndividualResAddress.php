<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class IndividualResAddress extends Model
{
    use HasFactory;

    protected $fillable = ['individual_id', 'address', 'street_no', 'city', 'state', 'postal_code', 'country', 'is_corAddress'];

    public function corporate():BelongsTo
    {
        return $this->belongsTo(Corporate::class);
    }
}
