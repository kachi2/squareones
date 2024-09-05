<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserBillingInfo extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'card_name', 'card_no', 'billing_info', 'payment_id', 'email', 'name', 'expiry', 'country', 'is_default'];
    protected $table = 'user_billing_infos';
}

