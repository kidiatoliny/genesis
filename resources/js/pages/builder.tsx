import { FieldValidations } from '@/components/field-validations';
import { NewSchemaModal } from '@/components/new-schema-modal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { LARAVEL_VALIDATIONS } from '@/constants/laravel-validations';
import AppLayout from '@/layouts/app-layout';
import { useBuilderStore } from '@/stores/builder-store';
import { useBuilderUIStore } from '@/stores/builder-ui-store';
import { type BreadcrumbItem } from '@/types';
import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import {
    Download,
    Edit2,
    MoreVertical,
    Plus,
    Save,
    Trash2,
    X,
} from 'lucide-react';
import React, { useRef, useState } from 'react';

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

const FIELD_TYPE_COLORS: Record<
    string,
    { bg: string; text: string; border: string }
> = {
    string: {
        bg: 'bg-blue-600',
        text: 'text-white',
        border: 'border-blue-700',
    },
    integer: {
        bg: 'bg-green-600',
        text: 'text-white',
        border: 'border-green-700',
    },
    boolean: {
        bg: 'bg-purple-600',
        text: 'text-white',
        border: 'border-purple-700',
    },
    text: {
        bg: 'bg-indigo-600',
        text: 'text-white',
        border: 'border-indigo-700',
    },
    datetime: {
        bg: 'bg-rose-600',
        text: 'text-white',
        border: 'border-rose-700',
    },
    date: {
        bg: 'bg-orange-600',
        text: 'text-white',
        border: 'border-orange-700',
    },
    time: {
        bg: 'bg-yellow-600',
        text: 'text-white',
        border: 'border-yellow-700',
    },
    json: { bg: 'bg-cyan-600', text: 'text-white', border: 'border-cyan-700' },
    uuid: { bg: 'bg-teal-600', text: 'text-white', border: 'border-teal-700' },
    email: {
        bg: 'bg-emerald-600',
        text: 'text-white',
        border: 'border-emerald-700',
    },
    url: { bg: 'bg-sky-600', text: 'text-white', border: 'border-sky-700' },
    enum: {
        bg: 'bg-violet-600',
        text: 'text-white',
        border: 'border-violet-700',
    },
    decimal: {
        bg: 'bg-fuchsia-600',
        text: 'text-white',
        border: 'border-fuchsia-700',
    },
    float: { bg: 'bg-pink-600', text: 'text-white', border: 'border-pink-700' },
};

const VALIDATION_COLORS: Record<
    string,
    { bg: string; text: string; border: string }
> = {
    // String validations
    string: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-700 dark:text-blue-300',
        border: 'border-blue-300 dark:border-blue-700',
    },
    min: {
        bg: 'bg-amber-100 dark:bg-amber-900/30',
        text: 'text-amber-700 dark:text-amber-300',
        border: 'border-amber-300 dark:border-amber-700',
    },
    max: {
        bg: 'bg-amber-100 dark:bg-amber-900/30',
        text: 'text-amber-700 dark:text-amber-300',
        border: 'border-amber-300 dark:border-amber-700',
    },
    email: {
        bg: 'bg-emerald-100 dark:bg-emerald-900/30',
        text: 'text-emerald-700 dark:text-emerald-300',
        border: 'border-emerald-300 dark:border-emerald-700',
    },
    url: {
        bg: 'bg-sky-100 dark:bg-sky-900/30',
        text: 'text-sky-700 dark:text-sky-300',
        border: 'border-sky-300 dark:border-sky-700',
    },
    // Numeric validations
    integer: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-700 dark:text-green-300',
        border: 'border-green-300 dark:border-green-700',
    },
    numeric: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-700 dark:text-green-300',
        border: 'border-green-300 dark:border-green-700',
    },
    between: {
        bg: 'bg-lime-100 dark:bg-lime-900/30',
        text: 'text-lime-700 dark:text-lime-300',
        border: 'border-lime-300 dark:border-lime-700',
    },
    gt: {
        bg: 'bg-lime-100 dark:bg-lime-900/30',
        text: 'text-lime-700 dark:text-lime-300',
        border: 'border-lime-300 dark:border-lime-700',
    },
    gte: {
        bg: 'bg-lime-100 dark:bg-lime-900/30',
        text: 'text-lime-700 dark:text-lime-300',
        border: 'border-lime-300 dark:border-lime-700',
    },
    lt: {
        bg: 'bg-lime-100 dark:bg-lime-900/30',
        text: 'text-lime-700 dark:text-lime-300',
        border: 'border-lime-300 dark:border-lime-700',
    },
    lte: {
        bg: 'bg-lime-100 dark:bg-lime-900/30',
        text: 'text-lime-700 dark:text-lime-300',
        border: 'border-lime-300 dark:border-lime-700',
    },
    // Database validations
    unique: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-700 dark:text-purple-300',
        border: 'border-purple-300 dark:border-purple-700',
    },
    exists: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-700 dark:text-purple-300',
        border: 'border-purple-300 dark:border-purple-700',
    },
    // Date validations
    date: {
        bg: 'bg-rose-100 dark:bg-rose-900/30',
        text: 'text-rose-700 dark:text-rose-300',
        border: 'border-rose-300 dark:border-rose-700',
    },
    date_format: {
        bg: 'bg-rose-100 dark:bg-rose-900/30',
        text: 'text-rose-700 dark:text-rose-300',
        border: 'border-rose-300 dark:border-rose-700',
    },
    before: {
        bg: 'bg-rose-100 dark:bg-rose-900/30',
        text: 'text-rose-700 dark:text-rose-300',
        border: 'border-rose-300 dark:border-rose-700',
    },
    after: {
        bg: 'bg-rose-100 dark:bg-rose-900/30',
        text: 'text-rose-700 dark:text-rose-300',
        border: 'border-rose-300 dark:border-rose-700',
    },
    // Pattern & Enum
    regex: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-700 dark:text-orange-300',
        border: 'border-orange-300 dark:border-orange-700',
    },
    in: {
        bg: 'bg-cyan-100 dark:bg-cyan-900/30',
        text: 'text-cyan-700 dark:text-cyan-300',
        border: 'border-cyan-300 dark:border-cyan-700',
    },
    not_in: {
        bg: 'bg-cyan-100 dark:bg-cyan-900/30',
        text: 'text-cyan-700 dark:text-cyan-300',
        border: 'border-cyan-300 dark:border-cyan-700',
    },
    // File validations
    file: {
        bg: 'bg-indigo-100 dark:bg-indigo-900/30',
        text: 'text-indigo-700 dark:text-indigo-300',
        border: 'border-indigo-300 dark:border-indigo-700',
    },
    mimes: {
        bg: 'bg-indigo-100 dark:bg-indigo-900/30',
        text: 'text-indigo-700 dark:text-indigo-300',
        border: 'border-indigo-300 dark:border-indigo-700',
    },
    image: {
        bg: 'bg-indigo-100 dark:bg-indigo-900/30',
        text: 'text-indigo-700 dark:text-indigo-300',
        border: 'border-indigo-300 dark:border-indigo-700',
    },
    // Other validations
    json: {
        bg: 'bg-violet-100 dark:bg-violet-900/30',
        text: 'text-violet-700 dark:text-violet-300',
        border: 'border-violet-300 dark:border-violet-700',
    },
    uuid: {
        bg: 'bg-teal-100 dark:bg-teal-900/30',
        text: 'text-teal-700 dark:text-teal-300',
        border: 'border-teal-300 dark:border-teal-700',
    },
    boolean: {
        bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30',
        text: 'text-fuchsia-700 dark:text-fuchsia-300',
        border: 'border-fuchsia-300 dark:border-fuchsia-700',
    },
    confirmed: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-700 dark:text-green-300',
        border: 'border-green-300 dark:border-green-700',
    },
    same: {
        bg: 'bg-pink-100 dark:bg-pink-900/30',
        text: 'text-pink-700 dark:text-pink-300',
        border: 'border-pink-300 dark:border-pink-700',
    },
    different: {
        bg: 'bg-pink-100 dark:bg-pink-900/30',
        text: 'text-pink-700 dark:text-pink-300',
        border: 'border-pink-300 dark:border-pink-700',
    },
    array: {
        bg: 'bg-red-100 dark:bg-red-900/30',
        text: 'text-red-700 dark:text-red-300',
        border: 'border-red-300 dark:border-red-700',
    },
    list: {
        bg: 'bg-red-100 dark:bg-red-900/30',
        text: 'text-red-700 dark:text-red-300',
        border: 'border-red-300 dark:border-red-700',
    },
    nullable: {
        bg: 'bg-gray-100 dark:bg-gray-900/30',
        text: 'text-gray-700 dark:text-gray-300',
        border: 'border-gray-300 dark:border-gray-700',
    },
    filled: {
        bg: 'bg-gray-100 dark:bg-gray-900/30',
        text: 'text-gray-700 dark:text-gray-300',
        border: 'border-gray-300 dark:border-gray-700',
    },
    distinct: {
        bg: 'bg-slate-100 dark:bg-slate-900/30',
        text: 'text-slate-700 dark:text-slate-300',
        border: 'border-slate-300 dark:border-slate-700',
    },
    ip: {
        bg: 'bg-cyan-100 dark:bg-cyan-900/30',
        text: 'text-cyan-700 dark:text-cyan-300',
        border: 'border-cyan-300 dark:border-cyan-700',
    },
    ipv4: {
        bg: 'bg-cyan-100 dark:bg-cyan-900/30',
        text: 'text-cyan-700 dark:text-cyan-300',
        border: 'border-cyan-300 dark:border-cyan-700',
    },
    ipv6: {
        bg: 'bg-cyan-100 dark:bg-cyan-900/30',
        text: 'text-cyan-700 dark:text-cyan-300',
        border: 'border-cyan-300 dark:border-cyan-700',
    },
    slug: {
        bg: 'bg-indigo-100 dark:bg-indigo-900/30',
        text: 'text-indigo-700 dark:text-indigo-300',
        border: 'border-indigo-300 dark:border-indigo-700',
    },
    timezone: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-700 dark:text-orange-300',
        border: 'border-orange-300 dark:border-orange-700',
    },
};

const getValidationColor = (rule: string) => {
    return (
        VALIDATION_COLORS[rule] || {
            bg: 'bg-neutral-100 dark:bg-neutral-900/30',
            text: 'text-neutral-700 dark:text-neutral-300',
            border: 'border-neutral-300 dark:border-neutral-700',
        }
    );
};

export default function Builder() {
    const { schemas, saved } = usePage<{
        schemas: SavedSchema[];
        saved?: boolean;
    }>().props;

    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isFieldDetailsOpen, setIsFieldDetailsOpen] = useState(false);
    const [fieldDetailsModelId, setFieldDetailsModelId] = useState<
        string | null
    >(null);

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
    } = useBuilderUIStore();

    const { post, processing } = useForm({});

    // Hooks that must be declared unconditionally (rules-of-hooks)
    const canvasRef = useRef<HTMLDivElement>(null);
    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 5,
            },
        }),
    );

    const selectedField:
        | (import('@/stores/schema-store').Field & { modelId: string })
        | undefined = schema?.models
        .flatMap((m) => m.fields.map((f) => ({ ...f, modelId: m.id })))
        .find((f) => f.id === selectedFieldId);

    const handleAddModel = () => {
        if (newModelName.trim()) {
            addModel(newModelName);
            const newModelIndex = schema?.models.length || 0;
            initializeModelPosition(`model_${Date.now()}`, newModelIndex);
            setNewModelName('');
        }
    };

    // handleAddField removed (unused)

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
                            <h1 className="text-2xl font-bold">
                                Schema Builder
                            </h1>
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
                                                <p className="mt-1 text-xs text-neutral-400">
                                                    {new Date(
                                                        schemaRecord.created_at,
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
                                                onClick={() =>
                                                    handleDownload(schemaRecord)
                                                }
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
                                    <h2 className="text-lg font-semibold">
                                        No schemas yet
                                    </h2>
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

    const handleDragEnd = () => {
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
                                {schema.models.length} models •{' '}
                                {schema.models.reduce(
                                    (sum, m) => sum + m.fields.length,
                                    0,
                                )}{' '}
                                fields
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800">
                                <Button
                                    size="sm"
                                    variant={
                                        viewMode === 'canvas'
                                            ? 'default'
                                            : 'outline'
                                    }
                                    onClick={() => setViewMode('canvas')}
                                    className={
                                        viewMode === 'canvas'
                                            ? 'bg-purple-500 hover:bg-purple-600'
                                            : ''
                                    }
                                >
                                    Canvas
                                </Button>
                                <Button
                                    size="sm"
                                    variant={
                                        viewMode === 'card'
                                            ? 'default'
                                            : 'outline'
                                    }
                                    onClick={() => setViewMode('card')}
                                    className={
                                        viewMode === 'card'
                                            ? 'bg-purple-500 hover:bg-purple-600'
                                            : ''
                                    }
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
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                        <Card className="mx-4 w-full max-w-md">
                            <CardHeader>
                                <CardTitle>Edit Schema</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="mb-2 block text-sm font-medium">
                                        Schema Name
                                    </label>
                                    <Input
                                        value={schema.name}
                                        onChange={(e) =>
                                            setSchemaName(e.target.value)
                                        }
                                        placeholder="e.g., Blog App"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium">
                                        Project Type
                                    </label>
                                    <Select
                                        value={schema.projectType}
                                        onValueChange={(
                                            value: import('@/stores/schema-store').SchemaDefinition['projectType'],
                                        ) => setProjectType(value)}
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
                                        value={schema.responseType}
                                        onValueChange={(
                                            value: import('@/stores/schema-store').SchemaDefinition['responseType'],
                                        ) => setResponseType(value)}
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
                                        value={schema.viewEngine}
                                        onValueChange={(
                                            value: import('@/stores/schema-store').SchemaDefinition['viewEngine'],
                                        ) => setViewEngine(value)}
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

                <DndContext
                    sensors={sensors}
                    onDragEnd={handleDragEnd}
                    className="flex flex-1"
                >
                    {viewMode === 'canvas' ? (
                        <div className="flex flex-1 gap-4 overflow-hidden px-6 py-4">
                            {/* Left: Field Types & Validations Sidebar */}
                            <Card className="flex h-full w-40 flex-col">
                                <CardHeader>
                                    <CardTitle className="text-sm">
                                        Field Types
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-2">
                                    {FIELD_TYPES.map((type) => {
                                        const colors =
                                            FIELD_TYPE_COLORS[type] ||
                                            FIELD_TYPE_COLORS.string;
                                        return (
                                            <div
                                                key={type}
                                                draggable
                                                onDragStart={(e) => {
                                                    e.dataTransfer.effectAllowed =
                                                        'copy';
                                                    e.dataTransfer.setData(
                                                        'fieldType',
                                                        type,
                                                    );
                                                }}
                                                className={`p-2 ${colors.bg} cursor-move rounded text-sm font-medium ${colors.text} border transition-opacity hover:opacity-90 ${colors.border}`}
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
                                className="relative h-full flex-1 overflow-auto rounded-lg border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-800"
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {schema.models.length === 0 ? (
                                    <div className="flex h-full items-center justify-center">
                                        <div className="text-center">
                                            <h2 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                                                No models yet
                                            </h2>
                                            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                                                Add your first model using the
                                                button below
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {/* SVG para desenhar as linhas de conexão */}
                                        <svg
                                            className="pointer-events-none absolute inset-0 h-full w-full"
                                            style={{ zIndex: 0 }}
                                        >
                                            {schema.models.flatMap((model) => {
                                                const modelPos = schema
                                                    .modelPositions?.[
                                                    model.id
                                                ] || { x: 0, y: 0 };
                                                const modelWidth =
                                                    modelWidths[model.id] || 80;
                                                const modelCenterX =
                                                    modelPos.x + modelWidth / 2;
                                                const modelCenterY =
                                                    modelPos.y + 20;

                                                return model.fields.map(
                                                    (field, index) => {
                                                        const fieldPos = schema
                                                            .fieldPositions?.[
                                                            field.id
                                                        ] || {
                                                            x: modelPos.x + 450,
                                                            y:
                                                                modelPos.y +
                                                                30 +
                                                                index * 80,
                                                        };
                                                        const fieldCenterX =
                                                            fieldPos.x + 40;
                                                        const fieldCenterY =
                                                            fieldPos.y + 20;

                                                        return (
                                                            <line
                                                                key={`${model.id}-${field.id}`}
                                                                x1={
                                                                    modelCenterX
                                                                }
                                                                y1={
                                                                    modelCenterY
                                                                }
                                                                x2={
                                                                    fieldCenterX
                                                                }
                                                                y2={
                                                                    fieldCenterY
                                                                }
                                                                stroke={
                                                                    selectedFieldId ===
                                                                    field.id
                                                                        ? '#a855f7'
                                                                        : '#d1d5db'
                                                                }
                                                                strokeWidth={
                                                                    selectedFieldId ===
                                                                    field.id
                                                                        ? '2'
                                                                        : '1'
                                                                }
                                                                strokeDasharray={
                                                                    selectedFieldId ===
                                                                    field.id
                                                                        ? '0'
                                                                        : '5,5'
                                                                }
                                                            />
                                                        );
                                                    },
                                                );
                                            })}
                                        </svg>

                                        {/* Modelos */}
                                        {schema.models.map(
                                            (model, modelIndex) => {
                                                const pos = schema
                                                    .modelPositions?.[
                                                    model.id
                                                ] || {
                                                    x: modelIndex * 450,
                                                    y: 50,
                                                };
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
                                                            if (
                                                                (
                                                                    e.target as HTMLElement
                                                                ).closest(
                                                                    '[class*="grip"], [class*="delete"]',
                                                                )
                                                            ) {
                                                                return;
                                                            }
                                                            setDraggingModelId(
                                                                model.id,
                                                            );
                                                            setDragOffset({
                                                                x:
                                                                    e.clientX -
                                                                    pos.x,
                                                                y:
                                                                    e.clientY -
                                                                    pos.y,
                                                            });
                                                        }}
                                                    >
                                                        <div
                                                            ref={(el) => {
                                                                if (el) {
                                                                    const width =
                                                                        el.offsetWidth;
                                                                    if (
                                                                        modelWidths[
                                                                            model
                                                                                .id
                                                                        ] !==
                                                                        width
                                                                    ) {
                                                                        setModelWidth(
                                                                            model.id,
                                                                            width,
                                                                        );
                                                                    }
                                                                }
                                                            }}
                                                            className={`w-fit cursor-grab rounded-lg border-2 px-3 py-2 transition-all active:cursor-grabbing ${
                                                                selectedModelId ===
                                                                model.id
                                                                    ? 'border-purple-500 bg-purple-100 dark:bg-purple-900'
                                                                    : 'border-neutral-300 bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800'
                                                            }`}
                                                            onClick={() =>
                                                                selectModel(
                                                                    model.id,
                                                                )
                                                            }
                                                            onDragOver={(e) =>
                                                                e.preventDefault()
                                                            }
                                                            onDrop={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                const fieldType =
                                                                    e.dataTransfer.getData(
                                                                        'fieldType',
                                                                    );
                                                                if (fieldType) {
                                                                    setDraggedFieldType(
                                                                        fieldType,
                                                                    );
                                                                    setDragTargetModelId(
                                                                        model.id,
                                                                    );
                                                                    setIsAddingField(
                                                                        true,
                                                                    );
                                                                    setNewFieldType(
                                                                        fieldType,
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            <div className="flex items-center justify-between gap-2">
                                                                <p className="text-sm font-semibold whitespace-nowrap text-neutral-900 dark:text-neutral-100">
                                                                    {model.name}
                                                                </p>
                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger
                                                                        asChild
                                                                    >
                                                                        <Button
                                                                            variant="ghost"
                                                                            size="sm"
                                                                            className="h-5 w-5 p-0"
                                                                            onClick={(
                                                                                e,
                                                                            ) =>
                                                                                e.stopPropagation()
                                                                            }
                                                                        >
                                                                            <MoreVertical className="h-3 w-3" />
                                                                        </Button>
                                                                    </DropdownMenuTrigger>
                                                                    <DropdownMenuContent align="end">
                                                                        <DropdownMenuItem
                                                                            onClick={(
                                                                                e,
                                                                            ) => {
                                                                                e.stopPropagation();
                                                                                deleteModel(
                                                                                    model.id,
                                                                                );
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
                                            },
                                        )}

                                        {/* Nós dos campos */}
                                        {schema.models.flatMap((model) => {
                                            return model.fields.map(
                                                (field, index) => {
                                                    const modelPos = schema
                                                        .modelPositions?.[
                                                        model.id
                                                    ] || { x: 0, y: 0 };
                                                    const fieldPos = schema
                                                        .fieldPositions?.[
                                                        field.id
                                                    ] || {
                                                        x: modelPos.x + 450,
                                                        y:
                                                            modelPos.y +
                                                            30 +
                                                            index * 80,
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
                                                            onMouseDown={(
                                                                e,
                                                            ) => {
                                                                setDraggingFieldId(
                                                                    field.id,
                                                                );
                                                                setDragOffset({
                                                                    x:
                                                                        e.clientX -
                                                                        fieldPos.x,
                                                                    y:
                                                                        e.clientY -
                                                                        fieldPos.y,
                                                                });
                                                            }}
                                                        >
                                                            <div
                                                                onClick={() =>
                                                                    selectField(
                                                                        field.id,
                                                                    )
                                                                }
                                                                onDoubleClick={() => {
                                                                    selectField(
                                                                        field.id,
                                                                    );
                                                                    selectModel(
                                                                        model.id,
                                                                    );
                                                                    setFieldDetailsModelId(
                                                                        model.id,
                                                                    );
                                                                    setIsFieldDetailsOpen(
                                                                        true,
                                                                    );
                                                                }}
                                                                onDragOver={(
                                                                    e,
                                                                ) =>
                                                                    e.preventDefault()
                                                                }
                                                                onDrop={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    const validationData =
                                                                        e.dataTransfer.getData(
                                                                            'validation',
                                                                        );
                                                                    if (
                                                                        validationData
                                                                    ) {
                                                                        try {
                                                                            const validation =
                                                                                JSON.parse(
                                                                                    validationData,
                                                                                );
                                                                            const currentValidations =
                                                                                field.validations ||
                                                                                [];
                                                                            const alreadyExists =
                                                                                currentValidations.some(
                                                                                    (
                                                                                        v,
                                                                                    ) =>
                                                                                        v.rule ===
                                                                                        validation.rule,
                                                                                );
                                                                            if (
                                                                                !alreadyExists
                                                                            ) {
                                                                                updateField(
                                                                                    model.id,
                                                                                    field.id,
                                                                                    {
                                                                                        validations:
                                                                                            [
                                                                                                ...currentValidations,
                                                                                                {
                                                                                                    rule: validation.rule,
                                                                                                },
                                                                                            ],
                                                                                    },
                                                                                );
                                                                            }
                                                                        } catch (e) {
                                                                            console.error(
                                                                                'Error parsing validation data:',
                                                                                e,
                                                                            );
                                                                        }
                                                                    }
                                                                }}
                                                                className={`flex h-10 cursor-grab items-center justify-center rounded-full border-2 px-3 text-xs font-medium transition-all active:cursor-grabbing ${
                                                                    selectedFieldId ===
                                                                    field.id
                                                                        ? `${FIELD_TYPE_COLORS[field.type]?.bg || FIELD_TYPE_COLORS.string.bg} border-2 text-white shadow-lg`
                                                                        : `${FIELD_TYPE_COLORS[field.type]?.bg || FIELD_TYPE_COLORS.string.bg} border-2 text-white hover:opacity-90 ${FIELD_TYPE_COLORS[field.type]?.border || FIELD_TYPE_COLORS.string.border}`
                                                                }`}
                                                                title={
                                                                    field.type
                                                                }
                                                            >
                                                                <span className="truncate text-center">
                                                                    {field.name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    );
                                                },
                                            );
                                        })}
                                    </>
                                )}

                                {/* Add Model FAB - Bottom Right */}
                                {viewMode === 'canvas' && (
                                    <div className="absolute right-6 bottom-6">
                                        {!isAddingModel ? (
                                            <Button
                                                onClick={() =>
                                                    setIsAddingModel(true)
                                                }
                                                className="h-14 w-14 rounded-full bg-purple-500 p-0 shadow-lg hover:bg-purple-600"
                                            >
                                                <Plus className="h-6 w-6" />
                                            </Button>
                                        ) : (
                                            <div className="flex w-56 flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
                                                <label className="text-sm font-medium">
                                                    Model name
                                                </label>
                                                <Input
                                                    placeholder="e.g., User"
                                                    value={newModelName}
                                                    onChange={(e) =>
                                                        setNewModelName(
                                                            e.target.value,
                                                        )
                                                    }
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter') {
                                                            handleAddModel();
                                                            setIsAddingModel(
                                                                false,
                                                            );
                                                        }
                                                        if (e.key === 'Escape')
                                                            setIsAddingModel(
                                                                false,
                                                            );
                                                    }}
                                                    autoFocus
                                                    className="text-sm"
                                                />
                                                <div className="flex gap-2">
                                                    <Button
                                                        onClick={() => {
                                                            handleAddModel();
                                                            setIsAddingModel(
                                                                false,
                                                            );
                                                        }}
                                                        className="flex-1 bg-purple-500 hover:bg-purple-600"
                                                        size="sm"
                                                    >
                                                        <Plus className="mr-2 h-4 w-4" />
                                                        Add
                                                    </Button>
                                                    <Button
                                                        onClick={() => {
                                                            setIsAddingModel(
                                                                false,
                                                            );
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

                            {/* Right: All Validations Sidebar */}
                            <Card className="flex h-full w-48 flex-col">
                                <CardHeader>
                                    <CardTitle className="text-sm">
                                        Validations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-2 overflow-y-auto">
                                    {LARAVEL_VALIDATIONS.map((validation) => {
                                        const colors = getValidationColor(
                                            validation.rule,
                                        );
                                        return (
                                            <div
                                                key={validation.rule}
                                                draggable
                                                onDragStart={(e) => {
                                                    e.dataTransfer.effectAllowed =
                                                        'copy';
                                                    e.dataTransfer.setData(
                                                        'validation',
                                                        JSON.stringify(
                                                            validation,
                                                        ),
                                                    );
                                                }}
                                                className={`cursor-move rounded border p-2 text-xs font-medium transition-colors hover:opacity-90 ${colors.bg} ${colors.text} ${colors.border}`}
                                                title={validation.description}
                                            >
                                                {validation.rule}
                                            </div>
                                        );
                                    })}
                                </CardContent>
                            </Card>
                        </div>
                    ) : (
                        <div className="relative flex-1 overflow-auto px-6 py-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {schema.models.map((model) => (
                                    <Card
                                        key={model.id}
                                        className="flex flex-col"
                                    >
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <CardTitle className="text-lg">
                                                    {model.name}
                                                </CardTitle>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-6 w-6 p-0"
                                                        >
                                                            <MoreVertical className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem
                                                            onClick={() =>
                                                                deleteModel(
                                                                    model.id,
                                                                )
                                                            }
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
                                                <p className="mb-2 text-xs font-medium text-neutral-500">
                                                    Fields
                                                </p>
                                                {model.fields.length > 0 ? (
                                                    <div className="space-y-2">
                                                        {model.fields.map(
                                                            (field) => (
                                                                <div
                                                                    key={
                                                                        field.id
                                                                    }
                                                                    className={`flex cursor-pointer items-center justify-between rounded-md border px-2 py-1.5 text-xs transition-colors hover:opacity-90 ${
                                                                        selectedFieldId ===
                                                                        field.id
                                                                            ? `${FIELD_TYPE_COLORS[field.type]?.bg || FIELD_TYPE_COLORS.string.bg} text-white ring-2 ring-offset-1`
                                                                            : `${FIELD_TYPE_COLORS[field.type]?.bg || FIELD_TYPE_COLORS.string.bg} text-white`
                                                                    }`}
                                                                    onClick={() => {
                                                                        selectModel(
                                                                            model.id,
                                                                        );
                                                                        selectField(
                                                                            field.id,
                                                                        );
                                                                        setFieldDetailsModelId(
                                                                            model.id,
                                                                        );
                                                                        setIsFieldDetailsOpen(
                                                                            true,
                                                                        );
                                                                    }}
                                                                >
                                                                    <span>
                                                                        {
                                                                            field.name
                                                                        }
                                                                    </span>
                                                                    <Button
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        className="ml-1 h-4 w-4 p-0 hover:bg-black/20"
                                                                        onClick={(
                                                                            e,
                                                                        ) => {
                                                                            e.stopPropagation();
                                                                            deleteField(
                                                                                model.id,
                                                                                field.id,
                                                                            );
                                                                        }}
                                                                    >
                                                                        <Trash2 className="h-3 w-3" />
                                                                    </Button>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                ) : (
                                                    <p className="text-xs text-neutral-400">
                                                        No fields yet
                                                    </p>
                                                )}
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                    selectModel(model.id);
                                                    setIsAddingField(true);
                                                    setDragTargetModelId(
                                                        model.id,
                                                    );
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
                                        <p className="text-neutral-500">
                                            No models yet
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Add Model FAB - Bottom Right */}
                            {viewMode === 'card' && (
                                <div className="fixed right-6 bottom-6">
                                    {!isAddingModel ? (
                                        <Button
                                            onClick={() =>
                                                setIsAddingModel(true)
                                            }
                                            className="h-14 w-14 rounded-full bg-purple-500 p-0 shadow-lg hover:bg-purple-600"
                                        >
                                            <Plus className="h-6 w-6" />
                                        </Button>
                                    ) : (
                                        <div className="flex w-56 flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
                                            <label className="text-sm font-medium">
                                                Model name
                                            </label>
                                            <Input
                                                placeholder="e.g., User"
                                                value={newModelName}
                                                onChange={(e) =>
                                                    setNewModelName(
                                                        e.target.value,
                                                    )
                                                }
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        handleAddModel();
                                                        setIsAddingModel(false);
                                                    }
                                                    if (e.key === 'Escape')
                                                        setIsAddingModel(false);
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
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                        <Card className="mx-4 w-full max-w-md">
                            <CardHeader>
                                <CardTitle>Add Field</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="mb-2 block text-sm font-medium">
                                        Field Name{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="e.g., title"
                                        value={newFieldName}
                                        onChange={(e) => {
                                            setNewFieldName(e.target.value);
                                            if (
                                                fieldNameError &&
                                                e.target.value.trim()
                                            ) {
                                                setFieldNameError(false);
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (
                                                e.key === 'Enter' &&
                                                newFieldName.trim()
                                            ) {
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
                                        className={
                                            fieldNameError
                                                ? 'border-red-500'
                                                : ''
                                        }
                                    />
                                    {fieldNameError && (
                                        <p className="mt-1 text-xs text-red-500">
                                            Field name is required
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium">
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
                                                <SelectItem
                                                    key={type}
                                                    value={type}
                                                >
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="required"
                                        defaultChecked={true}
                                    />
                                    <label
                                        htmlFor="required"
                                        className="cursor-pointer text-sm font-medium"
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
                {isFieldDetailsOpen &&
                selectedField &&
                fieldDetailsModelId &&
                selectedFieldId &&
                viewMode === 'card' ? (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                        <Card className="flex h-[90vh] w-full max-w-3xl flex-col rounded-xl shadow-2xl">
                            <CardHeader className="border-b border-neutral-200 px-6 py-2.5 dark:border-neutral-700">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex min-w-0 flex-1 items-center gap-2.5">
                                        <div
                                            className={`flex-shrink-0 rounded p-1.5 ${FIELD_TYPE_COLORS[selectedField.type]?.bg || FIELD_TYPE_COLORS.string.bg}`}
                                        >
                                            <span className="text-xs font-bold text-white">
                                                {selectedField.type
                                                    .charAt(0)
                                                    .toUpperCase()}
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <CardTitle className="truncate text-sm font-bold">
                                                {selectedField.name}
                                            </CardTitle>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                                {selectedField.type}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 items-center gap-1">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30"
                                            onClick={() =>
                                                deleteField(
                                                    fieldDetailsModelId,
                                                    selectedFieldId,
                                                )
                                            }
                                            title="Delete field"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 w-8 p-0 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                            onClick={() =>
                                                setIsFieldDetailsOpen(false)
                                            }
                                            title="Close"
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-6 overflow-y-auto p-6">
                                {/* Basic Information Section */}
                                <div className="space-y-4">
                                    <div className="mb-4 flex items-center gap-2">
                                        <div className="h-1 w-1 rounded-full bg-purple-500"></div>
                                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                            Basic Information
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="mb-2 block text-xs font-semibold tracking-wide text-neutral-700 uppercase dark:text-neutral-300">
                                                Field Name
                                            </label>
                                            <Input
                                                value={selectedField.name}
                                                onChange={(e) =>
                                                    updateField(
                                                        fieldDetailsModelId,
                                                        selectedFieldId,
                                                        {
                                                            name: e.target
                                                                .value,
                                                        },
                                                    )
                                                }
                                                className="h-9 bg-neutral-50 text-sm dark:bg-neutral-800"
                                                placeholder="e.g., title"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-xs font-semibold tracking-wide text-neutral-700 uppercase dark:text-neutral-300">
                                                Field Type
                                            </label>
                                            <Select
                                                value={selectedField.type}
                                                onValueChange={(value) =>
                                                    updateField(
                                                        fieldDetailsModelId,
                                                        selectedFieldId,
                                                        {
                                                            type: value,
                                                        },
                                                    )
                                                }
                                            >
                                                <SelectTrigger className="h-9 bg-neutral-50 dark:bg-neutral-800">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {FIELD_TYPES.map((type) => (
                                                        <SelectItem
                                                            key={type}
                                                            value={type}
                                                        >
                                                            {type}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-lg border border-purple-200 bg-purple-50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
                                        <Checkbox
                                            id="field-required"
                                            checked={selectedField.required}
                                            onCheckedChange={(checked) =>
                                                updateField(
                                                    fieldDetailsModelId,
                                                    selectedFieldId,
                                                    {
                                                        required:
                                                            checked === true,
                                                    },
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="field-required"
                                            className="flex-1 cursor-pointer text-sm font-medium"
                                        >
                                            This field is required
                                        </label>
                                    </div>
                                </div>

                                {/* Validations Section */}
                                <div className="space-y-4 border-t border-neutral-200 pt-6 dark:border-neutral-700">
                                    <div className="mb-4 flex items-center gap-2">
                                        <div className="h-1 w-1 rounded-full bg-purple-500"></div>
                                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                            Validation Rules
                                        </h3>
                                    </div>
                                    <FieldValidations
                                        fieldType={selectedField.type}
                                        validations={
                                            selectedField.validations || []
                                        }
                                        onAddValidation={(validation) =>
                                            updateField(
                                                fieldDetailsModelId,
                                                selectedFieldId,
                                                {
                                                    validations: [
                                                        ...(selectedField.validations ||
                                                            []),
                                                        validation,
                                                    ],
                                                },
                                            )
                                        }
                                        onRemoveValidation={(rule) =>
                                            updateField(
                                                fieldDetailsModelId,
                                                selectedFieldId,
                                                {
                                                    validations: (
                                                        selectedField.validations ||
                                                        []
                                                    ).filter(
                                                        (v) => v.rule !== rule,
                                                    ),
                                                },
                                            )
                                        }
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ) : null}
            </div>
        </AppLayout>
    );
}
