<?php

declare(strict_types=1);

namespace App\Services;

use App\Enums\ProjectType;

final readonly class RequestGenerator
{
    public function generateStore(
        string $modelName,
        array $fields,
        ProjectType $projectType,
    ): string {
        $validationRules = $this->buildValidationRules($fields);

        if ($projectType === ProjectType::API_JSON || $projectType === ProjectType::API_INERTIA) {
            return $this->generateApiRequest($modelName, 'Store', $validationRules);
        }

        return $this->generateWebRequest($modelName, 'Store', $validationRules);
    }

    public function generateUpdate(
        string $modelName,
        array $fields,
        ProjectType $projectType,
    ): string {
        $validationRules = $this->buildValidationRules($fields, false);

        if ($projectType === ProjectType::API_JSON || $projectType === ProjectType::API_INERTIA) {
            return $this->generateApiRequest($modelName, 'Update', $validationRules);
        }

        return $this->generateWebRequest($modelName, 'Update', $validationRules);
    }

    /**
     * @param  array<array<string, mixed>>  $fields
     */
    private function buildValidationRules(array $fields, bool $isCreate = true): string
    {
        $rules = collect($fields)
            ->map(function ($field) use ($isCreate) {
                $name = $field['name'];
                $type = $field['type'] ?? 'string';
                $required = $field['required'] ?? true;

                $ruleArray = [];

                if ($isCreate && $required) {
                    $ruleArray[] = "'required'";
                } elseif (! $isCreate) {
                    $ruleArray[] = "'sometimes'";
                } elseif (! $required) {
                    $ruleArray[] = "'nullable'";
                }

                $ruleArray[] = "'{$this->getValidationRule($type)}'";

                $rules = implode(', ', $ruleArray);

                return "'{$name}' => [{$rules}],";
            })
            ->implode("\n            ");

        return $rules;
    }

    private function getValidationRule(string $type): string
    {
        return match ($type) {
            'integer', 'number' => 'integer',
            'boolean' => 'boolean',
            'json' => 'json',
            'datetime', 'timestamp', 'date', 'time' => 'date',
            'uuid' => 'uuid',
            'email' => 'email',
            'url' => 'url',
            'text' => 'string',
            'enum' => 'string',
            default => 'string',
        };
    }

    private function generateApiRequest(string $modelName, string $type, string $validationRules): string
    {
        return <<<PHP
<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

final class {$type}{$modelName}Request extends FormRequest
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
            {$validationRules}
        ];
    }
}
PHP;
    }

    private function generateWebRequest(string $modelName, string $type, string $validationRules): string
    {
        return <<<PHP
<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

final class {$type}{$modelName}Request extends FormRequest
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
            {$validationRules}
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            //
        ];
    }
}
PHP;
    }
}
