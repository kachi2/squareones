<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FounderIndividual extends Model
{
    use HasFactory;

    protected $fillable = ['founder_type_id', 'first_name', 'last_name', 'chn_first_name', 'chn_last_name', 'dob', 'nationality', 'id_info', 'phone', 'email', 'occupation'];
}
