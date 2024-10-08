<?php 
use App\Http\Controllers\CompanyActivityController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CompanyEntityController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\FounderController;
use App\Http\Controllers\CompanySharesController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DocumentSignController;
use App\Http\Controllers\FundSourceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\KycController;
use App\Http\Controllers\SecretaryController;
use App\Models\CompanyEntity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::controller(CompanyController::class)->group(function(){
    Route::post('company/create',  'InitiateCompanyCreation');
    Route::post('/company/description/store', 'StoreCompanyDescription');
    Route::post('company/address/store', 'StoreCompanyAddress');
});

Route::controller(CompanyEntityController::class)->group(function(){
Route::post('entity/store', 'StoreEntity');
});

Route::post('shares/store', [CompanySharesController::class, 'StoreShares']);

Route::post('/secretary/store', [SecretaryController::class, 'StoreSecretary']);
Route::post('activities/store', [CompanyActivityController::class, 'CompanyActivities']);
Route::post('fundsource/store', [FundSourceController::class, 'FundSource']);
Route::post('upload/docs', [FileUploadController::class, 'ProcessDocuments']);

Route::post('/company/formation/{company_id}', [HomeController::class, 'CompleteCompanyFormation']);
Route::get('/get/business/nature', [CompanyController::class, 'getBusinessNature']);

Route::get('/get/names/prefix', [CompanyController::class, 'getNamePrefix']);
Route::get('/company/progress/{id?}', [CompanyController::class, 'getActiveCompany']);

Route::controller(CompanyEntityController::class)->group(function(){
    Route::get('id/types', 'getIdType');
    Route::post('/entities/remove/{entity_id}', 'removeEntity');
    Route::post('delete/signature', 'DeleteSignature');
});


Route::controller(DocumentSignController::class)->group( function() {
Route::post('/build/pdf/', 'BuildPDF');
});

Route::post('/retrieve/shareholders/{company_id}', [CompanySharesController::class,'RetrieveShareholders']);
Route::get('payment/intent', [PaymentController::class, 'PaymentIntent']);
Route::get('/get/user/subscription', [PaymentController::class,'getSubcription']);
Route::get('create/subscription', [PaymentController::class, 'createSubscription']);
Route::get('subscription/cancel/{subscriptionId?}', [PaymentController::class, 'cancelSubscription']);
Route::get('update/payment/info', [PaymentController::class,'updatePaymentDetails']);
Route::get('/payment/make/default/{paymentId?}', [PaymentController::class,'MakeDefaultPayment']);
Route::get('get/user/invoices', [PaymentController::class,'getUserInvoice']);
Route::get('/pause/subscription/{subscription?}',[PaymentController::class,'pauseSubscription']);
Route::get('/resume/subscription/{subscriptionId?}', [PaymentController::class, 'resumeSubscription']);
// Route::get('/process/payment', [PaymentController::class, 'ProcessPayment']); 
Route::post('process/payment', [PaymentController::class, 'ProcessPayment']);
Route::get('kyc/load', [KycController::class, 'loadKyc']);

Route::post('load/founder/kyc', [KycController::class, 'LoadFounderKyc']);
Route::post('generate/incorporated/data', [DashboardController::class, 'generateIncorporatedData']);





