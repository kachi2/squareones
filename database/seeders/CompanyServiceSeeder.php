<?php

namespace Database\Seeders;

use App\Models\CompanyService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanyServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $data = [

            ['name' => 'Incorporation'],
            ['name' => 'TaxId']
        ];

        foreach($data as $dd)
        {
            CompanyService::create($dd);
        }
    }
}
