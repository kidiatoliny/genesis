<?php

declare(strict_types=1);

use App\Enums\ProjectType;
use App\Services\RequestGenerator;

it('generates rules for various field types', function (): void {
    $gen = new RequestGenerator();

    $fields = [
        ['name' => 'email', 'type' => 'email'],
        ['name' => 'data', 'type' => 'json', 'required' => false],
        ['name' => 'when', 'type' => 'time'],
        ['name' => 'date_of_birth', 'type' => 'date'],
        ['name' => 'meeting_at', 'type' => 'datetime'],
        ['name' => 'id', 'type' => 'uuid'],
        ['name' => 'kind', 'type' => 'enum'],
        ['name' => 'desc', 'type' => 'text'],
        ['name' => 'other', 'type' => 'unknown'],
    ];

    $store = $gen->generateStore('Item', $fields, ProjectType::API_JSON);
    $update = $gen->generateUpdate('Item', $fields, ProjectType::API_JSON);

    expect($store)
        ->toContain("'email' => ['required', 'email']")
        ->toContain("'data' => ['nullable', 'json']")
        ->toContain("'when' => ['required', 'date']")
        ->toContain("'date_of_birth' => ['required', 'date']")
        ->toContain("'meeting_at' => ['required', 'date']")
        ->toContain("'id' => ['required', 'uuid']")
        ->toContain("'kind' => ['required', 'string']")
        ->toContain("'desc' => ['required', 'string']")
        ->toContain("'other' => ['required', 'string']");

    expect($update)
        ->toContain("'email' => ['sometimes', 'email']")
        ->toContain("'data' => ['sometimes', 'json']");
});
