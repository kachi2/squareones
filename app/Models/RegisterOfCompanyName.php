<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterOfCompanyName extends Model
{ 
    use HasFactory;

    protected $fillable = ['company_id', 'date_of_name_changed', 'previous_company_name', 'new_company_name', 'remarks'];
}
