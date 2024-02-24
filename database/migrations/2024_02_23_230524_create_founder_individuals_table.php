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
        Schema::create('founder_individuals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->unsigned();
            $table->foreignId('founder_type_id')->constrained()->unsigned();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('chn_first_name')->nullable();
            $table->string('chn_last_name')->nullable();
            $table->string('dob')->nullable();
            $table->string('nationality')->nullable();
            $table->tinyText('id_info')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('occupation')->nullable();
            $table->timestamps();

            $table->index('founder_type_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('founder_individuals');
    }
};
