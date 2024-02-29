<?php 
namespace App\Services;

use App\Dtos\CompanyDto;
use App\Interfaces\CompanyFormationInterface;
use App\Models\Company;
use App\Models\CompanyName;

class CompanyServices  implements CompanyFormationInterface
{

    public function SaveBaseCompanyInfo(CompanyDto $companyDto): ?Company
    {
        $data = Company::create([
            'user_id' => 1, //auth()->user()->id
             'business_nature_id' => $companyDto->business_nature_id,
              'description'=> $companyDto->description,
              'website'=> $companyDto->website,
               'address'=> $companyDto->address, 
               'street_no'=> $companyDto->street_no,
               'city'=> $companyDto->city,
               'state'=> $companyDto->state,
               'postal_code'=> $companyDto->postal_code,
               'country'=> $companyDto->country,

            ]);
        return $data;
    }

    public function SaveBusinessName( array $companyNames, string $company_id)
    {
       $company = Company::where(['user_id' => auth_user(), 'id' => $company_id])->first();
       if($company){
        // dd($companyNames);
        foreach($companyNames as $names){
            CompanyName::create([
                'eng_name' => $names['eng_name'],
                'chn_name' => $names['chn_name'],
                'choice_level' => $names['choice_level'],
                'company_id' => $company_id
            ]);
        }
       }
     
    }

    public function CheckNameExist($names):bool{
        foreach($names as $name){
            $chk = $name['eng_name'];
        $check = CompanyName::where('eng_name','LIKE', "%$chk%")->first();
        if(isset($check)){
         return true;
        }
        return false;
       }
    }


}