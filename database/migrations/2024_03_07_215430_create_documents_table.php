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
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->unsigned();
            $table->foreignId('document_type_id')->unsigned();
            $table->longText('document')->nullable();
            $table->string('status')->nullable();
            $table->integer('user_id')->nullable();
            $table->string('title')->nullable();
            $table->string('year')->nullable();
            $table->integer('user_id')->nullable();
            $table->string('is_verified')->nullable();
            $table->string('is_signed')->nullable();
            $table->timestamps();

            $table->index('company_id');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
