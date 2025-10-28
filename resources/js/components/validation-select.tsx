import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, X } from 'lucide-react';
import type { ValidationOption } from '@/constants/laravel-validations';

interface ValidationSelectProps {
    options: ValidationOption[];
    selectedValues: string[];
    onAdd: (rule: string) => void;
    onRemove: (rule: string) => void;
    placeholder?: string;
}

export function ValidationSelect({
    options,
    selectedValues = [],
    onAdd,
    onRemove,
    placeholder = 'Search and select validations...',
}: ValidationSelectProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredOptions = options.filter((opt) => {
        const matchesSearch =
            opt.rule.toLowerCase().includes(searchTerm.toLowerCase()) ||
            opt.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
            opt.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    }).sort((a, b) => {
        const aSelected = selectedValues.includes(a.rule);
        const bSelected = selectedValues.includes(b.rule);
        // Sort selected options to the beginning
        if (aSelected && !bSelected) return -1;
        if (!aSelected && bSelected) return 1;
        return 0;
    });

    const handleToggle = (rule: string) => {
        if (selectedValues.includes(rule)) {
            onRemove(rule);
        } else {
            onAdd(rule);
            // Desselecionar após adicionar (o select vai fechado se a validação foi aplicada)
            setSearchTerm('');
        }
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        selectedValues.forEach(rule => onRemove(rule));
        setSearchTerm('');
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    return (
        <div ref={containerRef} className="relative w-full">
            <div
                className="relative border border-neutral-200 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-900 cursor-pointer hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center justify-between px-3 py-2 min-h-10">
                    {isOpen ? (
                        <Input
                            ref={inputRef}
                            type="text"
                            placeholder={placeholder}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="border-0 p-0 h-auto text-sm placeholder:text-neutral-400 focus:ring-0 focus:outline-none"
                        />
                    ) : (
                        <span className={`text-sm ${selectedValues.length > 0 ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-400'}`}>
                            {selectedValues.length > 0 ? `${selectedValues.length} validation${selectedValues.length !== 1 ? 's' : ''} selected` : placeholder}
                        </span>
                    )}

                    <div className="flex items-center gap-1">
                        {selectedValues.length > 0 && !isOpen && (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-5 w-5 p-0 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                onClick={handleClear}
                            >
                                <X className="h-3.5 w-3.5 text-neutral-400" />
                            </Button>
                        )}
                        <ChevronDown
                            className={`h-4 w-4 text-neutral-400 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                            }`}
                        />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
                    {filteredOptions.length > 0 ? (
                        <div className="py-1">
                            {filteredOptions.map((option) => {
                                const isSelected = selectedValues.includes(option.rule);
                                return (
                                    <div
                                        key={option.rule}
                                        onClick={() => handleToggle(option.rule)}
                                        className={`px-3 py-2.5 cursor-pointer flex items-start gap-3 border-b border-neutral-100 dark:border-neutral-800 last:border-b-0 ${
                                            isSelected
                                                ? 'bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-900/50'
                                                : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                    >
                                        <Checkbox
                                            checked={isSelected}
                                            onCheckedChange={() => handleToggle(option.rule)}
                                            onClick={(e) => e.stopPropagation()}
                                            className="mt-1"
                                        />
                                        <div className="flex-1 flex flex-col gap-0.5">
                                            <div className="flex items-center gap-2">
                                                <span className={`text-sm font-medium ${isSelected ? 'text-purple-600 dark:text-purple-400' : 'text-neutral-900 dark:text-neutral-100'}`}>
                                                    {option.label}
                                                </span>
                                                <span className="text-xs bg-neutral-200 dark:bg-neutral-700 px-2 py-0.5 rounded text-neutral-600 dark:text-neutral-400">
                                                    {option.rule}
                                                </span>
                                            </div>
                                            <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-1">
                                                {option.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="px-3 py-6 text-center text-sm text-neutral-500">
                            No validations found matching "{searchTerm}"
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}