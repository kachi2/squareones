<?php

namespace Database\Seeders;

use App\Models\AdminBilling;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminBillingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AdminBilling::create([
            'total_invoices' => 0,
            'total_invoice_amount'=> 0,
            'unpaid_invoice'=> 0,
            'unpaid_invoice_amount'=> 0,
            'paid_invoice'=> 0,
            'paid_invoice_amount'=> 0,
            'overdue_invoices'=> 0,
            'overdue_invoices_amount'=> 0,
            'active_subscriptions'=> 0,
            'cancelled_subscriptions'=> 0,
        ]);
    }
}
