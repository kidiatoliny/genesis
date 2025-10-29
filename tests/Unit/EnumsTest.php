<?php

declare(strict_types=1);

use App\Enums\ProjectType;
use App\Enums\ResponseType;
use App\Enums\ViewEngine;

it('covers ProjectType helper methods', function (): void {
    expect(ProjectType::API_JSON->label())->toBe('REST API (JSON)')
        ->and(ProjectType::API_INERTIA->isApi())->toBeTrue()
        ->and(ProjectType::WEB_BLADE->isWeb())->toBeTrue()
        ->and(ProjectType::WEB_INERTIA->description())->toContain('Inertia')
        ->and(ProjectType::WEB_LIVEWIRE->label())->toBe('Web (Livewire)');
});

it('covers ResponseType labels', function (): void {
    expect(ResponseType::JSON->label())->toBe('JSON Response')
        ->and(ResponseType::INERTIA->label())->toBe('Inertia Response')
        ->and(ResponseType::BLADE->label())->toBe('Blade View')
        ->and(ResponseType::LIVEWIRE->label())->toBe('Livewire Component')
        ->and(ResponseType::REDIRECT->label())->toBe('Redirect');
});

it('covers ViewEngine helpers', function (): void {
    expect(ViewEngine::INERTIA_REACT->isInertia())->toBeTrue()
        ->and(ViewEngine::BLADE->framework())->toBe('blade')
        ->and(ViewEngine::INERTIA_VUE->framework())->toBe('vue')
        ->and(ViewEngine::LIVEWIRE->framework())->toBe('livewire')
        ->and(ViewEngine::BLADE->isInertia())->toBeFalse()
        ->and(ViewEngine::LIVEWIRE->isInertia())->toBeFalse()
        ->and(ViewEngine::BLADE->label())->toBe('Blade')
        ->and(ViewEngine::INERTIA_REACT->label())->toBe('Inertia + React')
        ->and(ViewEngine::INERTIA_VUE->label())->toBe('Inertia + Vue')
        ->and(ViewEngine::LIVEWIRE->label())->toBe('Livewire');
});
