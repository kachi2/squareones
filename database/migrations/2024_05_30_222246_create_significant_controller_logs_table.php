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
        Schema::create('significant_controller_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('controller_id');
            $table->string('entry_date')->nullable();
            $table->string('legal_entity_name')->nullable(); 
            $table->string('date_becoming_rep_person')->nullable();
            $table->string('date_ceased_to_be_rep_person')->nullable();
            $table->tinyText('corresponding_address')->nullable();
            $table->tinyText('resdential_address')->nullable();
            $table->tinyText('identity_info')->nullable();
            $table->tinyText('place_of_registration')->nullable();
            $table->tinyText('nature_of_control_over_the_company')->nullable();
            $table->string('type')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('significant_controller_logs');
    }
};
