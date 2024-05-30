<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterOfSecretaryLog extends Model
{
    use HasFactory;

    protected $fillable = ['register_of_secretary_id', 'appointment_date', 'name', 'identity_info', 'address', 'cease_to_act', 'remarks'];

}
