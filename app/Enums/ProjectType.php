<?php

declare(strict_types=1);

namespace App\Enums;

enum ProjectType: string
{
    case API_JSON = 'api_json';
    case API_INERTIA = 'api_inertia';
    case WEB_BLADE = 'web_blade';
    case WEB_INERTIA = 'web_inertia';
    case WEB_LIVEWIRE = 'web_livewire';

    public function label(): string
    {
        return match ($this) {
            self::API_JSON => 'REST API (JSON)',
            self::API_INERTIA => 'API + Inertia (SPA)',
            self::WEB_BLADE => 'Web (Blade)',
            self::WEB_INERTIA => 'Web (Inertia + React)',
            self::WEB_LIVEWIRE => 'Web (Livewire)',
        };
    }

    public function description(): string
    {
        return match ($this) {
            self::API_JSON => 'Pure REST API with JSON responses',
            self::API_INERTIA => 'Backend API + Inertia SPA frontend',
            self::WEB_BLADE => 'Traditional server-rendered Blade templates',
            self::WEB_INERTIA => 'Server-rendered Inertia with React',
            self::WEB_LIVEWIRE => 'Interactive Livewire components',
        };
    }

    public function isApi(): bool
    {
        return in_array($this, [self::API_JSON, self::API_INERTIA], true);
    }

    public function isWeb(): bool
    {
        return in_array($this, [self::WEB_BLADE, self::WEB_INERTIA, self::WEB_LIVEWIRE], true);
    }
}
