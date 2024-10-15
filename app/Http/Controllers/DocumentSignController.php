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
            'documents' => 'required',
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

public function RenderPagePDF($company_d){

    $data = $this->documentInterface->RenderPagePDF(1);
    return view('pdf.pdf', [
        'company' => $data
    ]);

}
}
