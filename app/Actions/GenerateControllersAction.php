<?php

declare(strict_types=1);

namespace App\Actions;

use App\Services\TemplateEngine;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

final readonly class GenerateControllersAction
{
    public function __construct(private TemplateEngine $engine) {}

    /**
     * @param  array<string, mixed>  $definition
     */
    public function handle(array $definition, string $projectPath): void
    {
        $controllersPath = $projectPath.'/app/Http/Controllers';
        File::makeDirectory($controllersPath, 0755, true, true);

        $models = $definition['models'] ?? [];

        foreach ($models as $model) {
            $modelName = $model['name'] ?? 'Model';
            $modelVar = Str::camel($modelName);
            $modelPlural = Str::plural($modelName);

            $content = $this->engine->render(
                File::get(base_path('stubs/controller.stub')),
                [
                    'modelName' => $modelName,
                    'modelVar' => $modelVar,
                    'modelPlural' => $modelPlural,
                ]
            );

            File::put($controllersPath."/{$modelName}Controller.php", $content);
        }
    }
}
