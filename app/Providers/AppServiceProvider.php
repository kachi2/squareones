<?php

namespace App\Providers;

use App\Interfaces\ActivitiesInterface;
use App\Interfaces\CompanyFormationInterface;
use App\Interfaces\FileUploadInterface;
use App\Interfaces\OwnershipInterface;
use App\Interfaces\SecretaryInterface;
use App\Interfaces\CompanyEnityInterface;

use App\Services\ActivitiesService;
use Illuminate\Support\ServiceProvider;
use App\Services\CompanyServices;
use App\Services\FileUploadServices;
use App\Services\CompanyEntityService;
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
        app()->bind(CompanyEnityInterface::class, CompanyEntityService::class);
        app()->bind(OwnershipInterface::class, OwnershipService::class);
        app()->bind(SecretaryInterface::class, SecretaryService::class);
        app()->bind(ActivitiesInterface::class, ActivitiesService::class);
        app()->bind(FileUploadInterface::class, FileUploadServices::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
