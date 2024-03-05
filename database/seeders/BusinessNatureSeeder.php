<?php

namespace Database\Seeders;

use App\Models\BusinessNature;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BusinessNatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $data = [
            ['name' => 'individual'],
            ['name' => 'corporate'],
        ];

        foreach($data as $dd){
            BusinessNature::create($dd);
        }
    }
}
