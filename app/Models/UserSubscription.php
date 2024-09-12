<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSubscription extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'plan_id', 'subscription_id','expiry_date', 'contact_person', 'amount_paid', 'payment_id', 'company_id', 'default_payment_method', 'customer', 'status', 'description', 'charge_automatically','latest_invoice', 'next_billing_cycle','current_period_start', 'company_name'];
    protected $table = 'user_subscriptions';


    public function company()
    {
        return $this->belongsTo(Company::class)->with('names');
    }

    public function plans()
    {
        return $this->belongsTo(Plan::class, 'plan_id', 'id');
    }
}
