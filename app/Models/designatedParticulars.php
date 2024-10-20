<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignatedParticulars extends Model
{
    use HasFactory;

    protected $fillable = [
        'designated_representative_id','identity_info','place_of_registration','nature_of_control_over_the_company', 'corresponding_address'
    ];
}
