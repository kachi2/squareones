<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\TwofactorController;
use App\Http\Controllers\UserMetricsController;
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
    Route::post('update/user/activities', 'GetUserActivities');
    Route::get('/active/company', 'getActiveCompany');
    Route::get('/active/user', 'getActiveUser');
});
Route::controller(NotificationController::class)->group(function(){
    Route::post('/toggle/notifications/setting', 'ToggleNofication');
    Route::post('notifications/status', 'getNoficationStatus');
    Route::get('/notifications', 'UserNotification');
    Route::get('notification/delete/{notify_id}', 'DeleteNotification');
    Route::get('notifications/read', 'UpdateUserNotifications');
    });
Route::controller(TwofactorController::class)->group(function() {
    Route::get('activate/2fa', 'generateSecretKey');
    Route::post('/verify/2fa', 'VerifyKey');
    Route::post('enable/2fa', 'Enable');
    Route::post('disable/2fa', 'Disable');
    Route::get('/check/status', 'check2faStatus');
});

Route::controller(UserMetricsController::class)->group(function() {
Route::get('get/company/returns', 'getCompanyAnnualReturn');
Route::get('get/company/counts', 'getCompanyCount');
Route::get('get/payment/info', 'BillingInformation');
Route::get('get/user/subscription', 'UserSubscription');
Route::get('get/userlogs', 'UserActivityLog');
});
});
