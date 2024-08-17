<?php
namespace App\Providers;


use App\Interfaces\AuthInterface;
use App\Interfaces\CompanyFormationInterface;
use App\Interfaces\DocumentInterface;
use App\Interfaces\SecretaryInterface;
use App\Interfaces\CompanyEnityInterface;
use App\Interfaces\IncorporationInterface;
use App\Interfaces\KycInterface;
use App\Interfaces\PaymentInterface;
use App\Interfaces\SharesInterface;
use App\Interfaces\TeamsInterface;
use App\Services\AuthService;
use Illuminate\Support\ServiceProvider;
use App\Services\CompanyServices;
use Laravel\Cashier\Cashier;
use App\Services\DocumentServices;
use App\Services\CompanyEntityService;
use App\Services\IncorporationService;
use App\Services\KycProcessService;
use App\Services\PaymentServices;
use App\Services\SharesService;
use App\Services\SecretaryService;
use App\Services\TeamServices;
use App\Services\UserMetricsService;
use UserService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        app()->bind(CompanyFormationInterface::class, CompanyServices::class);
        app()->bind(CompanyEnityInterface::class, CompanyEntityService::class);
        app()->bind(SharesInterface::class, SharesService::class);
        app()->bind(SecretaryInterface::class, SecretaryService::class);
        app()->bind(DocumentInterface::class, DocumentServices::class);
        app()->bind(AuthInterface::class, AuthService::class);
        app()->bind(PaymentInterface::class, PaymentServices::class);
        app()->bind(KycInterface::class, KycProcessService::class);
        app()->bind(IncorporationInterface::class, IncorporationService::class);
        app()->bind(TeamsInterface::class, TeamServices::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
    
    }
}
