<?php

declare(strict_types=1);

namespace App\Actions;

use App\Enums\ProjectType;
use App\Enums\ResponseType;
use App\Enums\ViewEngine;
use App\Services\ControllerGenerator;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

final readonly class GenerateControllersAction
{
    public function __construct(private ControllerGenerator $generator) {}

    /**
     * @param  array<string, mixed>  $definition
     */
    public function handle(array $definition, string $projectPath): void
    {
        $projectType = ProjectType::tryFrom($definition['project_type'] ?? 'web_inertia') ?? ProjectType::WEB_INERTIA;
        $responseType = ResponseType::tryFrom($definition['response_type'] ?? 'inertia') ?? ResponseType::INERTIA;
        $viewEngine = ($definition['view_engine'] ?? null) ? ViewEngine::tryFrom($definition['view_engine']) : ViewEngine::INERTIA_REACT;

        $controllersPath = $projectPath.'/app/Http/Controllers';
        File::makeDirectory($controllersPath, 0755, true, true);

        $models = $definition['models'] ?? [];

        foreach ($models as $model) {
            $modelName = $model['name'] ?? 'Model';
            $modelVar = Str::camel($modelName);
            $modelPlural = Str::plural($modelName);

            $content = $this->generator->generate(
                $modelName,
                $modelVar,
                $modelPlural,
                $projectType,
                $responseType,
                $viewEngine,
            );

            File::put($controllersPath."/{$modelName}Controller.php", $content);
        }
    }
}
