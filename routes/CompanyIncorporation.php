<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Manage\{CompanyController, DashboardController, DocumentController, UserController, ComplianceReportings, DesignatedRepresentatives,
    RegisterChangeOfName, RegisteredCompany, RegisterOfficeAndContract, RegisterOfShareholder, RegisterOfAllotments, RegisterOfCharge, RegisterOfSecretaries, RegisterOfTransfer, RegisterOfDirector, RegistersLogsController, SignificantController};

Route::controller(CompanyController::class)->group( function(){
Route::get('/companies/index', 'getAllCompanies');
Route::get('/get/company/{id}', 'getCompany');
Route::get('/incorporation/{company_id}', 'CompanyIncorporation');
Route::get('/incorporations/statuses', 'GetIncorporationStatuses');
Route::post('/incorporations/update', 'UpdateIncorporationStatus');
Route::get('/publish/company/{id}', 'PublishUserContent');
Route::get('/company/progress/{id?}',  'getActiveCompany');
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


