<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSubscription extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'plan_id', 'expiry_date', 'contact_person', 'amount_paid', 'payment_id', 'company_id'];
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
