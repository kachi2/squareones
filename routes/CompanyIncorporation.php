<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Manage\{CompanyController, DashboardController, DocumentController, UserController};



Route::controller(CompanyController::class)->group(function(){

Route::post('registered/company', 'RegisteredCompany');
Route::post('registered/office/contract', 'RegisterOfficeAndContract');
Route::post('compliance/reporting', 'ComplianceReportings');

});