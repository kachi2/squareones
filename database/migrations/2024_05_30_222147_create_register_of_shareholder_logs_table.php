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
        Schema::create('register_of_shareholder_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('register_of_shareholder_id')->constrained()->cascadeOnDelete();
            $table->string('name')->nullable();
            $table->tinyText('address')->nullable();
            $table->tinyText('class_of_shares')->nullable();
            $table->string('denomination')->nullable();
            $table->string('current_holding')->nullable();
            $table->string('total_consideration')->nullable();
            $table->string('date_entered_as_member')->nullable();
            $table->string('date_cease_to_be_member')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('register_of_shareholder_logs');
    }
};
