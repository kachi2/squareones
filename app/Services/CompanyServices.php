<?php

namespace App\Services;

use App\Dtos\AddressDto;
use App\Dtos\CompanyDto;
use App\Dtos\NamesDto;
use App\Interfaces\CompanyFormationInterface;
use App\Models\Company;
use App\Models\CompanyAddress;
use App\Models\CompanyName;
use Illuminate\Support\Facades\DB;

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

            if ($initiateCompany) {
                $name = [];
                foreach ($namesDto as $names) {
                    $names =  CompanyName::create([
                        'eng_name' => $names['eng_name'].' '.$names['prefix']??'Limited',
                        'chn_name' => $names['chn_name'].' '.$names['prefix']??'有限公司',
                        'choice_level' => $names['choice_level'],
                        'company_id' => $initiateCompany->id
                    ]);
                    $name[$names] = $names;
                }
                DB::commit();
                return [
                    'company' => $initiateCompany,
                    'name' => $name
                ];
            }
        } catch (\Exception $e) {
            DB::rollBack();
            return $e->getMessage();
        }
    }

    public function StoreCompanyAddress(AddressDto $addressDto, $company_id)
    {
        $company = Company::whereId($company_id)->first();
        $company->update([
            'address' =>  $addressDto->address,
            'street_no' => $addressDto->street_no,
            'city' => $addressDto->city,
            'state' => $addressDto->state,
            'postal_code' => $addressDto->postal_code,
            'country' => $addressDto->country,
        ]);
    }
}
