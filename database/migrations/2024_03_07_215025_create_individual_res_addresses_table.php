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
        Schema::create('individual_res_addresses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('individual_id')->constrained()->unsigned();
            $table->string('address')->nullable();
            $table->string('street_no')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('country')->nullable();
            $table->integer('is_corAddress')->nullable();
            $table->timestamps();
            $table->index('individual_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('individual_res_addresses');
    }
};
