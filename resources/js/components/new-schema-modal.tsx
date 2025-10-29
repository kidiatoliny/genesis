import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useBuilderStore, type BuilderSchema } from '@/stores/builder-store';
import { useState } from 'react';

interface NewSchemaModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PROJECT_TYPES = [
    { value: 'web_inertia', label: 'Web - Inertia + React' },
    { value: 'api_inertia', label: 'API - Inertia' },
    { value: 'web_blade', label: 'Web - Blade' },
    { value: 'web_livewire', label: 'Web - Livewire' },
    { value: 'api_json', label: 'API - JSON' },
];

const RESPONSE_TYPES = [
    { value: 'inertia', label: 'Inertia' },
    { value: 'json', label: 'JSON' },
    { value: 'blade', label: 'Blade' },
    { value: 'livewire', label: 'Livewire' },
    { value: 'redirect', label: 'Redirect' },
];

const VIEW_ENGINES = [
    { value: 'inertia_react', label: 'Inertia + React' },
    { value: 'inertia_vue', label: 'Inertia + Vue' },
    { value: 'blade', label: 'Blade' },
    { value: 'livewire', label: 'Livewire' },
];

type ProjectTypeValue =
    | 'web_inertia'
    | 'api_inertia'
    | 'web_blade'
    | 'web_livewire'
    | 'api_json';
type ResponseTypeValue = 'inertia' | 'json' | 'blade' | 'livewire' | 'redirect';
type ViewEngineValue = 'inertia_react' | 'inertia_vue' | 'blade' | 'livewire';

export function NewSchemaModal({ isOpen, onClose }: NewSchemaModalProps) {
    const [name, setName] = useState('');
    const [projectType, setProjectType] =
        useState<ProjectTypeValue>('web_inertia');
    const [responseType, setResponseType] =
        useState<ResponseTypeValue>('inertia');
    const [viewEngine, setViewEngine] =
        useState<ViewEngineValue>('inertia_react');

    const { initSchema } = useBuilderStore();

    const handleCreate = () => {
        if (!name.trim()) {
            alert('Please enter a schema name');
            return;
        }

        const newSchema: BuilderSchema = {
            name,
            projectType,
            responseType,
            viewEngine,
            models: [],
        };

        initSchema(newSchema);
        setName('');
        setProjectType('web_inertia');
        setResponseType('inertia');
        setViewEngine('inertia_react');
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Create New Schema</DialogTitle>
                    <DialogDescription>
                        Configure your new database schema
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Schema Name
                        </label>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g., Blog App"
                            autoFocus
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Project Type
                        </label>
                        <Select
                            value={projectType}
                            onValueChange={(value: ProjectTypeValue) =>
                                setProjectType(value)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {PROJECT_TYPES.map((type) => (
                                    <SelectItem
                                        key={type.value}
                                        value={type.value}
                                    >
                                        {type.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Response Type
                        </label>
                        <Select
                            value={responseType}
                            onValueChange={(value: ResponseTypeValue) =>
                                setResponseType(value)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {RESPONSE_TYPES.map((type) => (
                                    <SelectItem
                                        key={type.value}
                                        value={type.value}
                                    >
                                        {type.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            View Engine
                        </label>
                        <Select
                            value={viewEngine}
                            onValueChange={(value: ViewEngineValue) =>
                                setViewEngine(value)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {VIEW_ENGINES.map((engine) => (
                                    <SelectItem
                                        key={engine.value}
                                        value={engine.value}
                                    >
                                        {engine.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleCreate}
                        className="bg-purple-500 hover:bg-purple-600"
                    >
                        Create
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
