<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('role_permissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')->constrained()->onDelete('cascade');
            $table->foreignId('permission_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });

        DB::table('role_permissions')->insert([
            ['role_id' => 1, 'permission_id' => 1], 
            ['role_id' => 1, 'permission_id' => 2],
            ['role_id' => 1, 'permission_id' => 3], 
            ['role_id' => 1, 'permission_id' => 4], 
            ['role_id' => 1, 'permission_id' => 5], 
            ['role_id' => 1, 'permission_id' => 6], 
            ['role_id' => 2, 'permission_id' => 3], 
            ['role_id' => 2, 'permission_id' => 6], 
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('role_permissions');
    }
};
