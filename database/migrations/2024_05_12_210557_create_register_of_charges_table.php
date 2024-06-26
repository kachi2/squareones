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
        Schema::create('register_of_charges', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->string('charge_creation_date')->nullable();
            $table->string('account_secured_by_charge')->nullable();
            $table->string('type_of_charge')->nullable();
            $table->tinyText('charge_description')->nullable();
            $table->string('names_of_charge')->nullable();
            $table->text('terms_of_charge')->nullable();
            $table->text('registration_details')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('register_of_charges');
    }
};
