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
        Schema::create('registered_companies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->nullable();
            $table->string('company_registered_name')->nullable();
            $table->string('business_registered_number')->nullable();
            $table->dateTime('incorporated_date')->nullable();
            $table->string('company_structure')->nullable();
            $table->string('company_registered')->nullable();
            $table->string('business_classification')->nullable();
            $table->string('tax_id')->nullable();
            $table->string('registration_progress_id')->nullable();
            $table->string('registered_office')->nullable();
            $table->tinyText('business_address')->nullable();
            $table->tinyText('directors')->nullable();
            $table->tinyText('registered_office')->nullable();
            $table->tinyText('shareholders')->nullable();
            $table->tinyText('company_secretary')->nullable();
            $table->tinyText('scr_designated_representative')->nullable();
            $table->string('auditor_name')->nullable();
            $table->string('accounting_reference_date')->comment('dateTime')->nullable();
            $table->dateTime('business_registration_renewal_date')->nullable();
            $table->dateTime('annual_return_date')->comment('DD/MM - Annual date of incorporate date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registered_companies');
    }
};
