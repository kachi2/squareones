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
            ['name' => 'Crop and animal production, hunting and related service activities', 'code' => '001'],
            ['name' => 'Forestry activities', 'code' => '002'],
            ['name' => 'Mining of coal and lignite', 'code' => '005'],
            ['name' => 'Extraction of crude petroleum and natural gas', 'code' => '006'],
            ['name' => 'Mining of metal ores', 'code' => '007'],
            ['name' => 'Quarrying and other mining of non-metal ores', 'code' => '008'],
            
            ['name' => 'Mining support service activities', 'code' => '009'],
            ['name' => 'Manufacture of food products', 'code' => '010'],
            ['name' => 'Manufacture of beverages', 'code' => '011'],
            ['name' => 'Manufacture of tobacco products', 'code' => '012'],
            ['name' => 'Manufacture of wearing apparel', 'code' => '014'],
            ['name' => 'Manufacture of leather and related products', 'code' => '015'],
            ['name' => 'Manufacture of wood and of products of wood and cork, articles of straw and plaiting materials (except furniture and toys)', 'code' => '016'],

            ['name' => 'Manufacture of paper and paper products', 'code' => '017'],
            ['name' => 'Printing and reproduction of recorded media', 'code' => '018'],
            ['name' => 'Manufacture of coke and refined petroleum products', 'code' => '019'],
            ['name' => 'Manufacture of chemicals and chemical products', 'code' => '020'],
            ['name' => 'Manufacture of pharmaceuticals, medicinal chemical and botanical products', 'code' => '021'],
            ['name' => 'Manufacture of rubber and plastics products (except furniture, toys, sports goods and stationery)', 'code' => '022'],
            ['name' => 'Manufacture of other non-metallic mineral products', 'code' => '023'],
            ['name' => 'Manufacture of basic metals', 'code' => '024'],
            ['name' => 'Manufacture of fabricated metal products (except machinery and equipment)', 'code' => '025'],
            ['name' => 'Manufacture of computer, electronic and optical products', 'code' => '026'],
            ['name' => 'Manufacture of electrical equipment', 'code' => '027'],
            ['name' => 'Manufacture of machinery and equipment n.e.c.', 'code' => '028'],
            ['name' => 'Body assembly of motor vehicles', 'code' => '029'],
            ['name' => 'Manufacture of other transport equipment', 'code' => '030'],

            ['name' => 'Manufacture of furniture', 'code' => '031'],
            ['name' => 'Other manufacturing', 'code' => '032'],
            ['name' => 'Repair and installation of machinery and equipmentt', 'code' => '033'],
            ['name' => 'Electricity and gas supply', 'code' => '035'],
            ['name' => 'Water collection, treatment and supply', 'code' => '036'],
            ['name' => 'Sewerage', 'code' => '037'],

            ['name' => 'Waste collection, treatment and disposal activities; materials recovery', 'code' => '038'],
            ['name' => 'Remediation activities and other waste management service', 'code' => '039'],
            ['name' => 'Repair and installation of machinery and equipmentt', 'code' => '033'],
            ['name' => 'Construction of buildings', 'code' => '041'],
            ['name' => 'Civil engineering', 'code' => '042'],
            ['name' => 'Specialised construction activities', 'code' => '043'],

            ['name' => 'Import and export trade', 'code' => '045'],
            ['name' => 'Wholesale', 'code' => '046'],
            ['name' => 'Retail trade', 'code' => '047'],
            ['name' => 'Land transport', 'code' => '49'],
            ['name' => 'Water transport', 'code' => '50'],
            ['name' => 'Air transport', 'code' => '51'],
            ['name' => 'Warehousing and support activities for transportation', 'code' => '52'],

            ['name' => 'Postal and courier activities', 'code' => '53'],
            ['name' => 'Short term accommodation activities', 'code' => '55'],
            ['name' => 'Food and beverage service activities', 'code' => '56'],
            ['name' => 'Publishing activities', 'code' => '58'],
            ['name' => 'Motion picture, video and television programme production, sound recording and music publishing activities', 'code' => '59'],

            ['name' => 'Programming and broadcasting activities', 'code' => '60'],
            ['name' => 'Telecommunications', 'code' => '61'],
            ['name' => 'Information technology service activities', 'code' => '62'],
            ['name' => 'Information service activities', 'code' => '63'],
            ['name' => 'Financial service activities, including investment and holding companies, and the activities of trusts, funds and similar financial entities', 'code' => '64'],
            ['name' => 'Insurance', 'code' => '65'],
            ['name' => 'Activities auxiliary to financial service and insurance activities', 'code' => '66'],
            ['name' => 'Real estate activities', 'code' =>'68'],
            ['name' => 'Legal and accounting activities', 'code' => '69'],
            ['name' => 'Activities of head offices; management and management consultancy activities', 'code' => '70'],
            ['name' => 'Architecture and engineering activities, technical testing and analysis', 'code' => '71'],
            ['name' => 'Scientific research and development', 'code' => '72'],
            ['name' => 'Veterinary activities', 'code' => '73'],
            ['name' => 'Advertising and market research', 'code' => '74'],
            ['name' => 'Other professional, scientific and technical activities', 'code' => '75'],
            ['name' => 'Rental and leasing activities', 'code' => '77'],
            ['name' => 'Employment activities', 'code' => '78'],
            ['name' => 'Travel agency, reservation service and related activities', 'code' => '79'],
            ['name' => 'Security and investigation activities', 'code' => '80'],
            ['name' => 'Services to buildings and landscape care activities', 'code' => '81'],
            ['name' => 'Office administrative, office support and other business support activities', 'code' => '82'],
            ['name' => 'Public administration', 'code' => '84'],
            ['name' => 'Education', 'code' => '85'],
            ['name' => 'Human health activities', 'code' => '86'],
            ['name' => 'Residential care activities', 'code' => '87'],
            ['name' => 'Social work activities without accommodation', 'code' => '88'],
            ['name' => 'Creative and performing arts activities', 'code' => '90'],
            ['name' => 'Libraries, archives, museums and other cultural activities', 'code' => '91'],

            ['name' => 'Activities of amusement parks and theme parks', 'code' => '92'],
            ['name' => 'Sports and other entertainment activities', 'code' => '93'],
            ['name' => 'Activities of membership organisations', 'code' => '94'],
            ['name' => 'Repair of motor vehicles, motorcycles, computers, personal and household goods', 'code' => '95'],
            ['name' => 'Other personal service activities', 'code' => '96'],
            ['name' => 'Activities of households as employers of domestic personnel', 'code' => '97'],
            ['name' => 'Goods- and services-producing activities of private households for own use', 'code' => '98'],
            ['name' => 'Activities of extraterritorial organisations and bodies', 'code' => '99']
        ];
        foreach($data as $dd){
            BusinessNature::create($dd);
        }
    }
}
