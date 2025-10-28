<?php

declare(strict_types=1);

namespace App\Enums;

enum ResponseType: string
{
    case JSON = 'json';
    case INERTIA = 'inertia';
    case BLADE = 'blade';
    case LIVEWIRE = 'livewire';
    case REDIRECT = 'redirect';

    public function label(): string
    {
        return match ($this) {
            self::JSON => 'JSON Response',
            self::INERTIA => 'Inertia Response',
            self::BLADE => 'Blade View',
            self::LIVEWIRE => 'Livewire Component',
            self::REDIRECT => 'Redirect',
        };
    }
}
