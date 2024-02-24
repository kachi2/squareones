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
        Schema::create('company_activities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->unsigned()->index();
            $table->text('description')->nullable();
            $table->string('activity_level')->nullable();
            $table->string('activity_nature')->nullable();
            $table->string('customer_location_operation')->nullable();
            $table->string('country_list')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_activities');
    }
};
