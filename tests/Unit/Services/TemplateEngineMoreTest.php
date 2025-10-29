<?php

declare(strict_types=1);

use App\Services\TemplateEngine;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

it('throws runtime error when reading a directory as file', function (): void {
    $engine = new TemplateEngine();
    $file = base_path('storage/framework/template-file-'.Str::random(8));
    File::put($file, 'content');
    @chmod($file, 0000);

    $prev = set_error_handler(static function (): true {
        return true; // suppress warnings/notices inside file_get_contents
    }, E_WARNING | E_NOTICE);

    try {
        expect(fn (): string => $engine->renderFromFile($file, []))
            ->toThrow(RuntimeException::class);
    } finally {
        if ($prev !== null) {
            set_error_handler($prev);
        }
    }
});
