<?php

namespace App\Providers;

use App\Interfaces\ActivitiesInterface;
use App\Interfaces\CompanyFormationInterface;
use App\Interfaces\FounderInterface;
use App\Interfaces\OwnershipInterface;
use App\Interfaces\SecretaryInterface;
use App\Services\ActivitiesService;
use Illuminate\Support\ServiceProvider;
use App\Services\CompanyServices;
use App\Services\FounderService;
use App\Services\OwnershipService;
use App\Services\SecretaryService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        app()->bind(CompanyFormationInterface::class, CompanyServices::class);
        app()->bind(FounderInterface::class, FounderService::class);
        app()->bind(OwnershipInterface::class, OwnershipService::class);
        app()->bind(SecretaryInterface::class, SecretaryService::class);
        app()->bind(ActivitiesInterface::class, ActivitiesService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
