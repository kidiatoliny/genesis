<?php

declare(strict_types=1);

namespace App\Providers;

use App\Services\Contracts\ProjectBootstrapperContract;
use App\Services\ProjectBootstrapper;
use Illuminate\Support\ServiceProvider;

final class ProjectBootstrapperProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(
            ProjectBootstrapperContract::class,
            ProjectBootstrapper::class
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void {}
}
