<?php

namespace App\Providers;

use App\Interfaces\CompanyFormationInterface;
use Illuminate\Support\ServiceProvider;
use App\Services\CompanyServices;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        app()->bind(CompanyFormationInterface::class, CompanyServices::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
