<?php

namespace App\Providers;

use App\Interfaces\CompanyFormationInterface;
use App\Interfaces\FounderInterface;
use Illuminate\Support\ServiceProvider;
use App\Services\CompanyServices;
use App\Services\FounderService;

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
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
