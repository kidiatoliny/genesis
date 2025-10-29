<?php

declare(strict_types=1);

use App\Enums\ProjectType;
use App\Services\ControllerGenerator;
use App\Services\TemplateEngine;

function makeController(string $type): string
{
    $gen = new ControllerGenerator(new TemplateEngine());

    return $gen->generate(
        modelName: 'Post',
        modelVar: 'post',
        modelPlural: 'Posts',
        projectType: ProjectType::from($type),
    );
}

it('generates API JSON controller', function (): void {
    $out = makeController('api_json');

    expect($out)
        ->toContain('namespace App\\Http\\Controllers;')
        ->toContain('final readonly class PostController')
        ->toContain('public function index(): ResourceCollection')
        ->toContain('JsonResponse')
        ->toContain('response()->json')
        ->toContain('public function destroy(Post $post): JsonResponse');
});

it('generates API controller under Api namespace', function (): void {
    $out = makeController('api_inertia');

    expect($out)
        ->toContain('namespace App\\Http\\Controllers\\Api;')
        ->toContain('final readonly class PostController');
});

it('generates WEB Blade controller', function (): void {
    $out = makeController('web_blade');

    expect($out)
        ->toContain('namespace App\\Http\\Controllers;')
        ->toContain('use Illuminate\\View\\View;')
        ->toContain("return view('Posts.index'")
        ->toContain('RedirectResponse');
});

it('generates WEB Inertia controller', function (): void {
    $out = makeController('web_inertia');

    expect($out)
        ->toContain('namespace App\\Http\\Controllers;')
        ->toContain('use Inertia\\Inertia;')
        ->toContain("return Inertia::render('Posts/Index'")
        ->toContain('RedirectResponse');
});

it('generates Livewire component controller', function (): void {
    $out = makeController('web_livewire');

    expect($out)
        ->toContain('namespace App\\Livewire\\Posts;')
        ->toContain('final class PostComponent extends Component')
        ->toContain("return view('livewire.Posts.post-component');");
});
