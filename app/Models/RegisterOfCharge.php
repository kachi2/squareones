<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterOfCharge extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'charge_creation_date', 'account_secured_by_charge', 'type_of_charge', 'charge_description', 'names_of_charge', 'terms_of_charge', 'registration_details'];
}
