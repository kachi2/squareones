<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterOfCompanyNameLog extends Model
{
    use HasFactory;
    protected $fillable = ['company_name_id', 'date_of_name_changed', 'previous_company_name', 'new_company_name', 'remarks'];
}
