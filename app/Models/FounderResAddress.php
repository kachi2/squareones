<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FounderResAddress extends Model
{
    use HasFactory;

    protected $fillable = ['founder_type_id', 'address', 'street_no', 'city', 'state', 'postal_code', 'country', 'is_corAddress'];
}
