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
            $table->string('company_registered_name')->nullable();
            $table->string('business_registered_number')->nullable();
            $table->string('incorporated_date')->nullable();
            $table->string('company_structure')->nullable();
            $table->string('company_registered')->nullable();
            $table->string('business_classification')->nullable();
            $table->string('tax_id')->nullable();
            $table->string('registration_progress_id')->nullable();
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
