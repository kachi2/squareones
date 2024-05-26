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
        Schema::create('compliance_and_reportings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->string('auditor_name')->nullable();
            $table->string('accounting_reference_date')->comment('dateTime')->nullable();
            $table->string('business_registration_renewal_date')->nullable();
            $table->string('annual_return_date')->comment('DD/MM - Annual date of incorporate date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('compliance_and_reportings');
    }
};
