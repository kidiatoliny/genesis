<?php

declare(strict_types=1);

use App\Enums\ProjectType;
use App\Services\ProjectBootstrapper;
use Illuminate\Support\Facades\Process;

it('fails when removing .git directory fails', function (): void {
    $projectPath = base_path('tmp/project-fail-git');

    Process::fake([
        "git clone https://github.com/laravel/react-starter-kit.git {$projectPath}" => Process::result('', '', 0),
        "rm -rf {$projectPath}/.git" => Process::result('', 'rm failed', 1),
        '*' => Process::result('', '', 0),
    ]);

    expect(fn () => new ProjectBootstrapper()->bootstrap($projectPath, ProjectType::WEB_INERTIA))
        ->toThrow(RuntimeException::class);
});

it('fails when copying env fails', function (): void {
    $projectPath = base_path('tmp/project-fail-env');

    Process::fake([
        "git clone https://github.com/laravel/react-starter-kit.git {$projectPath}" => Process::result('', '', 0),
        "rm -rf {$projectPath}/.git" => Process::result('', '', 0),
        "cp {$projectPath}/.env.example {$projectPath}/.env" => Process::result('', 'cp failed', 1),
        '*' => Process::result('', '', 0),
    ]);

    expect(fn () => new ProjectBootstrapper()->bootstrap($projectPath, ProjectType::WEB_INERTIA))
        ->toThrow(RuntimeException::class);
});

it('fails when composer install fails', function (): void {
    $projectPath = base_path('tmp/project-fail-composer');

    Process::fake([
        "git clone https://github.com/laravel/react-starter-kit.git {$projectPath}" => Process::result('', '', 0),
        "rm -rf {$projectPath}/.git" => Process::result('', '', 0),
        "cp {$projectPath}/.env.example {$projectPath}/.env" => Process::result('', '', 0),
        '*' => function ($process) use ($projectPath) {
            if ($process->command === 'composer install --no-interaction' && $process->path === $projectPath) {
                return Process::result('', 'composer failed', 1);
            }

            return Process::result('', '', 0);
        },
    ]);

    expect(fn () => new ProjectBootstrapper()->bootstrap($projectPath, ProjectType::WEB_INERTIA))
        ->toThrow(RuntimeException::class);
});

it('fails when key generate fails', function (): void {
    $projectPath = base_path('tmp/project-fail-key');

    Process::fake([
        "git clone https://github.com/laravel/react-starter-kit.git {$projectPath}" => Process::result('', '', 0),
        "rm -rf {$projectPath}/.git" => Process::result('', '', 0),
        "cp {$projectPath}/.env.example {$projectPath}/.env" => Process::result('', '', 0),
        '*' => function ($process) use ($projectPath) {
            if ($process->command === 'composer install --no-interaction' && $process->path === $projectPath) {
                return Process::result('', '', 0);
            }
            if ($process->command === 'php artisan key:generate --no-interaction' && $process->path === $projectPath) {
                return Process::result('', 'keygen failed', 1);
            }

            return Process::result('', '', 0);
        },
    ]);

    expect(fn () => new ProjectBootstrapper()->bootstrap($projectPath, ProjectType::WEB_INERTIA))
        ->toThrow(RuntimeException::class);
});
