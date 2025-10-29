import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Code, Database, Palette, Download, Sparkles, Github, Box, ShoppingCart, MessageSquare, Users, FileText, Calendar, Mail, Lock, DollarSign, Package, Gamepad2, CheckCircle, FileJson, Folder, Terminal, Rocket, Cloud, Server } from 'lucide-react';

export default function BuilderLanding() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const [isYearly, setIsYearly] = useState(true);

    return (
        <>
            <Head title="Genesis Builder - Visual Laravel Schema Builder">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=inter:400,500,600,700"
                    rel="stylesheet"
                />
                <style>{`html { scroll-behavior: smooth; }`}</style>
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-purple-950/70 to-neutral-950 text-white overflow-hidden">
                {/* Navigation */}
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-neutral-950/60 border-b border-purple-500/20"
                >
                    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Box className="h-6 w-6 text-purple-500" />
                            <span className="text-xl font-bold">Genesis Builder</span>
                        </div>
                        
                        <div className="hidden md:flex items-center gap-8">
                            <a
                                href="#features"
                                className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                            >
                                How it Works
                            </a>
                            <a
                                href="#examples"
                                className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                            >
                                Examples
                            </a>
                            <a
                                href="#stack"
                                className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                            >
                                Stack
                            </a>
                            <a
                                href="#pricing"
                                className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                            >
                                Pricing
                            </a>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <Link
                                href="/builder"
                                className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors font-medium"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </motion.nav>

                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center px-6 pt-48">
                    <motion.div style={{ y, opacity }} className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
                    </motion.div>

                    <div className="relative z-10 max-w-6xl mx-auto text-center">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                                Build Laravel Apps
                                <br />
                                <span className="text-purple-400">Visually</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto">
                                Create database schemas, generate models, migrations, and complete CRUD operations
                                with a powerful drag-and-drop interface.
                            </p>

                            <Link href="/builder">
                                <Button
                                    size="lg"
                                    className="px-8 py-6 text-lg bg-purple-600 hover:bg-purple-700 transition-all hover:scale-105"
                                >
                                    Start Building
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Animated Schema Demo */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mt-20"
                        >
                            <AnimatedSchemaDemo />
                        </motion.div>
                    </div>
                </section>

                {/* Features Section - ReactFlow Inspired */}
                <section id="features" className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
                    {/* Animated Grid Background */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                        }} />
                    </div>

                    <div className="container mx-auto max-w-7xl relative">
                        {/* Header */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-24 relative"
                        >
                            {/* Decorative elements */}
                            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
                            
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6 relative"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">Powerful Features</span>
                            </motion.div>
                            
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] relative">
                                <span className="text-white">Everything you need to</span>
                                <br />
                                <span className="relative inline-block mt-2">
                                    <motion.span 
                                        className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"
                                        animate={{
                                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        style={{
                                            backgroundSize: '200% auto',
                                        }}
                                    >
                                        build faster
                                    </motion.span>
                                </span>
                            </h2>
                            
                            <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed relative">
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
                                <div className="glass-card rounded-3xl overflow-hidden group cursor-pointer h-[700px] relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 group-hover:from-purple-900/30 group-hover:to-blue-900/30 transition-all duration-500" />
                                    
                                    <div className="relative h-full flex flex-col p-12 gap-8">
                                        <div>
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                                                <Palette className="h-4 w-4 text-purple-400" />
                                                <span className="text-xs font-semibold text-purple-200 uppercase tracking-wider">Visual Designer</span>
                                            </div>
                                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                                Design your schema
                                                <br />
                                                <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                                                    visually
                                                </span>
                                            </h3>
                                            <p className="text-lg text-neutral-300 max-w-2xl">
                                                Drag models, drop fields, connect relationships. Watch your database come alive with zero SQL.
                                            </p>
                                        </div>

                                        {/* Animated Drag & Drop Demo */}
                                        <div className="relative flex-1 rounded-xl bg-neutral-950/50 border border-purple-500/20 overflow-hidden">
                                            <DragDropDemo />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Middle Row - Two Medium Features */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="glass-card rounded-3xl overflow-hidden group cursor-pointer h-[600px] relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 group-hover:from-emerald-900/30 group-hover:to-teal-900/30 transition-all duration-500" />
                                        
                                        <div className="relative h-full flex flex-col p-10">
                                            <div className="mb-6">
                                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
                                                    <Code className="h-4 w-4 text-emerald-400" />
                                                    <span className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">Code Generation</span>
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                                    Production code
                                                    <br />
                                                    <span className="bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
                                                        instantly
                                                    </span>
                                                </h3>
                                                <p className="text-neutral-300 mb-6">
                                                    Clean Laravel code following best practices
                                                </p>
                                            </div>

                                            <div className="flex-1 overflow-hidden">
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
                                    <div className="glass-card rounded-3xl overflow-hidden group cursor-pointer h-[600px] relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 group-hover:from-blue-900/30 group-hover:to-cyan-900/30 transition-all duration-500" />
                                        
                                        <div className="relative h-full flex flex-col p-10">
                                            <div className="mb-6">
                                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
                                                    <Zap className="h-4 w-4 text-blue-400" />
                                                    <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Smart Validation</span>
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                                    Powerful field
                                                    <br />
                                                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                                                        validation
                                                    </span>
                                                </h3>
                                                <p className="text-neutral-300">
                                                    Complete Laravel validation support with 60+ rules
                                                </p>
                                            </div>

                                            <div className="flex-1 overflow-hidden">
                                                <ValidationRuleDemo />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-32"
                        >
                            <h2 className="text-5xl font-bold mb-6">How it works</h2>
                            <p className="text-xl text-neutral-300">From design to deployment in minutes</p>
                        </motion.div>

                        {/* Step 1 - Full Width */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="mb-32"
                        >
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1">
                                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-sm font-bold">
                                            1
                                        </div>
                                        <span className="text-sm font-medium text-purple-300">Design Phase</span>
                                    </div>
                                    <h3 className="text-4xl font-bold mb-6 text-white">
                                        Design Your Schema Visually
                                    </h3>
                                    <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                                        Build your database structure step-by-step. Start with a model, add fields one by one, configure each field's properties, and watch your schema come to life in real-time.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Create Model</div>
                                                <div className="text-sm text-neutral-400">Name your model and it appears instantly on canvas</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Add Fields</div>
                                                <div className="text-sm text-neutral-400">Choose from 14+ types: string, integer, email, json, uuid...</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Configure Properties</div>
                                                <div className="text-sm text-neutral-400">Set nullable, unique, default values, and database indexes</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Sparkles className="h-3 w-3 text-blue-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Apply Validations</div>
                                                <div className="text-sm text-neutral-400">Select from 60+ Laravel rules with intelligent suggestions</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-cyan-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Link Relationships</div>
                                                <div className="text-sm text-neutral-400">Connect models with hasMany, belongsTo, morphTo relations</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="order-1 md:order-2 glass-card p-8 relative overflow-hidden min-h-[600px]"
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
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-card p-8 relative overflow-hidden min-h-[600px]"
                                    style={{ willChange: 'transform' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10" />
                                    <div className="relative h-full">
                                        <CodeGenerationWorkflowDemo />
                                    </div>
                                </motion.div>
                                <div>
                                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-sm font-bold">
                                            2
                                        </div>
                                        <span className="text-sm font-medium text-blue-300">Generation Phase</span>
                                    </div>
                                    <h3 className="text-4xl font-bold mb-6 text-white">
                                        Generate Production-Ready Code
                                    </h3>
                                    <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                                        With one click, transform your visual schema into a complete Laravel application. Choose your stack, customize options, and get production-ready code instantly.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Select Stack</div>
                                                <div className="text-sm text-neutral-400">Choose React, Vue, Blade, Livewire, or pure API</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Generate Files</div>
                                                <div className="text-sm text-neutral-400">Models, Controllers, Actions, Requests, Resources, Migrations</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Type Safety</div>
                                                <div className="text-sm text-neutral-400">Full type hints, return types, and PHPDoc blocks</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Clean Architecture</div>
                                                <div className="text-sm text-neutral-400">Action pattern, array validation, PSR-12 standards</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-emerald-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Sparkles className="h-3 w-3 text-emerald-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Preview & Customize</div>
                                                <div className="text-sm text-neutral-400">Review generated code before downloading</div>
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
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1">
                                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-emerald-600/20 border border-emerald-500/30">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-sm font-bold">
                                            3
                                        </div>
                                        <span className="text-sm font-medium text-emerald-300">Deployment Phase</span>
                                    </div>
                                    <h3 className="text-4xl font-bold mb-6 text-white">
                                        Download & Deploy Instantly
                                    </h3>
                                    <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                                        Get a complete, production-ready Laravel project. Download as ZIP and deploy in minutes with complete file structure and dependencies.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-emerald-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Download className="h-3 w-3 text-emerald-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Download Project</div>
                                                <div className="text-sm text-neutral-400">Complete ZIP with all files and folder structure</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-emerald-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Terminal className="h-3 w-3 text-emerald-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Install Dependencies</div>
                                                <div className="text-sm text-neutral-400 font-mono text-xs">composer install && npm install</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-emerald-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Database className="h-3 w-3 text-emerald-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Run Migrations</div>
                                                <div className="text-sm text-neutral-400">Database ready with one command</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-cyan-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Rocket className="h-3 w-3 text-cyan-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Deploy</div>
                                                <div className="text-sm text-neutral-400">Forge, Vapor, Vercel, or any hosting platform</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="order-1 md:order-2 glass-card p-8 relative overflow-hidden min-h-[600px]"
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



                {/* Pricing Section */}
                <section id="pricing" className="py-32 px-6 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
                    <div className="container mx-auto max-w-7xl">
                        {/* Header */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                <span className="text-xs font-medium text-blue-200 uppercase tracking-wider">Simple Pricing</span>
                            </motion.div>
                            
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="text-white">Choose your plan</span>
                            </h2>
                            
                            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                                Start free and upgrade as you grow. All plans include core features.
                            </p>

                            {/* Billing Toggle */}
                            <div className="flex items-center justify-center gap-3">
                                <span className={`text-sm transition-colors ${!isYearly ? 'text-white font-medium' : 'text-neutral-400'}`}>
                                    Monthly
                                </span>
                                <button 
                                    onClick={() => setIsYearly(!isYearly)}
                                    className={`relative w-14 h-7 rounded-full border transition-all duration-300 ${
                                        isYearly 
                                            ? 'bg-purple-600/30 border-purple-500/50 hover:border-purple-500' 
                                            : 'bg-neutral-600/30 border-neutral-500/50 hover:border-neutral-500'
                                    }`}
                                >
                                    <div className={`absolute top-1 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 transition-transform duration-300 ${
                                        isYearly ? 'translate-x-7' : 'translate-x-1'
                                    }`} />
                                </button>
                                <span className={`text-sm transition-colors ${isYearly ? 'text-white font-medium' : 'text-neutral-400'}`}>
                                    Yearly
                                    {isYearly && (
                                        <span className="ml-2 px-2 py-0.5 rounded-full bg-green-600/20 text-xs text-green-400 border border-green-500/30">
                                            Save 20%
                                        </span>
                                    )}
                                </span>
                            </div>
                        </motion.div>

                        {/* Pricing Cards */}
                        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {/* Free Plan */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="glass-card rounded-3xl p-8 h-full relative overflow-hidden group hover:border-neutral-600 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-neutral-900/20 group-hover:from-neutral-800/30 group-hover:to-neutral-900/30 transition-all duration-500" />
                                    
                                    <div className="relative">
                                        <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                                        <p className="text-neutral-400 mb-6">Perfect for learning and small projects</p>
                                        
                                        <div className="mb-8">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-5xl font-bold text-white">€0</span>
                                                <span className="text-neutral-400">/month</span>
                                            </div>
                                        </div>

                                        <Link href="/builder">
                                            <Button variant="outline" className="w-full mb-8">
                                                Get Started
                                            </Button>
                                        </Link>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">3 projects</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">Basic code generation</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">All field types</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">Community support</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pro Plan - Featured */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Popular Badge - Outside card */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-xs font-bold text-white shadow-lg">
                                        MOST POPULAR
                                    </div>
                                </div>

                                <div className="glass-card rounded-3xl p-8 pt-12 h-full relative overflow-visible group border-2 border-purple-500/50 hover:border-purple-500 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 group-hover:from-purple-900/40 group-hover:to-blue-900/40 transition-all duration-500 rounded-3xl" />
                                    
                                    <div className="relative">
                                        <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                                        <p className="text-neutral-300 mb-6">For professional developers and teams</p>
                                        
                                        <div className="mb-8">
                                            <div className="flex items-baseline gap-2 mb-1">
                                                <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                                                    €{isYearly ? '12' : '15'}
                                                </span>
                                                <span className="text-neutral-400">/month</span>
                                            </div>
                                            {isYearly ? (
                                                <>
                                                    <p className="text-sm text-neutral-500">€144 billed yearly</p>
                                                    <p className="text-xs text-green-400 mt-1">Save €36 per year</p>
                                                </>
                                            ) : (
                                                <p className="text-sm text-neutral-500">Billed monthly</p>
                                            )}
                                        </div>

                                        <Link href="/builder">
                                            <Button className="w-full mb-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                                                Start Free Trial
                                            </Button>
                                        </Link>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                                                </div>
                                                <span className="text-sm text-white font-medium">Unlimited projects</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                                                </div>
                                                <span className="text-sm text-white font-medium">Advanced code generation</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                                                </div>
                                                <span className="text-sm text-white font-medium">All stack options</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                                                </div>
                                                <span className="text-sm text-white font-medium">Priority support</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                                                </div>
                                                <span className="text-sm text-white font-medium">Custom templates</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Enterprise Plan */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="glass-card rounded-3xl p-8 h-full relative overflow-hidden group hover:border-blue-600 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 group-hover:from-blue-900/30 group-hover:to-cyan-900/30 transition-all duration-500" />
                                    
                                    <div className="relative">
                                        <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                                        <p className="text-neutral-400 mb-6">For large teams and organizations</p>
                                        
                                        <div className="mb-8">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-5xl font-bold text-white">Custom</span>
                                            </div>
                                            <p className="text-sm text-neutral-500 mt-2">Contact sales</p>
                                        </div>

                                        <Link href="/contact">
                                            <Button variant="outline" className="w-full mb-8">
                                                Contact Sales
                                            </Button>
                                        </Link>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">Everything in Pro</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">Dedicated support</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">Custom integrations</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">SLA guarantee</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">On-premise option</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-6 bg-gradient-to-b from-transparent via-green-500/5 to-transparent">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="container mx-auto max-w-4xl text-center"
                    >
                        <div className="relative overflow-hidden rounded-3xl glass-card p-12 md:p-20 bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-cyan-600/30">
                            <div className="absolute inset-0 grid-pattern opacity-30" />
                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Ready to build something amazing?
                                </h2>
                                <p className="text-xl text-neutral-200 mb-10">
                                    Start creating your Laravel application with Genesis Builder today.
                                </p>
                                <Link href="/builder">
                                    <Button
                                        size="lg"
                                        className="px-10 py-6 text-lg bg-white text-purple-600 hover:bg-neutral-100 transition-all hover:scale-105 shadow-xl"
                                    >
                                        Get Started Now
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Examples Section */}
                <section id="examples" className="py-32 px-6 bg-gradient-to-b from-transparent via-neutral-900 to-transparent">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl font-bold mb-6">Real-world examples</h2>
                            <p className="text-xl text-neutral-300">See what you can build in minutes</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {examples.map((example, index) => (
                                <ExampleCard key={index} example={example} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section id="stack" className="py-32 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-5xl font-bold mb-6">Built with modern tech</h2>
                            <p className="text-xl text-neutral-300">Leveraging the best tools in the ecosystem</p>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card p-6 text-center"
                                    style={{ willChange: 'transform' }}
                                >
                                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                        {tech.isImage ? (
                                            <img 
                                                src={tech.icon} 
                                                alt={tech.name}
                                                className="w-full h-full object-contain"
                                                style={{ filter: 'brightness(0.9)' }}
                                            />
                                        ) : (
                                            <span className="text-4xl">{tech.icon}</span>
                                        )}
                                    </div>
                                    <h4 className="font-bold mb-1">{tech.name}</h4>
                                    <p className="text-xs text-neutral-400">{tech.category}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Code Quality Section */}
                <section className="py-32 px-6 bg-gradient-to-b from-transparent via-rose-500/5 to-transparent">
                    <div className="container mx-auto max-w-7xl">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs font-medium text-emerald-200 uppercase tracking-wider">Enterprise Ready</span>
                            </motion.div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="text-white">Production-ready</span>
                                <br />
                                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
                                    from day one
                                </span>
                            </h2>
                            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                                Every line of code follows Laravel best practices and modern PHP standards
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'Type Safety',
                                    description: 'Full type hints, strict types, and PHPDoc annotations for better IDE support',
                                    features: ['PHP 8.2+', 'Return types', 'Property types', 'Generics'],
                                    color: 'from-purple-600 to-violet-600'
                                },
                                {
                                    title: 'PSR Standards',
                                    description: 'Follows PSR-1, PSR-12, and PSR-4 autoloading standards',
                                    features: ['Clean code', 'Consistent naming', 'Proper structure', 'Best practices'],
                                    color: 'from-blue-600 to-cyan-600'
                                },
                                {
                                    title: 'Security First',
                                    description: 'Built-in protection against common vulnerabilities',
                                    features: ['SQL injection', 'XSS protection', 'CSRF tokens', 'Mass assignment'],
                                    color: 'from-emerald-600 to-teal-600'
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-card p-8 relative overflow-hidden group"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                    
                                    <div className="relative">
                                        <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                                        <p className="text-neutral-300 mb-6 leading-relaxed">{item.description}</p>
                                        
                                        <div className="space-y-2">
                                            {item.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-neutral-400">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Integration & Workflow Section */}
                <section className="py-32 px-6 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent">
                    <div className="container mx-auto max-w-7xl">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl font-bold mb-6">Deploy with One Click</h2>
                            <p className="text-xl text-neutral-300">Ship to production faster with direct integrations</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 group-hover:from-orange-600/20 group-hover:to-red-600/20 transition-all duration-500" />
                                
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-orange-500/50 transition-shadow">
                                        <Cloud className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">Laravel Cloud</h3>
                                    <p className="text-neutral-300 mb-4 leading-relaxed">
                                        Deploy directly from Genesis Builder to Laravel Cloud. One click and your app is live with zero configuration.
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30">
                                        <Sparkles className="h-3 w-3 text-orange-400" />
                                        <span className="text-xs font-bold text-orange-300">Coming Soon</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 group-hover:from-emerald-600/20 group-hover:to-teal-600/20 transition-all duration-500" />
                                
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-emerald-500/50 transition-shadow">
                                        <Rocket className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">Laravel Forge</h3>
                                    <p className="text-neutral-300 mb-4 leading-relaxed">
                                        Connect your Forge account and deploy to any server. Automatic deployment pipelines included.
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                                        <Sparkles className="h-3 w-3 text-emerald-400" />
                                        <span className="text-xs font-bold text-emerald-300">Coming Soon</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 group-hover:from-blue-600/20 group-hover:to-cyan-600/20 transition-all duration-500" />
                                
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                                        <Server className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">Custom VPS</h3>
                                    <p className="text-neutral-300 mb-4 leading-relaxed">
                                        Deploy to your own VPS with SSH. Works with DigitalOcean, Linode, AWS, or any Linux server.
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30">
                                        <Sparkles className="h-3 w-3 text-blue-400" />
                                        <span className="text-xs font-bold text-blue-300">Coming Soon</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h3 className="text-3xl font-bold mb-4 text-white">More Integrations Coming</h3>
                            <p className="text-lg text-neutral-400">We're building the tools you need</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="glass-card p-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center mb-4">
                                    <Github className="h-6 w-6 text-violet-400" />
                                </div>
                                <h4 className="text-lg font-bold mb-2 text-white">GitHub Integration</h4>
                                <p className="text-sm text-neutral-400 mb-3">Push generated code directly to your repository</p>
                                <div className="text-xs text-neutral-500 font-medium">Coming Soon</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4">
                                    <Terminal className="h-6 w-6 text-blue-400" />
                                </div>
                                <h4 className="text-lg font-bold mb-2 text-white">CLI Tool</h4>
                                <p className="text-sm text-neutral-400 mb-3">Generate schemas from your terminal</p>
                                <div className="text-xs text-neutral-500 font-medium">Coming Soon</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="glass-card p-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center mb-4">
                                    <Users className="h-6 w-6 text-purple-400" />
                                </div>
                                <h4 className="text-lg font-bold mb-2 text-white">Team Collaboration</h4>
                                <p className="text-sm text-neutral-400 mb-3">Share and collaborate on schemas</p>
                                <div className="text-xs text-neutral-500 font-medium">Coming Soon</div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Performance Section */}
                <section className="py-32 px-6 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="order-2 md:order-1"
                            >
                                <div className="glass-card p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 to-pink-600/10" />
                                    
                                    <div className="relative space-y-6">
                                        {[
                                            { label: 'Eager Loading', value: '95%', description: 'N+1 queries eliminated', color: 'from-fuchsia-600 to-pink-600' },
                                            { label: 'Query Optimization', value: '80%', description: 'Faster database queries', color: 'from-purple-600 to-fuchsia-600' },
                                            { label: 'Caching Strategy', value: '90%', description: 'Response time improved', color: 'from-pink-600 to-rose-600' }
                                        ].map((metric, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-semibold text-white">{metric.label}</span>
                                                    <span className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 text-transparent bg-clip-text">
                                                        {metric.value}
                                                    </span>
                                                </div>
                                                <div className="h-2 bg-neutral-900/50 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: metric.value }}
                                                        transition={{ duration: 1, delay: i * 0.2 }}
                                                        viewport={{ once: true }}
                                                        className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                                                    />
                                                </div>
                                                <p className="text-xs text-neutral-400">{metric.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="order-1 md:order-2"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 mb-6">
                                    <Zap className="h-4 w-4 text-fuchsia-400" />
                                    <span className="text-xs font-semibold text-fuchsia-200 uppercase tracking-wider">Optimized</span>
                                </div>
                                <h3 className="text-4xl font-bold mb-6 text-white">
                                    Built for <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 text-transparent bg-clip-text">performance</span>
                                </h3>
                                <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                                    Generated code includes performance optimizations out of the box. From eager loading to query optimization, your app is fast by default.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { title: 'Smart Eager Loading', description: 'Automatically prevents N+1 query problems' },
                                        { title: 'Index Suggestions', description: 'Database indexes for frequently queried fields' },
                                        { title: 'Pagination Built-in', description: 'Efficient pagination for large datasets' },
                                        { title: 'Response Caching', description: 'Cache-ready controller responses' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-fuchsia-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-fuchsia-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">{item.title}</div>
                                                <div className="text-sm text-neutral-400">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>



                {/* Stats Section */}
                <section className="py-32 px-6 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { value: "50K+", label: "Lines of Code Generated" },
                                { value: "1,200+", label: "Projects Created" },
                                { value: "95%", label: "Time Saved" },
                                { value: "4.9/5", label: "Developer Rating" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
                                        {stat.value}
                                    </div>
                                    <div className="text-neutral-400 text-lg">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-32 px-6 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-5xl font-bold mb-6">Frequently asked questions</h2>
                            <p className="text-xl text-neutral-300">Everything you need to know</p>
                        </motion.div>

                        <div className="space-y-4">
                            {[
                                {
                                    question: "Can I customize the generated code?",
                                    answer: "Absolutely! All generated code is clean, readable, and follows Laravel best practices. You have full control to modify and extend it."
                                },
                                {
                                    question: "Does it work with existing Laravel projects?",
                                    answer: "Yes! Genesis Builder integrates seamlessly with existing projects. Generate new models and migrations without affecting your current codebase."
                                },
                                {
                                    question: "What frontend frameworks are supported?",
                                    answer: "We support React, Vue, Blade, Livewire, and pure API mode. Choose the stack that works best for your project."
                                },
                                {
                                    question: "Is there a free trial?",
                                    answer: "Yes! Try Genesis Builder free for 14 days. No credit card required. Experience the full power before committing."
                                },
                                {
                                    question: "Can I export my schemas?",
                                    answer: "Yes! Export your schemas as JSON for backup, version control, or sharing with your team."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-card p-6"
                                >
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                                        {faq.question}
                                    </h3>
                                    <p className="text-neutral-400 pl-5">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="relative mt-32 backdrop-blur-lg bg-neutral-950/80 border-t border-purple-500/20">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-neutral-950/50 to-neutral-950" />
                    
                    <div className="relative container mx-auto max-w-7xl px-6 py-16">
                        <div className="grid md:grid-cols-4 gap-12 mb-12">
                            {/* Brand Column */}
                            <div className="md:col-span-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <Box className="h-7 w-7 text-purple-500" />
                                    <span className="text-xl font-bold text-white">Genesis Builder</span>
                                </div>
                                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                                    Visual Laravel schema builder for modern developers. Build faster, ship sooner.
                                </p>
                                <div className="flex items-center gap-3">
                                    <a 
                                        href="https://github.com" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-neutral-800/50 hover:bg-purple-600/20 border border-neutral-700/50 hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 group"
                                    >
                                        <Github className="h-5 w-5 text-neutral-400 group-hover:text-purple-400 transition-colors" />
                                    </a>
                                    <a 
                                        href="https://twitter.com" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-neutral-800/50 hover:bg-purple-600/20 border border-neutral-700/50 hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 group"
                                    >
                                        <svg className="h-5 w-5 text-neutral-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Product Column */}
                            <div>
                                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
                                <ul className="space-y-3">
                                    {[
                                        { label: 'Features', href: '#features' },
                                        { label: 'Pricing', href: '#pricing' },
                                        { label: 'Examples', href: '#examples' },
                                        { label: 'Documentation', href: '/docs' },
                                        { label: 'Changelog', href: '/changelog' },
                                    ].map((link, i) => (
                                        <li key={i}>
                                            <a 
                                                href={link.href}
                                                className="text-sm text-neutral-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                                            >
                                                <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-purple-500 transition-all duration-200" />
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resources Column */}
                            <div>
                                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
                                <ul className="space-y-3">
                                    {[
                                        { label: 'Blog', href: '/blog' },
                                        { label: 'Guides', href: '/guides' },
                                        { label: 'API Reference', href: '/api' },
                                        { label: 'Community', href: '/community' },
                                        { label: 'Support', href: '/support' },
                                    ].map((link, i) => (
                                        <li key={i}>
                                            <a 
                                                href={link.href}
                                                className="text-sm text-neutral-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                                            >
                                                <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-purple-500 transition-all duration-200" />
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Company Column */}
                            <div>
                                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
                                <ul className="space-y-3">
                                    {[
                                        { label: 'About', href: '/about' },
                                        { label: 'Careers', href: '/careers' },
                                        { label: 'Privacy', href: '/privacy' },
                                        { label: 'Terms', href: '/terms' },
                                        { label: 'Contact', href: '/contact' },
                                    ].map((link, i) => (
                                        <li key={i}>
                                            <a 
                                                href={link.href}
                                                className="text-sm text-neutral-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                                            >
                                                <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-purple-500 transition-all duration-200" />
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Footer Bottom */}
                        <div className="pt-8 border-t border-neutral-800/50">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="text-sm text-neutral-400">
                                    © {new Date().getFullYear()} Genesis Builder. Built with{' '}
                                    <span className="text-purple-400">Laravel</span> &{' '}
                                    <span className="text-blue-400">React</span>.
                                </div>
                                <div className="flex items-center gap-6">
                                    <a href="/privacy" className="text-sm text-neutral-400 hover:text-purple-400 transition-colors">
                                        Privacy Policy
                                    </a>
                                    <a href="/terms" className="text-sm text-neutral-400 hover:text-purple-400 transition-colors">
                                        Terms of Service
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative gradient at top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
                </footer>
            </div>
        </>
    );
}

const AnimatedSchemaDemo = () => {
    return (
        <div className="relative w-full max-w-5xl mx-auto h-[600px] rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-neutral-950 via-purple-950/30 to-neutral-950 backdrop-blur-xl shadow-2xl">
            {/* Animated Grid Background - ReactFlow style */}
            <div className="absolute inset-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(168, 85, 247, 0.15) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                }} />
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(168, 85, 247, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(168, 85, 247, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '100px 100px'
                }} />
            </div>

            {/* Ambient light effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Model Nodes - Inspired by ReactFlow */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute top-32 left-20 group"
            >
                <div className="relative bg-gradient-to-br from-purple-600/90 to-purple-700/90 rounded-xl shadow-2xl border-2 border-purple-400/50 backdrop-blur-sm overflow-hidden">
                    {/* Node header */}
                    <div className="px-6 py-3 bg-purple-700/50 border-b border-purple-400/30 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/40 flex items-center justify-center">
                            <Database className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-bold text-white text-base">User</span>
                    </div>
                    {/* Node body */}
                    <div className="px-6 py-4 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-purple-100">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span className="font-mono">id: integer</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-purple-100">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="font-mono">name: string</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-purple-100">
                            <div className="w-2 h-2 rounded-full bg-teal-400" />
                            <span className="font-mono">email: email</span>
                        </div>
                    </div>
                    {/* Connection handles */}
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400 border-2 border-purple-200 shadow-lg" />
                </div>
            </motion.div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute top-28 right-24 group"
            >
                <div className="relative bg-gradient-to-br from-blue-600/90 to-blue-700/90 rounded-xl shadow-2xl border-2 border-blue-400/50 backdrop-blur-sm overflow-hidden">
                    {/* Node header */}
                    <div className="px-6 py-3 bg-blue-700/50 border-b border-blue-400/30 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/40 flex items-center justify-center">
                            <Database className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-bold text-white text-base">Post</span>
                    </div>
                    {/* Node body */}
                    <div className="px-6 py-4 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-blue-100">
                            <div className="w-2 h-2 rounded-full bg-orange-400" />
                            <span className="font-mono">title: string</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-blue-100">
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                            <span className="font-mono">content: text</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-blue-100">
                            <div className="w-2 h-2 rounded-full bg-purple-400" />
                            <span className="font-mono">user_id: integer</span>
                        </div>
                    </div>
                    {/* Connection handles */}
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400 border-2 border-blue-200 shadow-lg" />
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400 border-2 border-blue-200 shadow-lg" />
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute bottom-28 left-1/2 -translate-x-1/2 group"
            >
                <div className="relative bg-gradient-to-br from-cyan-600/90 to-cyan-700/90 rounded-xl shadow-2xl border-2 border-cyan-400/50 backdrop-blur-sm overflow-hidden">
                    {/* Node header */}
                    <div className="px-6 py-3 bg-cyan-700/50 border-b border-cyan-400/30 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/40 flex items-center justify-center">
                            <Database className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-bold text-white text-base">Comment</span>
                    </div>
                    {/* Node body */}
                    <div className="px-6 py-4 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-cyan-100">
                            <div className="w-2 h-2 rounded-full bg-pink-400" />
                            <span className="font-mono">body: text</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-cyan-100">
                            <div className="w-2 h-2 rounded-full bg-violet-400" />
                            <span className="font-mono">rating: integer</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-cyan-100">
                            <div className="w-2 h-2 rounded-full bg-blue-400" />
                            <span className="font-mono">post_id: integer</span>
                        </div>
                    </div>
                    {/* Connection handles */}
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 border-2 border-cyan-200 shadow-lg" />
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-2 border-cyan-200 shadow-lg" />
                </div>
            </motion.div>

            {/* Connection Lines - ReactFlow style with better paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="rgba(168, 85, 247, 0.8)" />
                    </marker>
                    <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="rgba(59, 130, 246, 0.8)" />
                    </marker>
                </defs>
                
                {/* User to Post */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2.2, ease: "easeInOut" }}
                    d="M 210 190 L 620 190"
                    stroke="rgba(168, 85, 247, 0.6)"
                    strokeWidth="3"
                    fill="none"
                    filter="url(#glow)"
                    markerEnd="url(#arrowPurple)"
                />
                
                {/* Post to Comment */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2.4, ease: "easeInOut" }}
                    d="M 680 260 Q 680 340, 540 380"
                    stroke="rgba(59, 130, 246, 0.6)"
                    strokeWidth="3"
                    fill="none"
                    filter="url(#glow)"
                    markerEnd="url(#arrowBlue)"
                />
            </svg>

            {/* Mini toolbar - ReactFlow inspired */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.8 }}
                className="absolute bottom-6 left-6 flex items-center gap-2 bg-neutral-900/90 backdrop-blur-xl rounded-lg border border-purple-500/20 p-2 shadow-xl"
            >
                <button className="p-2 rounded-lg hover:bg-purple-600/20 transition-colors">
                    <Zap className="h-4 w-4 text-purple-400" />
                </button>
                <button className="p-2 rounded-lg hover:bg-purple-600/20 transition-colors">
                    <Code className="h-4 w-4 text-purple-400" />
                </button>
                <button className="p-2 rounded-lg hover:bg-purple-600/20 transition-colors">
                    <Download className="h-4 w-4 text-purple-400" />
                </button>
            </motion.div>

            {/* Mini map indicator */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 3 }}
                className="absolute bottom-6 right-6 w-32 h-24 bg-neutral-900/90 backdrop-blur-xl rounded-lg border border-purple-500/20 p-2 shadow-xl"
            >
                <div className="relative w-full h-full">
                    <div className="absolute top-1 left-1 w-2 h-2 rounded-sm bg-purple-500" />
                    <div className="absolute top-1 right-2 w-2 h-2 rounded-sm bg-blue-500" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-sm bg-cyan-500" />
                    <div className="absolute inset-2 border border-purple-500/30 rounded" />
                </div>
            </motion.div>

            {/* Floating action hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 3.2 }}
                className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-900/90 backdrop-blur-xl rounded-full border border-purple-500/20 shadow-xl"
            >
                <span className="text-xs text-purple-300 font-medium flex items-center gap-2">
                    <Sparkles className="h-3 w-3" />
                    Drag to connect • Click to edit
                </span>
            </motion.div>
        </div>
    );
};

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
        >
            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass-card p-8 relative overflow-hidden h-full"
                style={{ willChange: 'transform' }}
            >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-purple-600/5 group-hover:to-blue-600/10 transition-all duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-300">
                        <feature.icon className="h-8 w-8 text-white" />
                    </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                        {feature.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                        {feature.description}
                    </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
            </motion.div>
        </motion.div>
    );
};

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center"
        >
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-3xl font-bold shadow-xl"
            >
                {index + 1}
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-neutral-300 leading-relaxed">{step.description}</p>
        </motion.div>
    );
};

const ExampleCard = ({ example, index }: { example: typeof examples[0]; index: number }) => {
    const [activeTab, setActiveTab] = useState<'schema' | 'code' | 'api'>('schema');
    
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
        >
            <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass-card p-6 relative overflow-hidden h-full flex flex-col"
                style={{ willChange: 'transform' }}
            >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all duration-500" />
                
                {/* Header */}
                <div className="relative flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:shadow-purple-500/50 transition-shadow duration-300">
                        <example.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                            {example.title}
                        </h3>
                        <p className="text-sm text-neutral-400">
                            {example.description}
                        </p>
                    </div>
                </div>
                
                {/* Tabs */}
                <div className="relative flex items-center gap-2 mb-4 p-1 bg-neutral-900/50 rounded-lg border border-neutral-800">
                    <button
                        onClick={() => setActiveTab('schema')}
                        className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 ${
                            activeTab === 'schema'
                                ? 'bg-purple-600/30 text-purple-200 border border-purple-500/30'
                                : 'text-neutral-400 hover:text-neutral-300'
                        }`}
                    >
                        Schema
                    </button>
                    <button
                        onClick={() => setActiveTab('code')}
                        className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 ${
                            activeTab === 'code'
                                ? 'bg-purple-600/30 text-purple-200 border border-purple-500/30'
                                : 'text-neutral-400 hover:text-neutral-300'
                        }`}
                    >
                        Code
                    </button>
                    <button
                        onClick={() => setActiveTab('api')}
                        className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 ${
                            activeTab === 'api'
                                ? 'bg-purple-600/30 text-purple-200 border border-purple-500/30'
                                : 'text-neutral-400 hover:text-neutral-300'
                        }`}
                    >
                        API
                    </button>
                </div>

                {/* Content */}
                <div className="relative flex-1 min-h-[300px]">
                    {activeTab === 'schema' && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3"
                        >
                            {example.schema.map((table, i) => (
                                <div key={i} className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-800">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Database className="h-4 w-4 text-purple-400" />
                                        <span className="text-sm font-bold text-white">{table.name}</span>
                                        <span className="text-xs text-neutral-500">({table.fields.length} fields)</span>
                                    </div>
                                    <div className="space-y-1.5 pl-6">
                                        {table.fields.map((field, j) => (
                                            <div key={j} className="flex items-center gap-2 text-xs">
                                                <div className={`w-2 h-2 rounded-full ${field.color}`} />
                                                <span className="text-neutral-300 font-mono">{field.name}:</span>
                                                <span className="text-neutral-500">{field.type}</span>
                                                {field.required && (
                                                    <span className="px-1.5 py-0.5 rounded bg-red-600/20 text-red-400 text-[10px] font-medium">required</span>
                                                )}
                                                {field.unique && (
                                                    <span className="px-1.5 py-0.5 rounded bg-blue-600/20 text-blue-400 text-[10px] font-medium">unique</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'code' && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3"
                        >
                            <div className="p-4 rounded-lg bg-neutral-900/80 border border-blue-500/20">
                                <div className="flex items-center gap-2 text-xs text-blue-400 mb-3">
                                    <Code className="h-3 w-3" />
                                    <span className="font-semibold">{example.code.controller.file}</span>
                                </div>
                                <pre className="text-[10px] leading-[1.6] font-mono overflow-x-auto">
                                    <code dangerouslySetInnerHTML={{ __html: example.code.controller.content }} />
                                </pre>
                            </div>
                            <div className="p-4 rounded-lg bg-neutral-900/80 border border-green-500/20">
                                <div className="flex items-center gap-2 text-xs text-green-400 mb-3">
                                    <Code className="h-3 w-3" />
                                    <span className="font-semibold">{example.code.action.file}</span>
                                </div>
                                <pre className="text-[10px] leading-[1.6] font-mono overflow-x-auto">
                                    <code dangerouslySetInnerHTML={{ __html: example.code.action.content }} />
                                </pre>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'api' && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3"
                        >
                            {example.api.map((endpoint, i) => (
                                <div key={i} className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-800">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`px-2 py-1 rounded text-[10px] font-bold ${endpoint.methodColor}`}>
                                            {endpoint.method}
                                        </span>
                                        <span className="text-xs font-mono text-neutral-400">{endpoint.path}</span>
                                    </div>
                                    <div className="pl-4 space-y-2">
                                        <div className="text-[10px] text-neutral-500 mb-1">{endpoint.description}</div>
                                        {endpoint.response && (
                                            <div className="p-2 rounded bg-neutral-950/50 border border-emerald-500/20">
                                                <div className="text-[9px] text-emerald-400 mb-1 font-semibold">Response:</div>
                                                <pre className="text-[9px] leading-[1.5] font-mono text-neutral-300 overflow-x-auto">
                                                    {endpoint.response}
                                                </pre>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
            </motion.div>
        </motion.div>
    );
};

const features = [
    {
        icon: Palette,
        title: 'Visual Schema Designer',
        description: 'Drag and drop models and fields to create your database schema. No code required until you\'re ready.',
    },
    {
        icon: Code,
        title: 'Generate Clean Code',
        description: 'Automatically generate Models, Migrations, Controllers, and Views following Laravel best practices.',
    },
    {
        icon: Database,
        title: 'Type-Safe Fields',
        description: 'Choose from 14+ field types including string, integer, json, uuid, email, and more with full validation.',
    },
    {
        icon: Zap,
        title: 'Instant CRUD',
        description: 'Generate complete Create, Read, Update, Delete operations with proper routes and views in seconds.',
    },
    {
        icon: Download,
        title: 'Export Projects',
        description: 'Download your complete Laravel project as a ZIP file, ready to run locally or deploy.',
    },
    {
        icon: Sparkles,
        title: 'Multiple Stacks',
        description: 'Support for Inertia + React/Vue, Blade, Livewire, and JSON API responses.',
    },
];

const steps = [
    {
        title: 'Design Your Schema',
        description: 'Use the visual builder to create models and define fields. Drag field types onto models and configure properties.',
    },
    {
        title: 'Configure Options',
        description: 'Choose your project type, view engine, and response format. Customize field requirements and relationships.',
    },
    {
        title: 'Download & Deploy',
        description: 'Export your complete Laravel project with all files generated. Run locally or deploy to production immediately.',
    },
];

const examples = [
    {
        icon: ShoppingCart,
        title: 'E-commerce Platform',
        description: 'Complete online store with products, orders, and inventory',
        schema: [
            {
                name: 'Product',
                fields: [
                    { name: 'id', type: 'bigint', color: 'bg-green-400', required: true, unique: true },
                    { name: 'name', type: 'string', color: 'bg-blue-400', required: true },
                    { name: 'slug', type: 'string', color: 'bg-blue-400', required: true, unique: true },
                    { name: 'price', type: 'decimal', color: 'bg-yellow-400', required: true },
                    { name: 'stock', type: 'integer', color: 'bg-green-400', required: true },
                    { name: 'category_id', type: 'bigint', color: 'bg-purple-400', required: true },
                ],
            },
            {
                name: 'Order',
                fields: [
                    { name: 'id', type: 'bigint', color: 'bg-green-400', required: true, unique: true },
                    { name: 'customer_id', type: 'bigint', color: 'bg-purple-400', required: true },
                    { name: 'status', type: 'enum', color: 'bg-orange-400', required: true },
                    { name: 'total', type: 'decimal', color: 'bg-yellow-400', required: true },
                ],
            },
        ],
        code: {
            controller: {
                file: 'ProductController.php',
                content: `<span class="text-purple-400">public function</span> <span class="text-yellow-300">store</span><span class="text-neutral-500">(</span><span class="text-blue-300">StoreProductRequest</span> <span class="text-orange-300">$request</span><span class="text-neutral-500">)</span>
<span class="text-neutral-500">{</span>
    <span class="text-purple-400">return</span> <span class="text-blue-300">StoreProductAction</span><span class="text-neutral-500">::</span><span class="text-yellow-300">handle</span><span class="text-neutral-500">(</span>
        <span class="text-orange-300">$request</span><span class="text-neutral-500">-></span><span class="text-yellow-300">validated</span><span class="text-neutral-500">()</span>
    <span class="text-neutral-500">);</span>
<span class="text-neutral-500">}</span>`
            },
            action: {
                file: 'StoreProductAction.php',
                content: `<span class="text-purple-400">public static function</span> <span class="text-yellow-300">handle</span><span class="text-neutral-500">(</span><span class="text-blue-300">array</span> <span class="text-orange-300">$data</span><span class="text-neutral-500">)</span>
<span class="text-neutral-500">{</span>
    <span class="text-purple-400">return</span> <span class="text-blue-300">Product</span><span class="text-neutral-500">::</span><span class="text-yellow-300">create</span><span class="text-neutral-500">([</span>
        <span class="text-green-400">'name'</span> <span class="text-neutral-500">=></span> <span class="text-orange-300">$data</span><span class="text-neutral-500">[</span><span class="text-green-400">'name'</span><span class="text-neutral-500">],</span>
        <span class="text-green-400">'slug'</span> <span class="text-neutral-500">=></span> <span class="text-blue-300">Str</span><span class="text-neutral-500">::</span><span class="text-yellow-300">slug</span><span class="text-neutral-500">(</span><span class="text-orange-300">$data</span><span class="text-neutral-500">[</span><span class="text-green-400">'name'</span><span class="text-neutral-500">]),</span>
        <span class="text-green-400">'price'</span> <span class="text-neutral-500">=></span> <span class="text-orange-300">$data</span><span class="text-neutral-500">[</span><span class="text-green-400">'price'</span><span class="text-neutral-500">],</span>
        <span class="text-green-400">'stock'</span> <span class="text-neutral-500">=></span> <span class="text-orange-300">$data</span><span class="text-neutral-500">[</span><span class="text-green-400">'stock'</span><span class="text-neutral-500">],</span>
    <span class="text-neutral-500">]);</span>
<span class="text-neutral-500">}</span>`
            }
        },
        api: [
            {
                method: 'POST',
                path: '/api/products',
                methodColor: 'bg-green-600 text-white',
                description: 'Create a new product',
                response: `{
  "id": 1,
  "name": "Premium Laptop",
  "slug": "premium-laptop",
  "price": "1299.99",
  "stock": 50
}`
            },
            {
                method: 'GET',
                path: '/api/products?filter[category]=electronics',
                methodColor: 'bg-blue-600 text-white',
                description: 'List products with filters',
                response: `{
  "data": [...],
  "meta": {
    "total": 45,
    "per_page": 15
  }
}`
            },
        ],
    },
    {
        icon: MessageSquare,
        title: 'Blog & CMS',
        description: 'Content management with posts, comments, and authors',
        schema: [
            {
                name: 'Post',
                fields: [
                    { name: 'id', type: 'bigint', color: 'bg-green-400', required: true, unique: true },
                    { name: 'title', type: 'string', color: 'bg-blue-400', required: true },
                    { name: 'slug', type: 'string', color: 'bg-blue-400', required: true, unique: true },
                    { name: 'content', type: 'text', color: 'bg-indigo-400', required: true },
                    { name: 'author_id', type: 'bigint', color: 'bg-purple-400', required: true },
                    { name: 'published_at', type: 'datetime', color: 'bg-rose-400' },
                ],
            },
            {
                name: 'Comment',
                fields: [
                    { name: 'id', type: 'bigint', color: 'bg-green-400', required: true, unique: true },
                    { name: 'post_id', type: 'bigint', color: 'bg-purple-400', required: true },
                    { name: 'body', type: 'text', color: 'bg-indigo-400', required: true },
                    { name: 'status', type: 'enum', color: 'bg-orange-400', required: true },
                ],
            },
        ],
        code: {
            controller: {
                file: 'PostController.php',
                content: `<span class="text-purple-400">public function</span> <span class="text-yellow-300">index</span><span class="text-neutral-500">(</span><span class="text-blue-300">Request</span> <span class="text-orange-300">$request</span><span class="text-neutral-500">)</span>
<span class="text-neutral-500">{</span>
    <span class="text-neutral-500">$</span><span class="text-orange-300">posts</span> <span class="text-neutral-500">=</span> <span class="text-blue-300">Post</span><span class="text-neutral-500">::</span><span class="text-yellow-300">with</span><span class="text-neutral-500">([</span><span class="text-green-400">'author'</span><span class="text-neutral-500">,</span> <span class="text-green-400">'comments'</span><span class="text-neutral-500">])</span>
        <span class="text-neutral-500">-></span><span class="text-yellow-300">published</span><span class="text-neutral-500">()</span>
        <span class="text-neutral-500">-></span><span class="text-yellow-300">paginate</span><span class="text-neutral-500">(</span><span class="text-cyan-300">15</span><span class="text-neutral-500">);</span>
    
    <span class="text-purple-400">return</span> <span class="text-blue-300">Inertia</span><span class="text-neutral-500">::</span><span class="text-yellow-300">render</span><span class="text-neutral-500">(</span><span class="text-green-400">'Posts/Index'</span><span class="text-neutral-500">,</span> <span class="text-neutral-500">[</span>
        <span class="text-green-400">'posts'</span> <span class="text-neutral-500">=></span> <span class="text-orange-300">$posts</span>
    <span class="text-neutral-500">]);</span>
<span class="text-neutral-500">}</span>`
            },
            action: {
                file: 'PublishPostAction.php',
                content: `<span class="text-purple-400">public static function</span> <span class="text-yellow-300">handle</span><span class="text-neutral-500">(</span><span class="text-blue-300">Post</span> <span class="text-orange-300">$post</span><span class="text-neutral-500">)</span>
<span class="text-neutral-500">{</span>
    <span class="text-orange-300">$post</span><span class="text-neutral-500">-></span><span class="text-yellow-300">update</span><span class="text-neutral-500">([</span>
        <span class="text-green-400">'published_at'</span> <span class="text-neutral-500">=></span> <span class="text-blue-300">now</span><span class="text-neutral-500">(),</span>
        <span class="text-green-400">'status'</span> <span class="text-neutral-500">=></span> <span class="text-green-400">'published'</span><span class="text-neutral-500">,</span>
    <span class="text-neutral-500">]);</span>
    
    <span class="text-purple-400">return</span> <span class="text-orange-300">$post</span><span class="text-neutral-500">-></span><span class="text-yellow-300">fresh</span><span class="text-neutral-500">();</span>
<span class="text-neutral-500">}</span>`
            }
        },
        api: [
            {
                method: 'GET',
                path: '/api/posts?include=author,comments',
                methodColor: 'bg-blue-600 text-white',
                description: 'List posts with relationships',
                response: `{
  "data": [{
    "id": 1,
    "title": "Getting Started",
    "author": {...},
    "comments": [...]
  }]
}`
            },
            {
                method: 'POST',
                path: '/api/posts/{id}/publish',
                methodColor: 'bg-green-600 text-white',
                description: 'Publish a draft post',
                response: `{
  "id": 1,
  "status": "published",
  "published_at": "2025-10-28"
}`
            },
        ],
    },
    {
        icon: Users,
        title: 'Team Collaboration',
        description: 'Project management with teams, tasks, and assignments',
        schema: [
            {
                name: 'Project',
                fields: [
                    { name: 'id', type: 'bigint', color: 'bg-green-400', required: true, unique: true },
                    { name: 'name', type: 'string', color: 'bg-blue-400', required: true },
                    { name: 'description', type: 'text', color: 'bg-indigo-400' },
                    { name: 'team_id', type: 'bigint', color: 'bg-purple-400', required: true },
                    { name: 'status', type: 'enum', color: 'bg-orange-400', required: true },
                ],
            },
            {
                name: 'Task',
                fields: [
                    { name: 'id', type: 'bigint', color: 'bg-green-400', required: true, unique: true },
                    { name: 'title', type: 'string', color: 'bg-blue-400', required: true },
                    { name: 'project_id', type: 'bigint', color: 'bg-purple-400', required: true },
                    { name: 'assignee_id', type: 'bigint', color: 'bg-purple-400' },
                    { name: 'due_date', type: 'date', color: 'bg-rose-400' },
                ],
            },
        ],
        code: {
            controller: {
                file: 'TaskController.php',
                content: `<span class="text-purple-400">public function</span> <span class="text-yellow-300">update</span><span class="text-neutral-500">(</span><span class="text-blue-300">Task</span> <span class="text-orange-300">$task</span><span class="text-neutral-500">,</span> <span class="text-blue-300">UpdateTaskRequest</span> <span class="text-orange-300">$request</span><span class="text-neutral-500">)</span>
<span class="text-neutral-500">{</span>
    <span class="text-purple-400">return</span> <span class="text-blue-300">UpdateTaskAction</span><span class="text-neutral-500">::</span><span class="text-yellow-300">handle</span><span class="text-neutral-500">(</span>
        <span class="text-orange-300">$task</span><span class="text-neutral-500">,</span>
        <span class="text-orange-300">$request</span><span class="text-neutral-500">-></span><span class="text-yellow-300">validated</span><span class="text-neutral-500">()</span>
    <span class="text-neutral-500">);</span>
<span class="text-neutral-500">}</span>`
            },
            action: {
                file: 'AssignTaskAction.php',
                content: `<span class="text-purple-400">public static function</span> <span class="text-yellow-300">handle</span><span class="text-neutral-500">(</span><span class="text-blue-300">Task</span> <span class="text-orange-300">$task</span><span class="text-neutral-500">,</span> <span class="text-blue-300">int</span> <span class="text-orange-300">$userId</span><span class="text-neutral-500">)</span>
<span class="text-neutral-500">{</span>
    <span class="text-orange-300">$task</span><span class="text-neutral-500">-></span><span class="text-yellow-300">update</span><span class="text-neutral-500">([</span>
        <span class="text-green-400">'assignee_id'</span> <span class="text-neutral-500">=></span> <span class="text-orange-300">$userId</span><span class="text-neutral-500">,</span>
        <span class="text-green-400">'status'</span> <span class="text-neutral-500">=></span> <span class="text-green-400">'in_progress'</span><span class="text-neutral-500">,</span>
    <span class="text-neutral-500">]);</span>
    
    <span class="text-blue-300">TaskAssigned</span><span class="text-neutral-500">::</span><span class="text-yellow-300">dispatch</span><span class="text-neutral-500">(</span><span class="text-orange-300">$task</span><span class="text-neutral-500">);</span>
<span class="text-neutral-500">}</span>`
            }
        },
        api: [
            {
                method: 'POST',
                path: '/api/tasks/{id}/assign',
                methodColor: 'bg-green-600 text-white',
                description: 'Assign task to team member',
                response: `{
  "id": 1,
  "assignee_id": 5,
  "status": "in_progress"
}`
            },
            {
                method: 'GET',
                path: '/api/projects/{id}/tasks?status=pending',
                methodColor: 'bg-blue-600 text-white',
                description: 'Get project tasks',
                response: `{
  "data": [...],
  "meta": {"total": 24}
}`
            },
        ],
    },
    {
        icon: Calendar,
        title: 'Event Management',
        description: 'Event platform with bookings, attendees, and tickets',
        schema: [
            {
                name: 'Event',
                fields: [
                    { name: 'id', type: 'bigint', color: 'bg-green-400', required: true, unique: true },
                    { name: 'title', type: 'string', color: 'bg-blue-400', required: true },
                    { name: 'start_date', type: 'datetime', color: 'bg-rose-400', required: true },
                    { name: 'end_date', type: 'datetime', color: 'bg-rose-400', required: true },
                    { name: 'capacity', type: 'integer', color: 'bg-green-400', required: true },
                    { name: 'venue_id', type: 'bigint', color: 'bg-purple-400', required: true },
                ],
            },
            {
                name: 'Ticket',
                fields: [
                    { name: 'id', type: 'bigint', color: 'bg-green-400', required: true, unique: true },
                    { name: 'event_id', type: 'bigint', color: 'bg-purple-400', required: true },
                    { name: 'attendee_id', type: 'bigint', color: 'bg-purple-400', required: true },
                    { name: 'code', type: 'uuid', color: 'bg-cyan-400', required: true, unique: true },
                    { name: 'status', type: 'enum', color: 'bg-orange-400', required: true },
                ],
            },
        ],
        code: {
            controller: {
                file: 'TicketController.php',
                content: `<span class="text-purple-400">public function</span> <span class="text-yellow-300">store</span><span class="text-neutral-500">(</span><span class="text-blue-300">StoreTicketRequest</span> <span class="text-orange-300">$request</span><span class="text-neutral-500">)</span>
<span class="text-neutral-500">{</span>
    <span class="text-purple-400">return</span> <span class="text-blue-300">CreateTicketAction</span><span class="text-neutral-500">::</span><span class="text-yellow-300">handle</span><span class="text-neutral-500">(</span>
        <span class="text-orange-300">$request</span><span class="text-neutral-500">-></span><span class="text-yellow-300">validated</span><span class="text-neutral-500">()</span>
    <span class="text-neutral-500">);</span>
<span class="text-neutral-500">}</span>`
            },
            action: {
                file: 'CreateTicketAction.php',
                content: `<span class="text-purple-400">public static function</span> <span class="text-yellow-300">handle</span><span class="text-neutral-500">(</span><span class="text-blue-300">array</span> <span class="text-orange-300">$data</span><span class="text-neutral-500">)</span>
<span class="text-neutral-500">{</span>
    <span class="text-neutral-500">$</span><span class="text-orange-300">ticket</span> <span class="text-neutral-500">=</span> <span class="text-blue-300">Ticket</span><span class="text-neutral-500">::</span><span class="text-yellow-300">create</span><span class="text-neutral-500">([</span>
        <span class="text-green-400">'code'</span> <span class="text-neutral-500">=></span> <span class="text-blue-300">Str</span><span class="text-neutral-500">::</span><span class="text-yellow-300">uuid</span><span class="text-neutral-500">(),</span>
        <span class="text-green-400">'status'</span> <span class="text-neutral-500">=></span> <span class="text-green-400">'active'</span><span class="text-neutral-500">,</span>
        <span class="text-neutral-500">...</span><span class="text-orange-300">$data</span>
    <span class="text-neutral-500">]);</span>
    
    <span class="text-blue-300">TicketCreated</span><span class="text-neutral-500">::</span><span class="text-yellow-300">dispatch</span><span class="text-neutral-500">(</span><span class="text-orange-300">$ticket</span><span class="text-neutral-500">);</span>
<span class="text-neutral-500">}</span>`
            }
        },
        api: [
            {
                method: 'POST',
                path: '/api/tickets',
                methodColor: 'bg-green-600 text-white',
                description: 'Create event ticket',
                response: `{
  "id": 1,
  "code": "a1b2c3d4-...",
  "status": "active",
  "qr_code": "data:image/png..."
}`
            },
            {
                method: 'GET',
                path: '/api/events/{id}/availability',
                methodColor: 'bg-blue-600 text-white',
                description: 'Check event availability',
                response: `{
  "capacity": 500,
  "sold": 247,
  "available": 253
}`
            },
        ],
    },
];

const techStack = [
    { name: 'Laravel', icon: 'https://laravel.com/img/logomark.min.svg', category: 'Backend Framework', isImage: true },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend Library', isImage: true },
    { name: 'Inertia.js', icon: '⚡', category: 'Bridge', isImage: false },
    { name: 'Tailwind CSS', icon: 'https://www.svgrepo.com/show/374118/tailwind.svg', category: 'Styling', isImage: true },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Type Safety', isImage: true },
    { name: 'Vite', icon: 'https://vitejs.dev/logo.svg', category: 'Build Tool', isImage: true },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Database', isImage: true },
    { name: 'Pest', icon: 'https://pestphp.com/www/assets/logo.svg', category: 'Testing', isImage: true },
];

// Schema Workflow Demo Component
const SchemaWorkflowDemo = () => {
    const [step, setStep] = useState(0);
    
    const steps = [
        {
            title: 'Create Model',
            description: 'Name your model',
            content: (
                <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-neutral-900/50 border border-purple-500/30">
                        <div className="text-xs text-purple-300 mb-2">New Model</div>
                        <div className="flex items-center gap-2 p-2 rounded bg-purple-600/20 border border-purple-500/30">
                            <Database className="h-5 w-5 text-purple-400" />
                            <input 
                                type="text" 
                                value="User" 
                                readOnly
                                className="bg-transparent text-white font-bold outline-none flex-1"
                            />
                        </div>
                    </div>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="p-4 rounded-lg bg-purple-600/20 border border-purple-500/30"
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
            )
        },
        {
            title: 'Add Field',
            description: 'Choose field type',
            content: (
                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-purple-600/20 border border-purple-500/30">
                        <Database className="h-6 w-6 text-purple-400" />
                        <div className="font-bold text-white">User</div>
                    </div>
                    <div className="p-3 rounded-lg bg-neutral-900/50 border border-blue-500/30">
                        <div className="text-xs text-blue-300 mb-2">Select Field Type</div>
                        <div className="grid grid-cols-2 gap-2">
                            {['string', 'integer', 'email', 'boolean'].map((type, i) => (
                                <motion.div
                                    key={type}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: type === 'email' ? 1 : 0.5, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`p-2 rounded text-xs text-center ${
                                        type === 'email' 
                                            ? 'bg-blue-600/30 border border-blue-500/50 text-blue-200 font-bold' 
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
                            <div className="w-3 h-3 rounded-full bg-blue-400" />
                            <span className="text-neutral-300 font-mono">email: email</span>
                        </div>
                    </motion.div>
                </div>
            )
        },
        {
            title: 'Configure Properties',
            description: 'Set field options',
            content: (
                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-600/20 border border-purple-500/30">
                        <Database className="h-5 w-5 text-purple-400" />
                        <div className="font-bold text-white text-sm">User</div>
                    </div>
                    <div className="pl-4 border-l-2 border-blue-500/30">
                        <div className="flex items-center gap-2 text-sm mb-3">
                            <div className="w-3 h-3 rounded-full bg-blue-400" />
                            <span className="text-neutral-300 font-mono">email</span>
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
                                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                        prop.checked 
                                            ? 'bg-blue-600 border-blue-500' 
                                            : 'border-neutral-600'
                                    }`}>
                                        {prop.checked && <div className="w-2 h-2 bg-white rounded-sm" />}
                                    </div>
                                    <span className={prop.checked ? 'text-blue-300 font-medium' : 'text-neutral-500'}>
                                        {prop.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Apply Validations',
            description: 'Add validation rules',
            content: (
                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-600/20 border border-purple-500/30">
                        <Database className="h-5 w-5 text-purple-400" />
                        <div className="font-bold text-white text-sm">User</div>
                    </div>
                    <div className="pl-4 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                            <div className="w-3 h-3 rounded-full bg-blue-400" />
                            <span className="text-neutral-300 font-mono">email</span>
                        </div>
                        <div className="flex flex-wrap gap-1 pl-5">
                            {['required', 'email', 'unique:users'].map((rule, i) => (
                                <motion.span
                                    key={rule}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: i * 0.15, type: 'spring' }}
                                    className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono"
                                >
                                    {rule}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Link Relationships',
            description: 'Connect models',
            content: (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="p-3 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center gap-2">
                            <Database className="h-5 w-5 text-purple-400" />
                            <div className="font-bold text-white text-sm">User</div>
                        </div>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="flex-1 mx-4 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 relative"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-cyan-600/30 border border-cyan-500/50 text-[10px] text-cyan-300 font-mono whitespace-nowrap"
                            >
                                hasMany
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="p-3 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center gap-2"
                        >
                            <Database className="h-5 w-5 text-blue-400" />
                            <div className="font-bold text-white text-sm">Post</div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="p-3 rounded-lg bg-neutral-900/50 border border-cyan-500/20"
                    >
                        <div className="text-xs text-cyan-300 mb-1">Relationship Details</div>
                        <div className="space-y-1 text-[10px] text-neutral-400">
                            <div>• User <span className="text-cyan-300">hasMany</span> Post</div>
                            <div>• Post <span className="text-purple-300">belongsTo</span> User</div>
                            <div>• Foreign key: <span className="text-blue-300 font-mono">user_id</span></div>
                        </div>
                    </motion.div>
                </div>
            )
        },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-full">
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-6">
                {steps.map((s, i) => (
                    <div key={i} className="flex items-center">
                        <motion.div
                            animate={{
                                scale: step === i ? 1.2 : 1,
                                opacity: step >= i ? 1 : 0.3,
                            }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
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
                                animate={{
                                    scaleX: step > i ? 1 : 0.3,
                                    opacity: step > i ? 1 : 0.3,
                                }}
                                className="w-8 h-0.5 bg-purple-500 origin-left"
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
                    <h4 className="text-lg font-bold text-white mb-1">{steps[step].title}</h4>
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
            setStep((prev) => (prev + 1) % (files.length + 2)); // +2 for select stack and preview
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-full space-y-4">
            {/* Stack Selection */}
            {step === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                >
                    <div className="text-sm font-semibold text-blue-300">Step 1: Select Stack</div>
                    <div className="grid grid-cols-2 gap-2">
                        {['React + Inertia', 'Vue + Inertia', 'Blade', 'API Only'].map((stack, i) => (
                            <motion.div
                                key={stack}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ 
                                    opacity: stack === 'React + Inertia' ? 1 : 0.4, 
                                    scale: 1,
                                    borderColor: stack === 'React + Inertia' ? 'rgb(59 130 246)' : 'rgb(64 64 64)'
                                }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-3 rounded-lg text-center text-xs border-2 ${
                                    stack === 'React + Inertia'
                                        ? 'bg-blue-600/30 text-blue-200 font-bold'
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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                >
                    <div className="text-sm font-semibold text-blue-300">Step 2: Generating Files...</div>
                    <div className="space-y-2">
                        {files.map((file, i) => {
                            const isGenerated = i < step;
                            const isCurrent = i === step - 1;
                            
                            return (
                                <motion.div
                                    key={file.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ 
                                        opacity: isGenerated ? 1 : 0.3, 
                                        x: 0,
                                    }}
                                    transition={{ delay: isCurrent ? 0.2 : 0 }}
                                    className={`flex items-center justify-between p-3 rounded-lg border ${
                                        isGenerated
                                            ? 'bg-emerald-900/20 border-emerald-500/30'
                                            : 'bg-neutral-900/30 border-neutral-700/30'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <file.icon className="h-5 w-5 text-white" />
                                        <div>
                                            <div className={`text-xs font-mono font-semibold ${file.color}`}>
                                                {file.name}
                                            </div>
                                            <div className="text-[10px] text-neutral-500">{file.type}</div>
                                        </div>
                                    </div>
                                    {isGenerated && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center"
                                        >
                                            <span className="text-white text-xs">✓</span>
                                        </motion.div>
                                    )}
                                    {isCurrent && (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full"
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                >
                    <div className="text-sm font-semibold text-emerald-300">Step 3: Preview Generated Code</div>
                    <div className="p-4 rounded-lg bg-neutral-900/80 border border-emerald-500/20">
                        <div className="flex items-center gap-2 text-xs mb-3">
                            <Code className="h-4 w-4 text-emerald-400" />
                            <span className="font-mono font-semibold text-emerald-400">User.php</span>
                        </div>
                        <pre className="text-[10px] leading-relaxed font-mono text-neutral-300">
                            <code dangerouslySetInnerHTML={{ __html: `<span class="text-purple-400">class</span> <span class="text-yellow-300">User</span> <span class="text-purple-400">extends</span> <span class="text-blue-300">Model</span>
<span class="text-neutral-500">{</span>
    <span class="text-purple-400">protected</span> <span class="text-orange-300">$fillable</span> <span class="text-neutral-500">= [</span>
        <span class="text-green-400">'name'</span><span class="text-neutral-500">,</span> <span class="text-green-400">'email'</span>
    <span class="text-neutral-500">];</span>
<span class="text-neutral-500">}</span>` }} />
                        </pre>
                    </div>
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-2"
                    >
                        <button className="flex-1 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2">
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
                        className="flex items-center gap-3 p-4 rounded-lg bg-emerald-600/20 border border-emerald-500/30"
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
                        className="p-4 rounded-lg bg-neutral-900/50 border border-emerald-500/20"
                    >
                        <div className="text-xs text-neutral-400 mb-2">Package Contents:</div>
                        <div className="space-y-1.5 text-xs font-mono">
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
            )
        },
        {
            title: 'Extract & Install',
            content: (
                <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-neutral-900/80 border border-emerald-500/20">
                        <div className="flex items-center gap-2 text-xs text-emerald-400 mb-2">
                            <Terminal className="h-4 w-4" />
                            <span className="font-semibold">Terminal</span>
                        </div>
                        <div className="space-y-2 text-xs font-mono">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-neutral-500"
                            >
                                $ unzip my-laravel-app.zip
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-neutral-500"
                            >
                                $ cd my-laravel-app
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-emerald-300"
                            >
                                $ composer install
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="flex items-start gap-2"
                            >
                                <span className="text-neutral-600">Installing dependencies...</span>
                                <motion.div
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="text-emerald-400"
                                >
                                    ●
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Configure & Migrate',
            content: (
                <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-neutral-900/80 border border-blue-500/20">
                        <div className="flex items-center gap-2 text-xs text-blue-400 mb-2">
                            <FileText className="h-4 w-4" />
                            <span className="font-semibold">.env</span>
                        </div>
                        <div className="space-y-1 text-[10px] font-mono text-neutral-400">
                            <div>DB_CONNECTION=<span className="text-blue-300">mysql</span></div>
                            <div>DB_DATABASE=<span className="text-blue-300">my_app</span></div>
                            <div>DB_USERNAME=<span className="text-blue-300">root</span></div>
                        </div>
                    </div>
                    <div className="p-3 rounded-lg bg-neutral-900/80 border border-emerald-500/20">
                        <div className="flex items-center gap-2 text-xs text-emerald-400 mb-2">
                            <Terminal className="h-4 w-4" />
                            <span className="font-semibold">Database Setup</span>
                        </div>
                        <div className="space-y-1.5 text-[10px] font-mono">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-neutral-500"
                            >
                                $ php artisan migrate
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-emerald-300 flex items-center gap-2"
                            >
                                <CheckCircle className="h-3 w-3" />
                                <span>3 migrations completed</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )
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
                                className={`p-3 rounded-lg text-center text-xs border-2 ${
                                    platform.selected
                                        ? 'bg-emerald-600/30 text-emerald-200 border-emerald-500/50 font-bold'
                                        : 'bg-neutral-900/50 text-neutral-500 border-neutral-700'
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
                        className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-500/30"
                    >
                        <div className="flex items-center gap-3 mb-2">
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
                                    className="w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full"
                                />
                                <span>Running migrations</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="p-3 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-center"
                    >
                        <div className="text-xs text-emerald-300 mb-1">🎉 Live at</div>
                        <div className="text-sm font-mono font-bold text-white">my-app.com</div>
                    </motion.div>
                </div>
            )
        },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-full">
            {/* Progress Bar */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    {steps.map((s, i) => (
                        <div key={i} className="flex items-center flex-1">
                            <motion.div
                                animate={{
                                    scale: step === i ? 1.2 : 1,
                                    backgroundColor: step >= i ? 'rgb(16 185 129)' : 'rgb(64 64 64)',
                                }}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white`}
                            >
                                {i + 1}
                            </motion.div>
                            {i < steps.length - 1 && (
                                <motion.div
                                    animate={{
                                        scaleX: step > i ? 1 : 0.3,
                                        backgroundColor: step > i ? 'rgb(16 185 129)' : 'rgb(64 64 64)',
                                    }}
                                    className="flex-1 h-1 mx-2 origin-left"
                                />
                            )}
                        </div>
                    ))}
                </div>
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
                    <h4 className="text-lg font-bold text-white mb-1">Step {step + 1}: {steps[step].title}</h4>
                </div>
                {steps[step].content}
            </motion.div>
        </div>
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
<span class="text-neutral-500">}</span>`
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
<span class="text-neutral-500">}</span>`
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
<span class="text-neutral-500">}</span>`
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
<span class="text-neutral-500">}</span>`
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
<span class="text-neutral-500">}</span>`
        },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % codeExamples.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-3">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
                {codeExamples.map((example, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                            activeTab === index
                                ? 'bg-emerald-600/30 text-emerald-200 border border-emerald-500/30'
                                : 'text-neutral-400 hover:text-neutral-300 border border-transparent'
                        }`}
                    >
                        <Code className="h-3 w-3" />
                        <span>{example.type}</span>
                    </button>
                ))}
            </div>

            {/* Code Display */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-lg bg-neutral-900/80 border border-emerald-500/20"
            >
                <div className="flex items-center gap-2 text-xs mb-3">
                    <div className={`w-2 h-2 rounded-full bg-emerald-400`} />
                    <span className={`font-mono font-semibold ${codeExamples[activeTab].color}`}>
                        {codeExamples[activeTab].file}
                    </span>
                </div>
                <pre className="text-[11px] leading-relaxed font-mono overflow-x-auto">
                    <code dangerouslySetInnerHTML={{ __html: codeExamples[activeTab].code }} />
                </pre>
            </motion.div>

            {/* Features badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
                {['Type hints', 'Validation', 'PSR-12', 'Best practices'].map((item, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-600/20 border border-emerald-500/30 text-emerald-200">
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
                        animate={{
                            scale: isActive ? 1.02 : 1,
                            opacity: isActive ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className={`p-2 rounded-lg border ${
                            isActive
                                ? 'bg-gradient-to-r border-white/30 shadow-lg shadow-blue-500/20'
                                : 'bg-neutral-900/30 border-neutral-700/30'
                        } ${isActive ? rule.color : ''}`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <rule.icon className="h-4 w-4 text-white" />
                            <span className="text-xs font-bold text-white font-mono">{rule.field}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {rule.rules.map((r, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{
                                        scale: isActive ? 1 : 0.95,
                                        opacity: isActive ? 1 : 0.6,
                                    }}
                                    transition={{ delay: isActive ? i * 0.08 : 0, duration: 0.2 }}
                                    className={`px-1 py-0.5 rounded text-[10px] font-mono ${
                                        isActive
                                            ? 'bg-white/20 text-white border border-white/20'
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
                className="text-center pt-1"
            >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    <Sparkles className="h-2.5 w-2.5 text-blue-400" />
                    <span className="text-[10px] font-medium text-blue-300">
                        60+ rules
                    </span>
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
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Animate field 1 dragging
            setDraggedItem(1);
            await new Promise(resolve => setTimeout(resolve, 800));
            setDroppedFields([fieldTypes[0]]);
            setDraggedItem(null);
            
            // Wait and animate field 2
            await new Promise(resolve => setTimeout(resolve, 600));
            setDraggedItem(2);
            await new Promise(resolve => setTimeout(resolve, 800));
            setDroppedFields(prev => [...prev, fieldTypes[1]]);
            setDraggedItem(null);
            
            // Wait and animate field 3
            await new Promise(resolve => setTimeout(resolve, 600));
            setDraggedItem(3);
            await new Promise(resolve => setTimeout(resolve, 800));
            setDroppedFields(prev => [...prev, fieldTypes[2]]);
            setDraggedItem(null);
            
            // Wait then reset
            await new Promise(resolve => setTimeout(resolve, 2000));
            setDroppedFields([]);
        };

        const interval = setInterval(() => {
            animateDrops();
        }, 8000);

        animateDrops();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-full p-6 flex gap-6">
            {/* Field Types Palette */}
            <div className="flex flex-col gap-3 w-1/3">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Field Types</div>
                {fieldTypes.map((field) => (
                    <motion.div
                        key={field.id}
                        animate={{
                            x: draggedItem === field.id ? 180 : 0,
                            y: draggedItem === field.id ? (droppedFields.length * 48) : 0,
                            scale: draggedItem === field.id ? 1.05 : 1,
                            opacity: droppedFields.some(f => f.id === field.id) ? 0.3 : 1,
                        }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className={`px-4 py-3 rounded-lg ${field.color} flex items-center gap-2 shadow-lg cursor-move`}
                        style={{ willChange: 'transform' }}
                    >
                        <div className="w-2 h-2 rounded-full bg-white/80" />
                        <span className="text-sm font-medium text-white">{field.name}: {field.type}</span>
                    </motion.div>
                ))}
            </div>

            {/* Drop Zone - Model Card */}
            <div className="flex-1 relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-dashed border-purple-500/30">
                    <div className="p-4">
                        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-purple-500/30">
                            <Database className="h-5 w-5 text-purple-400" />
                            <span className="font-bold text-white">User Model</span>
                        </div>
                        
                        <div className="space-y-2">
                            {droppedFields.map((field, index) => (
                                <motion.div
                                    key={field.id}
                                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className={`px-4 py-3 rounded-lg ${field.color} flex items-center gap-2 shadow-lg`}
                                >
                                    <div className="w-2 h-2 rounded-full bg-white/80" />
                                    <span className="text-sm font-medium text-white">{field.name}: {field.type}</span>
                                </motion.div>
                            ))}
                        </div>

                        {droppedFields.length === 0 && (
                            <motion.div
                                animate={{ opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-center py-12"
                            >
                                <Sparkles className="h-8 w-8 text-purple-400/50 mx-auto mb-2" />
                                <p className="text-sm text-purple-300/50">Drag fields here</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Cursor effect during drag */}
            {draggedItem !== null && (
                <motion.div
                    className="absolute pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        left: '20%',
                        top: '30%',
                    }}
                >
                    <div className="w-6 h-6 rounded-full bg-purple-500/50 blur-sm" />
                </motion.div>
            )}
        </div>
    );
};
