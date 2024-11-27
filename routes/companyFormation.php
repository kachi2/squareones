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
    Route::get('/get/business/nature',  'getBusinessNature');
    Route::get('/get/names/prefix',  'getNamePrefix');
    Route::get('/company/progress/{id?}', 'getActiveCompany');
    Route::post('company/create',  'InitiateCompanyCreation');
    Route::post('/company/description/store', 'StoreCompanyDescription');
    Route::post('company/address/store', 'StoreCompanyAddress');
    Route::get('/get/business/nature', 'getBusinessNature');
});

Route::controller(CompanySharesController::class)->group(function(){
    Route::post('shares/store',  'StoreShares');
    Route::post('/retrieve/shareholders/{company_id}', 'RetrieveShareholders');
});

Route::post('/secretary/store', [SecretaryController::class, 'StoreSecretary']);
Route::post('activities/store', [CompanyActivityController::class, 'CompanyActivities']);
Route::post('fundsource/store', [FundSourceController::class, 'FundSource']);
Route::post('upload/docs', [FileUploadController::class, 'ProcessDocuments']);
Route::post('/company/formation/{company_id}', [HomeController::class, 'CompleteCompanyFormation']);

Route::controller(CompanyEntityController::class)->group(function(){
    Route::get('id/types', 'getIdType');
    Route::post('entity/store', 'StoreEntity');
    Route::post('/entities/remove/{entity_id}', 'removeEntity');
    Route::post('delete/signature', 'DeleteSignature');
    
});


Route::controller(DocumentSignController::class)->group( function() {
Route::post('/build/pdf/', 'BuildPDF');
});


Route::controller(PaymentController::class)->group(function(){
    Route::get('payment/intent',  'PaymentIntent');
    Route::get('/get/user/subscription', 'getSubcription');
    Route::get('create/subscription', 'createSubscription');
    Route::get('subscription/cancel/{subscriptionId?}', 'cancelSubscription');
    Route::get('update/payment/info', 'updatePaymentDetails');
    Route::get('/payment/make/default/{paymentId?}', 'MakeDefaultPayment');
    Route::get('get/user/invoices', 'getUserInvoice');
    Route::get('/pause/subscription/{subscription?}', 'pauseSubscription');
    Route::get('/resume/subscription/{subscriptionId?}',  'resumeSubscription');
    Route::post('process/payment', 'ProcessPayment');
});

// Route::get('/process/payment', [PaymentController::class, 'ProcessPayment']); 

Route::controller(KycController::class)->group(function(){
Route::get('kyc/load','loadKyc');
Route::post('load/founder/kyc',  'LoadFounderKyc');
});

Route::post('generate/incorporated/data', [DashboardController::class, 'generateIncorporatedData']);





