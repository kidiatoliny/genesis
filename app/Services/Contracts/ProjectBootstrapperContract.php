<?php

declare(strict_types=1);

namespace App\Services\Contracts;

use App\Enums\ProjectType;

interface ProjectBootstrapperContract
{
    public function bootstrap(string $projectPath, ProjectType $projectType): void;
}
