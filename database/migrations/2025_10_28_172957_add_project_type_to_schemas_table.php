<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('schemas', function (Blueprint $table): void {
            $table->string('project_type')->default('web_inertia')->after('definition');
            $table->string('response_type')->default('inertia')->after('project_type');
            $table->string('view_engine')->nullable()->default('inertia_react')->after('response_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('schemas', function (Blueprint $table): void {
            $table->dropColumn(['project_type', 'response_type', 'view_engine']);
        });
    }
};
