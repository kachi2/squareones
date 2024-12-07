<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\CompanyEntityController;
use App\Http\Controllers\CompanyServiceController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\KycController;
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::middleware('auth:sanctum')->group(function() {
    Route::middleware('2fa')->group(function() {
    require __DIR__.'/companyFormation.php';
    require __DIR__.'/Users.php';
    require __DIR__.'/team.php';
});
});
Route::post('register/signature', [CompanyEntityController::class, 'RegisterEntitySignature']);
Route::get('/kyc/status/{company_entity_id?}', [KycController::class, 'UpdateKycStatus']);
Route::webhooks('webhook/complycube', 'Complycub_webhooks');
Route::webhooks('webhook/stripe', 'Stripe_webhooks');



require __DIR__.'/auth.php';
require __DIR__.'/admin.php';

