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
use App\Models\Schema;
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
    $action = new GenerateProjectAction(
        $engine,
        new GenerateModelsAction($engine),
        new GenerateMigrationsAction($engine),
        new GenerateControllersAction($engine),
        new GenerateRequestsAction($engine),
        new GenerateResourcesAction($engine),
        new GeneratePoliciesAction($engine),
        new GenerateActionsAction($engine),
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
    $action = new GenerateProjectAction(
        $engine,
        new GenerateModelsAction($engine),
        new GenerateMigrationsAction($engine),
        new GenerateControllersAction($engine),
        new GenerateRequestsAction($engine),
        new GenerateResourcesAction($engine),
        new GeneratePoliciesAction($engine),
        new GenerateActionsAction($engine),
    );

    expect(fn () => $action->handle($schema))->toThrow(InvalidArgumentException::class);
});
