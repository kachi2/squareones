<?php

namespace Database\Seeders;

use App\Models\BusinessNature;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use function Ramsey\Uuid\v1;

class BusinessNatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'Crop and animal production, hunting and related service activities'],
            ['name' => 'Forestry activities'],
            ['name' => 'Mining of coal and lignite'],
            ['name' => 'Extraction of crude petroleum and natural gas'],
            ['name' => 'Mining of metal ores'],
            ['name' => 'Mining support service activities'],
            ['name' => 'Quarrying and other mining of non-metal ores'],
            ['name' => 'Manufacture of food products'],
            ['name' => 'Manufacture of beverages'],
            ['name' => 'Forestry activities'],
            ['name' => 'Manufacture of tobacco products'],
            ['name' => 'Manufacture of wearing apparel'],
            ['name' => 'Manufacture of leather and related products'],
            ['name' => 'Manufacture of wood and of products of wood and cork, articles of straw and plaiting materials (except furniture and toys)'],

            ['name' => 'Manufacture of paper and paper products'],
            ['name' => 'Printing and reproduction of recorded media'],
            ['name' => 'Manufacture of coke and refined petroleum products'],
            ['name' => 'Manufacture of chemicals and chemical products'],
            ['name' => 'Manufacture of pharmaceuticals, medicinal chemical and botanical products'],
            ['name' => 'Manufacture of fabricated metal products (except machinery and equipment)'],

            ['name' => 'Manufacture of rubber and plastics products (except furniture, toys, sports goods and stationery)'],
            ['name' => 'Manufacture of other non-metallic mineral products'],
            ['name' => 'Manufacture of basic metals'],
            ['name' => 'Retail trade'],
            ['name' => 'Wholesale'],
            ['name' => 'Import and export trade'],
            ['name' => 'Specialised construction activities'],
            ['name' => 'Civil engineering'],
            ['name' => 'Construction of buildings'],
            ['name' => 'Remediation activities and other waste management services'],
            ['name' => 'Waste collection, treatment and disposal activities; materials recovery'],
            ['name' => 'Sewerage'],
            ['name' => 'Water collection, treatment and supply'],
            ['name' => 'Electricity and gas supplys'],
            ['name' => 'Repair and installation of machinery and equipment'],
            ['name' => 'Manufacture of furniture'],
            ['name' => 'Manufacture of other transport equipment'],
            ['name' => 'Body assembly of motor vehicles'],
            ['name' => 'Manufacture of machinery and equipment n.e.c.'],
            ['name' => 'Manufacture of electrical equipment'],
            ['name' => 'Manufacture of computer, electronic and optical products'],
            ['name' => 'Information service activities'],
            ['name' => 'Information technology service activities'],
            ['name' => 'Telecommunications'],
            ['name' => 'Programming and broadcasting activities'],
            ['name' => ' Motion picture, video and television programme production, sound recording and music publishing activities'],
            ['name' => 'Publishing activities'],
            ['name' => 'Food and beverage service activities'],
            ['name' => 'Short term accommodation activities'],
            ['name' => 'Postal and courier activities'],
            ['name' => 'Warehousing and support activities for transportation'],
            ['name' => 'Air transport'],
            ['name' => 'Water transport'],
            ['name' => 'Land transport'],
            ['name' => 'Financial service activities, including investment and holding companies, and the activities of trusts, funds and similar financial entities'],
            ['name' => 'Insurance'],
            ['name' => 'Activities auxiliary to financial service and insurance activities'],
            ['name' => 'Real estate activities'],
            ['name' => 'Legal and accounting activities'],
            ['name' => 'Activities of head offices; management and management consultancy activities'],
            ['name' => 'Architecture and engineering activities, technical testing and analysis'],
            ['name' => 'Scientific research and development'],
            ['name' => 'Veterinary activities'],
            ['name' => 'Advertising and market research'],
            ['name' => 'Other professional, scientific and technical activities'],
            ['name' => 'Rental and leasing activities'],
            ['name' => 'Employment activities'],
            ['name' => 'Travel agency, reservation service and related activitiest'],
            ['name' => 'Security and investigation activities'],
            ['name' => 'Services to buildings and landscape care activities'],
            ['name' => 'Office administrative, office support and other business support activities'],
            ['name' => 'Public administration'],
            ['name' => 'Education'],
            ['name' => 'Human health activities'],
            ['name' => 'Residential care activities'],
            ['name' => 'Social work activities without accommodation'],
            ['name' => 'Creative and performing arts activities'],
            ['name' => 'Libraries, archives, museums and other cultural activities'],
            ['name' => 'Activities of amusement parks and theme parks'],
            ['name' => 'Sports and other entertainment activities'],
            ['name' => 'Activities of membership organisations'],
            ['name' => 'Repair of motor vehicles, motorcycles, computers, personal and household goods'],
            ['name' => 'Activities of households as employers of domestic personnel'],
            ['name' => 'Other personal service activities'],
            ['name' => 'Goods- and services-producing activities of private households for own use'],
            ['name' => 'Activities of extraterritorial organisations and bodies']
        ];
        foreach($data as $dd){
            BusinessNature::create($dd);
        }
    }
}
