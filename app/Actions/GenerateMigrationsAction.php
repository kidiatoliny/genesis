<?php

declare(strict_types=1);

namespace App\Actions;

use App\Services\TemplateEngine;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

final readonly class GenerateMigrationsAction
{
    public function __construct(private TemplateEngine $engine) {}

    /**
     * @param  array<string, mixed>  $definition
     */
    public function handle(array $definition, string $projectPath): void
    {
        $migrationsPath = $projectPath.'/database/migrations';
        File::makeDirectory($migrationsPath, 0755, true, true);

        $models = $definition['models'] ?? [];
        $timestamp = now()->format('Y_m_d_His');

        foreach ($models as $index => $model) {
            $modelName = $model['name'] ?? 'Model';
            $tableName = Str::snake(Str::pluralStudly($modelName));
            $fields = $model['fields'] ?? [];

            $columns = collect($fields)
                ->map(function ($field) {
                    $name = $field['name'];
                    $type = $field['type'] ?? 'string';

                    return $this->generateColumnCode($name, $type);
                })
                ->implode(PHP_EOL.'            ');

            $content = $this->engine->render(
                File::get(base_path('stubs/migration.stub')),
                [
                    'tableName' => $tableName,
                    'columns' => $columns,
                ]
            );

            $seq = mb_str_pad((string) ($index + 3), 4, '0', STR_PAD_LEFT);
            $filename = "{$timestamp}_{$seq}_create_{$tableName}_table.php";

            File::put($migrationsPath.'/'.$filename, $content);
        }
    }

    private function generateColumnCode(string $name, string $type): string
    {
        return match ($type) {
            'integer', 'number' => "\$table->integer('{$name}');",
            'boolean' => "\$table->boolean('{$name}');",
            'datetime', 'timestamp' => "\$table->timestamp('{$name}');",
            'date' => "\$table->date('{$name}');",
            'time' => "\$table->time('{$name}');",
            'json' => "\$table->json('{$name}');",
            'uuid' => "\$table->uuid('{$name}');",
            'text' => "\$table->text('{$name}');",
            'enum' => "\$table->enum('{$name}', []);",
            default => "\$table->string('{$name}');",
        };
    }
}
