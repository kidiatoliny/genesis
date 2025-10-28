import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ValidationSelect } from '@/components/validation-select';
import { Plus, Trash2, HelpCircle } from 'lucide-react';
import { LARAVEL_VALIDATIONS, getValidationsForFieldType } from '@/constants/laravel-validations';
import type { Validation } from '@/stores/builder-store';

interface FieldValidationsProps {
    fieldType: string;
    validations: Validation[];
    onAddValidation: (validation: Validation) => void;
    onRemoveValidation: (rule: string) => void;
}

export function FieldValidations({
    fieldType,
    validations = [],
    onAddValidation,
    onRemoveValidation,
}: FieldValidationsProps) {
    const [selectedRules, setSelectedRules] = useState<string[]>([]);
    const [ruleValues, setRuleValues] = useState<Record<string, string | number>>({});

    const availableValidations = getValidationsForFieldType(fieldType);
    const addedRules = validations.map(v => v.rule);

    const handleAddRule = (rule: string) => {
        const validation = LARAVEL_VALIDATIONS.find((v) => v.rule === rule);

        // Se a validação não precisa de valor, aplicar automaticamente
        if (validation && !validation.needsValue) {
            const newValidation: Validation = { rule };
            onAddValidation(newValidation);
            // Não adicionar ao selectedRules, pois já foi aplicada
        } else if (!selectedRules.includes(rule)) {
            // Caso contrário, adicionar à lista de selecionados para editar
            setSelectedRules([...selectedRules, rule]);
        }
    };

    const handleRemoveRule = (rule: string) => {
        // Se a validação já foi aplicada, remover dela
        if (addedRules.includes(rule)) {
            onRemoveValidation(rule);
        } else {
            // Caso contrário, remover da lista de selecionados
            setSelectedRules(selectedRules.filter((r) => r !== rule));
            const newValues = { ...ruleValues };
            delete newValues[rule];
            setRuleValues(newValues);
        }
    };

    const handleAddValidation = (rule: string) => {
        const validation: Validation = {
            rule,
            ...(ruleValues[rule] && { value: ruleValues[rule] }),
        };
        onAddValidation(validation);
        handleRemoveRule(rule);
    };

    const handleAddAllSelectedRules = () => {
        selectedRules.forEach(rule => {
            handleAddValidation(rule);
        });
    };

    return (
        <div className="space-y-4">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium">Validations</label>
                    <span className="text-xs text-neutral-500">
                        {validations.length} rule{validations.length !== 1 ? 's' : ''}
                    </span>
                </div>

                {validations.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {validations.map((v) => {
                            const validationOpt = LARAVEL_VALIDATIONS.find(
                                (opt) => opt.rule === v.rule
                            );
                            return (
                                <div
                                    key={v.rule}
                                    className="flex items-center gap-2 bg-white dark:bg-neutral-700 px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-600"
                                >
                                    <span className="text-sm font-medium">{v.rule}</span>
                                    {v.value && <span className="text-xs text-neutral-500">: {v.value}</span>}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-4 w-4 p-0 ml-1 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900"
                                        onClick={() => onRemoveValidation(v.rule)}
                                        title={`Remove ${validationOpt?.label || v.rule}`}
                                    >
                                        <Trash2 className="h-3 w-3" />
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className="space-y-3 p-3 bg-neutral-50 dark:bg-neutral-800 rounded-md">
                    <ValidationSelect
                        options={availableValidations}
                        selectedValues={[...selectedRules, ...addedRules]}
                        onAdd={handleAddRule}
                        onRemove={handleRemoveRule}
                        placeholder="Search and select validations..."
                    />

                    {selectedRules.length > 0 && (
                        <div className="space-y-2 border-t border-neutral-200 dark:border-neutral-700 pt-3">
                            <div className="grid grid-cols-2 gap-2">
                                {selectedRules.map((rule) => {
                                    const validation = LARAVEL_VALIDATIONS.find((v) => v.rule === rule);
                                    if (!validation) return null;

                                    return (
                                        <div key={rule} className="space-y-1.5 p-2.5 bg-white dark:bg-neutral-700 rounded border border-neutral-200 dark:border-neutral-600">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-bold bg-purple-500 text-white px-2 py-1 rounded">{validation.rule}</span>
                                                <span className="text-xs text-neutral-500">{validation.label}</span>
                                            </div>
                                            <div className="flex items-start gap-2 text-xs text-blue-900 dark:text-blue-100 bg-blue-50 dark:bg-blue-900/30 p-2 rounded border border-blue-200 dark:border-blue-700">
                                                <HelpCircle className="h-3 w-3 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-300" />
                                                <p className="font-medium leading-tight">{validation.description}</p>
                                            </div>

                                            {validation.needsValue && (
                                                <div className="space-y-1">
                                                    <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-300">
                                                        Value {validation.rule === 'between' && <span className="text-neutral-500">(e.g., "5,100")</span>}
                                                    </label>
                                                    {validation.valueType === 'select' && validation.valueOptions ? (
                                                        <Select
                                                            value={String(ruleValues[rule] || '')}
                                                            onValueChange={(value) =>
                                                                setRuleValues({ ...ruleValues, [rule]: value })
                                                            }
                                                        >
                                                            <SelectTrigger className="text-xs h-7">
                                                                <SelectValue placeholder="Select..." />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {validation.valueOptions.map((opt) => (
                                                                    <SelectItem key={opt.value} value={String(opt.value)}>
                                                                        {opt.label}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    ) : (
                                                        <Input
                                                            type={validation.valueType === 'number' ? 'number' : 'text'}
                                                            value={ruleValues[rule] || ''}
                                                            onChange={(e) =>
                                                                setRuleValues({ ...ruleValues, [rule]: e.target.value })
                                                            }
                                                            placeholder={`Enter value`}
                                                            className="h-7 text-xs"
                                                        />
                                                    )}
                                                </div>
                                            )}

                                            <Button
                                                onClick={() => handleAddValidation(rule)}
                                                disabled={validation.needsValue && !ruleValues[rule]}
                                                size="sm"
                                                className="w-full bg-purple-500 hover:bg-purple-600 disabled:bg-neutral-300 dark:disabled:bg-neutral-600 h-6 text-xs"
                                            >
                                                <Plus className="mr-1 h-3 w-3" />
                                                Add
                                            </Button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}