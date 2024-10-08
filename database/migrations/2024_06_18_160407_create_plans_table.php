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
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->string('plan')->nullable();
            $table->string('amount')->nullable();
            $table->string('duration')->nullable();
            $table->string('currency')->nullable();
            $table->string('stripe_product_id')->nullable();
            $table->string('default_price_id')->nullable();
            $table->string('recurring')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plans');
    }
};
