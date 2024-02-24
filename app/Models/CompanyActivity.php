<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyActivity extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'description', 'activity_level', 'activity_nature', 'customer_location_operation', 'country_list'];
}
