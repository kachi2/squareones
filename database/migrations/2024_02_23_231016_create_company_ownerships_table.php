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
        Schema::create('company_ownerships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->unsigned();
            $table->foreignId('company_ownership_share_id')->unsigned();
            $table->string('share_percentage')->nullable();
            $table->string('total_amount')->nullable();
            $table->timestamps();

            $table->index('company_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_ownerships');
    }
};
