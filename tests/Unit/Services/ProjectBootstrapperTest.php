<?php

declare(strict_types=1);

use App\Enums\ProjectType;
use App\Services\ProjectBootstrapper;
use Illuminate\Support\Facades\Process;

it('bootstraps project by running expected commands', function (): void {
    $projectPath = base_path('tmp/project-path');

    Process::fake([
        // Match any command by default as successful
        '*' => Process::result(output: '', errorOutput: '', exitCode: 0),
    ]);

    // Run bootstrap
    new ProjectBootstrapper()->bootstrap($projectPath, ProjectType::WEB_INERTIA);

    // Assert commands were invoked
    Process::assertRan("git clone https://github.com/laravel/react-starter-kit.git {$projectPath}");
    Process::assertRan("rm -rf {$projectPath}/.git");
    Process::assertRan("cp {$projectPath}/.env.example {$projectPath}/.env");
    Process::assertRan(fn ($process): bool => $process->command === 'composer install --no-interaction'
        && $process->path === $projectPath);
    Process::assertRan(fn ($process): bool => $process->command === 'php artisan key:generate --no-interaction'
        && $process->path === $projectPath);
});
it('throws when a step fails', function (): void {
    $projectPath = base_path('tmp/project-path');

    Process::fake([
        // Fail the clone, others succeed
        "git clone https://github.com/laravel/react-starter-kit.git {$projectPath}" => Process::result('', 'failed', 1),
        '*' => Process::result('', '', 0),
    ]);

    expect(fn () => new ProjectBootstrapper()->bootstrap($projectPath, ProjectType::WEB_INERTIA))
        ->toThrow(RuntimeException::class);
});
