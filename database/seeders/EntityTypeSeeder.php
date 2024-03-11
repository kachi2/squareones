<?php

namespace Database\Seeders;

use App\Models\EntityCapacity;
use App\Models\FounderType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EntityTypeSeeder extends Seeder
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
            EntityCapacity::create($dd);
        }
    }
}
