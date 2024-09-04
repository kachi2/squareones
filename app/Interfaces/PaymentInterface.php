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
public function createSubscription();
public function getSubcriptionStatus();
public function cancelSubscription($subscription);
public function updatePaymentDetails($request);
public function MakeDefaultPayment($payment_id);
public function getUserInvoice();
public function SuspendSubscription($subscription_id);
public function resumeSubscription($subscription);


}