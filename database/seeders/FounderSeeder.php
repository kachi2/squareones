<?php

namespace Database\Seeders;

use App\Models\FounderType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FounderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $data = [
            ['name' => 'individual'],
            ['name' => 'corporate']
        ];

        foreach($data as $dd){
            FounderType::create($dd);
        }
    }
}
