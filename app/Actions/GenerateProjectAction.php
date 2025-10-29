<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Schema;
use App\Services\Contracts\ProjectBootstrapperContract;
use Illuminate\Support\Str;
use InvalidArgumentException;

final readonly class GenerateProjectAction
{
    public function __construct(
        private ProjectBootstrapperContract $bootstrapper,
        private GenerateModelsAction $generateModels,
        private GenerateMigrationsAction $generateMigrations,
        private GenerateControllersAction $generateControllers,
        private GenerateRequestsAction $generateRequests,
        private GenerateResourcesAction $generateResources,
        private GeneratePoliciesAction $generatePolicies,
        private GenerateActionsAction $generateActions,
        private GenerateRoutesAction $generateRoutes,
    ) {}

    /**
     * @return array<string, mixed>
     */
    public function handle(Schema $schema): array
    {
        $definition = json_decode($schema->definition, true);

        throw_unless(is_array($definition), InvalidArgumentException::class, 'Invalid schema definition');

        $projectPath = storage_path('generated_projects/'.Str::random(16));
        $projectType = \App\Enums\ProjectType::from($schema->project_type);

        $this->bootstrapper->bootstrap($projectPath, $projectType);

        $definition['project_type'] = $schema->project_type;
        $definition['response_type'] = $schema->response_type;
        $definition['view_engine'] = $schema->view_engine;

        $this->generateModels->handle($definition, $projectPath);
        $this->generateMigrations->handle($definition, $projectPath);
        $this->generateControllers->handle($definition, $projectPath);
        $this->generateRequests->handle($definition, $projectPath);
        $this->generateResources->handle($definition, $projectPath);
        $this->generatePolicies->handle($definition, $projectPath);
        $this->generateActions->handle($definition, $projectPath);
        $this->generateRoutes->handle($definition, $projectPath);

        return [
            'projectPath' => $projectPath,
            'schemaName' => $schema->name,
            'definition' => $definition,
        ];
    }
}
