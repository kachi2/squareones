<?php 
namespace App\routes;

use App\Http\Controllers\Manage\CompanyActivityController;
use App\Http\Controllers\Manage\CompanyEntityController;
use App\Http\Controllers\Manage\CompanyFormController;
use App\Http\Controllers\Manage\CompanySharesController;
use App\Http\Controllers\Manage\SecretaryController;
use App\Http\Controllers\Manage\FundSourceController;
use Illuminate\Support\Facades\Route;

Route::controller(CompanyFormController::class)->group(function(){
    Route::get('/get/business/nature',  'getBusinessNature');
    Route::get('/get/names/prefix',  'getNamePrefix');
    Route::get('/company/progress/{id?}', 'getActiveCompany');
    Route::post('company/create',  'InitiateCompanyCreation');
    Route::post('/company/description/store', 'StoreCompanyDescription');
    Route::post('company/address/store', 'StoreCompanyAddress');
});

Route::controller(CompanySharesController::class)->group(function(){
    Route::post('shares/store',  'StoreShares');
    Route::post('/retrieve/shareholders/{company_id}', 'RetrieveShareholders');
});

Route::post('/secretary/store', [SecretaryController::class, 'StoreSecretary']);
Route::post('activities/store', [CompanyActivityController::class, 'CompanyActivities']);
Route::post('fundsource/store', [FundSourceController::class, 'FundSource']);

Route::controller(CompanyEntityController::class)->group(function(){
    Route::get('id/types', 'getIdType');
    Route::post('entity/store', 'StoreEntity');
    Route::post('/entities/remove/{entity_id}', 'removeEntity');    
});