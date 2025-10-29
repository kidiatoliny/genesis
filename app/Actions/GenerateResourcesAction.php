<?php

declare(strict_types=1);

namespace App\Actions;

use App\Services\TemplateEngine;
use Illuminate\Support\Facades\File;

final readonly class GenerateResourcesAction
{
    public function __construct(private TemplateEngine $engine) {}

    /**
     * @param  array<string, mixed>  $definition
     */
    public function handle(array $definition, string $projectPath): void
    {
        $resourcesPath = $projectPath.'/app/Http/Resources';
        File::makeDirectory($resourcesPath, 0755, true, true);

        $models = $definition['models'] ?? [];

        foreach ($models as $model) {
            $modelName = $model['name'] ?? 'Model';
            $fields = $model['fields'] ?? [];

            $resourceFields = collect($fields)
                ->map(fn (array $field) => "'{$field['name']}' => \$this->{$field['name']}")
                ->implode(','.PHP_EOL.'            ');

            $firstField = $fields[0]['name'] ?? 'name';

            $content = $this->engine->render(
                File::get(base_path('stubs/resource.stub')),
                [
                    'modelName' => $modelName,
                    'resourceFields' => $resourceFields,
                    'firstField' => $firstField,
                ]
            );

            File::put($resourcesPath."/{$modelName}Resource.php", $content);
        }
    }
}
