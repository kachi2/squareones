<?php

namespace App\Http\Controllers;

use App\Interfaces\DocumentInterface;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;

class DocumentSignController extends Controller
{
    public function __construct(
        public readonly DocumentInterface $documentInterface
    )
    {
        
    }

    public function BuildPDF(Request $request){

        $valid = Validator::make($request->all(), [
            'document' => 'required|mimes:pdf',
            'company_id' => 'required'
        ]);
        if($valid->fails()){
            return response()->json([
                'error' => $valid->errors()->first()
            ]);
        }
        $pdf = $this->documentInterface->DocumentToPDF($request);
        return $pdf;      
}
}
