<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Plan::create([
            'plan' => 'Annual Plan',
            'amount' => '5000',
            'duration' => '365',
            'currency' => 'usd'
        ]);
    }
}
