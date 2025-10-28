<?php

declare(strict_types=1);

namespace App\Services;

use App\Enums\ProjectType;

final readonly class RouteGenerator
{
    public function __construct(private TemplateEngine $engine) {}

    public function generate(
        string $modelName,
        string $modelVar,
        string $modelPlural,
        ProjectType $projectType,
    ): string {
        return match ($projectType) {
            ProjectType::API_JSON => $this->generateApiJsonRoutes($modelName, $modelVar, $modelPlural),
            ProjectType::API_INERTIA => $this->generateApiRoutes($modelName, $modelVar, $modelPlural),
            ProjectType::WEB_BLADE => $this->generateWebRoutes($modelName, $modelVar, $modelPlural),
            ProjectType::WEB_INERTIA => $this->generateWebRoutes($modelName, $modelVar, $modelPlural),
            ProjectType::WEB_LIVEWIRE => $this->generateLivewireRoutes($modelName, $modelVar, $modelPlural),
        };
    }

    private function generateApiJsonRoutes(string $modelName, string $modelVar, string $modelPlural): string
    {
        $template = <<<'PHP'
Route::apiResource('{{ modelPlural }}', {{ modelName }}Controller::class);
PHP;

        return $this->engine->render($template, [
            'modelName' => $modelName,
            'modelVar' => $modelVar,
            'modelPlural' => $modelPlural,
        ]);
    }

    private function generateApiRoutes(string $modelName, string $modelVar, string $modelPlural): string
    {
        $template = <<<'PHP'
Route::apiResource('{{ modelPlural }}', Api\{{ modelName }}Controller::class);
PHP;

        return $this->engine->render($template, [
            'modelName' => $modelName,
            'modelVar' => $modelVar,
            'modelPlural' => $modelPlural,
        ]);
    }

    private function generateWebRoutes(string $modelName, string $modelVar, string $modelPlural): string
    {
        $template = <<<'PHP'
Route::resource('{{ modelVar }}', {{ modelName }}Controller::class);
PHP;

        return $this->engine->render($template, [
            'modelName' => $modelName,
            'modelVar' => $modelVar,
            'modelPlural' => $modelPlural,
        ]);
    }

    private function generateLivewireRoutes(string $modelName, string $modelVar, string $modelPlural): string
    {
        $template = <<<'PHP'
Route::get('{{ modelPlural }}', \App\Livewire\{{ modelPlural }}\ListComponent::class)->name('{{ modelVar }}.index');
Route::get('{{ modelPlural }}/create', \App\Livewire\{{ modelPlural }}\CreateComponent::class)->name('{{ modelVar }}.create');
Route::get('{{ modelPlural }}/{id}/edit', \App\Livewire\{{ modelPlural }}\EditComponent::class)->name('{{ modelVar }}.edit');
PHP;

        return $this->engine->render($template, [
            'modelName' => $modelName,
            'modelVar' => $modelVar,
            'modelPlural' => $modelPlural,
        ]);
    }
}
