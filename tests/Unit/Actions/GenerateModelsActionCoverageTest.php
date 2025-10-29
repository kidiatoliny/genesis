<?php

declare(strict_types=1);

use App\Actions\GenerateModelsAction;
use App\Services\TemplateEngine;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

it('generates models with proper fillable and casts', function (): void {
    $engine = new TemplateEngine();
    $action = new GenerateModelsAction($engine);

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
                ['name' => 'published_at', 'type' => 'datetime'],
                ['name' => 'born_on', 'type' => 'date'],
                ['name' => 'alarm_at', 'type' => 'time'],
                ['name' => 'uuid', 'type' => 'uuid'],
                ['name' => 'status', 'type' => 'enum'],
                ['name' => 'notes', 'type' => 'text'],
            ],
        ]],
    ];

    $action->handle($definition, $projectPath);

    $modelPath = $projectPath.'/app/Models/Post.php';
    expect(File::exists($modelPath))->toBeTrue();
    $content = File::get($modelPath);

    expect($content)
        ->toContain('class Post extends Model')
        ->toContain("'title'")
        ->toContain("'count'")
        ->toContain("'is_active'")
        ->toContain("'metadata'")
        ->toContain("'published_at'")
        ->toContain("'born_on'")
        ->toContain("'alarm_at'")
        ->toContain("'uuid'")
        ->toContain("'status'")
        ->toContain("'notes'")
        ->toContain("'count' => 'integer'")
        ->toContain("'is_active' => 'boolean'")
        ->toContain("'metadata' => 'json'")
        ->toContain("'published_at' => 'datetime'")
        ->toContain("'born_on' => 'date'")
        ->toContain("'alarm_at' => 'time'")
        ->toContain("'uuid' => 'string'")
        ->toContain("'status' => 'string'");
});
