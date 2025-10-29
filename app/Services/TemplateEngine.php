<?php

declare(strict_types=1);

namespace App\Services;

use InvalidArgumentException;
use RuntimeException;

final readonly class TemplateEngine
{
    /**
     * @param  array<string, mixed>  $replacements
     */
    public function render(string $stub, array $replacements): string
    {
        $content = $stub;

        foreach ($replacements as $key => $value) {
            $content = str_replace('{{ '.$key.' }}', (string) $value, $content);
            $content = str_replace('{{'.$key.'}}', (string) $value, $content);
        }

        return $content;
    }

    /**
     * @param  array<string, mixed>  $replacements
     */
    public function renderFromFile(string $path, array $replacements): string
    {
        throw_unless(file_exists($path), InvalidArgumentException::class, "Stub file not found: {$path}");

        $stub = file_get_contents($path);

        throw_if($stub === false, RuntimeException::class, "Failed to read stub file: {$path}");

        return $this->render($stub, $replacements);
    }
}
