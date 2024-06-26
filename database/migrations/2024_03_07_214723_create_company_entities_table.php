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
        Schema::create('company_entities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained();
            $table->string('entity_type_id')->nullable();
            $table->string('entity_capacity_id')->nullable();
            $table->integer('is_founder')->default(0);
            $table->longText('signature')->nullable();
            $table->string('date_signed')->nullable();
            $table->string('client_id')->nullable();
            $table->string('kyc_status')->nullable();
            $table->longText('user_token')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_entities');
    }
};
