<?php

declare(strict_types=1);

namespace App\Enums;

enum ViewEngine: string
{
    case BLADE = 'blade';
    case INERTIA_REACT = 'inertia_react';
    case INERTIA_VUE = 'inertia_vue';
    case LIVEWIRE = 'livewire';

    public function label(): string
    {
        return match ($this) {
            self::BLADE => 'Blade',
            self::INERTIA_REACT => 'Inertia + React',
            self::INERTIA_VUE => 'Inertia + Vue',
            self::LIVEWIRE => 'Livewire',
        };
    }

    public function isInertia(): bool
    {
        return in_array($this, [self::INERTIA_REACT, self::INERTIA_VUE], true);
    }

    public function framework(): string
    {
        return match ($this) {
            self::BLADE => 'blade',
            self::INERTIA_REACT => 'react',
            self::INERTIA_VUE => 'vue',
            self::LIVEWIRE => 'livewire',
        };
    }
}
