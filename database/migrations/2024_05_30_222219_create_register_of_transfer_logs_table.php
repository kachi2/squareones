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
        Schema::create('register_of_transfer_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('transfer_id');
            $table->string('registration_date')->nullable();
            $table->string('transferee')->nullable();
            $table->string('no_of_shares_transfered')->nullable();
            $table->string('total_consideration')->nullable();
            $table->string('transfer_method')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('register_of_transfer_logs');
    }
};
