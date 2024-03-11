<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class IndividualCorAddress extends Model
{
    use HasFactory;

    protected $fillable = ['individual_id', 'address', 'street_no', 'city', 'state', 'postal_code', 'country'];

    public function individual():BelongsTo
    {
        return $this->belongsTo(Individual::class);
    }
}
