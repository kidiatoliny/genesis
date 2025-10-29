import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export const FIELD_TYPES = [
    { value: 'string', label: 'String' },
    { value: 'integer', label: 'Integer' },
    { value: 'boolean', label: 'Boolean' },
    { value: 'text', label: 'Text' },
    { value: 'datetime', label: 'DateTime' },
    { value: 'date', label: 'Date' },
    { value: 'time', label: 'Time' },
    { value: 'json', label: 'JSON' },
    { value: 'uuid', label: 'UUID' },
    { value: 'email', label: 'Email' },
    { value: 'url', label: 'URL' },
    { value: 'enum', label: 'Enum' },
    { value: 'decimal', label: 'Decimal' },
    { value: 'float', label: 'Float' },
    { value: 'bigint', label: 'BigInt' },
    { value: 'smallint', label: 'SmallInt' },
    { value: 'binary', label: 'Binary' },
    { value: 'foreign', label: 'Foreign Key' },
];

interface FieldTypeSelectorProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export function FieldTypeSelector({
    value,
    onChange,
    disabled = false,
}: FieldTypeSelectorProps) {
    return (
        <Select value={value} onValueChange={onChange} disabled={disabled}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select field type" />
            </SelectTrigger>
            <SelectContent>
                {FIELD_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                        {type.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
