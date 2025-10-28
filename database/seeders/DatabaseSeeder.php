<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

final class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        
        User::factory()->create([
            'name'=> 'Admin',
            'email'=> 'admin@example.com',
            'two_factor_secret' =>null,
            'two_factor_recovery_codes' => null,
            'two_factor_confirmed_at' => null,
            
        ]);
    }
}


