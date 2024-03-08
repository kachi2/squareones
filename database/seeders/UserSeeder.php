<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        User::create([
            'name' => 'michael kachi',
            'email' => 'jesmikky@gmail.com',
            'phone' => '08039366207',
            'password' => Hash::make('mikky123')
        ]);
    }
}
