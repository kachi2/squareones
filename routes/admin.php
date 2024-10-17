<?php 

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Manage\{AuthController, CompanyServiceController, DashboardController, DocumentController, PaymentController, UserController};

Route::prefix('manage')->group(function() {
    Route::post('/login', [AuthController::class, 'LoginAdmin']);
    Route::middleware('auth:sanctum')->group(function() { 
        require __DIR__.'/CompanyIncorporation.php';
    Route::controller(DashboardController::class)->group(function(){
        Route::get('/activitylog', 'AdminActivityLog');
        Route::get('/user/activities', 'UserActivities');
        Route::post('company/stats/', 'GetCompanyStats');
        Route::post('/revenue/stats', 'getRevenueStats');
        Route::get('document/types', 'getDocType');
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

    Route::controller(PaymentController::class)->group(function() {
        Route::post('/create/stripe/product', 'CreateStripeProduct');
        Route::post('/update/stripe/product', 'UpdateStripeProduct');
        Route::get('/get/plans', 'getActivePlan');
        Route::get('get/stripe/invoices', 'getInvoices');
        Route::get('/get/stripe/paid/invoices', 'PaidInvoice');
        Route::get('/get/stripe/unpaid/invoices', 'UnpaidInvoice');
        Route::get('/get/subscribers', 'Subscribers');
        Route::get('sync/invoices', 'updateInvoices');
        Route::get('retrieve/invoices', 'InvoiceMatrics');
        });
    
    Route::get('/services/company', [CompanyServiceController::class, 'getServices']);
    Route::post('/services/company/store/{company_id}', [CompanyServiceController::class, 'StoreService']);
    });
});