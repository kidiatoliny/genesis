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
import { Download, Plus, Save, Trash2, MoreVertical, GripVertical, Edit2, Grip } from 'lucide-react';
import { NewSchemaModal } from '@/components/new-schema-modal';
import { useBuilderStore } from '@/stores/builder-store';
import { useBuilderUIStore } from '@/stores/builder-ui-store';
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

const FIELD_TYPE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
    string: { bg: 'bg-blue-600', text: 'text-white', border: 'border-blue-700' },
    integer: { bg: 'bg-green-600', text: 'text-white', border: 'border-green-700' },
    boolean: { bg: 'bg-purple-600', text: 'text-white', border: 'border-purple-700' },
    text: { bg: 'bg-indigo-600', text: 'text-white', border: 'border-indigo-700' },
    datetime: { bg: 'bg-rose-600', text: 'text-white', border: 'border-rose-700' },
    date: { bg: 'bg-orange-600', text: 'text-white', border: 'border-orange-700' },
    time: { bg: 'bg-yellow-600', text: 'text-white', border: 'border-yellow-700' },
    json: { bg: 'bg-cyan-600', text: 'text-white', border: 'border-cyan-700' },
    uuid: { bg: 'bg-teal-600', text: 'text-white', border: 'border-teal-700' },
    email: { bg: 'bg-emerald-600', text: 'text-white', border: 'border-emerald-700' },
    url: { bg: 'bg-sky-600', text: 'text-white', border: 'border-sky-700' },
    enum: { bg: 'bg-violet-600', text: 'text-white', border: 'border-violet-700' },
    decimal: { bg: 'bg-fuchsia-600', text: 'text-white', border: 'border-fuchsia-700' },
    float: { bg: 'bg-pink-600', text: 'text-white', border: 'border-pink-700' },
};


export default function Builder() {
    const { schemas, saved } = usePage<{
        schemas: SavedSchema[];
        saved?: boolean;
    }>().props;

    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isFieldDetailsOpen, setIsFieldDetailsOpen] = useState(false);
    const [fieldDetailsModelId, setFieldDetailsModelId] = useState<string | null>(null);

    // Builder Data Store
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
        setModelPosition,
        setFieldPosition,
        initializeModelPosition,
        initializeFieldPosition,
        resetSchema,
    } = useBuilderStore();

    // Builder UI Store
    const {
        viewMode,
        isAddingModel,
        isAddingField,
        newModelName,
        newFieldName,
        newFieldType,
        fieldNameError,
        draggingModelId,
        draggingFieldId,
        dragOffset,
        draggedFieldType,
        dragTargetModelId,
        modelWidths,
        setViewMode,
        setIsAddingModel,
        setIsAddingField,
        setNewModelName,
        setNewFieldName,
        setNewFieldType,
        setFieldNameError,
        setDraggingModelId,
        setDraggingFieldId,
        setDragOffset,
        setDraggedFieldType,
        setDragTargetModelId,
        setModelWidth,
        resetForm,
    } = useBuilderUIStore();

    const { post, processing } = useForm({});

    const selectedModel = schema?.models.find((m) => m.id === selectedModelId);
    const selectedField = schema?.models
        .flatMap((m) => m.fields.map((f) => ({ ...f, modelId: m.id })))
        .find((f) => f.id === selectedFieldId);
    const fieldModelId = selectedField ? (selectedField as any).modelId : selectedModelId;

    const handleAddModel = () => {
        if (newModelName.trim()) {
            addModel(newModelName);
            const newModelIndex = schema?.models.length || 0;
            initializeModelPosition(`model_${Date.now()}`, newModelIndex);
            setNewModelName('');
        }
    };

    const handleAddField = () => {
        if (selectedModelId && newFieldName.trim()) {
            const newFieldId = `field_${Date.now()}`;
            addField(selectedModelId, {
                name: newFieldName,
                type: newFieldType,
                required: true,
            });

            const model = schema?.models.find(m => m.id === selectedModelId);
            const fieldIndex = model?.fields.length || 0;
            initializeFieldPosition(selectedModelId, newFieldId, fieldIndex);

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

    React.useEffect(() => {
        if (!draggingModelId) return;

        const handleMouseMove = (e: MouseEvent) => {
            const newX = e.clientX - dragOffset.x;
            const newY = e.clientY - dragOffset.y;
            const newPos = { x: Math.max(0, newX), y: Math.max(0, newY) };
            setModelPosition(draggingModelId, newPos);
        };

        const handleMouseUp = () => {
            setDraggingModelId(null);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [draggingModelId, dragOffset, setModelPosition, setDraggingModelId]);

    React.useEffect(() => {
        if (!draggingFieldId) return;

        const handleMouseMove = (e: MouseEvent) => {
            const newX = e.clientX - dragOffset.x;
            const newY = e.clientY - dragOffset.y;
            const newPos = { x: Math.max(0, newX), y: Math.max(0, newY) };
            setFieldPosition(draggingFieldId, newPos);
        };

        const handleMouseUp = () => {
            setDraggingFieldId(null);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [draggingFieldId, dragOffset, setFieldPosition, setDraggingFieldId]);

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
                        <div className="flex gap-2 items-center">
                            <div className="flex gap-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1">
                                <Button
                                    size="sm"
                                    variant={viewMode === 'canvas' ? 'default' : 'outline'}
                                    onClick={() => setViewMode('canvas')}
                                    className={viewMode === 'canvas' ? 'bg-purple-500 hover:bg-purple-600' : ''}
                                >
                                    Canvas
                                </Button>
                                <Button
                                    size="sm"
                                    variant={viewMode === 'card' ? 'default' : 'outline'}
                                    onClick={() => setViewMode('card')}
                                    className={viewMode === 'card' ? 'bg-purple-500 hover:bg-purple-600' : ''}
                                >
                                    Cards
                                </Button>
                            </div>
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
                    {viewMode === 'canvas' ? (
                    <div className="flex flex-1 gap-4 overflow-hidden px-6 py-4">
                        {/* Left: Field Types Sidebar */}
                        <Card className="w-32 flex flex-col overflow-auto">
                            <CardHeader>
                                <CardTitle className="text-sm">Field Types</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-2">
                                {FIELD_TYPES.map((type) => {
                                    const colors = FIELD_TYPE_COLORS[type] || FIELD_TYPE_COLORS.string;
                                    return (
                                    <div
                                        key={type}
                                        draggable
                                        onDragStart={(e) => {
                                            e.dataTransfer.effectAllowed = 'copy';
                                            e.dataTransfer.setData('fieldType', type);
                                        }}
                                        className={`p-2 ${colors.bg} rounded cursor-move text-sm font-medium ${colors.text} hover:opacity-90 transition-opacity border ${colors.border}`}
                                    >
                                        {type}
                                    </div>
                                    );
                                })}
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
                                <>
                                    {/* SVG para desenhar as linhas de conexão */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                                        {schema.models.flatMap((model) => {
                                            const modelPos = schema.modelPositions?.[model.id] || { x: 0, y: 0 };
                                            const modelWidth = modelWidths[model.id] || 80;
                                            const modelCenterX = modelPos.x + modelWidth / 2;
                                            const modelCenterY = modelPos.y + 20;

                                            return model.fields.map((field, index) => {
                                                const fieldPos = schema.fieldPositions?.[field.id] || {
                                                    x: modelPos.x + 450,
                                                    y: modelPos.y + 30 + (index * 80)
                                                };
                                                const fieldCenterX = fieldPos.x + 40;
                                                const fieldCenterY = fieldPos.y + 20;

                                                return (
                                                    <line
                                                        key={`${model.id}-${field.id}`}
                                                        x1={modelCenterX}
                                                        y1={modelCenterY}
                                                        x2={fieldCenterX}
                                                        y2={fieldCenterY}
                                                        stroke={selectedFieldId === field.id ? '#a855f7' : '#d1d5db'}
                                                        strokeWidth={selectedFieldId === field.id ? '2' : '1'}
                                                        strokeDasharray={selectedFieldId === field.id ? '0' : '5,5'}
                                                    />
                                                );
                                            });
                                        })}
                                    </svg>

                                    {/* Modelos */}
                                    {schema.models.map((model, modelIndex) => {
                                        const pos = schema.modelPositions?.[model.id] || { x: modelIndex * 450, y: 50 };
                                        return (
                                            <div
                                                key={model.id}
                                                className="absolute"
                                                style={{
                                                    left: `${pos.x}px`,
                                                    top: `${pos.y}px`,
                                                    zIndex: 10,
                                                }}
                                                onMouseDown={(e) => {
                                                    if ((e.target as HTMLElement).closest('[class*="grip"], [class*="delete"]')) {
                                                        return;
                                                    }
                                                    setDraggingModelId(model.id);
                                                    setDragOffset({
                                                        x: e.clientX - pos.x,
                                                        y: e.clientY - pos.y,
                                                    });
                                                }}
                                            >
                                                <div
                                                ref={(el) => {
                                                    if (el) {
                                                        const width = el.offsetWidth;
                                                        if (modelWidths[model.id] !== width) {
                                                            setModelWidth(model.id, width);
                                                        }
                                                    }
                                                }}
                                                className={`cursor-grab active:cursor-grabbing border-2 rounded-lg px-3 py-2 transition-all w-fit ${
                                                    selectedModelId === model.id
                                                        ? 'border-purple-500 bg-purple-100 dark:bg-purple-900'
                                                        : 'border-neutral-300 bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800'
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
                                                <div className="flex items-center justify-between gap-2">
                                                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 whitespace-nowrap">
                                                        {model.name}
                                                    </p>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="sm" className="h-5 w-5 p-0" onClick={(e) => e.stopPropagation()}>
                                                                <MoreVertical className="h-3 w-3" />
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
                                            </div>
                                            </div>
                                        );
                                    })}

                                    {/* Nós dos campos */}
                                    {schema.models.flatMap((model) => {
                                        return model.fields.map((field, index) => {
                                            const modelPos = schema.modelPositions?.[model.id] || { x: 0, y: 0 };
                                            const fieldPos = schema.fieldPositions?.[field.id] || {
                                                x: modelPos.x + 450,
                                                y: modelPos.y + 30 + (index * 80)
                                            };
                                            return (
                                                <div
                                                    key={field.id}
                                                    className="absolute"
                                                    style={{
                                                        left: `${fieldPos.x}px`,
                                                        top: `${fieldPos.y}px`,
                                                        zIndex: 20,
                                                    }}
                                                    onMouseDown={(e) => {
                                                        setDraggingFieldId(field.id);
                                                        setDragOffset({
                                                            x: e.clientX - fieldPos.x,
                                                            y: e.clientY - fieldPos.y,
                                                        });
                                                    }}
                                                >
                                                    <div
                                                        onClick={() => selectField(field.id)}
                                                        className={`cursor-grab active:cursor-grabbing h-10 px-3 rounded-full flex items-center justify-center text-xs font-medium transition-all border-2 ${
                                                            selectedFieldId === field.id
                                                                ? `${FIELD_TYPE_COLORS[field.type]?.bg || FIELD_TYPE_COLORS.string.bg} text-white shadow-lg border-2`
                                                                : `${FIELD_TYPE_COLORS[field.type]?.bg || FIELD_TYPE_COLORS.string.bg} text-white hover:opacity-90 border-2 ${FIELD_TYPE_COLORS[field.type]?.border || FIELD_TYPE_COLORS.string.border}`
                                                        }`}
                                                        title={field.type}
                                                    >
                                                        <span className="text-center truncate">{field.name}</span>
                                                    </div>
                                                </div>
                                            );
                                        });
                                    })}
                                </>
                            )}

                            {/* Add Model FAB - Bottom Right */}
                            {viewMode === 'canvas' && (
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
                            )}
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
                    ) : (
                    <div className="flex-1 overflow-auto px-6 py-4 relative">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {schema.models.map((model) => (
                                <Card key={model.id} className="flex flex-col">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-lg">{model.name}</CardTitle>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                                        <MoreVertical className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem
                                                        onClick={() => deleteModel(model.id)}
                                                        className="text-red-600"
                                                    >
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1 space-y-3">
                                        <div>
                                            <p className="text-xs font-medium text-neutral-500 mb-2">Fields</p>
                                            {model.fields.length > 0 ? (
                                                <div className="space-y-2">
                                                    {model.fields.map((field) => (
                                                        <div
                                                            key={field.id}
                                                            className={`flex items-center justify-between rounded-md border px-2 py-1.5 text-xs transition-colors cursor-pointer hover:opacity-90 ${
                                                                selectedFieldId === field.id
                                                                    ? `${FIELD_TYPE_COLORS[field.type]?.bg || FIELD_TYPE_COLORS.string.bg} text-white ring-2 ring-offset-1`
                                                                    : `${FIELD_TYPE_COLORS[field.type]?.bg || FIELD_TYPE_COLORS.string.bg} text-white`
                                                            }`}
                                                            onClick={() => {
                                                                selectModel(model.id);
                                                                selectField(field.id);
                                                                setFieldDetailsModelId(model.id);
                                                                setIsFieldDetailsOpen(true);
                                                            }}
                                                        >
                                                            <span>{field.name}</span>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="h-4 w-4 p-0 ml-1 hover:bg-black/20"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    deleteField(model.id, field.id);
                                                                }}
                                                            >
                                                                <Trash2 className="h-3 w-3" />
                                                            </Button>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-xs text-neutral-400">No fields yet</p>
                                            )}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => {
                                                selectModel(model.id);
                                                setIsAddingField(true);
                                                setDragTargetModelId(model.id);
                                            }}
                                            className="w-full"
                                        >
                                            <Plus className="mr-2 h-4 w-4" />
                                            Add Field
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                            {schema.models.length === 0 && (
                                <div className="col-span-full flex h-32 items-center justify-center">
                                    <p className="text-neutral-500">No models yet</p>
                                </div>
                            )}
                        </div>

                        {/* Add Model FAB - Bottom Right */}
                        {viewMode === 'card' && (
                        <div className="fixed bottom-6 right-6">
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
                        )}
                    </div>
                    )}
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
                                        Field Name <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="e.g., title"
                                        value={newFieldName}
                                        onChange={(e) => {
                                            setNewFieldName(e.target.value);
                                            if (fieldNameError && e.target.value.trim()) {
                                                setFieldNameError(false);
                                            }
                                        }}
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
                                                setFieldNameError(false);
                                            }
                                        }}
                                        autoFocus
                                        className={fieldNameError ? 'border-red-500' : ''}
                                    />
                                    {fieldNameError && (
                                        <p className="text-xs text-red-500 mt-1">Field name is required</p>
                                    )}
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
                                            setFieldNameError(false);
                                        } else {
                                            setFieldNameError(true);
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

                {/* Field Details Modal - Card View */}
                {isFieldDetailsOpen && selectedField && fieldDetailsModelId && selectedFieldId && viewMode === 'card' ? (
                    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                        <Card className="max-w-md w-full mx-4">
                            <CardHeader>
                                <CardTitle>Field Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Field Name
                                    </label>
                                    <Input
                                        value={selectedField.name}
                                        onChange={(e) =>
                                            updateField(fieldDetailsModelId, selectedFieldId, {
                                                name: e.target.value,
                                            })
                                        }
                                        className="text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Field Type
                                    </label>
                                    <Select
                                        value={selectedField.type}
                                        onValueChange={(value) =>
                                            updateField(fieldDetailsModelId, selectedFieldId, {
                                                type: value,
                                            })
                                        }
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
                                    <Checkbox
                                        id="field-required"
                                        checked={selectedField.required}
                                        onCheckedChange={(checked) =>
                                            updateField(fieldDetailsModelId, selectedFieldId, {
                                                required: checked === true,
                                            })
                                        }
                                    />
                                    <label
                                        htmlFor="field-required"
                                        className="text-sm font-medium cursor-pointer"
                                    >
                                        Required
                                    </label>
                                </div>

                                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                                    <Button
                                        onClick={() =>
                                            deleteField(fieldDetailsModelId, selectedFieldId)
                                        }
                                        variant="outline"
                                        className="w-full text-sm text-red-600 hover:text-red-700"
                                    >
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Delete Field
                                    </Button>
                                </div>
                            </CardContent>
                            <div className="flex gap-2 px-6 pb-6">
                                <Button
                                    variant="outline"
                                    onClick={() => setIsFieldDetailsOpen(false)}
                                    className="flex-1"
                                >
                                    Close
                                </Button>
                            </div>
                        </Card>
                    </div>
                ) : null}
            </div>
        </AppLayout>
    );
}