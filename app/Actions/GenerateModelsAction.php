<?php

declare(strict_types=1);

namespace App\Actions;

use App\Services\TemplateEngine;
use Illuminate\Support\Facades\File;

final readonly class GenerateModelsAction
{
    public function __construct(private TemplateEngine $engine) {}

    /**
     * @param  array<string, mixed>  $definition
     */
    public function handle(array $definition, string $projectPath): void
    {
        $modelsPath = $projectPath.'/app/Models';
        File::makeDirectory($modelsPath, 0755, true, true);

        $models = $definition['models'] ?? [];

        foreach ($models as $model) {
            $modelName = $model['name'] ?? 'Model';
            $fields = $model['fields'] ?? [];

            $fillableFields = collect($fields)
                ->map(fn ($field) => "'{$field['name']}'")
                ->implode(','.PHP_EOL.'        ');

            $castFields = collect($fields)
                ->map(function ($field) {
                    $type = $this->mapFieldType($field['type'] ?? 'string');

                    return "'{$field['name']}' => '{$type}'";
                })
                ->implode(','.PHP_EOL.'            ');

            $firstField = $fields[0]['name'] ?? 'name';

            $content = $this->engine->render(
                File::get(base_path('stubs/model.stub')),
                [
                    'modelName' => $modelName,
                    'fillableFields' => $fillableFields,
                    'castFields' => $castFields,
                    'firstField' => $firstField,
                ]
            );

            File::put($modelsPath."/{$modelName}.php", $content);
        }
    }

    private function mapFieldType(string $type): string
    {
        return match ($type) {
            'integer', 'number' => 'integer',
            'boolean' => 'boolean',
            'json' => 'json',
            'datetime', 'timestamp' => 'datetime',
            'date' => 'date',
            'time' => 'time',
            'uuid' => 'string',
            'enum' => 'string',
            default => 'string',
        };
    }
}
