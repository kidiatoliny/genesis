<?php

declare(strict_types=1);

use App\Actions\GenerateActionsAction;
use App\Actions\GenerateControllersAction;
use App\Actions\GenerateMigrationsAction;
use App\Actions\GenerateModelsAction;
use App\Actions\GeneratePoliciesAction;
use App\Actions\GenerateProjectAction;
use App\Actions\GenerateRequestsAction;
use App\Actions\GenerateResourcesAction;
use App\Actions\GenerateRoutesAction;
use App\Models\Schema;
use App\Services\Contracts\ProjectBootstrapperContract;
use App\Services\ControllerGenerator;
use App\Services\RequestGenerator;
use App\Services\RouteGenerator;
use App\Services\TemplateEngine;

it('generates project structure from schema', function (): void {
    $schema = Schema::factory()->create([
        'project_type' => 'web_inertia',
        'response_type' => 'inertia',
        'view_engine' => 'inertia_react',
        'definition' => json_encode([
            'models' => [
                [
                    'name' => 'Post',
                    'fields' => [
                        ['name' => 'title', 'type' => 'string'],
                        ['name' => 'content', 'type' => 'text'],
                    ],
                ],
            ],
        ]),
    ]);

    $engine = new TemplateEngine();
    $controllerGenerator = new ControllerGenerator($engine);
    $requestGenerator = new RequestGenerator();
    $routeGenerator = new RouteGenerator($engine);

    $bootstrapper = Mockery::mock(ProjectBootstrapperContract::class);
    $bootstrapper->shouldReceive('bootstrap')->once();

    $action = new GenerateProjectAction(
        $bootstrapper,
        $engine,
        $controllerGenerator,
        $requestGenerator,
        new GenerateModelsAction($engine),
        new GenerateMigrationsAction($engine),
        new GenerateControllersAction($controllerGenerator),
        new GenerateRequestsAction($requestGenerator),
        new GenerateResourcesAction($engine),
        new GeneratePoliciesAction($engine),
        new GenerateActionsAction($engine),
        new GenerateRoutesAction($routeGenerator),
    );

    $result = $action->handle($schema);

    expect($result)->toHaveKeys(['projectPath', 'schemaName', 'definition'])
        ->and($result['schemaName'])->toBe($schema->name);
});

it('throws error for invalid schema definition', function (): void {
    $schema = Schema::factory()->create([
        'definition' => 'invalid json',
    ]);

    $engine = new TemplateEngine();
    $controllerGenerator = new ControllerGenerator($engine);
    $requestGenerator = new RequestGenerator();
    $routeGenerator = new RouteGenerator($engine);

    $bootstrapper = Mockery::mock(ProjectBootstrapperContract::class);

    $action = new GenerateProjectAction(
        $bootstrapper,
        $engine,
        $controllerGenerator,
        $requestGenerator,
        new GenerateModelsAction($engine),
        new GenerateMigrationsAction($engine),
        new GenerateControllersAction($controllerGenerator),
        new GenerateRequestsAction($requestGenerator),
        new GenerateResourcesAction($engine),
        new GeneratePoliciesAction($engine),
        new GenerateActionsAction($engine),
        new GenerateRoutesAction($routeGenerator),
    );

    expect(fn (): array => $action->handle($schema))->toThrow(InvalidArgumentException::class);
});
