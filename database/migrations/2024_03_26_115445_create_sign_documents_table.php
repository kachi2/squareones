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
        Schema::create('sign_documents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->longText('signature')->nullable();
            $table->string('signature_path')->nullable();
            $table->dateTime('date_signed')->nullable();
            $table->integer('company_id')->nullable();
            $table->string('document')->nullable();
            $table->string('signed_document')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sign_documents');
    }
};
