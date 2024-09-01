<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Services\StripePayment;
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
        $stripe = $this->stripePayment->createPlan($request);
        return $stripe;
    }
    public function UpdateStripeProduct(Request $request)
    {
        $stripe = $this->stripePayment->UpdatePlan($request);
        return $stripe;
    }

    public function getActivePlan() 
    {
        return $this->stripePayment->getCurrentPlan();
    }

    
}
