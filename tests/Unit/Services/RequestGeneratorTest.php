<?php

declare(strict_types=1);

use App\Enums\ProjectType;
use App\Services\RequestGenerator;

it('generates API store request with correct rules', function (): void {
    $gen = new RequestGenerator();

    $fields = [
        ['name' => 'title', 'type' => 'string', 'required' => true],
        ['name' => 'published', 'type' => 'boolean', 'required' => false],
        ['name' => 'published_at', 'type' => 'datetime', 'required' => false],
        ['name' => 'views', 'type' => 'integer', 'required' => true],
        ['name' => 'url', 'type' => 'url'],
    ];

    $out = $gen->generateStore('Post', $fields, ProjectType::API_JSON);

    expect($out)
        ->toContain('final class StorePostRequest')
        ->toContain("'title' => ['required', 'string']")
        ->toContain("'published' => ['nullable', 'boolean']")
        ->toContain("'published_at' => ['nullable', 'date']")
        ->toContain("'views' => ['required', 'integer']")
        ->toContain("'url' => ['required', 'url']")
        ->not->toContain('function messages()');
});

it('generates WEB store request with messages method', function (): void {
    $gen = new RequestGenerator();

    $fields = [
        ['name' => 'title', 'type' => 'text', 'required' => true],
    ];

    $out = $gen->generateStore('Post', $fields, ProjectType::WEB_INERTIA);

    expect($out)
        ->toContain('final class StorePostRequest')
        ->toContain("'title' => ['required', 'string']")
        ->toContain('function messages(): array');
});

it('generates API update request with sometimes rules', function (): void {
    $gen = new RequestGenerator();

    $fields = [
        ['name' => 'title', 'type' => 'string'],
        ['name' => 'views', 'type' => 'integer'],
    ];

    $out = $gen->generateUpdate('Post', $fields, ProjectType::API_INERTIA);

    expect($out)
        ->toContain('final class UpdatePostRequest')
        ->toContain("'title' => ['sometimes', 'string']")
        ->toContain("'views' => ['sometimes', 'integer']")
        ->not->toContain('function messages()');
});
