import { useCallback, useState } from 'react';
import { useSchemaStore, type Model as SchemaModel } from '@/stores/schema-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Trash2, MoreVertical, Plus } from 'lucide-react';
import { FieldTypeSelector } from './field-type-selector';

interface ModelCardProps {
    model: SchemaModel;
    isDragging?: boolean;
}

export function ModelCard({ model, isDragging = false }: ModelCardProps) {
    const [isEditingName, setIsEditingName] = useState(false);
    const [editedName, setEditedName] = useState(model.name);
    const [newFieldName, setNewFieldName] = useState('');
    const [newFieldType, setNewFieldType] = useState('string');
    const [isAddingField, setIsAddingField] = useState(false);

    const { updateModel, deleteModel, addField, deleteField, selectModel, selectField } =
        useSchemaStore();

    const selectedModelId = useSchemaStore((state) => state.selectedModelId);
    const isSelected = selectedModelId === model.id;

    const handleSaveName = useCallback(() => {
        if (editedName.trim() && editedName !== model.name) {
            updateModel(model.id, editedName);
        }
        setIsEditingName(false);
    }, [editedName, model.id, model.name, updateModel]);

    const handleAddField = useCallback(() => {
        // Use current state values via closure
        setNewFieldName((currentName) => {
            if (currentName.trim()) {
                addField(model.id, {
                    name: currentName,
                    type: newFieldType,
                    required: true,
                    unique: false,
                    nullable: false,
                });
                setNewFieldType('string');
                setIsAddingField(false);
            }
            return '';
        });
    }, [model.id, addField, newFieldType]);

    const handleDeleteField = useCallback(
        (fieldId: string) => {
            deleteField(model.id, fieldId);
        },
        [model.id, deleteField]
    );

    return (
        <Card
            className={`w-96 cursor-move border-2 transition-all ${
                isSelected ? 'border-purple-500 bg-purple-50 dark:bg-purple-950' : 'border-neutral-200 dark:border-neutral-800'
            } ${isDragging ? 'opacity-50' : 'opacity-100'}`}
            onClick={() => selectModel(model.id)}
            onMouseDown={(e) => e.stopPropagation()}
        >
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    {isEditingName ? (
                        <Input
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                            onBlur={handleSaveName}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSaveName();
                                if (e.key === 'Escape') {
                                    setIsEditingName(false);
                                    setEditedName(model.name);
                                }
                            }}
                            autoFocus
                            className="h-8"
                        />
                    ) : (
                        <CardTitle className="text-lg" onDoubleClick={() => setIsEditingName(true)}>
                            {model.name}
                        </CardTitle>
                    )}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setIsEditingName(true)}>
                                Edit name
                            </DropdownMenuItem>
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

            <CardContent className="space-y-3">
                <div className="space-y-2">
                    <p className="text-xs font-medium text-neutral-500">Fields</p>
                    {model.fields.length > 0 ? (
                        <div className="space-y-2">
                            {model.fields.map((field) => (
                                <div
                                    key={field.id}
                                    onClick={() => selectField(field.id)}
                                    className={`flex items-center justify-between rounded-md border px-3 py-2 text-sm transition-colors ${
                                        field.id === useSchemaStore((state) => state.selectedFieldId)
                                            ? 'border-purple-400 bg-purple-100 dark:bg-purple-900'
                                            : 'border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800'
                                    }`}
                                >
                                    <div className="flex-1">
                                        <p className="font-medium">{field.name}</p>
                                        <p className="text-xs text-neutral-500">{field.type}</p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteField(field.id);
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

                {!isAddingField ? (
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsAddingField(true)}
                        className="w-full"
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Field
                    </Button>
                ) : (
                    <div className="space-y-2 rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800">
                        <Input
                            placeholder="Field name"
                            value={newFieldName}
                            onChange={(e) => setNewFieldName(e.target.value)}
                            className="h-8"
                        />
                        <FieldTypeSelector value={newFieldType} onChange={setNewFieldType} />
                        <div className="flex gap-2">
                            <Button
                                size="sm"
                                onClick={handleAddField}
                                className="flex-1 bg-purple-500 hover:bg-purple-600"
                            >
                                Add
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                    setIsAddingField(false);
                                    setNewFieldName('');
                                    setNewFieldType('string');
                                }}
                                className="flex-1"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}