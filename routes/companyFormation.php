<?php 
use App\Http\Controllers\CompanyActivityController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CompanyEntityController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\FounderController;
use App\Http\Controllers\CompanySharesController;
use App\Http\Controllers\FundSourceController;
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

