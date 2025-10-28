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
use App\Services\ControllerGenerator;
use App\Services\RequestGenerator;
use App\Services\RouteGenerator;
use App\Services\TemplateEngine;
use Illuminate\Support\Facades\File;

it('generates project structure from schema', function () {
    $schema = Schema::factory()->create([
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
    $action = new GenerateProjectAction(
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
        ->and($result['schemaName'])->toBe($schema->name)
        ->and(File::isDirectory($result['projectPath']))->toBeTrue();
});

it('throws error for invalid schema definition', function () {
    $schema = Schema::factory()->create([
        'definition' => 'invalid json',
    ]);

    $engine = new TemplateEngine();
    $controllerGenerator = new ControllerGenerator($engine);
    $requestGenerator = new RequestGenerator();
    $routeGenerator = new RouteGenerator($engine);
    $action = new GenerateProjectAction(
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

    expect(fn () => $action->handle($schema))->toThrow(InvalidArgumentException::class);
});
