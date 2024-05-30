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
        Schema::create('register_of_secretary_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('register_of_secretary_id')->constrained()->cascadeOnDelete();
            $table->string('appointment_date')->nullable();
            $table->string('name')->nullable();
            $table->string('identity_info')->nullable();
            $table->string('address')->nullable();
            $table->string('cease_to_act')->nullable();
            $table->text('remarks')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('register_of_secretary_logs');
    }
};
