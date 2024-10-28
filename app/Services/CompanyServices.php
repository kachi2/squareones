<?php

namespace App\Services;

use App\Dtos\AddressDto;
use App\Dtos\CompanyDescription;
use App\Dtos\CompanyDescriptionDto;
use App\Dtos\CompanyDto;
use App\Dtos\NamesDto;
use App\Interfaces\CompanyFormationInterface;
use App\Models\Company;
use App\Models\CompanySecretary;
use App\Models\CompanyAddress;
use App\Models\CompanyActivity;
use App\Models\FundSource;
use App\Models\CompanyName;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\Cast\Object_;

class CompanyServices  implements CompanyFormationInterface
{

    public function CheckNameExist($names): bool
    {
        foreach ($names as $name) {
            $chk = $name['eng_name'] ;
            if($chk != ''){
            $check = CompanyName::where('eng_name', 'LIKE', "%$chk%")->first();
            if (isset($check)) {
                return true;
            }
          }
            return false;
        }
    } 

    public function InitiateCompany(NamesDto $namesDto)
    {
         $nameChange =  CompanyName::where(['company_id' => $namesDto?->company_id])->get();
         if(count($nameChange) > 0){
            foreach($nameChange as $name)
            {
                $name->delete();
            }
         }
        try {
            $company = Company::where(['is_complete' => 0, 'user_id' => auth_user()])->first();
            if(!$company){
            DB::beginTransaction();
            $initiateCompany = Company::create([
                'user_id' => auth_user(),
            ]);
        }
            $initiateCompany = Company::latest()->first();
                $names = [];
                foreach ($namesDto->names as $name) {  
                    $store =  CompanyName::create([
                        'eng_name' => $name['eng_name']== 'undefined'? '':$name['eng_name'],
                        'chn_name' => $name['chn_name'] == 'undefined'? '':$name['chn_name'],
                        'choice_level' => $name['choice_level'],
                        'chn_prefix'=>  $name['chn_name'] != ''?$name['chn_prefix']:null,
                        'eng_prefix' =>  $name['eng_name'] != ''?$name['prefix']:null,
                        'company_id' => $initiateCompany->id
                    ]);
                    $names[] = $store;     
            }
                DB::commit();
                ActivityLogs('Iniated a new company formation',  'Company Formation');
                return [
                    'company' => $initiateCompany,
                    'name' => $names
                ];
        } catch (\Exception $e) {
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }

         // $company = Company::where('id', $namesDto?->company_id)->first();
        // $nameChange =  CompanyName::where(['company_id' => $namesDto?->company_id])->get();
        // if(count($nameChange) > 0){
        //     $names = [];
        //     $store = [];
        //     foreach ($namesDto->names as $key => $name) {  
        //         if(array_key_exists($key, $nameChange->toArray())){
        //         $store =  $nameChange[$key]->update([
        //             'eng_name' => $name['eng_name']== 'undefined'? '':$name['eng_name'],
        //             'chn_name' => $name['chn_name'] == 'undefined'? '':$name['chn_name'],
        //             'chn_prefix'=>  $name['chn_name'] != ''?$name['chn_prefix']:null,
        //             'eng_prefix' =>  $name['eng_name'] != ''?$name['prefix']:null,
        //             'choice_level' => $name['choice_level'],
        //             'company_id' => $namesDto->company_id
        //         ]);
        //     }else{
        //           CompanyName::create([
        //             'eng_name' => $name['eng_name']== 'undefined'? '':$name['eng_name'],
        //             'chn_name' => $name['chn_name'] == 'undefined'? '':$name['chn_name'],
        //             'choice_level' => $name['choice_level'],
        //             'chn_prefix'=>  $name['chn_name'] != ''?$name['chn_prefix']:null,
        //             'eng_prefix' =>  $name['eng_name'] != ''?$name['prefix']:null,
        //             'company_id' => $namesDto->company_id
        //         ]);
        //     }
               
        //     }

        //       return [
        //         'company' => $company,
        //         'name' =>   CompanyName::where('company_id',$company->id)->get()
        //     ];
        // }
    }

    public function StoreCompanyInfo(CompanyDto $companyDto): ?Company
    { 
        $company = Company::whereId($companyDto->company_id)->first();
        $company->update([
            'business_nature_id' => $companyDto->business_nature_id,
            'description' => $companyDto->description,
            'website' => $companyDto->website=='undefined'?'':$companyDto->website,
        ]);
        $company->update(['services' => json_encode("Incorporated")]);
        return $company;
    }
    public function StoreCompanyAddress($addressDto)
    {
        $company = Company::whereId($addressDto->company_id)->first();
        if($company){
        $company->update([
            'flat' =>  'Rooms 502-503, 5th Floor',
            'building' => 'Wanchai Commercial Centre',
            'street' => '194-204 Johnston Road',
            'city' => '194-204 Johnston Road',
            'state' => 'Wanchai',
            // 'postal_code' => $addressDto->postal_code,
            'country' => 'Hong Kong',
            
        ]);

        CompanyAddress::updateOrcreate([
            'company_id' => $addressDto->company_id,
        ],[
            'company_id' => $addressDto->company_id,
            'flat' =>  'Rooms 502-503, 5th Floor',
            'building' => 'Wanchai Commercial Centre',
            'street' => '194-204 Johnston Road',
            'city' => '194-204 Johnston Road',
            'state' => 'Wanchai',
            // 'postal_code' => $addressDto->postal_code,
            'country' => 'Hong Kong',
        ]);
        return $company;
    }else{
        return false;
    }

    }

    // public function StoreDescription(CompanyDescriptionDto $companyDto){
    //   $company = Company::whereId($companyDto->company_id)->first();
    //   if($company){
    //     $company->update([
    //         'description' => $companyDto->description,
    //         'website' => $companyDto->website,
    //         'business_nature_id' => $companyDto->business_nature_id,
    //     ]);
    //     return $company;
    //   }
    //   return [];
    // }

    public function StoreActivties($request)
    {
        $store = CompanyActivity::updateOrcreate([
            'company_id' => $request->company_id,
        ],[
            'company_id' => $request->company_id,
            'description' => $request->description,
            'activity_level' => $request->activity_level,
            'activity_nature' => $request->activity_nature,
            'customer_location_operation' => $request->customer_location_operation,
            'country' => $request->country
        ]);
        return $store;


        // $activity = CompanyActivity::whereCompanyId($request->company_id)->first();
        // if(!$activity){
        // }else{
        //     $activity->update([
        //         'company_id' => $request->company_id,
        //         'description' => $request->description,
        //         'activity_level' => $request->activity_level,
        //         'activity_nature' => $request->activity_nature,
        //         'customer_location_operation' => $request->customer_location_operation,
        //         'country' => $request->country
        //     ]);
        //     return $activity;
        // }    
    }

    public function StoreFundSource($request)
    {
        $source = FundSource::updateOrCreate([
            'company_id' => $request->company_id,
        ],[
            'company_id' => $request->company_id,
            'income_expected_source' => $request->income_expected_source,
            'origin_funds' => $request->origin_funds,
            'wealth_initial_source' => $request->wealth_initial_source,
            'income_outgoing_source' => $request->income_outgoing_source,
        ]);

        return $source;
    }

}
