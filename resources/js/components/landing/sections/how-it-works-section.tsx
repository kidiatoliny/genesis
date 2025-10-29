import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    Code,
    Database,
    Download,
    FileJson,
    FileText,
    Folder,
    Gamepad2,
    Package,
    Rocket,
    Sparkles,
    Terminal,
    Zap,
} from 'lucide-react';

const LandingHowItWorksSection = () => {
    return (
        <section
            id="how-it-works"
            className="bg-gradient-to-b from-transparent via-blue-500/5 to-transparent px-6 py-16 md:py-32"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-32 text-center"
                >
                    <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                        How it works
                    </h2>
                    <p className="text-xl text-neutral-300">
                        From design to deployment in minutes
                    </p>
                </motion.div>

                {/* Step 1 - Full Width */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="order-2 md:order-1">
                            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-purple-500/30 bg-purple-600/20 px-4 py-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-sm font-bold">
                                    1
                                </div>
                                <span className="text-sm font-medium text-purple-300">
                                    Design Phase
                                </span>
                            </div>
                            <h3 className="mb-4 text-4xl font-bold text-white">
                                Design Your Schema Visually
                            </h3>
                            <p className="mb-8 text-xl leading-relaxed text-neutral-300">
                                Build your database structure step-by-step. Start with a model, add
                                fields one by one, configure each field's properties, and watch your
                                schema come to life in real-time.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/20">
                                        <div className="h-2 w-2 rounded-full bg-purple-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">
                                            Create Model
                                        </div>
                                        <div className="text-sm text-neutral-400">
                                            Name your model and it appears instantly on canvas
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/20">
                                        <div className="h-2 w-2 rounded-full bg-purple-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">Add Fields</div>
                                        <div className="text-sm text-neutral-400">
                                            Choose from 14+ types: string, integer, email, json, uuid...
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/20">
                                        <div className="h-2 w-2 rounded-full bg-purple-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">
                                            Configure Properties
                                        </div>
                                        <div className="text-sm text-neutral-400">
                                            Set nullable, unique, default values, and database indexes
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                        <Sparkles className="h-3 w-3 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">
                                            Apply Validations
                                        </div>
                                        <div className="text-sm text-neutral-400">
                                            Select from 60+ Laravel rules with intelligent suggestions
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-600/20">
                                        <div className="h-2 w-2 rounded-full bg-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">
                                            Link Relationships
                                        </div>
                                        <div className="text-sm text-neutral-400">
                                            Connect models with hasMany, belongsTo, morphTo relations
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card relative h-[420px] overflow-hidden p-6 md:order-2 md:h-[600px] md:p-8"
                            style={{ willChange: 'transform' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10" />
                            <div className="relative h-full">
                                <SchemaWorkflowDemo />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Step 2 - Full Width */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card relative h-[420px] overflow-hidden p-6 md:h-[600px] md:p-8"
                            style={{ willChange: 'transform' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10" />
                            <div className="relative h-full">
                                <CodeGenerationWorkflowDemo />
                            </div>
                        </motion.div>
                        <div>
                            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-600/20 px-4 py-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-sm font-bold">
                                    2
                                </div>
                                <span className="text-sm font-medium text-blue-300">
                                    Generation Phase
                                </span>
                            </div>
                            <h3 className="mb-6 text-4xl font-bold text-white">
                                Generate Production-Ready Code
                            </h3>
                            <p className="mb-8 text-xl leading-relaxed text-neutral-300">
                                With one click, transform your visual schema into a complete Laravel
                                application. Choose your stack, customize options, and get
                                production-ready code instantly.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                        <div className="h-2 w-2 rounded-full bg-blue-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">
                                            Select Stack
                                        </div>
                                        <div className="text-sm text-neutral-400">
                                            Choose React, Vue, Blade, Livewire, or pure API
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                        <div className="h-2 w-2 rounded-full bg-blue-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">
                                            Generate Files
                                        </div>
                                        <div className="text-sm text-neutral-400">
                                            Models, Controllers, Actions, Requests, Resources, Migrations
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                        <div className="h-2 w-2 rounded-full bg-blue-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">
                                            Type Safety
                                        </div>
                                        <div className="text-sm text-neutral-400">
                                            Full type hints, return types, and PHPDoc blocks
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                        <div className="h-2 w-2 rounded-full bg-blue-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">
                                            Clean Architecture
                                        </div>
                                        <div className="text-sm text-neutral-400">
                                            Action pattern, array validation, PSR-12 standards
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600/20">
                                        <Sparkles className="h-3 w-3 text-emerald-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">
                                            Preview & Customize
                                        </div>
                                        <div className="text-sm text-neutral-400">
                                            Review generated code before downloading
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Step 3 - Full Width */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="order-2 md:order-1">
                            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-600/20 px-4 py-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-sm font-bold">
                                    3
                                </div>
                                <span className="text-sm font-medium text-emerald-300">
                                    Deployment Phase
                                </span>
                            </div>
                            <h3 className="mb-6 text-4xl font-bold text-white">
                                Download & Deploy Instantly
                            </h3>
                            <p className="mb-8 text-xl leading-relaxed text-neutral-300">
                                Get a complete, production-ready Laravel project. Download as ZIP and deploy in
                                minutes with complete file structure and dependencies.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600/20">
                                        <Download className="h-3 w-3 text-emerald-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">
                                            Download Project
                                        </div>
                                        <div className="text-sm text-neutral-400">
                                            Complete ZIP with all files and folder structure
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600/20">
                                        <Terminal className="h-3 w-3 text-emerald-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">
                                            Install Dependencies
                                        </div>
                                        <div className="font-mono text-sm text-xs text-neutral-400">
                                            composer install && npm install
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600/20">
                                        <Database className="h-3 w-3 text-emerald-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">Run Migrations</div>
                                        <div className="text-sm text-neutral-400">
                                            Database ready with one command
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-600/20">
                                        <Rocket className="h-3 w-3 text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="mb-1 font-semibold text-white">Deploy</div>
                                        <div className="text-sm text-neutral-400">
                                            Forge, Vapor, Vercel, or any hosting platform
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card relative order-1 h-[420px] overflow-hidden p-6 md:order-2 md:h-[600px] md:p-8"
                            style={{ willChange: 'transform' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10" />
                            <div className="relative h-full">
                                <DeploymentWorkflowDemo />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Schema Workflow Demo Component
const SchemaWorkflowDemo = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: 'Create Model',
            description: 'Name your model',
            content: (
                <div className="space-y-4">
                    <div className="rounded-lg border border-purple-500/30 bg-neutral-900/50 p-3">
                        <div className="mb-2 text-xs text-purple-300">New Model</div>
                        <div className="flex items-center gap-2 rounded border border-purple-500/30 bg-purple-600/20 p-2">
                            <Database className="h-5 w-5 text-purple-400" />
                            <input type="text" value="User" readOnly className="flex-1 bg-transparent font-bold text-white outline-none" />
                        </div>
                    </div>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="rounded-lg border border-purple-500/30 bg-purple-600/20 p-4"
                    >
                        <div className="flex items-center gap-3">
                            <Database className="h-8 w-8 text-purple-400" />
                            <div>
                                <div className="font-bold text-white">User</div>
                                <div className="text-xs text-purple-300">Model created</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Add Field',
            description: 'Choose field type',
            content: (
                <div className="space-y-4">
                    <div className="flex items-center gap-3 rounded-lg border border-purple-500/30 bg-purple-600/20 p-4">
                        <Database className="h-6 w-6 text-purple-400" />
                        <div className="font-bold text-white">User</div>
                    </div>
                    <div className="rounded-lg border border-blue-500/30 bg-neutral-900/50 p-3">
                        <div className="mb-2 text-xs text-blue-300">Select Field Type</div>
                        <div className="grid grid-cols-2 gap-2">
                            {['string', 'integer', 'email', 'boolean'].map((type, i) => (
                                <motion.div
                                    key={type}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: type === 'email' ? 1 : 0.5, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`rounded p-2 text-center text-xs ${
                                        type === 'email'
                                            ? 'border border-blue-500/50 bg-blue-600/30 font-bold text-blue-200'
                                            : 'bg-neutral-800/50 text-neutral-400'
                                    }`}
                                >
                                    {type}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="pl-6"
                    >
                        <div className="flex items-center gap-2 text-sm">
                            <div className="h-3 w-3 rounded-full bg-blue-400" />
                            <span className="font-mono text-neutral-300">email: email</span>
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Configure Properties',
            description: 'Set field options',
            content: (
                <div className="space-y-4">
                    <div className="flex items-center gap-3 rounded-lg border border-purple-500/30 bg-purple-600/20 p-3">
                        <Database className="h-5 w-5 text-purple-400" />
                        <div className="text-sm font-bold text-white">User</div>
                    </div>
                    <div className="border-l-2 border-blue-500/30 pl-4">
                        <div className="mb-3 flex items-center gap-2 text-sm">
                            <div className="h-3 w-3 rounded-full bg-blue-400" />
                            <span className="font-mono text-neutral-300">email</span>
                        </div>
                        <div className="space-y-2 pl-5">
                            {[
                                { label: 'Nullable', checked: false },
                                { label: 'Unique', checked: true },
                                { label: 'Indexed', checked: true },
                            ].map((prop, i) => (
                                <motion.div
                                    key={prop.label}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.15 }}
                                    className="flex items-center gap-2 text-xs"
                                >
                                    <div
                                        className={`flex h-4 w-4 items-center justify-center rounded border-2 ${
                                            prop.checked
                                                ? 'border-blue-500 bg-blue-600'
                                                : 'border-neutral-600'
                                        }`}
                                    >
                                        {prop.checked && (
                                            <div className="h-2 w-2 rounded-sm bg-white" />
                                        )}
                                    </div>
                                    <span className={prop.checked ? 'font-medium text-blue-300' : 'text-neutral-500'}>
                                        {prop.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Apply Validations',
            description: 'Add validation rules',
            content: (
                <div className="space-y-4">
                    <div className="flex items-center gap-3 rounded-lg border border-purple-500/30 bg-purple-600/20 p-3">
                        <Database className="h-5 w-5 text-purple-400" />
                        <div className="text-sm font-bold text-white">User</div>
                    </div>
                    <div className="space-y-2 pl-4">
                        <div className="flex items-center gap-2 text-sm">
                            <div className="h-3 w-3 rounded-full bg-blue-400" />
                            <span className="font-mono text-neutral-300">email</span>
                        </div>
                        <div className="flex flex-wrap gap-1 pl-5">
                            {['required', 'email', 'unique:users'].map((rule, i) => (
                                <motion.span
                                    key={rule}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: i * 0.15, type: 'spring' }}
                                    className="rounded border border-blue-500/30 bg-blue-500/20 px-2 py-0.5 font-mono text-[10px] text-blue-300"
                                >
                                    {rule}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Link Relationships',
            description: 'Connect models',
            content: (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-600/20 p-3">
                            <Database className="h-5 w-5 text-purple-400" />
                            <div className="text-sm font-bold text-white">User</div>
                        </div>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="relative mx-4 h-0.5 flex-1 bg-gradient-to-r from-purple-500 to-blue-500"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded border border-cyan-500/50 bg-cyan-600/30 px-2 py-0.5 font-mono text-[10px] whitespace-nowrap text-cyan-300"
                            >
                                hasMany
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-600/20 p-3"
                        >
                            <Database className="h-5 w-5 text-blue-400" />
                            <div className="text-sm font-bold text-white">Post</div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="rounded-lg border border-cyan-500/20 bg-neutral-900/50 p-3"
                    >
                        <div className="mb-1 text-xs text-cyan-300">Relationship Details</div>
                        <div className="space-y-1 text-[10px] text-neutral-400">
                            <div>
                                • User <span className="text-cyan-300">hasMany</span> Post
                            </div>
                            <div>
                                • Post <span className="text-purple-300">belongsTo</span> User
                            </div>
                            <div>
                                • Foreign key: <span className="font-mono text-blue-300">user_id</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ),
        },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex h-full flex-col">
            {/* Step Indicator */}
            <div className="mb-6 flex items-center justify-between">
                {steps.map((s, i) => (
                    <div key={i} className="flex items-center">
                        <motion.div
                            animate={{ scale: step === i ? 1.2 : 1, opacity: step >= i ? 1 : 0.3 }}
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                                step === i
                                    ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white'
                                    : step > i
                                      ? 'bg-purple-600/50 text-purple-200'
                                      : 'bg-neutral-700 text-neutral-500'
                            }`}
                        >
                            {i + 1}
                        </motion.div>
                        {i < steps.length - 1 && (
                            <motion.div
                                animate={{ scaleX: step > i ? 1 : 0.3, opacity: step > i ? 1 : 0.3 }}
                                className="h-0.5 w-8 origin-left bg-purple-500"
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Step Content */}
            <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex-1"
            >
                <div className="mb-4">
                    <h4 className="mb-1 text-lg font-bold text-white">{steps[step].title}</h4>
                    <p className="text-xs text-neutral-400">{steps[step].description}</p>
                </div>
                {steps[step].content}
            </motion.div>
        </div>
    );
};

// Code Generation Workflow Demo Component
const CodeGenerationWorkflowDemo = () => {
    const [step, setStep] = useState(0);

    const files = [
        { name: 'User.php', type: 'Model', icon: Package, color: 'text-purple-400' },
        { name: 'UserController.php', type: 'Controller', icon: Gamepad2, color: 'text-blue-400' },
        { name: 'StoreUserRequest.php', type: 'Request', icon: CheckCircle, color: 'text-emerald-400' },
        { name: 'StoreUserAction.php', type: 'Action', icon: Zap, color: 'text-cyan-400' },
        { name: 'UserResource.php', type: 'Resource', icon: FileJson, color: 'text-pink-400' },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % (files.length + 2));
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex h-full flex-col space-y-4">
            {/* Stack Selection */}
            {step === 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                    <div className="text-sm font-semibold text-blue-300">Step 1: Select Stack</div>
                    <div className="grid grid-cols-2 gap-2">
                        {['React + Inertia', 'Vue + Inertia', 'Blade', 'API Only'].map((stack, i) => (
                            <motion.div
                                key={stack}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: stack === 'React + Inertia' ? 1 : 0.4,
                                    scale: 1,
                                    borderColor: stack === 'React + Inertia' ? 'rgb(59 130 246)' : 'rgb(64 64 64)',
                                }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-lg border-2 p-3 text-center text-xs ${
                                    stack === 'React + Inertia'
                                        ? 'bg-blue-600/30 font-bold text-blue-200'
                                        : 'bg-neutral-800/50 text-neutral-500'
                                }`}
                            >
                                {stack}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* File Generation */}
            {step > 0 && step <= files.length && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                    <div className="text-sm font-semibold text-blue-300">Step 2: Generating Files...</div>
                    <div className="space-y-2">
                        {files.map((file, i) => {
                            const isGenerated = i < step;
                            const isCurrent = i === step - 1;

                            return (
                                <motion.div
                                    key={file.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: isGenerated ? 1 : 0.3, x: 0 }}
                                    transition={{ delay: isCurrent ? 0.2 : 0 }}
                                    className={`flex items-center justify-between rounded-lg border p-3 ${
                                        isGenerated
                                            ? 'border-emerald-500/30 bg-emerald-900/20'
                                            : 'border-neutral-700/30 bg-neutral-900/30'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <file.icon className="h-5 w-5 text-white" />
                                        <div>
                                            <div className={`font-mono text-xs font-semibold ${file.color}`}>
                                                {file.name}
                                            </div>
                                            <div className="text-[10px] text-neutral-500">{file.type}</div>
                                        </div>
                                    </div>
                                    {isGenerated && (
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600">
                                            <span className="text-xs text-white">✓</span>
                                        </motion.div>
                                    )}
                                    {isCurrent && (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            className="h-5 w-5 rounded-full border-2 border-blue-500 border-t-transparent"
                                        />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            )}

            {/* Preview Code */}
            {step === files.length + 1 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                    <div className="text-sm font-semibold text-emerald-300">Step 3: Preview Generated Code</div>
                    <div className="rounded-lg border border-emerald-500/20 bg-neutral-900/80 p-4">
                        <div className="mb-3 flex items-center gap-2 text-xs">
                            <Code className="h-4 w-4 text-emerald-400" />
                            <span className="font-mono font-semibold text-emerald-400">User.php</span>
                        </div>
                        <pre className="font-mono text-[10px] leading-relaxed text-neutral-300">
                            <code
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="text-purple-400">class</span> <span class="text-yellow-300">User</span> <span class="text-purple-400">extends</span> <span class="text-blue-300">Model</span>
<span class="text-neutral-500">{</span>
    <span class="text-purple-400">protected</span> <span class="text-orange-300">$fillable</span> <span class="text-neutral-500">= [</span>
        <span class="text-green-400">'name'</span><span class="text-neutral-500">,</span> <span class="text-green-400">'email'</span>
    <span class="text-neutral-500">];</span>
<span class="text-neutral-500">}</span>`,
                                }}
                            />
                        </pre>
                    </div>
                    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} className="flex gap-2">
                        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700">
                            <Download className="h-4 w-4" />
                            Download ZIP
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

// Deployment Workflow Demo Component
const DeploymentWorkflowDemo = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: 'Download ZIP',
            content: (
                <div className="space-y-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-600/20 p-4"
                    >
                        <Download className="h-8 w-8 text-emerald-400" />
                        <div>
                            <div className="font-bold text-white">my-laravel-app.zip</div>
                            <div className="text-xs text-emerald-300">3.2 MB • Ready to deploy</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-lg border border-emerald-500/20 bg-neutral-900/50 p-4"
                    >
                        <div className="mb-2 text-xs text-neutral-400">Package Contents:</div>
                        <div className="space-y-1.5 font-mono text-xs">
                            {[
                                { icon: Folder, name: 'app/', color: 'text-purple-300' },
                                { icon: Folder, name: 'database/', color: 'text-blue-300' },
                                { icon: Folder, name: 'resources/', color: 'text-cyan-300' },
                                { icon: Folder, name: 'routes/', color: 'text-pink-300' },
                                { icon: FileText, name: 'composer.json', color: 'text-yellow-300' },
                                { icon: FileText, name: 'package.json', color: 'text-orange-300' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-center gap-2"
                                >
                                    <item.icon className={`h-3 w-3 ${item.color}`} />
                                    <span className={item.color}>{item.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Extract & Install',
            content: (
                <div className="space-y-3">
                    <div className="rounded-lg border border-emerald-500/20 bg-neutral-900/80 p-3">
                        <div className="mb-2 flex items-center gap-2 text-xs text-emerald-400">
                            <Terminal className="h-4 w-4" />
                            <span className="font-semibold">Terminal</span>
                        </div>
                        <div className="space-y-2 font-mono text-xs">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-neutral-500">
                                $ unzip my-laravel-app.zip
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-neutral-500">
                                $ cd my-laravel-app
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-emerald-300">
                                $ composer install
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex items-start gap-2">
                                <span className="text-neutral-600">Installing dependencies...</span>
                                <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} className="text-emerald-400">
                                    ●
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Configure & Migrate',
            content: (
                <div className="space-y-3">
                    <div className="rounded-lg border border-blue-500/20 bg-neutral-900/80 p-3">
                        <div className="mb-2 flex items-center gap-2 text-xs text-blue-400">
                            <FileText className="h-4 w-4" />
                            <span className="font-semibold">.env</span>
                        </div>
                        <div className="space-y-1 font-mono text-[10px] text-neutral-400">
                            <div>
                                DB_CONNECTION=<span className="text-blue-300">mysql</span>
                            </div>
                            <div>
                                DB_DATABASE=<span className="text-blue-300">my_app</span>
                            </div>
                            <div>
                                DB_USERNAME=<span className="text-blue-300">root</span>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border border-emerald-500/20 bg-neutral-900/80 p-3">
                        <div className="mb-2 flex items-center gap-2 text-xs text-emerald-400">
                            <Terminal className="h-4 w-4" />
                            <span className="font-semibold">Database Setup</span>
                        </div>
                        <div className="space-y-1.5 font-mono text-[10px]">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-neutral-500">
                                $ php artisan migrate
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center gap-2 text-emerald-300">
                                <CheckCircle className="h-3 w-3" />
                                <span>3 migrations completed</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Deploy to Production',
            content: (
                <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            { name: 'Laravel Forge', selected: true },
                            { name: 'Vapor', selected: false },
                            { name: 'Vercel', selected: false },
                            { name: 'Custom VPS', selected: false },
                        ].map((platform, i) => (
                            <motion.div
                                key={platform.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: platform.selected ? 1 : 0.4, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-lg border-2 p-3 text-center text-xs ${
                                    platform.selected
                                        ? 'border-emerald-500/50 bg-emerald-600/30 font-bold text-emerald-200'
                                        : 'border-neutral-700 bg-neutral-900/50 text-neutral-500'
                                }`}
                            >
                                {platform.name}
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="rounded-lg border border-emerald-500/30 bg-emerald-900/20 p-4"
                    >
                        <div className="mb-2 flex items-center gap-3">
                            <Rocket className="h-5 w-5 text-emerald-400" />
                            <span className="text-sm font-semibold text-emerald-300">Deploying...</span>
                        </div>
                        <div className="space-y-1.5 text-[10px] text-neutral-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-emerald-400" />
                                <span>Pushing to repository</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-emerald-400" />
                                <span>Building assets</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    className="h-3 w-3 rounded-full border-2 border-emerald-500 border-t-transparent"
                                />
                                <span>Running migrations</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="rounded-lg border border-emerald-500/30 bg-emerald-600/20 p-3 text-center"
                    >
                        <div className="mb-1 text-xs text-emerald-300">🎉 Live at</div>
                        <div className="font-mono text-sm font-bold text-white">my-app.com</div>
                    </motion.div>
                </div>
            ),
        },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex h-full flex-col">
            {/* Progress Bar */}
            <div className="mb-6">
                <div className="mb-2 flex items-center justify-between">
                    {steps.map((s, i) => (
                        <div key={i} className="flex flex-1 items-center">
                            <motion.div
                                animate={{
                                    scale: step === i ? 1.2 : 1,
                                    backgroundColor: step >= i ? 'rgb(16 185 129)' : 'rgb(64 64 64)',
                                }}
                                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white`}
                            >
                                {i + 1}
                            </motion.div>
                            {i < steps.length - 1 && (
                                <motion.div
                                    animate={{
                                        scaleX: step > i ? 1 : 0.3,
                                        backgroundColor: step > i ? 'rgb(16 185 129)' : 'rgb(64 64 64)',
                                    }}
                                    className="mx-2 h-1 flex-1 origin-left"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Step Content */}
            <motion.div key={step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex-1">
                <div className="mb-4">
                    <h4 className="mb-1 text-lg font-bold text-white">Step {step + 1}: {steps[step].title}</h4>
                </div>
                {steps[step].content}
            </motion.div>
        </div>
    );
};

export default LandingHowItWorksSection;

