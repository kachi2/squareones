<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterOfCompanyNameLog extends Model
{
    use HasFactory;
    protected $fillable = ['company_name_id', 'allotment_date', 'name', 'address', 'class_of_shares', 'no_of_shares_allocated'];
}
