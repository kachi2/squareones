<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyFounder extends Model
{
    use HasFactory;

    protected $fillable = ['founder_type_id', 'capacity'];
}
