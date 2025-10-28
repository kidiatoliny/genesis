<?php

declare(strict_types=1);

namespace App\Actions;

use App\Enums\ProjectType;
use App\Services\RouteGenerator;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

final readonly class GenerateRoutesAction
{
    public function __construct(private RouteGenerator $generator) {}

    /**
     * @param  array<string, mixed>  $definition
     */
    public function handle(array $definition, string $projectPath): void
    {
        $projectType = ProjectType::tryFrom($definition['project_type'] ?? 'web_inertia') ?? ProjectType::WEB_INERTIA;

        $routesPath = $projectPath.'/routes';
        File::makeDirectory($routesPath, 0755, true, true);

        $models = $definition['models'] ?? [];
        $routeLines = [];

        foreach ($models as $model) {
            $modelName = $model['name'] ?? 'Model';
            $modelVar = Str::camel($modelName);
            $modelPlural = Str::plural($modelName);

            $route = $this->generator->generate(
                $modelName,
                $modelVar,
                $modelPlural,
                $projectType,
            );

            $routeLines[] = $route;
        }

        $webContent = $this->buildWebRoutesFile($routeLines);
        File::put($routesPath.'/web.php', $webContent);
    }

    /**
     * @param  list<string>  $routeLines
     */
    private function buildWebRoutesFile(array $routeLines): string
    {
        $routes = implode("\n", $routeLines);

        return <<<PHP
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

Route::middleware('auth')->group(function () {
    $routes
});
PHP;
    }
}
