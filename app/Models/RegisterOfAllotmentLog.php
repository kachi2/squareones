<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterOfAllotmentLog extends Model
{
    use HasFactory;
    protected $fillable = ['allotment_id', 'allotment_date', 'name', 'address', 'class_of_shares', 'no_of_shares_allocated', 'denomination', 'total_consideration', 'remarks'];
}
