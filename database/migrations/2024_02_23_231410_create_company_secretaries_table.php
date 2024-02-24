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
        Schema::create('company_secretaries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->unsigned()->index();
            $table->foreignId('business_nature_id')->unsigned()->index();
            $table->string('name')->nullable();
            $table->string('chn_name')->nullable();
            $table->string('company_reg_no')->nullable();
            $table->string('country_registered')->nullable();
            $table->string('licence_no')->nullable();
            $table->string('email')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('country')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_secretaries');
    }
};
