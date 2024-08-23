<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterOfDirectorLog extends Model
{

    use HasFactory;

    protected $fillable = ['director_id',  'company_entity_id','date_of_appointment', 'name', 'reg_no', 'registered_office', 'ceasing_of_act', 'remarks'];
}
