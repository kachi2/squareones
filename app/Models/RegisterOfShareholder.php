<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterOfShareholder extends Model
{
    use HasFactory;
    protected $fillable = [

        'company_id', 'name', 'address', 'class_of_shares', 'denomination', 'current_holding', 'total_consideration', 'date_entered_as_member', 'date_cease_to_be_member', 'type', 'remarks'
    ];
}
