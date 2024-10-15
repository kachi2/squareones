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
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('business_nature_id')->nullable();
            $table->text('description')->nullable();
            $table->string('website')->nullable();
            $table->string('flat')->nullable();
            $table->string('street')->nullable();
            $table->string('building')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('country')->nullable();
            $table->integer('is_complete')->default(0);
            $table->longText('pdf_doc')->nullable();
            $table->longText('signature')->nullable();
            $table->string('date_signed')->nullable();
            $table->string('is_approved')->nullable();
            $table->string('is_incorporated')->nullable();
            $table->string('tax_id')->nullable();
            $table->string('business_reg_no')->nullable();
            $table->string('date_incorporated')->nullable();
            $table->string('country_registered')->nullable();
            $table->string('business_classification')->nullable();
            $table->integer('is_published')->default(0);
            $table->integer('is_paid')->nullable();
            $table->integer('is_kyc_completed')->nullable();
            $table->integer('services')->nullable();
            $table->integer('main_contact')->nullable();
            $table->timestamps();
            $table->index('user_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
