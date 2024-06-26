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
        Schema::create('identity_infos', function (Blueprint $table) {
            $table->id();
            $table->integer('identity_type')->unsigned();
            $table->foreignId('individual_id')->constrained()->unsigned();
            $table->string('passport_no')->nullable();
            $table->string('issueing_country')->nullable();
            $table->string('identity_no')->nullable();
            $table->string('identity_no_suffix')->nullable();
            $table->string('dob')->nullable();
            $table->string('card_name')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('identity_infos');
    }
};
