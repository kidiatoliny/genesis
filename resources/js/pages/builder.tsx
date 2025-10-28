import React, { useState } from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { builder } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Download, Plus, Trash2 } from 'lucide-react';

interface Schema {
    id: number;
    name: string;
    definition: string;
    created_at: string;
    updated_at: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Builder',
        href: builder().url,
    },
];

export default function Builder() {
    const { schemas, saved } = usePage<{
        schemas: Schema[];
        saved?: boolean;
    }>().props;

    const [selectedSchema, setSelectedSchema] = useState<Schema | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [schemaName, setSchemaName] = useState('');
    const [models, setModels] = useState<Array<{ name: string; fields: Array<{ name: string; type: string; required: boolean }> }>>([]);
    const [newModelName, setNewModelName] = useState('');
    const [newFieldName, setNewFieldName] = useState('');
    const [newFieldType, setNewFieldType] = useState('string');

    const fieldTypes = [
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
    ];

    const addModel = () => {
        if (newModelName.trim()) {
            setModels([
                ...models,
                {
                    name: newModelName,
                    fields: [],
                },
            ]);
            setNewModelName('');
        }
    };

    const addField = (modelIndex: number) => {
        if (newFieldName.trim()) {
            const updatedModels = [...models];
            updatedModels[modelIndex].fields.push({
                name: newFieldName,
                type: newFieldType,
                required: true,
            });
            setModels(updatedModels);
            setNewFieldName('');
        }
    };

    const removeModel = (index: number) => {
        setModels(models.filter((_, i) => i !== index));
    };

    const removeField = (modelIndex: number, fieldIndex: number) => {
        const updatedModels = [...models];
        updatedModels[modelIndex].fields = updatedModels[modelIndex].fields.filter(
            (_, i) => i !== fieldIndex
        );
        setModels(updatedModels);
    };

    const handleSaveSchema = () => {
        if (!schemaName.trim() || models.length === 0) {
            alert('Please enter a schema name and add at least one model');
            return;
        }

        const definition = {
            models,
        };

        router.post(
            builder().url,
            {
                name: schemaName,
                definition: JSON.stringify(definition),
            },
            {
                preserveScroll: true,
            }
        );

        setIsOpen(false);
        setSchemaName('');
        setModels([]);
    };

    const handleDownload = (schema: Schema) => {
        router.get(`/builder/${schema.id}/download`, {}, {
            method: 'get',
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Schema Builder" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Schema Builder</h1>
                    <Button onClick={() => setIsOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        New Schema
                    </Button>
                </div>

                {saved && (
                    <div className="rounded-lg bg-green-100 p-4 text-green-700">
                        Schema saved successfully!
                    </div>
                )}

                {isOpen && (
                    <Card className="border-2 border-purple-500">
                        <CardHeader>
                            <CardTitle>Create New Schema</CardTitle>
                            <CardDescription>
                                Design your database structure visually
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Schema Name
                                    </label>
                                    <Input
                                        value={schemaName}
                                        onChange={(e) => setSchemaName(e.target.value)}
                                        placeholder="e.g., Blog Schema"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Models
                                    </label>
                                    <div className="space-y-3">
                                        {models.map((model, modelIndex) => (
                                            <Card key={modelIndex}>
                                                <CardHeader>
                                                    <div className="flex items-center justify-between">
                                                        <CardTitle className="text-lg">
                                                            {model.name}
                                                        </CardTitle>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => removeModel(modelIndex)}
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-2">
                                                        {model.fields.length > 0 ? (
                                                            model.fields.map((field, fieldIndex) => (
                                                                <div
                                                                    key={fieldIndex}
                                                                    className="flex items-center justify-between rounded bg-neutral-100 p-2 text-sm dark:bg-neutral-900"
                                                                >
                                                                    <span>
                                                                        {field.name}:{' '}
                                                                        <span className="text-xs text-neutral-600 dark:text-neutral-400">
                                                                            {field.type}
                                                                        </span>
                                                                    </span>
                                                                    <Button
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        onClick={() =>
                                                                            removeField(
                                                                                modelIndex,
                                                                                fieldIndex
                                                                            )
                                                                        }
                                                                    >
                                                                        <Trash2 className="h-3 w-3" />
                                                                    </Button>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <p className="text-sm text-neutral-500">
                                                                No fields yet
                                                            </p>
                                                        )}
                                                        <div className="flex gap-2 pt-2">
                                                            <Input
                                                                value={
                                                                    newFieldName
                                                                }
                                                                onChange={(e) =>
                                                                    setNewFieldName(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                placeholder="Field name"
                                                                size="small"
                                                            />
                                                            <select
                                                                value={newFieldType}
                                                                onChange={(e) =>
                                                                    setNewFieldType(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                className="rounded border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-900"
                                                            >
                                                                {fieldTypes.map((type) => (
                                                                    <option
                                                                        key={type}
                                                                        value={type}
                                                                    >
                                                                        {type}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() =>
                                                                    addField(modelIndex)
                                                                }
                                                            >
                                                                Add Field
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}

                                        <div className="flex gap-2">
                                            <Input
                                                value={newModelName}
                                                onChange={(e) =>
                                                    setNewModelName(e.target.value)
                                                }
                                                placeholder="Model name (e.g., Post)"
                                            />
                                            <Button
                                                variant="outline"
                                                onClick={addModel}
                                            >
                                                Add Model
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-4">
                                    <Button
                                        onClick={handleSaveSchema}
                                        className="bg-purple-500 hover:bg-purple-600"
                                    >
                                        Save Schema
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setSchemaName('');
                                            setModels([]);
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {schemas.map((schema) => (
                        <Card key={schema.id}>
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    {schema.name}
                                </CardTitle>
                                <CardDescription>
                                    {new Date(schema.created_at).toLocaleDateString()}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    onClick={() => handleDownload(schema)}
                                    className="w-full bg-purple-500 hover:bg-purple-600"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Project
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {schemas.length === 0 && !isOpen && (
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
        </AppLayout>
    );
}