<?php

declare(strict_types=1);

use App\Models\Schema;
use App\Models\User;
use App\Services\Contracts\ProjectBootstrapperContract;

it('renders builder index for authenticated and verified users', function (): void {
    $user = User::factory()->create(['email_verified_at' => now()]);
    Schema::factory()->create();

    $response = $this->actingAs($user)->get(route('builder.index'));
    $response->assertOk();
});

it('stores schema via request validation', function (): void {
    $user = User::factory()->create(['email_verified_at' => now()]);

    $response = $this->actingAs($user)->post(route('builder.store'), [
        'name' => 'Test Schema',
        'definition' => json_encode(['models' => []]),
        'project_type' => 'web_inertia',
        'response_type' => 'inertia',
        'view_engine' => 'inertia_react',
    ]);

    $response->assertOk();
});

it('validates schema request with invalid json', function (): void {
    $user = User::factory()->create(['email_verified_at' => now()]);

    $response = $this->actingAs($user)->post(route('builder.store'), [
        'name' => 'Bad',
        'definition' => 'not-json',
    ]);

    $response->assertStatus(302);
    $response->assertSessionHasErrors(['definition']);
});

it('downloads generated project as zip', function (): void {
    $user = User::factory()->create(['email_verified_at' => now()]);
    $schema = Schema::factory()->create([
        'definition' => json_encode([
            'models' => [[
                'name' => 'Post',
                'fields' => [
                    ['name' => 'title', 'type' => 'string'],
                ],
            ]],
        ]),
    ]);

    // Prevent actual external processes in bootstrap
    $this->instance(ProjectBootstrapperContract::class, new class implements ProjectBootstrapperContract
    {
        public function bootstrap(string $projectPath, App\Enums\ProjectType $projectType): void
        {
            // no-op
        }
    });

    $response = $this->actingAs($user)->get(route('builder.download', $schema));
    $response->assertOk();
    $response->assertHeader('content-type', 'application/zip');
});
