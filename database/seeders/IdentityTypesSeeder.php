<?php

namespace Database\Seeders;

use App\Models\IdentityInfo;
use App\Models\IdentityType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IdentityTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $data = [
            ['name' => 'passport'],
            ['name' => 'HKID'],
        ];

        foreach($data as $dd){
            IdentityType::create($dd);
        }
    }
}
