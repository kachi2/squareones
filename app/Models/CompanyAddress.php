<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CompanyAddress extends Model
{
    use HasFactory;
    protected $fillable = ['company_id', 'address','flat', 'building', 'street', 'city', 'state', 'postal_code', 'country',];

    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class)->withDefault();
    }
}
