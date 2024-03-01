<?php

namespace App\Http\Controllers;

use App\Dtos\CompanyDto;
use App\Http\Requests\CompanyRequest;
use Illuminate\Support\Facades\DB;
use App\Services\CompanyServices;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    //

    public function __construct(
        public readonly CompanyServices $companyServices
    ) {
    }

    public function SaveFromRequest(CompanyRequest $req)
    {

        $check = $this->companyServices->CheckNameExist($req->names);
        if ($check) {
            return  response()->json(['error' => "Names already exist on our database, please choose another name"]);
        }
        try {
            DB::beginTransaction();
            $companyDto = CompanyDto::fromRequest($req->validated());
            if ($companyDto) {
                $company = $this->companyServices->SaveBaseCompanyInfo($companyDto);
                if (isset($company)) {
                    $names = $this->companyServices->SaveBusinessName($req->names, $company->id);
                }
            }
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->with('errors', $e->getMessage());
        }

        return response()->json(['company_info' => $company, 'names' => $names]);
        // return redirect()->back()->with('data', $names);
    }
}
