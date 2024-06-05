<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Manage\{CompanyController, DashboardController, DocumentController, UserController};
Route::prefix('manage')->group(function() { 
Route::controller(CompanyController::class)->group( function(){
Route::get('/companies/index', 'getAllCompanies');
Route::get('/get/company/{id}', 'getCompany');
Route::post('/company', 'RegisteredCompany');
Route::post('/officecontract', 'RegisterOfficeAndContract');
Route::post('/compliance/reporting', 'ComplianceReportings');
Route::post('/directors', 'RegisterOfDirector');
Route::post('/shareholders', 'RegisterOfShareholder');
Route::post('/namechange', 'RegisterChangeOfName');
Route::post('/charges', 'RegisterOfCharge');
Route::post('/transfer', 'RegisterOfTransfer');
Route::post('/secretaries', 'RegisterOfSecretaries');
Route::post('/allotments', 'RegisterOfAllotments');
Route::post('/controllers', 'SignificantController');
Route::post('/representatives', 'DesignatedRepresentatives');
Route::get('/incorporation/{company_id}', 'CompanyIncorporation');
Route::get('/incorporations/statuses', 'GetIncorporationStatuses');
Route::post('/incorporations/update', 'UpdateIncorporationStatus');
Route::post('/company/logs', 'GetRegisteredLogs');
});


Route::controller(DashboardController::class)->group(function(){
    Route::get('/activitylog', 'AdminActivityLog');
    Route::get('company/stats/', 'GetCompanyStats');
    Route::get('/revenue/stats', 'getRevenueStats');
});

Route::controller(DocumentController::class)->group(function (){
Route::post('/upload/document/', 'ProcessDocuments');
Route::get('/get/documents/{company_id}', 'Getdocuments');
Route::get('documents/delete', 'deleteDocument');
});

Route::controller(UserController::class)->group(function() {
    Route::get('/users', 'getUsers');
    Route::get('/get/user/companies/{user_id}', 'UserCompanies');
    Route::get('/get/user/billing/{user_id}', 'UserBilling');
    Route::post('/update/users/status/', 'UpdateUserStatus');
});


});

