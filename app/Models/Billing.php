<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Billing extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'company_id', 'payment_ref', 'status', 'amount', 'payment_intent', 'due_date', 'date_paid'];

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class)->with('names');
    }

}
