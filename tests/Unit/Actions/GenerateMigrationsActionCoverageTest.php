<?php

declare(strict_types=1);

use App\Actions\GenerateMigrationsAction;
use App\Services\TemplateEngine;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

it('generates migrations with proper columns', function (): void {
    $engine = new TemplateEngine();
    $action = new GenerateMigrationsAction($engine);

    $projectPath = base_path('storage/framework/testing/'.Str::random(8));
    File::deleteDirectory($projectPath);

    $definition = [
        'models' => [[
            'name' => 'Post',
            'fields' => [
                ['name' => 'title', 'type' => 'string'],
                ['name' => 'count', 'type' => 'integer'],
                ['name' => 'is_active', 'type' => 'boolean'],
                ['name' => 'metadata', 'type' => 'json'],
                ['name' => 'published_at', 'type' => 'timestamp'],
                ['name' => 'born_on', 'type' => 'date'],
                ['name' => 'alarm_at', 'type' => 'time'],
                ['name' => 'uuid', 'type' => 'uuid'],
                ['name' => 'notes', 'type' => 'text'],
                ['name' => 'status', 'type' => 'enum'],
            ],
        ]],
    ];

    $action->handle($definition, $projectPath);

    $migrations = glob($projectPath.'/database/migrations/*.php');
    expect($migrations)->not->toBeEmpty();
    $content = File::get($migrations[0]);

    expect($content)
        ->toContain("\$table->string('title');")
        ->toContain("\$table->integer('count');")
        ->toContain("\$table->boolean('is_active');")
        ->toContain("\$table->json('metadata');")
        ->toContain("\$table->timestamp('published_at');")
        ->toContain("\$table->date('born_on');")
        ->toContain("\$table->time('alarm_at');")
        ->toContain("\$table->uuid('uuid');")
        ->toContain("\$table->text('notes');")
        ->toContain("\$table->enum('status', []);");
});
