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
            $table->foreignId('company_founder_id')->constrained()->unsigned();
            $table->string('company_name')->nullable();
            $table->string('chn_company_name')->nullable();
            $table->string('date_incorporated')->nullable();
            $table->string('company_registered')->nullable();
            $table->foreignId('business_nature_id')->constrained()->unsigned();
            $table->timestamps();
            $table->index('company_founder_id');
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
