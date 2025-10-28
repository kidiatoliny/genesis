<?php

declare(strict_types=1);

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Schema>
 */
final class SchemaFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'definition' => json_encode([
                'models' => [
                    [
                        'name' => 'Post',
                        'fields' => [
                            ['name' => 'title', 'type' => 'string'],
                            ['name' => 'content', 'type' => 'text'],
                        ],
                    ],
                ],
            ]),
        ];
    }
}
