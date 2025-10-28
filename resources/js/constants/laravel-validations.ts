export interface ValidationOption {
    rule: string;
    label: string;
    description: string;
    needsValue: boolean;
    valueType?: 'string' | 'number' | 'array' | 'select';
    valueOptions?: { label: string; value: string | number }[];
    applicableTypes?: string[];
}

export const LARAVEL_VALIDATIONS: ValidationOption[] = [
    // String validations
    {
        rule: 'string',
        label: 'String',
        description: 'The field must be a string',
        needsValue: false,
        applicableTypes: ['string', 'text', 'email', 'url'],
    },
    {
        rule: 'min',
        label: 'Min Length',
        description: 'The field must have a minimum length',
        needsValue: true,
        valueType: 'number',
        applicableTypes: ['string', 'text', 'email'],
    },
    {
        rule: 'max',
        label: 'Max Length',
        description: 'The field must have a maximum length',
        needsValue: true,
        valueType: 'number',
        applicableTypes: ['string', 'text', 'email', 'url'],
    },

    // Email & URL
    {
        rule: 'email',
        label: 'Email',
        description: 'The field must be a valid email address',
        needsValue: false,
        applicableTypes: ['email', 'string'],
    },
    {
        rule: 'url',
        label: 'URL',
        description: 'The field must be a valid URL',
        needsValue: false,
        applicableTypes: ['url', 'string'],
    },

    // Numeric validations
    {
        rule: 'integer',
        label: 'Integer',
        description: 'The field must be an integer',
        needsValue: false,
        applicableTypes: ['integer'],
    },
    {
        rule: 'numeric',
        label: 'Numeric',
        description: 'The field must be numeric',
        needsValue: false,
        applicableTypes: ['integer', 'decimal', 'float'],
    },
    {
        rule: 'between',
        label: 'Between',
        description: 'The field value must be between min and max',
        needsValue: true,
        valueType: 'string',
        applicableTypes: ['integer', 'decimal', 'float'],
    },
    {
        rule: 'gt',
        label: 'Greater Than',
        description: 'The field must be greater than a value',
        needsValue: true,
        valueType: 'number',
        applicableTypes: ['integer', 'decimal', 'float'],
    },
    {
        rule: 'gte',
        label: 'Greater Than or Equal',
        description: 'The field must be >= to a value',
        needsValue: true,
        valueType: 'number',
        applicableTypes: ['integer', 'decimal', 'float'],
    },
    {
        rule: 'lt',
        label: 'Less Than',
        description: 'The field must be less than a value',
        needsValue: true,
        valueType: 'number',
        applicableTypes: ['integer', 'decimal', 'float'],
    },
    {
        rule: 'lte',
        label: 'Less Than or Equal',
        description: 'The field must be <= to a value',
        needsValue: true,
        valueType: 'number',
        applicableTypes: ['integer', 'decimal', 'float'],
    },

    // Unique & Exists
    {
        rule: 'unique',
        label: 'Unique',
        description: 'The field must be unique in the database',
        needsValue: true,
        valueType: 'string',
        applicableTypes: ['string', 'email', 'integer', 'uuid'],
    },
    {
        rule: 'exists',
        label: 'Exists',
        description: 'The field value must exist in a database table',
        needsValue: true,
        valueType: 'string',
        applicableTypes: ['string', 'integer', 'uuid'],
    },

    // Date validations
    {
        rule: 'date',
        label: 'Date',
        description: 'The field must be a valid date',
        needsValue: false,
        applicableTypes: ['date', 'datetime'],
    },
    {
        rule: 'date_format',
        label: 'Date Format',
        description: 'The field must match a specific date format',
        needsValue: true,
        valueType: 'string',
        applicableTypes: ['date', 'datetime'],
    },
    {
        rule: 'before',
        label: 'Before Date',
        description: 'The date must be before a given date',
        needsValue: true,
        valueType: 'string',
        applicableTypes: ['date', 'datetime'],
    },
    {
        rule: 'after',
        label: 'After Date',
        description: 'The date must be after a given date',
        needsValue: true,
        valueType: 'string',
        applicableTypes: ['date', 'datetime'],
    },

    // Pattern matching
    {
        rule: 'regex',
        label: 'Regex',
        description: 'The field must match the given regular expression',
        needsValue: true,
        valueType: 'string',
        applicableTypes: ['string', 'text', 'email'],
    },

    // Enum
    {
        rule: 'in',
        label: 'In',
        description: 'The field must be one of the specified values',
        needsValue: true,
        valueType: 'string',
        applicableTypes: ['enum', 'string'],
    },
    {
        rule: 'not_in',
        label: 'Not In',
        description: 'The field must not be one of the specified values',
        needsValue: true,
        valueType: 'string',
        applicableTypes: ['enum', 'string'],
    },

    // File validations
    {
        rule: 'file',
        label: 'File',
        description: 'The field must be a file',
        needsValue: false,
        applicableTypes: ['string'],
    },
    {
        rule: 'mimes',
        label: 'MIME Types',
        description: 'The file must have one of the specified MIME types',
        needsValue: true,
        valueType: 'string',
        applicableTypes: ['string'],
    },
    {
        rule: 'image',
        label: 'Image',
        description: 'The file must be an image',
        needsValue: false,
        applicableTypes: ['string'],
    },

    // JSON
    {
        rule: 'json',
        label: 'JSON',
        description: 'The field must be valid JSON',
        needsValue: false,
        applicableTypes: ['json', 'text'],
    },

    // UUID
    {
        rule: 'uuid',
        label: 'UUID',
        description: 'The field must be a valid UUID',
        needsValue: false,
        applicableTypes: ['uuid', 'string'],
    },

    // Boolean
    {
        rule: 'boolean',
        label: 'Boolean',
        description: 'The field must be boolean (true/false, 1/0, etc)',
        needsValue: false,
        applicableTypes: ['boolean'],
    },

    // Confirmed (password confirmation)
    {
        rule: 'confirmed',
        label: 'Confirmed',
        description: 'The field must have a matching confirmation field',
        needsValue: false,
        applicableTypes: ['string'],
    },

    // Same/Different
    {
        rule: 'same',
        label: 'Same As',
        description: 'The field must match another field',
        needsValue: true,
        valueType: 'string',
        applicableTypes: ['string', 'text'],
    },
    {
        rule: 'different',
        label: 'Different From',
        description: 'The field must be different from another field',
        needsValue: true,
        valueType: 'string',
        applicableTypes: ['string', 'text'],
    },

    // Array validations
    {
        rule: 'array',
        label: 'Array',
        description: 'The field must be an array',
        needsValue: false,
        applicableTypes: ['json'],
    },
    {
        rule: 'list',
        label: 'List',
        description: 'The field must be a list',
        needsValue: false,
        applicableTypes: ['json'],
    },

    // Nullable & Filled
    {
        rule: 'nullable',
        label: 'Nullable',
        description: 'The field may be null',
        needsValue: false,
        applicableTypes: [],
    },
    {
        rule: 'filled',
        label: 'Filled',
        description: 'The field must be filled (not empty)',
        needsValue: false,
        applicableTypes: [],
    },

    // Distinct
    {
        rule: 'distinct',
        label: 'Distinct',
        description: 'The field must have distinct values',
        needsValue: false,
        applicableTypes: ['json'],
    },

    // IP Address
    {
        rule: 'ip',
        label: 'IP Address',
        description: 'The field must be a valid IP address',
        needsValue: false,
        applicableTypes: ['string'],
    },
    {
        rule: 'ipv4',
        label: 'IPv4 Address',
        description: 'The field must be a valid IPv4 address',
        needsValue: false,
        applicableTypes: ['string'],
    },
    {
        rule: 'ipv6',
        label: 'IPv6 Address',
        description: 'The field must be a valid IPv6 address',
        needsValue: false,
        applicableTypes: ['string'],
    },

    // Slug
    {
        rule: 'slug',
        label: 'Slug',
        description: 'The field must be a valid slug',
        needsValue: false,
        applicableTypes: ['string'],
    },

    // Timezone
    {
        rule: 'timezone',
        label: 'Timezone',
        description: 'The field must be a valid timezone',
        needsValue: false,
        applicableTypes: ['string'],
    },
];

export function getValidationsForFieldType(fieldType: string): ValidationOption[] {
    return LARAVEL_VALIDATIONS.filter(
        (v) => v.applicableTypes && (v.applicableTypes.length === 0 || v.applicableTypes.includes(fieldType))
    );
}