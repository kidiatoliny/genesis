<?php

declare(strict_types=1);

namespace App\Actions;

use App\Http\Requests\StoreSchemaRequest;
use App\Models\Schema;

final readonly class StoreSchemaAction
{
    public function handle(StoreSchemaRequest $request): Schema
    {
        return Schema::query()->create([
            'name' => $request->string('name')->value(),
            'definition' => $request->string('definition')->value(),
        ]);
    }
}
