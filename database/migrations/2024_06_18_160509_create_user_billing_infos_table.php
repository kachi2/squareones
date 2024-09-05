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
        Schema::create('user_billing_infos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unsigned();
            $table->string('card_name')->nullable();
            $table->string('card_no')->nullable();
            $table->text('billing_info')->nullable();
            $table->string('payment_id')->nullable();
            $table->string('email')->nullable();
            $table->string('name')->nullable();
            $table->string('is_default')->default(0);
            $table->string('expiry')->nullable();
            $table->string('country')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_billing_infos');
    }
};
