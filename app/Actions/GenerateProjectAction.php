<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Schema;
use App\Services\TemplateEngine;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use InvalidArgumentException;

final readonly class GenerateProjectAction
{
    public function __construct(
        private TemplateEngine $engine,
        private GenerateModelsAction $generateModels,
        private GenerateMigrationsAction $generateMigrations,
        private GenerateControllersAction $generateControllers,
        private GenerateRequestsAction $generateRequests,
        private GenerateResourcesAction $generateResources,
        private GeneratePoliciesAction $generatePolicies,
        private GenerateActionsAction $generateActions,
    ) {}

    /**
     * @return array<string, mixed>
     */
    public function handle(Schema $schema): array
    {
        $definition = json_decode($schema->definition, true);

        if (! is_array($definition)) {
            throw new InvalidArgumentException('Invalid schema definition');
        }

        $projectPath = storage_path('generated_projects/'.Str::random(16));
        File::makeDirectory($projectPath, 0755, true, true);

        $this->generateModels->handle($definition, $projectPath);
        $this->generateMigrations->handle($definition, $projectPath);
        $this->generateControllers->handle($definition, $projectPath);
        $this->generateRequests->handle($definition, $projectPath);
        $this->generateResources->handle($definition, $projectPath);
        $this->generatePolicies->handle($definition, $projectPath);
        $this->generateActions->handle($definition, $projectPath);

        return [
            'projectPath' => $projectPath,
            'schemaName' => $schema->name,
            'definition' => $definition,
        ];
    }
}
