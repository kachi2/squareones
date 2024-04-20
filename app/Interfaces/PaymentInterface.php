<?php
namespace App\Interfaces;

use Illuminate\Http\Request;

interface PaymentInterface
 {

public function PaymentIntent(Request $request);
public function ProcessPayment(Request $request);


}