import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSchemaStore } from '@/stores/schema-store';
import {
    DndContext,
    DragEndEvent,
    DragStartEvent,
    MouseSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { Plus } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import { ModelCard } from './model-card';

export function SchemaCanvas() {
    const canvasRef = useRef<HTMLDivElement>(null);
    const [draggedModelId, setDraggedModelId] = useState<string | null>(null);
    const [newModelName, setNewModelName] = useState('');
    const [showNewModelInput, setShowNewModelInput] = useState(false);

    const { schema, addModel, moveModel } = useSchemaStore();

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 5,
            },
        }),
    );

    const handleDragStart = useCallback((event: DragStartEvent) => {
        const modelId = event.active.id as string;
        setDraggedModelId(modelId);
    }, []);

    const handleDragEnd = useCallback(
        (event: DragEndEvent) => {
            const { active, delta } = event;
            const modelId = active.id as string;
            const model = schema.models.find((m) => m.id === modelId);

            if (model && canvasRef.current) {
                const newX = model.x + delta.x;
                const newY = model.y + delta.y;

                moveModel(modelId, Math.max(0, newX), Math.max(0, newY));
            }

            setDraggedModelId(null);
        },
        [schema.models, moveModel],
    );

    const handleAddModel = useCallback(() => {
        if (newModelName.trim()) {
            addModel(newModelName, Math.random() * 200, Math.random() * 200);
            setNewModelName('');
            setShowNewModelInput(false);
        }
    }, [addModel, newModelName]);

    return (
        <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div
                ref={canvasRef}
                className="relative h-full w-full overflow-auto bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"
            >
                {/* Grid background */}
                <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                >
                    <defs>
                        <pattern
                            id="grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke="rgba(0,0,0,0.05)"
                                strokeWidth="0.5"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Models */}
                <div className="absolute inset-0 p-8">
                    {schema.models.map((model) => (
                        <div
                            key={model.id}
                            style={{
                                transform: `translate(${model.x}px, ${model.y}px)`,
                            }}
                            className="absolute transition-none"
                        >
                            <div
                                draggable
                                onDragStart={(e) => {
                                    e.dataTransfer.effectAllowed = 'move';
                                    setDraggedModelId(model.id);
                                }}
                                onDragEnd={() => {
                                    setDraggedModelId(null);
                                }}
                                className="cursor-grab active:cursor-grabbing"
                            >
                                <ModelCard
                                    model={model}
                                    isDragging={draggedModelId === model.id}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add Model Button */}
                <div className="absolute right-8 bottom-8 flex flex-col gap-3">
                    {!showNewModelInput ? (
                        <Button
                            onClick={() => setShowNewModelInput(true)}
                            className="rounded-full bg-purple-500 p-4 hover:bg-purple-600"
                        >
                            <Plus className="h-6 w-6" />
                        </Button>
                    ) : (
                        <div className="flex flex-col gap-2 rounded-lg bg-white p-3 shadow-lg dark:bg-neutral-800">
                            <Input
                                placeholder="Model name"
                                value={newModelName}
                                onChange={(e) =>
                                    setNewModelName(e.target.value)
                                }
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleAddModel();
                                    if (e.key === 'Escape') {
                                        setShowNewModelInput(false);
                                        setNewModelName('');
                                    }
                                }}
                                autoFocus
                                className="w-48"
                            />
                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                    onClick={handleAddModel}
                                    className="flex-1 bg-purple-500 hover:bg-purple-600"
                                >
                                    Add
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                        setShowNewModelInput(false);
                                        setNewModelName('');
                                    }}
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Empty State */}
                {schema.models.length === 0 && !showNewModelInput && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                                No models yet
                            </h2>
                            <p className="text-neutral-500 dark:text-neutral-400">
                                Click the plus button to add your first model
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </DndContext>
    );
}
