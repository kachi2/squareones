<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Manage\{CompanyController, DashboardController, DocumentController, UserController};

Route::controller(CompanyController::class)->group(function(){
Route::post('manage/company', 'RegisteredCompany');
Route::post('manage/officecontract', 'RegisterOfficeAndContract');
Route::post('manage/compliance/reporting', 'ComplianceReportings');
Route::post('manage/directors', 'RegisterOfDirector');
Route::post('manage/shareholders/', 'RegisterOfShareholder');
Route::post('manage/namechange', 'RegisterChangeOfName');
Route::post('manage/charges', 'RegisterOfCharge');
Route::post('manage/secretaries', 'RegisterOfSecretaries');
Route::post('manage/allotments', 'RegisterOfAllotments');
Route::post('manage/controllers', 'SignificantController');
Route::post('manage/representatives', 'DesignatedRepresentatives');
});