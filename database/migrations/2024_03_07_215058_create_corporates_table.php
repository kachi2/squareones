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
        Schema::create('corporates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_entity_id')->nullable();
            $table->string('company_name')->nullable();
            $table->string('chn_company_name')->nullable();
            $table->string('date_incorporated')->nullable();
            $table->string('country_registered')->nullable();
            $table->string('business_nature_id')->nullable();
            $table->string('registeration_no')->nullable();
            $table->string('flat')->nullable();
            $table->string('street')->nullable();
            $table->string('building')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('country')->nullable();
            $table->timestamps();
            $table->index('company_entity_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('corporates');
    }
};
