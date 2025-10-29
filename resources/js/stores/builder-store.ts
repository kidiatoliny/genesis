import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Validation {
    rule: string;
    value?: string | number | boolean;
}

export interface Field {
    id: string;
    name: string;
    type: string;
    required: boolean;
    validations?: Validation[];
}

export interface Model {
    id: string;
    name: string;
    fields: Field[];
}

export interface Position {
    x: number;
    y: number;
}

export interface BuilderSchema {
    id?: string;
    name: string;
    projectType:
        | 'web_inertia'
        | 'api_inertia'
        | 'web_blade'
        | 'web_livewire'
        | 'api_json';
    responseType: 'inertia' | 'json' | 'blade' | 'livewire' | 'redirect';
    viewEngine: 'inertia_react' | 'inertia_vue' | 'blade' | 'livewire';
    models: Model[];
    modelPositions?: Record<string, Position>;
    fieldPositions?: Record<string, Position>;
}

interface BuilderStore {
    schema: BuilderSchema | null;
    selectedModelId: string | null;
    selectedFieldId: string | null;

    initSchema: (schema: BuilderSchema) => void;
    resetSchema: () => void;

    setSchemaName: (name: string) => void;
    setProjectType: (type: BuilderSchema['projectType']) => void;
    setResponseType: (type: BuilderSchema['responseType']) => void;
    setViewEngine: (engine: BuilderSchema['viewEngine']) => void;

    addModel: (name: string) => void;
    updateModel: (modelId: string, name: string) => void;
    deleteModel: (modelId: string) => void;

    addField: (modelId: string, field: Omit<Field, 'id'>) => void;
    updateField: (
        modelId: string,
        fieldId: string,
        field: Partial<Field>,
    ) => void;
    deleteField: (modelId: string, fieldId: string) => void;

    selectModel: (modelId: string | null) => void;
    selectField: (fieldId: string | null) => void;

    setModelPosition: (modelId: string, position: Position) => void;
    setFieldPosition: (fieldId: string, position: Position) => void;

    initializeModelPosition: (modelId: string, modelIndex: number) => void;
    initializeFieldPosition: (
        modelId: string,
        fieldId: string,
        fieldIndex: number,
    ) => void;

    getSchema: () => BuilderSchema | null;
}

const initialSchema: BuilderSchema = {
    name: '',
    projectType: 'web_inertia',
    responseType: 'inertia',
    viewEngine: 'inertia_react',
    models: [],
};

export const useBuilderStore = create<BuilderStore>()(
    persist(
        (set, get) => ({
            schema: null,
            selectedModelId: null,
            selectedFieldId: null,

            initSchema: (schema: BuilderSchema) => {
                set({ schema, selectedModelId: null, selectedFieldId: null });
            },

            resetSchema: () => {
                set({
                    schema: { ...initialSchema },
                    selectedModelId: null,
                    selectedFieldId: null,
                });
            },

            setSchemaName: (name: string) => {
                set((state) => {
                    if (!state.schema) return state;
                    return {
                        schema: { ...state.schema, name },
                    };
                });
            },

            setProjectType: (projectType: BuilderSchema['projectType']) => {
                set((state) => {
                    if (!state.schema) return state;
                    return {
                        schema: { ...state.schema, projectType },
                    };
                });
            },

            setResponseType: (responseType: BuilderSchema['responseType']) => {
                set((state) => {
                    if (!state.schema) return state;
                    return {
                        schema: { ...state.schema, responseType },
                    };
                });
            },

            setViewEngine: (viewEngine: BuilderSchema['viewEngine']) => {
                set((state) => {
                    if (!state.schema) return state;
                    return {
                        schema: { ...state.schema, viewEngine },
                    };
                });
            },

            addModel: (name: string) => {
                set((state) => {
                    if (!state.schema) return state;
                    const id = `model_${Date.now()}`;
                    return {
                        schema: {
                            ...state.schema,
                            models: [
                                ...state.schema.models,
                                {
                                    id,
                                    name,
                                    fields: [],
                                },
                            ],
                        },
                        selectedModelId: id,
                    };
                });
            },

            updateModel: (modelId: string, name: string) => {
                set((state) => {
                    if (!state.schema) return state;
                    return {
                        schema: {
                            ...state.schema,
                            models: state.schema.models.map((m) =>
                                m.id === modelId ? { ...m, name } : m,
                            ),
                        },
                    };
                });
            },

            deleteModel: (modelId: string) => {
                set((state) => {
                    if (!state.schema) return state;
                    return {
                        schema: {
                            ...state.schema,
                            models: state.schema.models.filter(
                                (m) => m.id !== modelId,
                            ),
                        },
                        selectedModelId:
                            state.selectedModelId === modelId
                                ? null
                                : state.selectedModelId,
                    };
                });
            },

            addField: (modelId: string, field: Omit<Field, 'id'>) => {
                set((state) => {
                    if (!state.schema) return state;
                    const fieldId = `field_${Date.now()}`;
                    return {
                        schema: {
                            ...state.schema,
                            models: state.schema.models.map((m) =>
                                m.id === modelId
                                    ? {
                                          ...m,
                                          fields: [
                                              ...m.fields,
                                              {
                                                  id: fieldId,
                                                  ...field,
                                              },
                                          ],
                                      }
                                    : m,
                            ),
                        },
                        selectedFieldId: fieldId,
                    };
                });
            },

            updateField: (
                modelId: string,
                fieldId: string,
                field: Partial<Field>,
            ) => {
                set((state) => {
                    if (!state.schema) return state;
                    return {
                        schema: {
                            ...state.schema,
                            models: state.schema.models.map((m) =>
                                m.id === modelId
                                    ? {
                                          ...m,
                                          fields: m.fields.map((f) =>
                                              f.id === fieldId
                                                  ? { ...f, ...field }
                                                  : f,
                                          ),
                                      }
                                    : m,
                            ),
                        },
                    };
                });
            },

            deleteField: (modelId: string, fieldId: string) => {
                set((state) => {
                    if (!state.schema) return state;
                    return {
                        schema: {
                            ...state.schema,
                            models: state.schema.models.map((m) =>
                                m.id === modelId
                                    ? {
                                          ...m,
                                          fields: m.fields.filter(
                                              (f) => f.id !== fieldId,
                                          ),
                                      }
                                    : m,
                            ),
                        },
                        selectedFieldId:
                            state.selectedFieldId === fieldId
                                ? null
                                : state.selectedFieldId,
                    };
                });
            },

            selectModel: (modelId: string | null) => {
                set({
                    selectedModelId: modelId,
                    selectedFieldId: null,
                });
            },

            selectField: (fieldId: string | null) => {
                set({
                    selectedFieldId: fieldId,
                });
            },

            setModelPosition: (modelId: string, position: Position) => {
                set((state) => {
                    if (!state.schema) return state;
                    return {
                        schema: {
                            ...state.schema,
                            modelPositions: {
                                ...(state.schema.modelPositions || {}),
                                [modelId]: position,
                            },
                        },
                    };
                });
            },

            setFieldPosition: (fieldId: string, position: Position) => {
                set((state) => {
                    if (!state.schema) return state;
                    return {
                        schema: {
                            ...state.schema,
                            fieldPositions: {
                                ...(state.schema.fieldPositions || {}),
                                [fieldId]: position,
                            },
                        },
                    };
                });
            },

            initializeModelPosition: (modelId: string, modelIndex: number) => {
                set((state) => {
                    if (!state.schema) return state;
                    return {
                        schema: {
                            ...state.schema,
                            modelPositions: {
                                ...(state.schema.modelPositions || {}),
                                [modelId]: {
                                    x: modelIndex * 450,
                                    y: 50,
                                },
                            },
                        },
                    };
                });
            },

            initializeFieldPosition: (
                modelId: string,
                fieldId: string,
                fieldIndex: number,
            ) => {
                set((state) => {
                    if (!state.schema) return state;
                    const modelPos = state.schema.modelPositions?.[modelId] || {
                        x: 0,
                        y: 0,
                    };
                    return {
                        schema: {
                            ...state.schema,
                            fieldPositions: {
                                ...(state.schema.fieldPositions || {}),
                                [fieldId]: {
                                    x: modelPos.x + 450,
                                    y: modelPos.y + 30 + fieldIndex * 80,
                                },
                            },
                        },
                    };
                });
            },

            getSchema: () => {
                return get().schema;
            },
        }),
        {
            name: 'builder-store',
            storage: {
                getItem: (name: string) => {
                    const item = localStorage.getItem(name);
                    return item ? JSON.parse(item) : null;
                },
                setItem: (name: string, value: unknown) => {
                    localStorage.setItem(name, JSON.stringify(value));
                },
                removeItem: (name: string) => {
                    localStorage.removeItem(name);
                },
            },
        },
    ),
);
