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
        Schema::create('founder_corperates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->unsigned()->index();
            $table->string('capacity')->nullable();
            $table->string('company_name')->nullable();
            $table->string('chn_company_name')->nullable();
            $table->string('date_incorporated')->nullable();
            $table->string('company_registered')->nullable();
            $table->foreignId('business_nature_id')->references('id')->on('business_nature')->unsigned()->index();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('address')->nullable();
            $table->string('street_no')->nullable();
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
        Schema::dropIfExists('founder_corperates');
    }
};
