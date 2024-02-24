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
        Schema::create('company_ownership_shares', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->unsigned()->index();
            $table->string('share_type')->nullable();
            $table->string('no_of_share')->nullable();
            $table->string('total_amount_paid')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_ownership_shares');
    }
};
