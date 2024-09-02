<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminBilling extends Model
{
    use HasFactory;

    protected $fillable = ['total_invoices', 'total_invoice_amount', 'unpaid_invoice', 'unpaid_invoice_amount', 'paid_invoice', 'paid_invoice_amount', 'overdue_invoices', 'overdue_invoices_amount', 'active_subscriptions', 'cancelled_subscriptions'];
}
