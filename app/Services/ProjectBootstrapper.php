<?php

declare(strict_types=1);

namespace App\Services;

use App\Enums\ProjectType;
use App\Services\Contracts\ProjectBootstrapperContract;
use Illuminate\Support\Facades\Process;
use RuntimeException;

final readonly class ProjectBootstrapper implements ProjectBootstrapperContract
{
    public function bootstrap(string $projectPath, ProjectType $projectType): void
    {
        $repository = $this->getRepository($projectType);
        $this->cloneRepository($repository, $projectPath);
        $this->removeGitDirectory($projectPath);
        $this->copyEnvFile($projectPath);
        $this->composerInstall($projectPath);
        $this->generateAppKey($projectPath);
    }

    private function getRepository(ProjectType $projectType): string
    {
        return match ($projectType) {
            ProjectType::WEB_INERTIA, ProjectType::API_INERTIA => 'https://github.com/laravel/react-starter-kit.git',
            ProjectType::WEB_BLADE => 'https://github.com/laravel/laravel.git',
            ProjectType::WEB_LIVEWIRE => 'https://github.com/laravel/livewire-starter-kit.git',
            ProjectType::API_JSON => 'https://github.com/laravel/laravel.git',
        };
    }

    private function cloneRepository(string $repository, string $projectPath): void
    {
        $result = Process::timeout(600)->run(
            "git clone {$repository} {$projectPath}"
        );

        if (! $result->successful()) {
            throw new RuntimeException("Failed to clone repository: {$result->errorOutput()}");
        }
    }

    private function removeGitDirectory(string $projectPath): void
    {
        $result = Process::timeout(30)->run(
            "rm -rf {$projectPath}/.git"
        );

        if (! $result->successful()) {
            throw new RuntimeException("Failed to remove .git directory: {$result->errorOutput()}");
        }
    }

    private function copyEnvFile(string $projectPath): void
    {
        $result = Process::timeout(10)->run(
            "cp {$projectPath}/.env.example {$projectPath}/.env"
        );

        if (! $result->successful()) {
            throw new RuntimeException("Failed to copy .env file: {$result->errorOutput()}");
        }
    }

    private function composerInstall(string $projectPath): void
    {
        $result = Process::timeout(600)->path($projectPath)->run(
            'composer install --no-interaction'
        );

        if (! $result->successful()) {
            throw new RuntimeException("Failed to install composer dependencies: {$result->errorOutput()}");
        }
    }

    private function generateAppKey(string $projectPath): void
    {
        $result = Process::timeout(60)->path($projectPath)->run(
            'php artisan key:generate --no-interaction'
        );

        if (! $result->successful()) {
            throw new RuntimeException("Failed to generate app key: {$result->errorOutput()}");
        }
    }
}
