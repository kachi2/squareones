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
        Schema::create('register_of_company_name_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_name_id');
            $table->string('date_of_name_changed')->nullable();
            $table->string('previous_company_name')->nullable();
            $table->tinyText('new_company_name')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('register_of_company_name_logs');
    }
};
