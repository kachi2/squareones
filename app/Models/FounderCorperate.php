<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FounderCorperate extends Model
{
    use HasFactory;

    protected $fillable = ['founder_type_id', 'capacity', 'company_name', 'chn_company_name', 'date_incorporated', 'company_registered', 'business_nature_id'];
}
