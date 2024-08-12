<?php 

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Manage\{AuthController, DashboardController, DocumentController, UserController};

Route::prefix('manage')->group(function() {
    Route::post('/login', [AuthController::class, 'LoginAdmin']);
    Route::middleware('admin.sanctum')->group(function() { 
        require __DIR__.'/CompanyIncorporation.php';
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
            Route::get('/users/billing/', 'UsersBilling');
            Route::post('/update/users/status/', 'UpdateUserStatus');
        });
});
});