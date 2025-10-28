<?php

declare(strict_types=1);

use App\Services\TemplateEngine;

it('renders template with replacements', function () {
    $engine = new TemplateEngine();
    $stub = 'Hello {{ name }}, you are {{ age }} years old';

    $result = $engine->render($stub, [
        'name' => 'John',
        'age' => 30,
    ]);

    expect($result)->toBe('Hello John, you are 30 years old');
});

it('handles multiple spacing formats', function () {
    $engine = new TemplateEngine();
    $stub = 'Hello {{ name }}, welcome {{company}}';

    $result = $engine->render($stub, [
        'name' => 'John',
        'company' => 'Acme Corp',
    ]);

    expect($result)->toBe('Hello John, welcome Acme Corp');
});

it('renders from file', function () {
    $stubPath = base_path('stubs/model.stub');
    $engine = new TemplateEngine();

    $result = $engine->renderFromFile($stubPath, [
        'modelName' => 'Post',
        'fillableFields' => "'title', 'content'",
        'castFields' => "'id' => 'integer'",
        'firstField' => 'title',
    ]);

    expect($result)->toContain('class Post extends Model')
        ->toContain("'title'")
        ->toContain("'content'");
});

it('throws error for non-existent file', function () {
    $engine = new TemplateEngine();

    expect(fn () => $engine->renderFromFile('/non/existent/file.stub', []))
        ->toThrow(InvalidArgumentException::class);
});
