import React, { useState, useRef } from 'react';
import { Head, router, usePage, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Checkbox,
} from '@/components/ui/checkbox';
import { Download, Plus, Save, Trash2, MoreVertical, GripVertical, Edit2 } from 'lucide-react';
import { NewSchemaModal } from '@/components/new-schema-modal';
import { useBuilderStore } from '@/stores/builder-store';
import { DndContext, DragEndEvent, DragStartEvent, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';

interface SavedSchema {
    id: number;
    name: string;
    definition: string;
    project_type: string;
    response_type: string;
    view_engine: string;
    created_at: string;
    updated_at: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Builder',
        href: '/builder',
    },
];

const FIELD_TYPES = [
    'string',
    'integer',
    'boolean',
    'text',
    'datetime',
    'date',
    'time',
    'json',
    'uuid',
    'email',
    'url',
    'enum',
    'decimal',
    'float',
];

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

export default function Builder() {
    const { schemas, saved } = usePage<{
        schemas: SavedSchema[];
        saved?: boolean;
    }>().props;

    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddingModel, setIsAddingModel] = useState(false);
    const [isAddingField, setIsAddingField] = useState(false);
    const [newModelName, setNewModelName] = useState('');
    const [newFieldName, setNewFieldName] = useState('');
    const [newFieldType, setNewFieldType] = useState('string');
    const [draggedFieldType, setDraggedFieldType] = useState<string | null>(null);
    const [dragTargetModelId, setDragTargetModelId] = useState<string | null>(null);

    const {
        schema,
        selectedModelId,
        selectedFieldId,
        setSchemaName,
        setProjectType,
        setResponseType,
        setViewEngine,
        addModel,
        deleteModel,
        addField,
        updateField,
        deleteField,
        selectModel,
        selectField,
        resetSchema,
    } = useBuilderStore();

    const { post, processing } = useForm({});

    const selectedModel = schema?.models.find((m) => m.id === selectedModelId);
    const selectedField = schema?.models
        .flatMap((m) => m.fields.map((f) => ({ ...f, modelId: m.id })))
        .find((f) => f.id === selectedFieldId);
    const fieldModelId = selectedField ? (selectedField as any).modelId : selectedModelId;

    const handleAddModel = () => {
        if (newModelName.trim()) {
            addModel(newModelName);
            setNewModelName('');
        }
    };

    const handleAddField = () => {
        if (selectedModelId && newFieldName.trim()) {
            addField(selectedModelId, {
                name: newFieldName,
                type: newFieldType,
                required: true,
            });
            setNewFieldName('');
            setNewFieldType('string');
        }
    };

    const handleSaveSchema = () => {
        if (!schema || !schema.name.trim() || schema.models.length === 0) {
            alert('Please enter a schema name and add at least one model');
            return;
        }

        const definition = {
            models: schema.models.map((model) => ({
                name: model.name,
                fields: model.fields.map((field) => ({
                    name: field.name,
                    type: field.type,
                    required: field.required,
                })),
            })),
        };

        post('/builder', {
            data: {
                name: schema.name,
                project_type: schema.projectType,
                response_type: schema.responseType,
                view_engine: schema.viewEngine,
                definition: JSON.stringify(definition),
            },
            preserveScroll: true,
            onSuccess: () => {
                resetSchema();
            },
        });
    };

    const handleDownload = (schemaRecord: SavedSchema) => {
        router.get(`/builder/${schemaRecord.id}/download`);
    };

    // List view - no schema selected
    if (!schema) {
        return (
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Schema Builder" />
                <div className="flex h-full flex-col gap-4 rounded-xl bg-white dark:bg-neutral-900">
                    <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 dark:border-neutral-800">
                        <div>
                            <h1 className="text-2xl font-bold">Schema Builder</h1>
                            <p className="text-sm text-neutral-500">
                                Create and manage your database schemas visually
                            </p>
                        </div>
                        <Button
                            onClick={() => setIsNewModalOpen(true)}
                            className="bg-purple-500 hover:bg-purple-600"
                        >
                            <Plus className="mr-2 h-4 w-4" />
                            New Schema
                        </Button>
                    </div>

                    {saved && (
                        <div className="mx-6 rounded-lg bg-green-100 p-4 text-green-700">
                            Schema saved successfully!
                        </div>
                    )}

                    <div className="flex-1 overflow-auto p-6">
                        {schemas.length > 0 ? (
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {schemas.map((schemaRecord) => (
                                    <Card key={schemaRecord.id}>
                                        <CardHeader>
                                            <div>
                                                <CardTitle className="text-lg">
                                                    {schemaRecord.name}
                                                </CardTitle>
                                                <p className="text-xs text-neutral-400 mt-1">
                                                    {new Date(
                                                        schemaRecord.created_at
                                                    ).toLocaleDateString()}
                                                </p>
                                            </div>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                <span className="inline-block rounded bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-200">
                                                    {schemaRecord.project_type}
                                                </span>
                                                <span className="inline-block rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                                                    {schemaRecord.view_engine}
                                                </span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <Button
                                                onClick={() => handleDownload(schemaRecord)}
                                                className="w-full bg-purple-500 hover:bg-purple-600"
                                            >
                                                <Download className="mr-2 h-4 w-4" />
                                                Download Project
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-1 items-center justify-center">
                                <div className="text-center">
                                    <h2 className="text-lg font-semibold">No schemas yet</h2>
                                    <p className="text-neutral-500">
                                        Create your first schema to get started
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <NewSchemaModal
                        isOpen={isNewModalOpen}
                        onClose={() => setIsNewModalOpen(false)}
                    />
                </div>
            </AppLayout>
        );
    }

    const canvasRef = useRef<HTMLDivElement>(null);

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        // Nothing needed here for now
    };

    // Editor view - schema is being edited
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Schema Builder" />
            <div className="flex h-full flex-col gap-4 rounded-xl bg-white dark:bg-neutral-900">
                <div className="border-b border-neutral-200 px-6 py-4 dark:border-neutral-800">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold">{schema.name}</h2>
                            <p className="text-sm text-neutral-500">
                                {schema.models.length} models • {schema.models.reduce((sum, m) => sum + m.fields.length, 0)} fields
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                onClick={() => setIsEditModalOpen(true)}
                            >
                                <Edit2 className="mr-2 h-4 w-4" />
                                Edit
                            </Button>
                            <Button
                                onClick={handleSaveSchema}
                                disabled={processing}
                                className="bg-purple-500 hover:bg-purple-600"
                            >
                                <Save className="mr-2 h-4 w-4" />
                                {processing ? 'Saving...' : 'Save Schema'}
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => resetSchema()}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Edit Schema Modal */}
                {isEditModalOpen && (
                    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                        <Card className="max-w-md w-full mx-4">
                            <CardHeader>
                                <CardTitle>Edit Schema</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Schema Name
                                    </label>
                                    <Input
                                        value={schema.name}
                                        onChange={(e) => setSchemaName(e.target.value)}
                                        placeholder="e.g., Blog App"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Project Type
                                    </label>
                                    <Select
                                        value={schema.projectType}
                                        onValueChange={(value: any) => setProjectType(value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {PROJECT_TYPES.map((type) => (
                                                <SelectItem key={type.value} value={type.value}>
                                                    {type.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Response Type
                                    </label>
                                    <Select
                                        value={schema.responseType}
                                        onValueChange={(value: any) => setResponseType(value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {RESPONSE_TYPES.map((type) => (
                                                <SelectItem key={type.value} value={type.value}>
                                                    {type.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        View Engine
                                    </label>
                                    <Select
                                        value={schema.viewEngine}
                                        onValueChange={(value: any) => setViewEngine(value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {VIEW_ENGINES.map((engine) => (
                                                <SelectItem key={engine.value} value={engine.value}>
                                                    {engine.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                            <div className="flex gap-2 px-6 pb-6">
                                <Button
                                    variant="outline"
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="flex-1"
                                >
                                    Close
                                </Button>
                            </div>
                        </Card>
                    </div>
                )}

                <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                    <div className="flex flex-1 gap-4 overflow-hidden px-6 py-4">
                        {/* Left: Field Types Sidebar */}
                        <Card className="w-32 flex flex-col overflow-auto">
                            <CardHeader>
                                <CardTitle className="text-sm">Field Types</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-2">
                                {FIELD_TYPES.map((type) => (
                                    <div
                                        key={type}
                                        draggable
                                        onDragStart={(e) => {
                                            e.dataTransfer.effectAllowed = 'copy';
                                            e.dataTransfer.setData('fieldType', type);
                                        }}
                                        className="p-2 bg-purple-100 dark:bg-purple-900 rounded cursor-move text-sm font-medium text-purple-900 dark:text-purple-100 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                                    >
                                        {type}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Center: Models Canvas */}
                        <div
                            ref={canvasRef}
                            className="flex-1 overflow-auto rounded-lg border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-800 p-6 relative"
                            onDragOver={(e) => e.preventDefault()}
                        >
                            {schema.models.length === 0 ? (
                                <div className="flex h-full items-center justify-center">
                                    <div className="text-center">
                                        <h2 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                                            No models yet
                                        </h2>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                                            Add your first model using the button below
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {schema.models.map((model) => (
                                        <Card
                                            key={model.id}
                                            className={`cursor-pointer border-2 transition-all w-80 ${
                                                selectedModelId === model.id
                                                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-950'
                                                    : 'border-neutral-200 dark:border-neutral-700'
                                            }`}
                                            onClick={() => selectModel(model.id)}
                                            onDragOver={(e) => e.preventDefault()}
                                            onDrop={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                const fieldType = e.dataTransfer.getData('fieldType');
                                                if (fieldType) {
                                                    setDraggedFieldType(fieldType);
                                                    setDragTargetModelId(model.id);
                                                    setIsAddingField(true);
                                                    setNewFieldType(fieldType);
                                                }
                                            }}
                                        >
                                            <CardHeader className="pb-2">
                                                <div className="flex items-center justify-between">
                                                    <CardTitle className="text-sm">
                                                        {model.name}
                                                    </CardTitle>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
                                                                <MoreVertical className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuItem
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    deleteModel(model.id);
                                                                }}
                                                                className="text-red-600"
                                                            >
                                                                <Trash2 className="mr-2 h-4 w-4" />
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </CardHeader>

                                            <CardContent className="space-y-1">
                                                {model.fields.length > 0 ? (
                                                    <div className="space-y-1">
                                                        {model.fields.map((field) => (
                                                            <div
                                                                key={field.id}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    selectField(field.id);
                                                                }}
                                                                className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded flex justify-between cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 group"
                                                            >
                                                                <div className="flex-1">
                                                                    <span>{field.name}</span>
                                                                    <span className="text-neutral-500 ml-2">{field.type}</span>
                                                                </div>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        deleteField(model.id, field.id);
                                                                    }}
                                                                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500"
                                                                >
                                                                    <Trash2 className="h-3 w-3" />
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="text-xs text-neutral-400">No fields</p>
                                                )}
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            )}

                            {/* Add Model FAB - Bottom Right */}
                            <div className="absolute bottom-6 right-6">
                                {!isAddingModel ? (
                                    <Button
                                        onClick={() => setIsAddingModel(true)}
                                        className="rounded-full bg-purple-500 hover:bg-purple-600 shadow-lg h-14 w-14 p-0"
                                    >
                                        <Plus className="h-6 w-6" />
                                    </Button>
                                ) : (
                                    <div className="flex flex-col gap-2 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 w-56">
                                        <label className="text-sm font-medium">Model name</label>
                                        <Input
                                            placeholder="e.g., User"
                                            value={newModelName}
                                            onChange={(e) => setNewModelName(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleAddModel();
                                                    setIsAddingModel(false);
                                                }
                                                if (e.key === 'Escape') setIsAddingModel(false);
                                            }}
                                            autoFocus
                                            className="text-sm"
                                        />
                                        <div className="flex gap-2">
                                            <Button
                                                onClick={() => {
                                                    handleAddModel();
                                                    setIsAddingModel(false);
                                                }}
                                                className="flex-1 bg-purple-500 hover:bg-purple-600"
                                                size="sm"
                                            >
                                                <Plus className="mr-2 h-4 w-4" />
                                                Add
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    setIsAddingModel(false);
                                                    setNewModelName('');
                                                }}
                                                variant="outline"
                                                size="sm"
                                                className="flex-1"
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right: Field Properties */}
                        {selectedField && fieldModelId && selectedFieldId ? (
                        <Card className="w-64 flex flex-col overflow-auto">
                            <CardHeader>
                                <CardTitle className="text-sm">
                                    Field Properties
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-4">
                                <div>
                                    <label className="block text-xs font-medium mb-2">
                                        Field Name
                                    </label>
                                    <Input
                                        value={selectedField.name}
                                        onChange={(e) =>
                                            updateField(fieldModelId, selectedFieldId, {
                                                name: e.target.value,
                                            })
                                        }
                                        className="text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium mb-2">
                                        Field Type
                                    </label>
                                    <Select
                                        value={selectedField.type}
                                        onValueChange={(value) =>
                                            updateField(fieldModelId, selectedFieldId, {
                                                type: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger className="text-sm">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {FIELD_TYPES.map((type) => (
                                                <SelectItem key={type} value={type}>
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="required"
                                        checked={selectedField.required}
                                        onCheckedChange={(checked) =>
                                            updateField(fieldModelId, selectedFieldId, {
                                                required: checked === true,
                                            })
                                        }
                                    />
                                    <label
                                        htmlFor="required"
                                        className="text-xs font-medium cursor-pointer"
                                    >
                                        Required
                                    </label>
                                </div>

                                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                                    <Button
                                        onClick={() =>
                                            deleteField(fieldModelId, selectedFieldId)
                                        }
                                        variant="outline"
                                        className="w-full text-xs text-red-600 hover:text-red-700"
                                        size="sm"
                                    >
                                        <Trash2 className="mr-2 h-3 w-3" />
                                        Delete
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        ) : null}
                    </div>
                </DndContext>

                {/* Add Field Modal */}
                {isAddingField && dragTargetModelId && (
                    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                        <Card className="max-w-md w-full mx-4">
                            <CardHeader>
                                <CardTitle>Add Field</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Field Name
                                    </label>
                                    <Input
                                        placeholder="e.g., title"
                                        value={newFieldName}
                                        onChange={(e) => setNewFieldName(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && newFieldName.trim()) {
                                                addField(dragTargetModelId, {
                                                    name: newFieldName,
                                                    type: newFieldType,
                                                    required: true,
                                                });
                                                setIsAddingField(false);
                                                setNewFieldName('');
                                                setDraggedFieldType(null);
                                                setDragTargetModelId(null);
                                            }
                                        }}
                                        autoFocus
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Field Type
                                    </label>
                                    <Select
                                        value={newFieldType}
                                        onValueChange={setNewFieldType}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {FIELD_TYPES.map((type) => (
                                                <SelectItem key={type} value={type}>
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox id="required" defaultChecked={true} />
                                    <label
                                        htmlFor="required"
                                        className="text-sm font-medium cursor-pointer"
                                    >
                                        Required
                                    </label>
                                </div>
                            </CardContent>
                            <div className="flex gap-2 px-6 pb-6">
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setIsAddingField(false);
                                        setNewFieldName('');
                                        setDraggedFieldType(null);
                                        setDragTargetModelId(null);
                                    }}
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={() => {
                                        if (newFieldName.trim()) {
                                            addField(dragTargetModelId, {
                                                name: newFieldName,
                                                type: newFieldType,
                                                required: true,
                                            });
                                            setIsAddingField(false);
                                            setNewFieldName('');
                                            setDraggedFieldType(null);
                                            setDragTargetModelId(null);
                                        }
                                    }}
                                    className="flex-1 bg-purple-500 hover:bg-purple-600"
                                >
                                    Add Field
                                </Button>
                            </div>
                        </Card>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}