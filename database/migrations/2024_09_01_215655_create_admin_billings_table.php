<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('admin_billings', function (Blueprint $table) {
            $table->id();
            $table->double('total_invoices')->nullable();
            $table->double('total_invoice_amount')->nullable();
            $table->double('unpaid_invoice')->nullable();
            $table->double('unpaid_invoice_amount')->nullable();
            $table->double('paid_invoice')->nullable();
            $table->double('paid_invoice_amount')->nullable();
            $table->double('overdue_invoices')->nullable();
            $table->double('overdue_invoices_amount')->nullable();
            $table->integer('active_subscriptions')->nullable();
            $table->integer('cancelled_subscriptions')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admin_billings');
    }
};
