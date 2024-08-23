<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterOfDirector extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'date_of_appointment', 'name', 'reg_no', 'registered_office', 'ceasing_of_act', 'remarks'];
}
