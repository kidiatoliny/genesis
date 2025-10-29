<?php

declare(strict_types=1);

use App\Actions\ZipProjectAction;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

it('zips a generated project directory', function (): void {
    $projectPath = base_path('storage/framework/testing/'.Str::random(8));
    File::ensureDirectoryExists($projectPath);

    // create sample files
    File::ensureDirectoryExists($projectPath.'/app');
    File::put($projectPath.'/app/sample.txt', 'hello');

    $action = new ZipProjectAction();
    $zipPath = $action->handle([
        'projectPath' => $projectPath,
        'schemaName' => 'My Sample Project',
    ]);

    expect(File::exists($zipPath))->toBeTrue();

    $zip = new ZipArchive();
    $open = $zip->open($zipPath);
    expect($open)->toBeTrue();
    expect($zip->numFiles)->toBeGreaterThan(0);
    $zip->close();
});

// Failure branch is environment-dependent; ignored via @codeCoverageIgnore.
