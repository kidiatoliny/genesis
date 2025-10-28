<?php

declare(strict_types=1);

namespace App\Actions;

use App\Services\TemplateEngine;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

final readonly class GeneratePoliciesAction
{
    public function __construct(private TemplateEngine $engine) {}

    /**
     * @param  array<string, mixed>  $definition
     */
    public function handle(array $definition, string $projectPath): void
    {
        $policiesPath = $projectPath.'/app/Policies';
        File::makeDirectory($policiesPath, 0755, true, true);

        $models = $definition['models'] ?? [];

        foreach ($models as $model) {
            $modelName = $model['name'] ?? 'Model';
            $modelVar = Str::camel($modelName);

            $content = $this->engine->render(
                File::get(base_path('stubs/policy.stub')),
                [
                    'modelName' => $modelName,
                    'modelVar' => $modelVar,
                ]
            );

            File::put($policiesPath."/{$modelName}Policy.php", $content);
        }
    }
}
