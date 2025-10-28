<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

final class StoreSchemaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, array<int|string, string>>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'definition' => ['required', 'json'],
            'project_type' => ['nullable', 'string', 'in:api_json,api_inertia,web_blade,web_inertia,web_livewire'],
            'response_type' => ['nullable', 'string', 'in:json,inertia,blade,livewire,redirect'],
            'view_engine' => ['nullable', 'string', 'in:blade,inertia_react,inertia_vue,livewire'],
        ];
    }
}
