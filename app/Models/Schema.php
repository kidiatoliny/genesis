<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonInterface;
use Database\Factories\SchemaFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property-read int $id
 * @property-read string $name
 * @property-read string $definition
 * @property-read string $project_type
 * @property-read string $response_type
 * @property-read string $view_engine
 * @property-read CarbonInterface $created_at
 * @property-read CarbonInterface $updated_at
 */
final class Schema extends Model
{
    /**
     * @use HasFactory<SchemaFactory>
     */
    use HasFactory;

    /**
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'definition',
        'project_type',
        'response_type',
        'view_engine',
    ];

    /**
     * @return array<string, string>
     */
    public function casts(): array
    {
        return [
            'id' => 'integer',
            'name' => 'string',
            'definition' => 'string',
            'project_type' => 'string',
            'response_type' => 'string',
            'view_engine' => 'string',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }
}
