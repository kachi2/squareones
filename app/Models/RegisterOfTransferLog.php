<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterOfTransferLog extends Model
{
    use HasFactory;
    protected $fillable = [
        'register_of_transfer_id', 'registration_date', 'transferee', 'no_of_shares_transfered', 'total_consideration', 'transfer_method'
    ];
}
