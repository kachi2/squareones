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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unsigned();
            $table->foreignId('company_id')->unsigned();
            $table->string('customer')->nullable();
            $table->string('customer_email')->nullable();
            $table->string('invoice_id')->nullable();
            $table->string('amount_due')->nullable();
            $table->string('amount_paid')->nullable();
            $table->string('amount_remaining')->nullable();
            $table->string('currency')->nullable();
            $table->string('customer_name')->nullable();
            $table->string('hosted_invoice_url')->nullable();
            $table->string('invoice_pdf')->nullable();
            $table->string('description')->nullable();
            $table->string('invoice_date')->nullable();
            $table->string('due_date')->nullable();
            $table->string('total')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
