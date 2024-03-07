<?php

use App\Http\Controllers\CompanyActivityController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\FounderController;
use App\Http\Controllers\OwnershipController;
use App\Http\Controllers\SecretaryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('company/create', [CompanyController::class, 'InitiateCompanyCreation']);
Route::post('/founders/create', [FounderController::class, 'StoreFounders']);
Route::post('owners/create', [OwnershipController::class, 'StoreOwnership']);
Route::post('/secretary/create', [SecretaryController::class, 'StoreSecretary']);
Route::post('activities/create', [CompanyActivityController::class, 'ActivityFundSource']);
Route::post('upload/docs', [FileUploadController::class, 'ProcessDocuments']);
