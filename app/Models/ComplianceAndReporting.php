<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ComplianceAndReporting extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id', 'auditor_name', 'accounting_reference_date', 'business_registration_renewal_date', 'annual_return_date'
    ];

    protected $cast = [
        'accounting_reference_date' => 'string',
        'business_registration_renewal_date' => 'string'
    ];

}
