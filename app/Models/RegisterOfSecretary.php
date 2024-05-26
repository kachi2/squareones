<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterOfSecretary extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'appointment_date', 'name', 'identity_info', 'address', 'cease_to_act', 'remarks'];
}

