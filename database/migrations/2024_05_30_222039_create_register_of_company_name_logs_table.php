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
            $table->string('allotment_date')->nullable();
            $table->string('name')->nullable();
            $table->tinyText('address')->nullable();
            $table->string('class_of_shares')->nullable();
            $table->string('no_of_shares_allocated')->nullable();
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
