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
        Schema::create('designated_particulars', function (Blueprint $table) {
            $table->id();
            $table->foreignId('designated_representative_id')->constrained()->cascadeOnDelete();
            $table->tinyText('identity_info')->nullable();
            $table->tinyText('place_of_registration')->nullable();
            $table->string('corresponding_address')->nullable();
            $table->tinyText('nature_of_control_over_the_company')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('designated_particulars');
    }
};
