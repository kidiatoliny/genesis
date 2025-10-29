<?php

declare(strict_types=1);

use App\Enums\ProjectType;
use App\Services\RouteGenerator;
use App\Services\TemplateEngine;

it('generates API JSON routes', function (): void {
    $gen = new RouteGenerator(new TemplateEngine());
    $out = $gen->generate('Post', 'post', 'posts', ProjectType::API_JSON);

    expect($out)->toBe("Route::apiResource('posts', PostController::class);");
});

it('generates API routes under Api namespace', function (): void {
    $gen = new RouteGenerator(new TemplateEngine());
    $out = $gen->generate('Post', 'post', 'posts', ProjectType::API_INERTIA);

    expect($out)->toBe("Route::apiResource('posts', Api\\PostController::class);");
});

it('generates WEB routes', function (): void {
    $gen = new RouteGenerator(new TemplateEngine());
    $outBlade = $gen->generate('Post', 'post', 'posts', ProjectType::WEB_BLADE);
    $outInertia = $gen->generate('Post', 'post', 'posts', ProjectType::WEB_INERTIA);

    expect($outBlade)->toBe("Route::resource('post', PostController::class);")
        ->and($outInertia)->toBe("Route::resource('post', PostController::class);");
});

it('generates Livewire routes', function (): void {
    $gen = new RouteGenerator(new TemplateEngine());
    $out = $gen->generate('Post', 'post', 'posts', ProjectType::WEB_LIVEWIRE);

    expect($out)
        ->toContain("Route::get('posts', \\App\\Livewire\\posts\\ListComponent::class)->name('post.index');")
        ->toContain("Route::get('posts/create', \\App\\Livewire\\posts\\CreateComponent::class)->name('post.create');")
        ->toContain("Route::get('posts/{id}/edit', \\App\\Livewire\\posts\\EditComponent::class)->name('post.edit');");
});
