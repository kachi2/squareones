<?php

namespace Database\Seeders;

use App\Models\RegistrationProgress as ModelsRegistrationProgress;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RegistrationProgress extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $data = [
            ['name' => 'set_up_company', 'description' => 'Set up Company'],
            ['name' => 'preparation_incorporation', 'description' => 'Sorting out incorporation details'],
            ['name' => 'filling_documents', 'description' => 'Handling the paperwork'],
            ['name' => 'company_incorporated', 'description' => 'Your company is incorporated'],
            ['name' => 'tax_id_ready', 'description' => 'Certificates Ready'],
        ];

        foreach($data as $dd){
            ModelsRegistrationProgress::create($dd);
        }
    }
}
