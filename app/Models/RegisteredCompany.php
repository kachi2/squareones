<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisteredCompany extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'user_id', 
    'company_registered_name', 'business_registered_number', 
    'incorporated_date', 'company_structure', 'company_registered', 
    'business_classification', 'tax_id', 'registration_progress_id', 
    'registered_office', 'business_address', 'directors', 
    'shareholders', 'company_secretary', 'scr_designated_representative',
     'auditor_name', 'accounting_reference_date',
      'business_registration_renewal_date', 
      'annual_return_date'];
}
