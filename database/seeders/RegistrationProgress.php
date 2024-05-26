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
            ['name' => 'preparation_incorporation', 'description' => 'Preparation Incorporation'],
            ['name' => 'filling_documents', 'description' => 'Filling Documents'],
            ['name' => 'company_incorporated', 'description' => 'Company Incorporated'],
            ['name' => 'tax_id_ready', 'description' => 'Tax ID Ready'],
        ];

        foreach($data as $dd){
            ModelsRegistrationProgress::create($dd);
        }
    }
}
