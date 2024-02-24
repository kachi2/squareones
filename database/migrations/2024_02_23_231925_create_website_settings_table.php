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
        Schema::create('website_settings', function (Blueprint $table) {
            $table->id();
            $table->string('website_nmae')->nullable();
            $table->string('website_title')->nullable();
            $table->string('website_logo')->nullable();
            $table->string('website_fav')->nullable();
            $table->string('sidebar_color')->nullable();
            $table->string('website_email')->nullable();
            $table->string('website_phone')->nullable();
            $table->string('navbar_color')->nullable();
            $table->string('footer')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('website_settings');
    }
};
