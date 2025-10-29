import { create } from 'zustand';

export interface Field {
    id: string;
    name: string;
    type: string;
    required: boolean;
    unique?: boolean;
    nullable?: boolean;
}

export interface Model {
    id: string;
    name: string;
    fields: Field[];
    x: number;
    y: number;
}

export interface SchemaDefinition {
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
}

interface SchemaStore {
    schema: SchemaDefinition;
    selectedModelId: string | null;
    selectedFieldId: string | null;

    setSchemaName: (name: string) => void;
    setProjectType: (type: SchemaDefinition['projectType']) => void;
    setResponseType: (type: SchemaDefinition['responseType']) => void;
    setViewEngine: (engine: SchemaDefinition['viewEngine']) => void;

    addModel: (name: string, x: number, y: number) => void;
    updateModel: (id: string, name: string) => void;
    deleteModel: (id: string) => void;
    moveModel: (id: string, x: number, y: number) => void;

    addField: (modelId: string, field: Omit<Field, 'id'>) => void;
    updateField: (
        modelId: string,
        fieldId: string,
        field: Partial<Field>,
    ) => void;
    deleteField: (modelId: string, fieldId: string) => void;

    selectModel: (id: string | null) => void;
    selectField: (fieldId: string | null) => void;

    resetSchema: () => void;
    loadSchema: (schema: SchemaDefinition) => void;
}

const initialSchema: SchemaDefinition = {
    name: '',
    projectType: 'web_inertia',
    responseType: 'inertia',
    viewEngine: 'inertia_react',
    models: [],
};

export const useSchemaStore = create<SchemaStore>((set) => ({
    schema: initialSchema,
    selectedModelId: null,
    selectedFieldId: null,

    setSchemaName: (name: string) =>
        set((state) => ({
            schema: { ...state.schema, name },
        })),

    setProjectType: (projectType: SchemaDefinition['projectType']) =>
        set((state) => ({
            schema: { ...state.schema, projectType },
        })),

    setResponseType: (responseType: SchemaDefinition['responseType']) =>
        set((state) => ({
            schema: { ...state.schema, responseType },
        })),

    setViewEngine: (viewEngine: SchemaDefinition['viewEngine']) =>
        set((state) => ({
            schema: { ...state.schema, viewEngine },
        })),

    addModel: (name: string, x: number, y: number) =>
        set((state) => {
            const id = Math.random().toString(36).substring(7);
            return {
                schema: {
                    ...state.schema,
                    models: [
                        ...state.schema.models,
                        {
                            id,
                            name,
                            fields: [],
                            x,
                            y,
                        },
                    ],
                },
                selectedModelId: id,
            };
        }),

    updateModel: (id: string, name: string) =>
        set((state) => ({
            schema: {
                ...state.schema,
                models: state.schema.models.map((model) =>
                    model.id === id ? { ...model, name } : model,
                ),
            },
        })),

    deleteModel: (id: string) =>
        set((state) => ({
            schema: {
                ...state.schema,
                models: state.schema.models.filter((model) => model.id !== id),
            },
            selectedModelId:
                state.selectedModelId === id ? null : state.selectedModelId,
        })),

    moveModel: (id: string, x: number, y: number) =>
        set((state) => ({
            schema: {
                ...state.schema,
                models: state.schema.models.map((model) =>
                    model.id === id ? { ...model, x, y } : model,
                ),
            },
        })),

    addField: (modelId: string, field: Omit<Field, 'id'>) =>
        set((state) => {
            const fieldId = Math.random().toString(36).substring(7);
            return {
                schema: {
                    ...state.schema,
                    models: state.schema.models.map((model) =>
                        model.id === modelId
                            ? {
                                  ...model,
                                  fields: [
                                      ...model.fields,
                                      {
                                          id: fieldId,
                                          ...field,
                                      },
                                  ],
                              }
                            : model,
                    ),
                },
                selectedFieldId: fieldId,
            };
        }),

    updateField: (modelId: string, fieldId: string, field: Partial<Field>) =>
        set((state) => ({
            schema: {
                ...state.schema,
                models: state.schema.models.map((model) =>
                    model.id === modelId
                        ? {
                              ...model,
                              fields: model.fields.map((f) =>
                                  f.id === fieldId ? { ...f, ...field } : f,
                              ),
                          }
                        : model,
                ),
            },
        })),

    deleteField: (modelId: string, fieldId: string) =>
        set((state) => ({
            schema: {
                ...state.schema,
                models: state.schema.models.map((model) =>
                    model.id === modelId
                        ? {
                              ...model,
                              fields: model.fields.filter(
                                  (f) => f.id !== fieldId,
                              ),
                          }
                        : model,
                ),
            },
            selectedFieldId:
                state.selectedFieldId === fieldId
                    ? null
                    : state.selectedFieldId,
        })),

    selectModel: (id: string | null) =>
        set({
            selectedModelId: id,
            selectedFieldId: null,
        }),

    selectField: (fieldId: string | null) =>
        set({
            selectedFieldId: fieldId,
        }),

    resetSchema: () =>
        set({
            schema: initialSchema,
            selectedModelId: null,
            selectedFieldId: null,
        }),

    loadSchema: (schema: SchemaDefinition) =>
        set({
            schema,
            selectedModelId: null,
            selectedFieldId: null,
        }),
}));
