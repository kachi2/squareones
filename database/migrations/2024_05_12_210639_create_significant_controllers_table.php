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
        Schema::create('significant_controllers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->dateTime('date_of_entry')->nullable();
            $table->string('name_of_legal_entity')->nullable();
            $table->dateTime('date_becoming_rep_person')->nullable();
            $table->dateTime('dater_ceased_to_be_rep_person')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('significant_controllers');
    }
};
