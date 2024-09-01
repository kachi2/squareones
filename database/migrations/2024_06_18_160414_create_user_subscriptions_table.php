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
        Schema::create('user_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unsigned();
            $table->foreignId('company_id')->unsigned();
            $table->integer('plan_id')->nullable();
            $table->dateTime('expiry_date')->nullable();
            $table->string('contact_person')->nullable();
            $table->double('amount_paid')->nullable();
            $table->string('payment_id')->nullable();
            $table->string('customer')->nullable();
            $table->string('default_payment_method')->nullable();
            $table->string('description')->nullable();
            $table->string('charge_automatically')->nullable();
            $table->string('latest_invoice')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_subscriptions');
    }
};
