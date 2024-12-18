<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoices extends Model
{
    use HasFactory;

    protected $fillable = [
            'user_id', 'customer', 'customer_email', 'invoice_id', 'amount_due', 'amount_paid', 'amount_remaining', 'currency', 'customer_name', 'hosted_invoice_url', 'invoice_pdf', 'description', 'invoice_date', 'due_date', 'total', 'status', 'company_id'
    ];

    public function subscription()
    {
        return $this->belongsTo(UserSubscription::class, 'customer', 'customer');
    }

    public function company() 
    {
        return $this->belongsTo(Company::class, 'company_id', 'id')->with('names');
    }
}
