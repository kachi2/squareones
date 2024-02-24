<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyRegAddress extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'address', 'street_no', 'city', 'state', 'postal_code', 'country'];
}
