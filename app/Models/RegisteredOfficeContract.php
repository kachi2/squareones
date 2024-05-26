<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisteredOfficeContract extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id', 'directors', 'shareholders', 'company_secretary', 'registered_office', 'business_address', 'scr_designated_representative'
    ];

}
