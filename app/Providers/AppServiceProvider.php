<?php

namespace App\Providers;

use App\Interfaces\ActivitiesInterface;
use App\Interfaces\CompanyFormationInterface;
use App\Interfaces\FileUploadInterface;
use App\Interfaces\SecretaryInterface;
use App\Interfaces\CompanyEnityInterface;
use App\Interfaces\SharesInterface;
use App\Services\ActivitiesService;
use Illuminate\Support\ServiceProvider;
use App\Services\CompanyServices;
use App\Services\FileUploadServices;
use App\Services\CompanyEntityService;
use App\Services\SharesService;
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
        app()->bind(SharesInterface::class, SharesService::class);
        app()->bind(SecretaryInterface::class, SecretaryService::class);
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
