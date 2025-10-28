<?php

declare(strict_types=1);

namespace App\Actions;

use App\Services\TemplateEngine;
use Illuminate\Support\Facades\File;

final readonly class GenerateRequestsAction
{
    public function __construct(private TemplateEngine $engine) {}

    /**
     * @param  array<string, mixed>  $definition
     */
    public function handle(array $definition, string $projectPath): void
    {
        $requestsPath = $projectPath.'/app/Http/Requests';
        File::makeDirectory($requestsPath, 0755, true, true);

        $models = $definition['models'] ?? [];

        foreach ($models as $model) {
            $modelName = $model['name'] ?? 'Model';
            $fields = $model['fields'] ?? [];

            $validationRules = collect($fields)
                ->map(function ($field) {
                    $name = $field['name'];
                    $type = $field['type'] ?? 'string';
                    $required = $field['required'] ?? true ? 'required|' : 'nullable|';

                    return "'{$name}' => '{$required}".$this->getValidationRule($type)."'";
                })
                ->implode(','.PHP_EOL.'            ');

            $storeContent = $this->engine->render(
                File::get(base_path('stubs/request.stub')),
                [
                    'requestName' => 'Store'.$modelName,
                    'validationRules' => $validationRules,
                ]
            );

            File::put($requestsPath."/Store{$modelName}Request.php", $storeContent);

            $updateContent = $this->engine->render(
                File::get(base_path('stubs/request.stub')),
                [
                    'requestName' => 'Update'.$modelName,
                    'validationRules' => $validationRules,
                ]
            );

            File::put($requestsPath."/Update{$modelName}Request.php", $updateContent);
        }
    }

    private function getValidationRule(string $type): string
    {
        return match ($type) {
            'integer', 'number' => 'integer',
            'boolean' => 'boolean',
            'json' => 'json',
            'datetime', 'timestamp', 'date', 'time' => 'date',
            'uuid' => 'uuid',
            'email' => 'email',
            'url' => 'url',
            'text' => 'string',
            'enum' => 'string',
            default => 'string',
        };
    }
}
