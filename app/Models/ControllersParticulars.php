<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ControllersParticulars extends Model
{
    use HasFactory;

    protected $fillable = [
      'significant_controller_id', 'corresponding_address', 'resdential_address','identiy_info','place_of_registration','nature_of_control_over_the_company'
    ];
}
