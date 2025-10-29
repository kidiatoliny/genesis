<?php

declare(strict_types=1);

namespace App\Actions;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

final readonly class GenerateActionsAction
{
    /**
     * @param  array<string, mixed>  $definition
     */
    public function handle(array $definition, string $projectPath): void
    {
        $modelsPath = $definition['models'] ?? [];

        foreach ($modelsPath as $model) {
            $modelName = $model['name'] ?? 'Model';
            $modelPlural = Str::plural($modelName);

            $actionsPath = $projectPath.'/app/Actions/'.$modelPlural;
            File::makeDirectory($actionsPath, 0755, true, true);

            $this->generateCreateAction($modelName, $modelPlural, $actionsPath);
            $this->generateUpdateAction($modelName, $modelPlural, $actionsPath);
            $this->generateDeleteAction($modelName, $modelPlural, $actionsPath);
        }
    }

    private function generateCreateAction(string $modelName, string $modelPlural, string $path): void
    {
        $content = <<<'PHP'
<?php

declare(strict_types=1);

namespace App\Actions\{{ modelPlural }};

use App\Http\Requests\Store{{ modelName }}Request;
use App\Models\{{ modelName }};

final readonly class Create{{ modelName }}Action
{
    public function handle(Store{{ modelName }}Request $request): {{ modelName }}
    {
        return {{ modelName }}::query()->create($request->validated());
    }
}
PHP;

        $content = str_replace(['{{ modelPlural }}', '{{ modelName }}'], [$modelPlural, $modelName], $content);
        File::put($path.'/Create'.$modelName.'Action.php', $content);
    }

    private function generateUpdateAction(string $modelName, string $modelPlural, string $path): void
    {
        $content = <<<'PHP'
<?php

declare(strict_types=1);

namespace App\Actions\{{ modelPlural }};

use App\Http\Requests\Update{{ modelName }}Request;
use App\Models\{{ modelName }};

final readonly class Update{{ modelName }}Action
{
    public function handle(Update{{ modelName }}Request $request, {{ modelName }} ${{ modelVar }}): {{ modelName }}
    {
        ${{ modelVar }}->update($request->validated());

        return ${{ modelVar }};
    }
}
PHP;

        $modelVar = Str::camel($modelName);
        $content = str_replace(
            ['{{ modelPlural }}', '{{ modelName }}', '{{ modelVar }}'],
            [$modelPlural, $modelName, $modelVar],
            $content
        );
        File::put($path.'/Update'.$modelName.'Action.php', $content);
    }

    private function generateDeleteAction(string $modelName, string $modelPlural, string $path): void
    {
        $content = <<<'PHP'
<?php

declare(strict_types=1);

namespace App\Actions\{{ modelPlural }};

use App\Models\{{ modelName }};

final readonly class Delete{{ modelName }}Action
{
    public function handle({{ modelName }} ${{ modelVar }}): void
    {
        ${{ modelVar }}->delete();
    }
}
PHP;

        $modelVar = Str::camel($modelName);
        $content = str_replace(
            ['{{ modelPlural }}', '{{ modelName }}', '{{ modelVar }}'],
            [$modelPlural, $modelName, $modelVar],
            $content
        );
        File::put($path.'/Delete'.$modelName.'Action.php', $content);
    }
}
