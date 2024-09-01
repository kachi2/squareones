<?php

namespace Database\Seeders;

use App\Models\IdentityType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IdentityTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $data = [
            ['name' => 'Passsport'],
            ['name' => 'ID Card']
        ];

        foreach($data as $dd)
        {
            IdentityType::create($dd);
        }
    }
}
