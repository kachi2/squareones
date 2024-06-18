<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSubscription extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'plan_id', 'expiry_date', 'contact_person', 'amount_paid', 'payment_id'];
    protected $table = 'user_subscriptions';
}
