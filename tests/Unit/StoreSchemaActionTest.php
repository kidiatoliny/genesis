<?php

declare(strict_types=1);

use App\Actions\StoreSchemaAction;
use App\Http\Requests\StoreSchemaRequest;
use App\Models\Schema;

it('stores a schema with valid data', function (): void {
    $request = new StoreSchemaRequest();
    $request->replace([
        'name' => 'Blog Schema',
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

    $action = new StoreSchemaAction();
    $schema = $action->handle($request);

    expect($schema)->toBeInstanceOf(Schema::class)
        ->and($schema->name)->toBe('Blog Schema')
        ->and($schema->definition)->not->toBeEmpty();

    $this->assertDatabaseHas('schemas', [
        'name' => 'Blog Schema',
    ]);
});

it('validates schema name is required', function (): void {
    $request = new StoreSchemaRequest();
    $request->replace([
        'definition' => json_encode(['models' => []]),
    ]);

    $rules = $request->rules();

    expect($rules['name'])->toContain('required');
});

it('validates definition is valid json', function (): void {
    $request = new StoreSchemaRequest();
    $request->replace([
        'name' => 'Test',
        'definition' => 'invalid json',
    ]);

    $rules = $request->rules();

    expect($rules['definition'])->toContain('json');
});
