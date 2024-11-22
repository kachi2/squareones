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
        Schema::create('designated_representative_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('representative_id');
            $table->string('entry_date')->nullable();
            $table->string('name')->nullable();
            $table->text('remarks')->nullable();
            $table->tinyText('identity_info')->nullable();
            $table->tinyText('place_of_registration')->nullable();
            $table->tinyText('nature_of_control_over_the_company')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('designated_representative_logs');
    }
};
