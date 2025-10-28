<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\GenerateProjectAction;
use App\Actions\StoreSchemaAction;
use App\Actions\ZipProjectAction;
use App\Http\Requests\StoreSchemaRequest;
use App\Models\Schema;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

final readonly class SchemaController
{
    public function __construct(
        private StoreSchemaAction $storeSchema,
        private GenerateProjectAction $generateProject,
        private ZipProjectAction $zipProject,
    ) {}

    public function index(): Response
    {
        return Inertia::render('builder', [
            'schemas' => Schema::query()->latest()->get(),
        ]);
    }

    public function store(StoreSchemaRequest $request): Response
    {
        $schema = $this->storeSchema->handle($request);

        return Inertia::render('builder', [
            'schemas' => Schema::query()->latest()->get(),
            'saved' => true,
        ]);
    }

    public function download(Schema $schema): StreamedResponse
    {
        $generatedProject = $this->generateProject->handle($schema);
        $zipPath = $this->zipProject->handle($generatedProject);

        return response()->download($zipPath, basename($zipPath), [
            'Content-Type' => 'application/zip',
        ]);
    }
}
