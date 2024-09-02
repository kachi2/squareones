<?php
namespace App\Interfaces;

use Illuminate\Http\Request;

interface PaymentInterface
 {

public function PaymentIntent(Request $request);
public function ProcessPayment(Request $request);
public function processStripeRequest($billing);
public function SendNotification($user,$billing);
public function AddBillingInfo($paymentInfo, $billing);
public function AddSubscriptionInfo($company,$session, $payment_ref, $plans);


}