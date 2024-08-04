<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Manage\{CompanyController, DashboardController, DocumentController, UserController, ComplianceReportings, DesignatedRepresentatives,
    RegisterChangeOfName, RegisteredCompany, RegisterOfficeAndContract, RegisterOfShareholder, RegisterOfAllotments, RegisterOfCharge, RegisterOfSecretaries, RegisterOfTransfer, RegisterOfDirector, RegistersLogsController, SignificantController};

Route::prefix('manage')->group(function() { 
Route::controller(CompanyController::class)->group( function(){
Route::get('/companies/index', 'getAllCompanies');
Route::get('/get/company/{id}', 'getCompany');
Route::get('/incorporation/{company_id}', 'CompanyIncorporation');
Route::get('/incorporations/statuses', 'GetIncorporationStatuses');
Route::post('/incorporations/update', 'UpdateIncorporationStatus');
});

Route::post('/officecontract', [RegisterOfficeAndContract::class, 'RegisterOfficeAndContract']);
Route::post('/compliance/reporting', [ComplianceReportings::class, 'ComplianceReportings']);
Route::post('/directors',  [RegisterOfDirector::class, 'RegisterOfDirector']);
Route::post('/shareholders', [RegisterOfShareholder::class, 'RegisterOfShareholder']);
Route::post('/namechange', [RegisterChangeOfName::class,'RegisterChangeOfName']);
Route::post('/charges', [RegisterOfCharge::class, 'RegisterOfCharge']);
Route::post('/transfer', [ RegisterOfTransfer::class,'RegisterOfTransfer']);
Route::post('/secretaries', [RegisterOfSecretaries::class, 'RegisterOfSecretaries']);
Route::post('/allotments', [RegisterOfAllotments::class,'RegisterOfAllotments']);
Route::post('/controllers', [SignificantController::class,'SignificantController']);
Route::post('/representatives', [DesignatedRepresentatives::class,'DesignatedRepresentatives']);
Route::post('/company/logs', [RegistersLogsController::class,'GetRegisteredLogs']);
Route::post('/company', [RegisteredCompany::class,'RegisteredCompany']);

Route::controller(DashboardController::class)->group(function(){
    Route::get('/activitylog', 'AdminActivityLog');
    Route::post('company/stats/', 'GetCompanyStats');
    Route::post('/revenue/stats', 'getRevenueStats');
});

Route::controller(DocumentController::class)->group(function (){
Route::post('/upload/document/', 'ProcessDocuments');
Route::get('/get/documents/{company_id}', 'Getdocuments');
Route::get('documents/delete/{document_id}', 'deleteDocument');
});

Route::controller(UserController::class)->group(function() {
    Route::get('/users', 'getUsers');
    Route::get('/get/user/companies/{user_id}', 'UserCompanies');
    Route::get('/get/user/billing/{user_id}', 'UserBilling');
    Route::post('/update/users/status/', 'UpdateUserStatus');
});
});

