<?php 
use App\Http\Controllers\CompanyActivityController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CompanyEntityController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\FounderController;
use App\Http\Controllers\CompanySharesController;
use App\Http\Controllers\DocumentSignController;
use App\Http\Controllers\FundSourceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\KycController;
use App\Http\Controllers\SecretaryController;
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
Route::get('/company/progress', [CompanyController::class, 'getActiveCompany']);

Route::get('id/types', [CompanyEntityController::class, 'getIdType']);
Route::post('/entities/remove/{entity_id}', [CompanyEntityController::class, 'removeEntity']);
Route::post('/retrieve/shareholders/{company_id}', [CompanySharesController::class, 'RetrieveShareholders']);


Route::controller(DocumentSignController::class)->group( function() {
Route::post('/build/pdf/', 'BuildPDF');
});

Route::get('/payment', [PaymentController::class, 'loadPyamentPage']);
Route::post('payment/intent', [PaymentController::class, 'PaymentIntent']);
Route::get('kyc/load', [KycController::class, 'loadKyc']);
