<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\TwofactorController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'user'], function(){
Route::controller(DashboardController::class)->group(function(){
    Route::get('account/company/', 'GetAllCompany');
    Route::get('account/company/{company_id}', 'CompanyInfo');
    Route::get('account/documents/', 'GetUserDocuments');
    Route::get('/billings', 'Billing');
    Route::get('account/info', 'getAccountDetails');
    Route::get('/activity/log', 'UserActivityLog');
    Route::get('founder/list/{company_id}', 'ListFounders');
    Route::post('upload/documents', 'UploadUserDocument');
    Route::get('/documents/delete/{document_id}', 'DeleteDoc');
    Route::post('/update/password', 'UpdatePassword');
    Route::post('update/user/details', 'UpdateUserDetails');
});
Route::controller(NotificationController::class)->group(function(){
    Route::post('/toggle/notifications/setting', 'ToggleNofication');
    Route::post('notifications/status', 'getNoficationStatus');
    });

});
Route::controller(TwofactorController::class)->group(function() {
    Route::get('activate/2fa', 'generateSecretKey');
    Route::post('/verify/2fa', 'VerifyKey');
    Route::post('enable/2fa', 'Enable');
    Route::post('disable/2fa', 'Disable');
    Route::get('/check/status', 'check2faStatus');
});
