import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Database,
    DollarSign,
    Lock,
    Mail,
    Palette,
    Sparkles,
    Zap,
} from 'lucide-react';

const LandingFeaturesSection = () => {
    return (
        <section
            id="features"
            className="relative overflow-hidden bg-gradient-to-b from-transparent via-purple-500/5 to-transparent px-6 py-16 md:py-32"
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, rgba(139, 92, 246, 0.15) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            <div className="relative container mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative mb-12 text-center md:mb-24"
                >
                    {/* Decorative elements */}
                    <div className="pointer-events-none absolute -top-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-50 blur-3xl" />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="glass-card relative mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                    >
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
                        <span className="text-xs font-medium tracking-wider text-purple-200 uppercase">
                            Powerful Features
                        </span>
                    </motion.div>

                    <h2 className="relative mb-4 text-3xl leading-[1.1] font-bold md:mb-6 md:text-5xl md:text-6xl lg:text-7xl">
                        <span className="text-white">Everything you need to</span>
                        <br />
                        <span className="relative mt-2 inline-block">
                            <motion.span
                                className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                                style={{ backgroundSize: '200% auto' }}
                            >
                                build faster
                            </motion.span>
                        </span>
                    </h2>

                    <p className="relative mx-auto max-w-2xl text-lg leading-relaxed text-neutral-400">
                        Stop writing boilerplate. Focus on what makes your app unique.
                    </p>
                </motion.div>

                {/* Features Grid - Apple Inspired */}
                <div className="space-y-4">
                    {/* Top Row - Large Feature */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <div className="glass-card group relative h-[500px] cursor-pointer overflow-hidden rounded-2xl md:h-[700px] md:rounded-3xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 transition-all duration-500 group-hover:from-purple-900/30 group-hover:to-blue-900/30" />

                            <div className="relative flex h-full flex-col gap-4 p-6 md:gap-8 md:p-12">
                                <div>
                                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/20 px-2 py-1 md:mb-6 md:px-3 md:py-1.5">
                                        <Palette className="h-3 w-3 text-purple-400 md:h-4 md:w-4" />
                                        <span className="text-[10px] font-semibold tracking-wider text-purple-200 uppercase md:text-xs">
                                            Visual Designer
                                        </span>
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl lg:text-5xl">
                                        Design your schema
                                        <br />
                                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">visually</span>
                                    </h3>
                                    <p className="max-w-2xl text-sm text-neutral-300 md:text-lg">
                                        Drag models, drop fields, connect relationships. Watch your database come alive with zero SQL.
                                    </p>
                                </div>

                                {/* Animated Drag & Drop Demo */}
                                <div className="relative flex-1 overflow-hidden rounded-lg border border-purple-500/20 bg-neutral-950/50 md:rounded-xl">
                                    <DragDropDemo />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Middle Row - Two Medium Features */}
                    <div className="grid gap-4 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="glass-card group relative h-[550px] cursor-pointer overflow-hidden rounded-2xl md:h-[600px] md:rounded-3xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 transition-all duration-500 group-hover:from-emerald-900/30 group-hover:to-teal-900/30" />

                                <div className="relative flex h-full flex-col p-6 md:p-10">
                                    <div className="mb-4 md:mb-6">
                                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2 py-1 md:mb-6 md:px-3 md:py-1.5">
                                            <Code className="h-3 w-3 text-emerald-400 md:h-4 md:w-4" />
                                            <span className="text-[10px] font-semibold tracking-wider text-emerald-200 uppercase md:text-xs">
                                                Code Generation
                                            </span>
                                        </div>
                                        <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-3xl lg:text-4xl">
                                            Production code
                                            <br />
                                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">instantly</span>
                                        </h3>
                                        <p className="mb-4 text-sm text-neutral-300 md:mb-6 md:text-base">
                                            Clean Laravel code following best practices
                                        </p>
                                    </div>

                                    <div className="overflow-hidden md:flex-1">
                                        <CodeGenerationDemo />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="glass-card group relative h-auto min-h-[400px] cursor-pointer overflow-hidden rounded-2xl md:h-[600px] md:rounded-3xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 transition-all duration-500 group-hover:from-blue-900/30 group-hover:to-cyan-900/30" />

                                <div className="relative flex h-full flex-col p-6 md:p-10">
                                    <div className="mb-4 md:mb-6">
                                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-2 py-1 md:mb-6 md:px-3 md:py-1.5">
                                            <Zap className="h-3 w-3 text-blue-400 md:h-4 md:w-4" />
                                            <span className="text-[10px] font-semibold tracking-wider text-blue-200 uppercase md:text-xs">
                                                Smart Validation
                                            </span>
                                        </div>
                                        <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-3xl lg:text-4xl">
                                            Powerful field
                                            <br />
                                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">validation</span>
                                        </h3>
                                        <p className="text-sm text-neutral-300 md:text-base">
                                            Complete Laravel validation support with 60+ rules
                                        </p>
                                    </div>

                                    <div className="overflow-hidden md:flex-1">
                                        <ValidationRuleDemo />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Code Generation Demo Component
const CodeGenerationDemo = () => {
    const [activeTab, setActiveTab] = useState(0);

    const codeExamples = [
        {
            file: 'User.php',
            type: 'Model',
            color: 'text-purple-400',
            code: `<span class="text-purple-400">class</span> <span class="text-yellow-300">User</span> <span class="text-purple-400">extends</span> <span class="text-blue-300">Model</span>
<span class="text-neutral-500">{</span>
    <span class="text-purple-400">protected</span> <span class="text-orange-300">$fillable</span> <span class="text-neutral-500">= [</span>
        <span class="text-green-400">'name'</span><span class="text-neutral-500">,</span> <span class="text-green-400">'email'</span><span class="text-neutral-500">,</span> <span class="text-green-400">'password'</span>
    <span class="text-neutral-500">];</span>

    <span class="text-purple-400">protected</span> <span class="text-orange-300">$hidden</span> <span class="text-neutral-500">= [</span>
        <span class="text-green-400">'password'</span><span class="text-neutral-500">,</span> <span class="text-green-400">'remember_token'</span>
    <span class="text-neutral-500">];</span>
<span class="text-neutral-500">}</span>`,
        },
        {
            file: 'StoreUserRequest.php',
            type: 'Request',
            color: 'text-blue-400',
            code: `<span class="text-purple-400">public function</span> <span class="text-yellow-300">rules</span><span class="text-neutral-500">():</span> <span class="text-blue-300">array</span>
<span class="text-neutral-500">{</span>
    <span class="text-purple-400">return</span> <span class="text-neutral-500">[</span>
        <span class="text-green-400">'name'</span> <span class="text-neutral-500">=></span> <span class="text-neutral-500">[</span><span class="text-green-400">'required'</span><span class="text-neutral-500">,</span> <span class="text-green-400">'string'</span><span class="text-neutral-500">,</span> <span class="text-green-400">'max:255'</span><span class="text-neutral-500">],</span>
        <span class="text-green-400">'email'</span> <span class="text-neutral-500">=></span> <span class="text-neutral-500">[</span><span class="text-green-400">'required'</span><span class="text-neutral-500">,</span> <span class="text-green-400">'email'</span><span class="text-neutral-500">,</span> <span class="text-green-400">'unique:users'</span><span class="text-neutral-500">],</span>
        <span class="text-green-400">'password'</span> <span class="text-neutral-500">=></span> <span class="text-neutral-500">[</span><span class="text-green-400">'required'</span><span class="text-neutral-500">,</span> <span class="text-green-400">'min:8'</span><span class="text-neutral-500">],</span>
    <span class="text-neutral-500">];</span>
<span class="text-neutral-500">}</span>`,
        },
        {
            file: 'UserController.php',
            type: 'Controller',
            color: 'text-emerald-400',
            code: `<span class="text-purple-400">public function</span> <span class="text-yellow-300">store</span><span class="text-neutral-500">(</span><span class="text-blue-300">StoreUserRequest</span> <span class="text-orange-300">$request</span><span class="text-neutral-500">)</span>
<span class="text-neutral-500">{</span>
    <span class="text-purple-400">return</span> <span class="text-blue-300">StoreUserAction</span><span class="text-neutral-500">::</span><span class="text-yellow-300">handle</span><span class="text-neutral-500">(</span>
        <span class="text-orange-300">$request</span><span class="text-neutral-500">-></span><span class="text-yellow-300">validated</span><span class="text-neutral-500">()</span>
    <span class="text-neutral-500">);</span>
<span class="text-neutral-500">}</span>`,
        },
        {
            file: 'StoreUserAction.php',
            type: 'Action',
            color: 'text-cyan-400',
            code: `<span class="text-purple-400">public static function</span> <span class="text-yellow-300">handle</span><span class="text-neutral-500">(</span><span class="text-blue-300">array</span> <span class="text-orange-300">$data</span><span class="text-neutral-500">)</span>
<span class="text-neutral-500">{</span>
    <span class="text-purple-400">return</span> <span class="text-blue-300">User</span><span class="text-neutral-500">::</span><span class="text-yellow-300">create</span><span class="text-neutral-500">([</span>
        <span class="text-green-400">'name'</span> <span class="text-neutral-500">=></span> <span class="text-orange-300">$data</span><span class="text-neutral-500">[</span><span class="text-green-400">'name'</span><span class="text-neutral-500">],</span>
        <span class="text-green-400">'email'</span> <span class="text-neutral-500">=></span> <span class="text-orange-300">$data</span><span class="text-neutral-500">[</span><span class="text-green-400">'email'</span><span class="text-neutral-500">],</span>
        <span class="text-green-400">'password'</span> <span class="text-neutral-500">=></span> <span class="text-blue-300">Hash</span><span class="text-neutral-500">::</span><span class="text-yellow-300">make</span><span class="text-neutral-500">(</span><span class="text-orange-300">$data</span><span class="text-neutral-500">[</span><span class="text-green-400">'password'</span><span class="text-neutral-500">]),</span>
    <span class="text-neutral-500">]);</span>
<span class="text-neutral-500">}</span>`,
        },
        {
            file: 'UserResource.php',
            type: 'Resource',
            color: 'text-pink-400',
            code: `<span class="text-purple-400">public function</span> <span class="text-yellow-300">toArray</span><span class="text-neutral-500">(</span><span class="text-blue-300">Request</span> <span class="text-orange-300">$request</span><span class="text-neutral-500">):</span> <span class="text-blue-300">array</span>
<span class="text-neutral-500">{</span>
    <span class="text-purple-400">return</span> <span class="text-neutral-500">[</span>
        <span class="text-green-400">'id'</span> <span class="text-neutral-500">=></span> <span class="text-orange-300">$this</span><span class="text-neutral-500">-></span><span class="text-cyan-300">id</span><span class="text-neutral-500">,</span>
        <span class="text-green-400">'name'</span> <span class="text-neutral-500">=></span> <span class="text-orange-300">$this</span><span class="text-neutral-500">-></span><span class="text-cyan-300">name</span><span class="text-neutral-500">,</span>
        <span class="text-green-400">'email'</span> <span class="text-neutral-500">=></span> <span class="text-orange-300">$this</span><span class="text-neutral-500">-></span><span class="text-cyan-300">email</span><span class="text-neutral-500">,</span>
        <span class="text-green-400">'created_at'</span> <span class="text-neutral-500">=></span> <span class="text-orange-300">$this</span><span class="text-neutral-500">-></span><span class="text-cyan-300">created_at</span><span class="text-neutral-500">,</span>
    <span class="text-neutral-500">];</span>
<span class="text-neutral-500">}</span>`,
        },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % codeExamples.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full space-y-3 overflow-hidden">
            {/* Tabs */}
            <div className="mb-3 flex flex-wrap items-center gap-2">
                {codeExamples.map((example, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex items-center gap-2 rounded-lg px-2 py-1 text-[10px] font-medium transition-all duration-200 md:px-3 md:py-1.5 md:text-xs ${
                            activeTab === index
                                ? 'border border-emerald-500/30 bg-emerald-600/30 text-emerald-200'
                                : 'border border-transparent text-neutral-400 hover:text-neutral-300'
                        }`}
                    >
                        <Code className="h-2.5 w-2.5 md:h-3 md:w-3" />
                        <span className="truncate">{example.type}</span>
                    </button>
                ))}
            </div>

            {/* Code Display */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg border border-emerald-500/20 bg-neutral-900/80 p-3 md:p-4"
            >
                <div className="mb-2 flex items-center gap-2 text-[10px] md:mb-3 md:text-xs">
                    <div className={`h-1.5 w-1.5 rounded-full bg-emerald-400 md:h-2 md:w-2`} />
                    <span className={`truncate font-mono font-semibold ${codeExamples[activeTab].color}`}>
                        {codeExamples[activeTab].file}
                    </span>
                </div>
                <pre className="max-w-full overflow-x-auto font-mono text-[9px] leading-relaxed md:text-[11px]">
                    <code dangerouslySetInnerHTML={{ __html: codeExamples[activeTab].code }} />
                </pre>
            </motion.div>

            {/* Features badges */}
            <div className="flex flex-wrap gap-1 pt-1 md:gap-1.5 md:pt-2">
                {['Type hints', 'Validation', 'PSR-12', 'Best practices'].map((item, i) => (
                    <span
                        key={i}
                        className="rounded border border-emerald-500/30 bg-emerald-600/20 px-1.5 py-0.5 text-[9px] font-medium text-emerald-200 md:px-2 md:text-[10px]"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

// Validation Rule Demo Component
const ValidationRuleDemo = () => {
    const [activeRule, setActiveRule] = useState(0);

    const validationRules = [
        {
            field: 'email',
            rules: ['required', 'email', 'unique:users'],
            color: 'from-emerald-500 to-teal-500',
            icon: Mail,
        },
        {
            field: 'password',
            rules: ['required', 'min:8', 'confirmed'],
            color: 'from-blue-500 to-cyan-500',
            icon: Lock,
        },
        {
            field: 'price',
            rules: ['required', 'numeric', 'decimal:2'],
            color: 'from-amber-500 to-orange-500',
            icon: DollarSign,
        },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveRule((prev) => (prev + 1) % validationRules.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-2 px-2">
            {validationRules.map((rule, index) => {
                const isActive = activeRule === index;

                return (
                    <motion.div
                        key={index}
                        animate={{ scale: isActive ? 1.02 : 1, opacity: isActive ? 1 : 0.5 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className={`rounded-lg border p-2 ${
                            isActive
                                ? 'border-white/30 bg-gradient-to-r shadow-lg shadow-blue-500/20'
                                : 'border-neutral-700/30 bg-neutral-900/30'
                        } ${isActive ? rule.color : ''}`}
                    >
                        <div className="mb-2 flex items-center gap-2">
                            <rule.icon className="h-4 w-4 text-white" />
                            <span className="font-mono text-xs font-bold text-white">{rule.field}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {rule.rules.map((r, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.6 }}
                                    transition={{ delay: isActive ? i * 0.08 : 0, duration: 0.2 }}
                                    className={`rounded px-1 py-0.5 font-mono text-[10px] ${
                                        isActive
                                            ? 'border border-white/20 bg-white/20 text-white'
                                            : 'bg-neutral-800/50 text-neutral-400'
                                    }`}
                                >
                                    {r}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                );
            })}

            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="pt-1 text-center"
            >
                <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1">
                    <Sparkles className="h-2.5 w-2.5 text-blue-400" />
                    <span className="text-[10px] font-medium text-blue-300">60+ rules</span>
                </div>
            </motion.div>
        </div>
    );
};

// Drag & Drop Demo Component
const DragDropDemo = () => {
    const [draggedItem, setDraggedItem] = useState<number | null>(null);
    const [droppedFields, setDroppedFields] = useState<Array<{ id: number; name: string; type: string; color: string }>>([]);

    const fieldTypes = [
        { id: 1, name: 'name', type: 'string', color: 'bg-blue-500' },
        { id: 2, name: 'email', type: 'email', color: 'bg-emerald-500' },
        { id: 3, name: 'age', type: 'integer', color: 'bg-green-500' },
    ];

    React.useEffect(() => {
        const animateDrops = async () => {
            // Wait 1 second
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Animate field 1 dragging
            setDraggedItem(1);
            await new Promise((resolve) => setTimeout(resolve, 800));
            setDroppedFields([fieldTypes[0]]);
            setDraggedItem(null);

            // Wait and animate field 2
            await new Promise((resolve) => setTimeout(resolve, 600));
            setDraggedItem(2);
            await new Promise((resolve) => setTimeout(resolve, 800));
            setDroppedFields((prev) => [...prev, fieldTypes[1]]);
            setDraggedItem(null);

            // Wait and animate field 3
            await new Promise((resolve) => setTimeout(resolve, 600));
            setDraggedItem(3);
            await new Promise((resolve) => setTimeout(resolve, 800));
            setDroppedFields((prev) => [...prev, fieldTypes[2]]);
            setDraggedItem(null);

            // Wait then reset
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setDroppedFields([]);
        };

        const interval = setInterval(() => {
            animateDrops();
        }, 8000);

        animateDrops();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex h-full gap-3 p-3 md:gap-6 md:p-6">
            {/* Field Types Palette */}
            <div className="flex w-1/3 flex-col gap-2 md:gap-3">
                <div className="mb-0.5 text-[10px] font-semibold tracking-wider text-neutral-400 uppercase md:mb-1 md:text-xs">
                    <span className="hidden md:inline">Field Types</span>
                    <span className="md:hidden">Fields</span>
                </div>
                {fieldTypes.map((field) => (
                    <motion.div
                        key={field.id}
                        animate={{
                            x: draggedItem === field.id ? 180 : 0,
                            y: draggedItem === field.id ? droppedFields.length * 48 : 0,
                            scale: draggedItem === field.id ? 1.05 : 1,
                            opacity: droppedFields.some((f) => f.id === field.id) ? 0.3 : 1,
                        }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className={`rounded-md px-2 py-2 md:rounded-lg md:px-4 md:py-3 ${field.color} flex cursor-move items-center gap-1 shadow-lg md:gap-2`}
                        style={{ willChange: 'transform' }}
                    >
                        <div className="h-1.5 w-1.5 rounded-full bg-white/80 md:h-2 md:w-2" />
                        <span className="text-[10px] font-medium text-white md:text-sm">
                            {field.name}: {field.type}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Drop Zone - Model Card */}
            <div className="relative flex-1">
                <div className="absolute inset-0 rounded-lg border border-dashed border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-blue-900/30 md:rounded-xl md:border-2">
                    <div className="p-2 md:p-4">
                        <div className="mb-2 flex items-center gap-2 border-b border-purple-500/30 pb-2 md:mb-4 md:gap-3 md:pb-3">
                            <Database className="h-3 w-3 text-purple-400 md:h-5 md:w-5" />
                            <span className="text-xs font-bold text-white md:text-base">User Model</span>
                        </div>

                        <div className="space-y-1.5 md:space-y-2">
                            {droppedFields.map((field) => (
                                <motion.div
                                    key={field.id}
                                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className={`rounded-md px-2 py-2 md:rounded-lg md:px-4 md:py-3 ${field.color} flex items-center gap-1 shadow-lg md:gap-2`}
                                >
                                    <div className="h-1.5 w-1.5 rounded-full bg-white/80 md:h-2 md:w-2" />
                                    <span className="text-[10px] font-medium text-white md:text-sm">
                                        {field.name}: {field.type}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {droppedFields.length === 0 && (
                            <motion.div
                                animate={{ opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="py-6 text-center md:py-12"
                            >
                                <Sparkles className="mx-auto mb-1 h-5 w-5 text-purple-400/50 md:mb-2 md:h-8 md:w-8" />
                                <p className="text-[10px] text-purple-300/50 md:text-sm">Drag fields here</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Cursor effect during drag */}
            {draggedItem !== null && (
                <motion.div
                    className="pointer-events-none absolute"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ left: '20%', top: '30%' }}
                >
                    <div className="h-4 w-4 rounded-full bg-purple-500/50 blur-sm md:h-6 md:w-6" />
                </motion.div>
            )}
        </div>
    );
};

export default LandingFeaturesSection;

