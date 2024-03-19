<?php

namespace Database\Seeders;

use App\Models\NamePrefix;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NamePrefixSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $data = [
            ['value' => 'Limited', 'type'=>'eng'],
            ['value' => 'LIMITED', 'type'=>'eng'],
            ['value' => '有限公司', 'type'=>'chn'],
        ];

        foreach($data as $ss){
            NamePrefix::create($ss);
        }
    }
}
