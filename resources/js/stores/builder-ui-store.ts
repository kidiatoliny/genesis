import { create } from 'zustand';

interface BuilderUIStore {
    // View state
    viewMode: 'canvas' | 'card';

    // Modal states
    isAddingModel: boolean;
    isAddingField: boolean;
    isEditingSchema: boolean;

    // Form inputs
    newModelName: string;
    newFieldName: string;
    newFieldType: string;
    fieldNameError: boolean;

    // Drag state
    draggingModelId: string | null;
    draggingFieldId: string | null;
    dragOffset: { x: number; y: number };
    draggedFieldType: string | null;
    dragTargetModelId: string | null;
    modelWidths: Record<string, number>;

    // View mode actions
    setViewMode: (mode: 'canvas' | 'card') => void;

    // Modal actions
    setIsAddingModel: (isAdding: boolean) => void;
    setIsAddingField: (isAdding: boolean) => void;
    setIsEditingSchema: (isEditing: boolean) => void;

    // Form input actions
    setNewModelName: (name: string) => void;
    setNewFieldName: (name: string) => void;
    setNewFieldType: (type: string) => void;
    setFieldNameError: (hasError: boolean) => void;

    // Drag actions
    setDraggingModelId: (modelId: string | null) => void;
    setDraggingFieldId: (fieldId: string | null) => void;
    setDragOffset: (offset: { x: number; y: number }) => void;
    setDraggedFieldType: (type: string | null) => void;
    setDragTargetModelId: (modelId: string | null) => void;
    setModelWidth: (modelId: string, width: number) => void;

    // Reset actions
    resetForm: () => void;
}

export const useBuilderUIStore = create<BuilderUIStore>((set) => ({
    // Initial state
    viewMode: 'canvas',
    isAddingModel: false,
    isAddingField: false,
    isEditingSchema: false,
    newModelName: '',
    newFieldName: '',
    newFieldType: 'string',
    fieldNameError: false,
    draggingModelId: null,
    draggingFieldId: null,
    dragOffset: { x: 0, y: 0 },
    draggedFieldType: null,
    dragTargetModelId: null,
    modelWidths: {},

    // View mode actions
    setViewMode: (mode) => set({ viewMode: mode }),

    // Modal actions
    setIsAddingModel: (isAdding) => set({ isAddingModel: isAdding }),
    setIsAddingField: (isAdding) => set({ isAddingField: isAdding }),
    setIsEditingSchema: (isEditing) => set({ isEditingSchema: isEditing }),

    // Form input actions
    setNewModelName: (name) => set({ newModelName: name }),
    setNewFieldName: (name) => set({ newFieldName: name }),
    setNewFieldType: (type) => set({ newFieldType: type }),
    setFieldNameError: (hasError) => set({ fieldNameError: hasError }),

    // Drag actions
    setDraggingModelId: (modelId) => set({ draggingModelId: modelId }),
    setDraggingFieldId: (fieldId) => set({ draggingFieldId: fieldId }),
    setDragOffset: (offset) => set({ dragOffset: offset }),
    setDraggedFieldType: (type) => set({ draggedFieldType: type }),
    setDragTargetModelId: (modelId) => set({ dragTargetModelId: modelId }),
    setModelWidth: (modelId, width) => set((state) => ({
        modelWidths: {
            ...state.modelWidths,
            [modelId]: width,
        },
    })),

    // Reset actions
    resetForm: () => set({
        newModelName: '',
        newFieldName: '',
        newFieldType: 'string',
        fieldNameError: false,
        draggedFieldType: null,
        dragTargetModelId: null,
    }),
}));