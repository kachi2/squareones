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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('client_id')->nullable();
            $table->string('kyc_status')->nullable();
            $table->Text('user_token')->nullable();
            $table->string('last_login')->nullable();
            $table->string('login_ip')->nullable();
            $table->integer('status')->nullable();
            $table->string('user_type')->default('user');
            $table->rememberToken();
            $table->foreignId('current_team_id')->nullable();
            $table->string('profile_photo_path', 2048)->nullable();
            $table->string('google2fa_secret')->nullable();
            $table->string('otp')->nullable();
            $table->longText('barcode')->nullable();
            $table->dateTime('enable_2fa_at')->nullable();
            $table->integer('2fa_verified')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
