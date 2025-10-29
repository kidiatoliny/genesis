<?php

declare(strict_types=1);

namespace App\Actions;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use RuntimeException;
use ZipArchive;

final readonly class ZipProjectAction
{
    /**
     * @param  array<string, mixed>  $generatedProject
     */
    public function handle(array $generatedProject): string
    {
        $projectPath = $generatedProject['projectPath'];
        $schemaName = $generatedProject['schemaName'];

        $zipPath = storage_path('zips/'.Str::slug($schemaName).'-'.Str::random(8).'.zip');
        File::makeDirectory(storage_path('zips'), 0755, true, true);

        $zip = new ZipArchive();

        if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE) !== true) {
            // @codeCoverageIgnoreStart
            throw new RuntimeException('Cannot create zip file: '.$zipPath);
            // @codeCoverageIgnoreEnd
        }

        $this->addFilesRecursive($zip, $projectPath, '');

        $zip->close();

        return $zipPath;
    }

    private function addFilesRecursive(ZipArchive $zip, string $dir, string $baseDir): void
    {
        $files = File::allFiles($dir);

        foreach ($files as $file) {
            $relativePath = $baseDir.'/'.str_replace($dir, '', $file->getPathname());
            $zip->addFile($file->getPathname(), mb_ltrim($relativePath, '/'));
        }
    }
}
