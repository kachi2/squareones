<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CorporateAuthPersons extends Model
{
    use HasFactory;

    protected $fillable = ['corporate_id', 'first_name', 'last_name', 'phone', 'email'];

    public function corporate():BelongsTo
    {
        return $this->belongsTo(Corporate::class)->withDefault();
    }
}
