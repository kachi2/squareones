<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Services\StripePayment;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    //

    public function __construct(
  public readonly StripePayment $stripePayment
    )
    {
    }


    public function CreateStripeProduct(Request $request)
    {
        try{
        $stripe = $this->stripePayment->createPlan($request);
        return response()->json(['data' => $stripe], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }
    public function UpdateStripeProduct(Request $request)
    {
        try{
        $stripe = $this->stripePayment->UpdatePlan($request);
        return response()->json(['data' => $stripe], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

    public function getActivePlan() 
    {
        try{
        $stripe =  $this->stripePayment->getCurrentPlan();
        return response()->json(['data' => $stripe], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

    public function getInvoices()
    {
        try{
        $stripe = $this->stripePayment->GetStripeInvoices();
        return response()->json(['data' => $stripe], HttpStatusCode::OK);
    }catch(\Exception $e){
        return response()->json(['error' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
       }
    }

   


    
}
