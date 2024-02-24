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
        Schema::create('company_founders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('founder_type_id')->constrained()->unsigned();
            $table->string('capacity')->nullable();
            $table->timestamps();

            $table->index('founder_type_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_founders');
    }
};
