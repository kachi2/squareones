<?php

namespace App\Http\Controllers\Manage;

use Illuminate\Http\Request;
use App\Models\
  {RegisterOfChargeLog,RegisterOfShareholderLog,
    RegisterOfAllotmentLog, RegisterOfCompanyNameLog,
    RegisterOfDirectorLog, RegisterOfSecretaryLog,
     RegisterOfTransferLog,SignificantControllerLog,
    DesignatedRepresentativeLog};
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class RegistersLogsController extends Controller
{
    public function GetRegisteredLogs(Request $request)
    {
        try {
            $data = [];
        if($request->charge_id)
         $data['RegisterOfChargeLog'] = RegisterOfChargeLog::where('charge_id', $request->charge_id)->paginate(20);
        if($request->shareholder_id)
        $data['RegisterOfShareholderLog'] = RegisterOfShareholderLog::where('shareholder_id', $request->shareholder_id)->paginate(20);
        if($request->allotment_id)
        $data['RegisterOfAllotmentLog'] = RegisterOfAllotmentLog::where('allotment_id', $request->allotment_id)->paginate(20);
        if($request->company_name_id)
        $data['RegisterOfCompanyNameLog'] = RegisterOfCompanyNameLog::where('company_name_id', $request->company_name_id)->paginate(20);
        if($request->director_id)
        $data['RegisterOfDirectorLog'] = RegisterOfDirectorLog::where('director_id', $request->director_id)->paginate(20);
        if($request->secretary_id)
        $data['RegisterOfSecretaryLog'] = RegisterOfSecretaryLog::where('secretary_id', $request->secretary_id)->paginate(20);
        if($request->transfer_id)
        $data['RegisterOfTransferLog'] = RegisterOfTransferLog::where('transfer_id', $request->transfer_id)->paginate(20);
        if($request->controller_id)
        $data['SignificantControllerLog'] = SignificantControllerLog::where('controller_id', $request->controller_id)->paginate(20);
        if($request->representative_id)
        $data['DesignatedRepresentativeLog'] = DesignatedRepresentativeLog::where('representative_id', $request->representative_id)->paginate(20);
    return response()->json(['data' => $data], HttpStatusCode::OK);
    }catch(\Exception $e){
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }
}
