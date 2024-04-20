<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function() {
    require __DIR__.'/companyFormation.php';
});
Route::get('process/payment', [PaymentController::class, 'ProcessPayment'])->name('ProcessPayment');
require __DIR__.'/jetstream.php';
require __DIR__.'/auth.php';


