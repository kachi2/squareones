<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;


Route::controller(DashboardController::class)->group(function(){
Route::group(['prefix' => 'user'], function(){
    Route::get('account/company/', 'GetAllCompany');
    Route::get('account/company/{company_id}', 'CompanyInfo');
    Route::get('account/documents/', 'GetUserDocuments');
    Route::get('/billings', 'Billing');
    Route::get('account/info', 'getAccountDetails');
    Route::get('/activity/log', 'UserActivityLog');
    Route::get('founder/list/{company_id}', 'ListFounders');
    Route::post('upload/documents', 'UploadUserDocument');
    Route::get('/documents/delete/{document_id}', 'DeleteDoc');
});
});