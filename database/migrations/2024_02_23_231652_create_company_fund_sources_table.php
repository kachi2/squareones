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
        Schema::create('company_fund_sources', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->unsigned()->index();
            $table->string('income_expected_source')->nullable();
            $table->string('origin_funds')->nullable();
            $table->string('wealth_initial_source')->nullable();
            $table->string('income_outgoing_source')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_fund_sources');
    }
};
