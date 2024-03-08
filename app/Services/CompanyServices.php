<?php

namespace App\Services;

use App\Dtos\AddressDto;
use App\Dtos\CompanyDescription;
use App\Dtos\CompanyDescriptionDto;
use App\Dtos\CompanyDto;
use App\Dtos\NamesDto;
use App\Interfaces\CompanyFormationInterface;
use App\Models\Company;
use App\Models\CompanyAddress;
use App\Models\CompanyName;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\Cast\Object_;

class CompanyServices  implements CompanyFormationInterface
{

    public function StoreCompanyInfo(CompanyDto $companyDto, $company_id): ?Company
    {
        $company = Company::whereId($company_id)->first();
        $company->update([
            'business_nature_id' => $companyDto->business_nature_id,
            'description' => $companyDto->description,
            'website' => $companyDto->website,
        ]);
        return $company;
    }

    // public function SaveBusinessName( array $companyNames, string $company_id)
    // {
    //    $company = Company::where(['user_id' => auth_user(), 'id' => $company_id])->first();
    //    if($company){
    //     $names = [];
    //     foreach($companyNames as $names){
    //       $names =  CompanyName::create([
    //             'eng_name' => $names['eng_name'],
    //             'chn_name' => $names['chn_name'],
    //             'choice_level' => $names['choice_level'],
    //             'company_id' => $company_id
    //         ]);
    //     }
    //     return $names;
    //    }

    // }

    public function CheckNameExist($names): bool
    {
        foreach ($names as $name) {
            $chk = $name['eng_name'];
            $check = CompanyName::where('eng_name', 'LIKE', "%$chk%")->first();
            if (isset($check)) {
                return true;
            }
            return false;
        }
    }

    public function InitiateCompany(NamesDto $namesDto)
    {
        try {
            DB::beginTransaction();
            $initiateCompany = Company::create([
                // 'user_id' => auth_user(),
                'user_id' => 1,
            ]);

            // dd(json_encode($namesDto, true));

            if ($initiateCompany) {
                $names = [];
                foreach ($namesDto->names as $name) {  
                    $store =  CompanyName::create([
                        'eng_name' => $name['eng_name'].' '.$name['prefix']??'Limited',
                        'chn_name' => $name['chn_name'].' '.$name['chn_prefix']??'有限公司',
                        'choice_level' => $name['choice_level'],
                        'company_id' => $initiateCompany->id
                    ]);
                    $names[] = $store;     
            }
                DB::commit();
                return [
                    'company' => $initiateCompany,
                    'name' => $names
                ];
            }
        } catch (\Exception $e) {
            DB::rollBack();
            return $e->getMessage();
        }
    }

    public function StoreCompanyAddress(AddressDto $addressDto)
    {
        $company = Company::whereId($addressDto->company_id)->first();
        if($company){
        $company->update([
            'address' =>  $addressDto->address,
            'street_no' => $addressDto->street_no,
            'city' => $addressDto->city,
            'state' => $addressDto->state,
            'postal_code' => $addressDto->postal_code,
            'country' => $addressDto->country,
            
        ]);
        return $company;
    }else{
        return false;
    }

    }

    public function StoreDescription(CompanyDescriptionDto $companyDto){
      $company = Company::whereId($companyDto->company_id)->first();
      if($company){
        $company->update([
            'description' => $companyDto->description??$company->description,
            'website' => $companyDto->website??$company->website,
            'business_nature_id' => $companyDto->business_nature_id??$company->business_nature_id,
        ]);
        return $company;
      }
      return [];
    }

}
