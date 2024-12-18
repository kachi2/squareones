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
        Schema::create('company_names', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->unsigned();
            $table->string('eng_name')->nullable();
            $table->string('chn_name')->nullable();
            $table->string('eng_prefix')->nullable();
            $table->string('chn_prefix')->nullable();
            $table->integer('choice_level')->nullable()->comment('number from 1 - 5');
            $table->integer('selected_name')->nullable();
            $table->timestamps();

            $table->index('company_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_names');
    }
};
