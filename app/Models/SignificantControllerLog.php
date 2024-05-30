<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SignificantControllerLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'significant_controller_id','entry_date','date_becoming_rep_person','date_ceased_to_be_rep_person'
    ];

}
