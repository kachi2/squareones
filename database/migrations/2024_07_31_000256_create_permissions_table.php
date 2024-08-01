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
        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->tinyText('description')->nullable();
            $table->timestamps();
        });

        DB::table('permissions')->insert([
            ['name' => 'edit-team', 'description' => 'Permission to edit an existing team'],
            ['name' => 'delete-team', 'description' => 'Permission to delete a team'],
            ['name' => 'view-reports', 'description' => 'Permission to view reports'],
            ['name' => 'add-member', 'description' => 'Permission to Add Member'],
            ['name' => 'remove-member', 'description' => 'Permission to remove team member'],
            ['name' => 'view-member', 'description' => 'Permission to view team members'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permissions');
    }
};
