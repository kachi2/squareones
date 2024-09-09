<?php

namespace Database\Seeders;

use App\Models\DocumentType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DocumentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $data = [
            ['name' => 'AA'],
            ['name' => 'IRBR1'],
            ['name' => 'NNC1'],
        ];

        foreach($data as $dd)
        {
            DocumentType::create($dd);
        }
    }
}
