<?php

declare(strict_types=1);

use App\Enums\ProjectType;
use App\Services\ProjectBootstrapper;
use Illuminate\Support\Facades\Process;

it('uses blade repository for WEB_BLADE', function (): void {
    $projectPath = base_path('tmp/project-blade');

    Process::fake([
        '*' => Process::result('', '', 0),
    ]);

    new ProjectBootstrapper()->bootstrap($projectPath, ProjectType::WEB_BLADE);

    Process::assertRan("git clone https://github.com/laravel/laravel.git {$projectPath}");
});

it('uses livewire repository for WEB_LIVEWIRE', function (): void {
    $projectPath = base_path('tmp/project-livewire');

    Process::fake([
        '*' => Process::result('', '', 0),
    ]);

    new ProjectBootstrapper()->bootstrap($projectPath, ProjectType::WEB_LIVEWIRE);

    Process::assertRan("git clone https://github.com/laravel/livewire-starter-kit.git {$projectPath}");
});
