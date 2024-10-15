<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\EntityType;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        try{
            $this->call([
                BusinessNatureSeeder::class,
                EntityTypeSeeder::class,
                UserSeeder::class,
                NamePrefixSeeder::class,
                RegistrationProgress::class,
                IdentityTypeSeeder::class,
                // PlanSeeder::class,
                DocumentTypeSeeder::class,
                CompanyServiceSeeder::class
            ]);

        }catch(\Exception $e){

        }
    }
}
