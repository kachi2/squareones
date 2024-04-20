<?php
namespace App\Interfaces;

use Illuminate\Http\Request;

interface PaymentInterface
 {

public function ProcessPayment(Request $request);


}