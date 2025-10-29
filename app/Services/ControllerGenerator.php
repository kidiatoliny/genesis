<?php

declare(strict_types=1);

namespace App\Services;

use App\Enums\ProjectType;

final readonly class ControllerGenerator
{
    public function __construct(private TemplateEngine $engine) {}

    public function generate(
        string $modelName,
        string $modelVar,
        string $modelPlural,
        ProjectType $projectType,
    ): string {
        return match (true) {
            $projectType === ProjectType::API_JSON => $this->generateApiJsonController($modelName, $modelVar, $modelPlural),
            $projectType === ProjectType::API_INERTIA => $this->generateApiController($modelName, $modelVar, $modelPlural),
            $projectType === ProjectType::WEB_BLADE => $this->generateWebBladeController($modelName, $modelVar, $modelPlural),
            $projectType === ProjectType::WEB_INERTIA => $this->generateWebInertiaController($modelName, $modelVar, $modelPlural),
            $projectType === ProjectType::WEB_LIVEWIRE => $this->generateLivewireController($modelName, $modelVar, $modelPlural),
            default => $this->generateApiJsonController($modelName, $modelVar, $modelPlural),
        };
    }

    private function generateApiJsonController(string $modelName, string $modelVar, string $modelPlural): string
    {
        $template = <<<'PHP'
<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\{{ modelPlural }}\Create{{ modelName }}Action;
use App\Actions\{{ modelPlural }}\Update{{ modelName }}Action;
use App\Actions\{{ modelPlural }}\Delete{{ modelName }}Action;
use App\Http\Requests\Store{{ modelName }}Request;
use App\Http\Requests\Update{{ modelName }}Request;
use App\Http\Resources\{{ modelName }}Resource;
use App\Models\{{ modelName }};
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;

final readonly class {{ modelName }}Controller
{
    public function __construct(
        private Create{{ modelName }}Action $create,
        private Update{{ modelName }}Action $update,
        private Delete{{ modelName }}Action $delete,
    ) {}

    public function index(): ResourceCollection
    {
        return {{ modelName }}Resource::collection({{ modelName }}::query()->latest()->paginate());
    }

    public function store(Store{{ modelName }}Request $request): JsonResponse
    {
        ${{ modelVar }} = $this->create->handle($request);

        return response()->json({{ modelName }}Resource::make(${{ modelVar }}), 201);
    }

    public function show({{ modelName }} ${{ modelVar }}): JsonResponse
    {
        return response()->json({{ modelName }}Resource::make(${{ modelVar }}));
    }

    public function update(Update{{ modelName }}Request $request, {{ modelName }} ${{ modelVar }}): JsonResponse
    {
        $updated = $this->update->handle($request, ${{ modelVar }});

        return response()->json({{ modelName }}Resource::make($updated));
    }

    public function destroy({{ modelName }} ${{ modelVar }}): JsonResponse
    {
        $this->delete->handle(${{ modelVar }});

        return response()->noContent();
    }
}
PHP;

        return $this->engine->render($template, [
            'modelName' => $modelName,
            'modelVar' => $modelVar,
            'modelPlural' => $modelPlural,
        ]);
    }

    private function generateApiController(string $modelName, string $modelVar, string $modelPlural): string
    {
        $template = <<<'PHP'
<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Actions\{{ modelPlural }}\Create{{ modelName }}Action;
use App\Actions\{{ modelPlural }}\Update{{ modelName }}Action;
use App\Actions\{{ modelPlural }}\Delete{{ modelName }}Action;
use App\Http\Requests\Store{{ modelName }}Request;
use App\Http\Requests\Update{{ modelName }}Request;
use App\Http\Resources\{{ modelName }}Resource;
use App\Models\{{ modelName }};
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;

final readonly class {{ modelName }}Controller
{
    public function __construct(
        private Create{{ modelName }}Action $create,
        private Update{{ modelName }}Action $update,
        private Delete{{ modelName }}Action $delete,
    ) {}

    public function index(): ResourceCollection
    {
        return {{ modelName }}Resource::collection({{ modelName }}::query()->latest()->paginate());
    }

    public function store(Store{{ modelName }}Request $request): JsonResponse
    {
        ${{ modelVar }} = $this->create->handle($request);

        return response()->json({{ modelName }}Resource::make(${{ modelVar }}), 201);
    }

    public function show({{ modelName }} ${{ modelVar }}): JsonResponse
    {
        return response()->json({{ modelName }}Resource::make(${{ modelVar }}));
    }

    public function update(Update{{ modelName }}Request $request, {{ modelName }} ${{ modelVar }}): JsonResponse
    {
        $updated = $this->update->handle($request, ${{ modelVar }});

        return response()->json({{ modelName }}Resource::make($updated));
    }

    public function destroy({{ modelName }} ${{ modelVar }}): JsonResponse
    {
        $this->delete->handle(${{ modelVar }});

        return response()->noContent();
    }
}
PHP;

        return $this->engine->render($template, [
            'modelName' => $modelName,
            'modelVar' => $modelVar,
            'modelPlural' => $modelPlural,
        ]);
    }

    private function generateWebBladeController(string $modelName, string $modelVar, string $modelPlural): string
    {
        $template = <<<'PHP'
<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\{{ modelPlural }}\Create{{ modelName }}Action;
use App\Actions\{{ modelPlural }}\Update{{ modelName }}Action;
use App\Actions\{{ modelPlural }}\Delete{{ modelName }}Action;
use App\Http\Requests\Store{{ modelName }}Request;
use App\Http\Requests\Update{{ modelName }}Request;
use App\Models\{{ modelName }};
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

final readonly class {{ modelName }}Controller
{
    public function __construct(
        private Create{{ modelName }}Action $create,
        private Update{{ modelName }}Action $update,
        private Delete{{ modelName }}Action $delete,
    ) {}

    public function index(): View
    {
        return view('{{ modelPlural }}.index', [
            '{{ modelPlural }}' => {{ modelName }}::query()->latest()->paginate(),
        ]);
    }

    public function create(): View
    {
        return view('{{ modelPlural }}.create');
    }

    public function store(Store{{ modelName }}Request $request): RedirectResponse
    {
        $this->create->handle($request);

        return redirect()->route('{{ modelVar }}.index')->with('success', '{{ modelName }} created successfully.');
    }

    public function show({{ modelName }} ${{ modelVar }}): View
    {
        return view('{{ modelPlural }}.show', ['{{ modelVar }}' => ${{ modelVar }}]);
    }

    public function edit({{ modelName }} ${{ modelVar }}): View
    {
        return view('{{ modelPlural }}.edit', ['{{ modelVar }}' => ${{ modelVar }}]);
    }

    public function update(Update{{ modelName }}Request $request, {{ modelName }} ${{ modelVar }}): RedirectResponse
    {
        $this->update->handle($request, ${{ modelVar }});

        return redirect()->route('{{ modelVar }}.show', ${{ modelVar }})->with('success', '{{ modelName }} updated successfully.');
    }

    public function destroy({{ modelName }} ${{ modelVar }}): RedirectResponse
    {
        $this->delete->handle(${{ modelVar }});

        return redirect()->route('{{ modelVar }}.index')->with('success', '{{ modelName }} deleted successfully.');
    }
}
PHP;

        return $this->engine->render($template, [
            'modelName' => $modelName,
            'modelVar' => $modelVar,
            'modelPlural' => $modelPlural,
        ]);
    }

    private function generateWebInertiaController(string $modelName, string $modelVar, string $modelPlural): string
    {
        return <<<PHP
<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\\{$modelPlural}\\Create{$modelName}Action;
use App\Actions\\{$modelPlural}\\Update{$modelName}Action;
use App\Actions\\{$modelPlural}\\Delete{$modelName}Action;
use App\Http\Requests\Store{$modelName}Request;
use App\Http\Requests\Update{$modelName}Request;
use App\Http\Resources\\{$modelName}Resource;
use App\Models\\{$modelName};
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

final readonly class {$modelName}Controller
{
    public function __construct(
        private Create{$modelName}Action \$create,
        private Update{$modelName}Action \$update,
        private Delete{$modelName}Action \$delete,
    ) {}

    public function index(): Response
    {
        return Inertia::render('{$modelPlural}/Index', [
            '{$modelPlural}' => {$modelName}Resource::collection({$modelName}::query()->latest()->paginate()),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('{$modelPlural}/Create');
    }

    public function store(Store{$modelName}Request \$request): RedirectResponse
    {
        \$this->create->handle(\$request);

        return redirect()->route('{$modelVar}.index')->with('success', '{$modelName} created successfully.');
    }

    public function show({$modelName} \${$modelVar}): Response
    {
        return Inertia::render('{$modelPlural}/Show', [
            '{$modelVar}' => {$modelName}Resource::make(\${$modelVar}),
        ]);
    }

    public function edit({$modelName} \${$modelVar}): Response
    {
        return Inertia::render('{$modelPlural}/Edit', [
            '{$modelVar}' => {$modelName}Resource::make(\${$modelVar}),
        ]);
    }

    public function update(Update{$modelName}Request \$request, {$modelName} \${$modelVar}): RedirectResponse
    {
        \$this->update->handle(\$request, \${$modelVar});

        return redirect()->route('{$modelVar}.show', \${$modelVar})->with('success', '{$modelName} updated successfully.');
    }

    public function destroy({$modelName} \${$modelVar}): RedirectResponse
    {
        \$this->delete->handle(\${$modelVar});

        return redirect()->route('{$modelVar}.index')->with('success', '{$modelName} deleted successfully.');
    }
}
PHP;
    }

    private function generateLivewireController(string $modelName, string $modelVar, string $modelPlural): string
    {
        $template = <<<'PHP'
<?php

declare(strict_types=1);

namespace App\Livewire\{{ modelPlural }};

use App\Actions\{{ modelPlural }}\Create{{ modelName }}Action;
use App\Actions\{{ modelPlural }}\Update{{ modelName }}Action;
use App\Actions\{{ modelPlural }}\Delete{{ modelName }}Action;
use App\Http\Requests\Store{{ modelName }}Request;
use App\Http\Requests\Update{{ modelName }}Request;
use App\Models\{{ modelName }};
use Livewire\Component;
use Livewire\Attributes\Validate;

final class {{ modelName }}Component extends Component
{
    public function render()
    {
        return view('livewire.{{ modelPlural }}.{{ modelVar }}-component');
    }
}
PHP;

        return $this->engine->render($template, [
            'modelName' => $modelName,
            'modelVar' => $modelVar,
            'modelPlural' => $modelPlural,
        ]);
    }
}
