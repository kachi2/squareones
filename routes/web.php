<?php
use App\Http\Controllers\CompanyActivityController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CompanyEntityController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\FounderController;
use App\Http\Controllers\CompanySharesController;
use App\Http\Controllers\DocumentSignController;
use App\Http\Controllers\FundSourceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SecretaryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KycController;
use App\Http\Controllers\PaymentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('load/founder/kyc/{company_id}/{company_entity_id}', [KycController::class, 'loadFounderView'])->name('load-founder-kycpage');

Route::get('/pdf/signature',[DocumentSignController::class, 'CreateTemplate']);
Route::post('signature/store', [DocumentSignController::class, 'ProcessSignature'])->name('signaturepad.upload');
Route::get('/pdf/pdf/{id}',[DocumentSignController::class, 'RenderPagePDF']);


Route::get('{path}', function () { 
  return view('index');
})->where('path', '^(.+)?$');


Route::fallback(function () {
    return view('index');
});

// Route::get('/payment', [PaymentController::class, 'loadPyamentPage']);
// Route::post('payment/intent', [PaymentController::class, 'PaymentIntent']);
// Route::get('process/payment', [PaymentController::class, 'ProcessPayment'])->name('ProcessPayment');


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::controller(CompanyController::class)->group(function(){
//     Route::post('company/create',  'InitiateCompanyCreation');
//     Route::post('/company/description/store', 'StoreCompanyDescription');
//     Route::post('company/address/store', 'StoreCompanyAddress');
// });

// Route::controller(CompanyEntityController::class)->group(function(){
// Route::post('entity/store', 'StoreEntity');
// });


// Route::post('shares/store', [CompanySharesController::class, 'StoreShares']);

// Route::post('/secretary/store', [SecretaryController::class, 'StoreSecretary']);
// Route::post('activities/store', [CompanyActivityController::class, 'CompanyActivities']);
// Route::post('fundsource/store', [FundSourceController::class, 'FundSource']);
// Route::post('upload/docs', [FileUploadController::class, 'ProcessDocuments']);

// Route::get('/', [HomeController::class, '__invoke'])->name('companyformation');
// Route::get('/companyformation', [HomeController::class, '__invoke'])->name('companyformation');




// Route::get('kyc/load', [KycController::class, 'loadKyc']);


