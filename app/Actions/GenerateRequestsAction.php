<?php

declare(strict_types=1);

namespace App\Actions;

use App\Enums\ProjectType;
use App\Services\RequestGenerator;
use Illuminate\Support\Facades\File;

final readonly class GenerateRequestsAction
{
    public function __construct(private RequestGenerator $generator) {}

    /**
     * @param  array<string, mixed>  $definition
     */
    public function handle(array $definition, string $projectPath): void
    {
        $projectType = ProjectType::tryFrom($definition['project_type'] ?? 'web_inertia') ?? ProjectType::WEB_INERTIA;

        $requestsPath = $projectPath.'/app/Http/Requests';
        File::makeDirectory($requestsPath, 0755, true, true);

        $models = $definition['models'] ?? [];

        foreach ($models as $model) {
            $modelName = $model['name'] ?? 'Model';
            $fields = $model['fields'] ?? [];

            $storeContent = $this->generator->generateStore($modelName, $fields, $projectType);
            File::put($requestsPath."/Store{$modelName}Request.php", $storeContent);

            $updateContent = $this->generator->generateUpdate($modelName, $fields, $projectType);
            File::put($requestsPath."/Update{$modelName}Request.php", $updateContent);
        }
    }
}
