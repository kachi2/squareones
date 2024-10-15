<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisteredCompany extends Model
{
   use HasFactory;

   protected $fillable = [
      'company_id',
      'company_registered_name',
      'business_registered_number',
      'incorporated_date',
      'company_structure',
      'company_registered',
      'business_classification',
      'tax_id',
      'registration_progress_id',
      'renewal_date',
      'services',
      'main_contact',
      'pdf_doc',
      'is_incorporated',
      'is_published',
   ];

   public function company()
   {
      return $this->belongsTo(Company::class);
   }
}
