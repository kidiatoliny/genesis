import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Code, Database, Palette, Download, Sparkles, Github, Box, ShoppingCart, MessageSquare, Users, FileText, Calendar } from 'lucide-react';

export default function BuilderLanding() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <>
            <Head title="Genesis Builder - Visual Laravel Schema Builder">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=inter:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-purple-950 to-neutral-950 text-white overflow-hidden">
                {/* Navigation */}
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-neutral-950/50 border-b border-purple-500/20"
                >
                    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Box className="h-6 w-6 text-purple-500" />
                            <span className="text-xl font-bold">Genesis Builder</span>
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
                <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
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
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6"
                            >
                                <Sparkles className="h-4 w-4 text-purple-400" />
                                <span className="text-sm font-medium">Visual Schema Builder for Laravel</span>
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                                Build Laravel Apps
                                <br />
                                <span className="text-purple-400">Visually</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto">
                                Create database schemas, generate models, migrations, and complete CRUD operations
                                with a powerful drag-and-drop interface.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/builder">
                                    <Button
                                        size="lg"
                                        className="px-8 py-6 text-lg bg-purple-600 hover:bg-purple-700 transition-all hover:scale-105"
                                    >
                                        Start Building
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="px-8 py-6 text-lg border-purple-500/50 hover:bg-purple-500/10"
                                >
                                    <Github className="mr-2 h-5 w-5" />
                                    View on GitHub
                                </Button>
                            </div>
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

                {/* Features Section */}
                <section className="py-32 px-6 relative">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl font-bold mb-6">
                                Everything you need to
                                <span className="text-purple-400"> build faster</span>
                            </h2>
                            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                                From schema design to production-ready code, Genesis Builder handles it all.
                            </p>
                        </motion.div>

                        {/* Bento Box Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-fr">
                            {/* Large Feature - Visual Schema Designer */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="md:col-span-4 md:row-span-2 group relative"
                            >
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.01 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="glass-card p-8 relative overflow-hidden h-full flex flex-col isolate"
                                    style={{ willChange: 'transform' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-purple-600/5 group-hover:to-blue-600/10 transition-all duration-500 pointer-events-none" />
                                    
                                    <div className="relative flex-1 flex flex-col">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-300">
                                                <Palette className="h-8 w-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                                                    Visual Schema Designer
                                                </h3>
                                                <p className="text-neutral-300 leading-relaxed text-lg">
                                                    Drag and drop models and fields to create your database schema. No code required until you're ready.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Mini visual demo */}
                                        <div className="relative flex-1 mt-4 rounded-xl bg-gradient-to-br from-neutral-900/50 to-purple-900/30 p-6 border border-purple-500/20">
                                            <div className="flex items-center gap-4 flex-wrap">
                                                <div className="px-4 py-2 rounded-lg bg-purple-600/30 border border-purple-400/30 text-sm font-medium">
                                                    <Database className="inline h-4 w-4 mr-2" />
                                                    User
                                                </div>
                                                <div className="text-purple-400">→</div>
                                                <div className="px-3 py-1.5 rounded-full bg-green-600/30 border border-green-400/30 text-xs">
                                                    name: string
                                                </div>
                                                <div className="px-3 py-1.5 rounded-full bg-blue-600/30 border border-blue-400/30 text-xs">
                                                    email: email
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Medium Feature - Generate Clean Code */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="md:col-span-2 md:row-span-2 group relative"
                            >
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="glass-card p-6 relative overflow-hidden h-full flex flex-col justify-between isolate"
                                    style={{ willChange: 'transform' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 transition-all duration-500 pointer-events-none" />
                                    
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg mb-6">
                                            <Code className="h-7 w-7 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                                            Generate Clean Code
                                        </h3>
                                        <p className="text-neutral-300 leading-relaxed">
                                            Automatically generate Models, Migrations, Controllers, and Views following Laravel best practices.
                                        </p>
                                    </div>

                                    <div className="relative mt-6 p-4 rounded-lg bg-neutral-900/50 font-mono text-xs text-green-400 border border-green-500/20">
                                        <div>class User extends Model</div>
                                        <div className="text-neutral-500">{'{'}</div>
                                        <div className="pl-4">protected $fillable...</div>
                                        <div className="text-neutral-500">{'}'}</div>
                                    </div>

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Small Feature - Type-Safe Fields */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="md:col-span-2 group relative"
                            >
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="glass-card p-6 relative overflow-hidden h-full isolate"
                                    style={{ willChange: 'transform' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-teal-600/0 group-hover:from-emerald-600/10 group-hover:to-teal-600/10 transition-all duration-500 pointer-events-none" />
                                    
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg mb-4">
                                            <Database className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors duration-300">
                                            14+ Field Types
                                        </h3>
                                        <p className="text-neutral-300 text-sm leading-relaxed">
                                            String, integer, json, uuid, email, datetime, and more.
                                        </p>
                                    </div>

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Small Feature - Instant CRUD */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="md:col-span-2 group relative"
                            >
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="glass-card p-6 relative overflow-hidden h-full isolate"
                                    style={{ willChange: 'transform' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-red-600/0 group-hover:from-orange-600/10 group-hover:to-red-600/10 transition-all duration-500 pointer-events-none" />
                                    
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center shadow-lg mb-4">
                                            <Zap className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-300 transition-colors duration-300">
                                            Instant CRUD
                                        </h3>
                                        <p className="text-neutral-300 text-sm leading-relaxed">
                                            Complete operations with routes and views in seconds.
                                        </p>
                                    </div>

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Small Feature - Export Projects */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="md:col-span-2 group relative"
                            >
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="glass-card p-6 relative overflow-hidden h-full isolate"
                                    style={{ willChange: 'transform' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/10 group-hover:to-fuchsia-600/10 transition-all duration-500 pointer-events-none" />
                                    
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg mb-4">
                                            <Download className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-violet-300 transition-colors duration-300">
                                            Export & Deploy
                                        </h3>
                                        <p className="text-neutral-300 text-sm leading-relaxed">
                                            Download complete projects ready to run or deploy.
                                        </p>
                                    </div>

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-32 px-6">
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
                                        Create your database models with an intuitive drag-and-drop interface. Add fields, define types, set relationships, and configure validations without writing a single line of code.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Drag & Drop Builder</div>
                                                <div className="text-sm text-neutral-400">Visual interface for creating models and fields</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">14+ Field Types</div>
                                                <div className="text-sm text-neutral-400">String, integer, json, uuid, email, and more</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Smart Relationships</div>
                                                <div className="text-sm text-neutral-400">Define hasMany, belongsTo, and more</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="order-1 md:order-2 glass-card p-8 relative overflow-hidden"
                                    style={{ willChange: 'transform' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10" />
                                    <div className="relative space-y-4">
                                        <div className="flex items-center gap-3 p-4 rounded-lg bg-purple-600/20 border border-purple-500/30">
                                            <Database className="h-8 w-8 text-purple-400" />
                                            <div>
                                                <div className="font-bold text-white">User Model</div>
                                                <div className="text-xs text-purple-300">3 fields</div>
                                            </div>
                                        </div>
                                        <div className="pl-6 space-y-2">
                                            <div className="flex items-center gap-2 text-sm">
                                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                                <span className="text-neutral-300 font-mono">name: string</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <div className="w-3 h-3 rounded-full bg-blue-400" />
                                                <span className="text-neutral-300 font-mono">email: email</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <div className="w-3 h-3 rounded-full bg-purple-400" />
                                                <span className="text-neutral-300 font-mono">password: string</span>
                                            </div>
                                        </div>
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
                                    className="glass-card p-8 relative overflow-hidden"
                                    style={{ willChange: 'transform' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10" />
                                    <div className="relative">
                                        <div className="mb-4 p-4 rounded-lg bg-neutral-900/80 border border-blue-500/20">
                                            <div className="flex items-center gap-2 text-xs text-blue-400 mb-3">
                                                <Code className="h-4 w-4" />
                                                <span className="font-semibold">StoreUserRequest.php</span>
                                            </div>
                                            <pre className="text-xs font-mono overflow-x-auto leading-relaxed">
                                                <code>
                                                    <span className="text-purple-400">public function</span>
                                                    {' '}<span className="text-yellow-300">rules</span>
                                                    <span className="text-neutral-500">()</span>
                                                    <span className="text-neutral-500">: </span>
                                                    <span className="text-blue-300">array</span>
                                                    {'\n'}
                                                    <span className="text-neutral-500">{'{'}</span>
                                                    {'\n    '}
                                                    <span className="text-purple-400">return</span>
                                                    {' ['}
                                                    {'\n        '}
                                                    <span className="text-green-400">'name'</span>
                                                    {' => ['}
                                                    <span className="text-green-400">'required'</span>
                                                    <span className="text-neutral-500">, </span>
                                                    <span className="text-green-400">'string'</span>
                                                    <span className="text-neutral-500">, </span>
                                                    <span className="text-green-400">'max:255'</span>
                                                    <span className="text-neutral-500">],</span>
                                                    {'\n        '}
                                                    <span className="text-green-400">'email'</span>
                                                    {' => ['}
                                                    <span className="text-green-400">'required'</span>
                                                    <span className="text-neutral-500">, </span>
                                                    <span className="text-green-400">'email'</span>
                                                    <span className="text-neutral-500">, </span>
                                                    <span className="text-green-400">'unique:users'</span>
                                                    <span className="text-neutral-500">],</span>
                                                    {'\n    '}
                                                    <span className="text-neutral-500">];</span>
                                                    {'\n'}
                                                    <span className="text-neutral-500">{'}'}</span>
                                                </code>
                                            </pre>
                                        </div>
                                        <div className="p-4 rounded-lg bg-neutral-900/80 border border-cyan-500/20">
                                            <div className="flex items-center gap-2 text-xs text-cyan-400 mb-3">
                                                <Code className="h-4 w-4" />
                                                <span className="font-semibold">UserController.php</span>
                                            </div>
                                            <pre className="text-xs font-mono overflow-x-auto leading-relaxed">
                                                <code>
                                                    <span className="text-purple-400">public function</span>
                                                    {' '}<span className="text-yellow-300">store</span>
                                                    <span className="text-neutral-500">(</span>
                                                    <span className="text-blue-300">StoreUserRequest</span>
                                                    {' '}<span className="text-orange-300">$request</span>
                                                    <span className="text-neutral-500">)</span>
                                                    {'\n'}
                                                    <span className="text-neutral-500">{'{'}</span>
                                                    {'\n    '}
                                                    <span className="text-purple-400">return</span>
                                                    {' '}<span className="text-blue-300">StoreUserAction</span>
                                                    <span className="text-neutral-500">::</span>
                                                    <span className="text-yellow-300">handle</span>
                                                    <span className="text-neutral-500">(</span>
                                                    <span className="text-orange-300">$request</span>
                                                    <span className="text-neutral-500">-&gt;</span>
                                                    <span className="text-yellow-300">validated</span>
                                                    <span className="text-neutral-500">());</span>
                                                    {'\n'}
                                                    <span className="text-neutral-500">{'}'}</span>
                                                </code>
                                            </pre>
                                        </div>
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
                                        Choose your preferred stack and let Genesis Builder generate clean, maintainable code following Laravel best practices. Everything from models to views.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Multiple Stacks</div>
                                                <div className="text-sm text-neutral-400">React, Vue, Blade, Livewire, or API</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Array Validation</div>
                                                <div className="text-sm text-neutral-400">Modern PHP array syntax for rules</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Action Pattern</div>
                                                <div className="text-sm text-neutral-400">Single responsibility actions for clean code</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Best Practices</div>
                                                <div className="text-sm text-neutral-400">PSR standards, type hints, and documentation</div>
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
                                        Export your complete Laravel project as a ZIP file. Everything is ready to run locally or deploy to production immediately with zero configuration.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-emerald-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Complete Project</div>
                                                <div className="text-sm text-neutral-400">All files, dependencies, and configurations</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-emerald-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">One Command Setup</div>
                                                <div className="text-sm text-neutral-400 font-mono">composer install && npm install</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-emerald-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white mb-1">Deploy Anywhere</div>
                                                <div className="text-sm text-neutral-400">Forge, Vapor, Heroku, or any server</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="order-1 md:order-2 glass-card p-8 relative overflow-hidden"
                                    style={{ willChange: 'transform' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10" />
                                    <div className="relative space-y-4">
                                        <div className="flex items-center gap-3 p-4 rounded-lg bg-emerald-600/20 border border-emerald-500/30">
                                            <Download className="h-8 w-8 text-emerald-400" />
                                            <div>
                                                <div className="font-bold text-white">my-laravel-project.zip</div>
                                                <div className="text-xs text-emerald-300">Ready to deploy</div>
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-lg bg-neutral-900/50 border border-emerald-500/20">
                                            <div className="text-xs text-neutral-400 mb-2">Project Structure:</div>
                                            <div className="space-y-1 text-xs font-mono">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-purple-400">📁</span>
                                                    <span className="text-purple-300">app/Models/</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-blue-400">📁</span>
                                                    <span className="text-blue-300">app/Http/Controllers/</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-cyan-400">📁</span>
                                                    <span className="text-cyan-300">app/Actions/</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-orange-400">📁</span>
                                                    <span className="text-orange-300">database/migrations/</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-green-400">📁</span>
                                                    <span className="text-green-300">resources/views/</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-pink-400">📁</span>
                                                    <span className="text-pink-300">routes/</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-yellow-400">📄</span>
                                                    <span className="text-yellow-300">composer.json</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-red-400">📄</span>
                                                    <span className="text-red-300">package.json</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-6">
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
                <section className="py-32 px-6 bg-gradient-to-b from-transparent via-neutral-900 to-transparent">
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
                <section className="py-32 px-6">
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

                {/* Footer */}
                <footer className="py-12 px-6 border-t border-purple-500/20">
                    <div className="container mx-auto max-w-6xl text-center text-neutral-400">
                        <p>© 2024 Genesis Builder. Built with Laravel & React.</p>
                    </div>
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
                className="glass-card p-6 relative overflow-hidden h-full"
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
                
                {/* Models */}
                <div className="relative space-y-4">
                    <div>
                        <div className="text-xs font-semibold text-purple-400 mb-2 uppercase tracking-wide">
                            Models
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {example.models.map((model, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-3 py-1.5 rounded-lg bg-purple-600/20 border border-purple-500/30 text-xs font-medium text-purple-200 backdrop-blur-sm"
                                >
                                    {model}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                    
                    {/* Features */}
                    <div>
                        <div className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">
                            Features
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {example.features.map((feature, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.05 + 0.2 }}
                                    className="px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-xs text-blue-200 backdrop-blur-sm"
                                >
                                    {feature}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
        description: 'Complete online store with products, orders, and customers',
        models: ['Product', 'Order', 'Customer', 'Category', 'Cart'],
        features: ['CRUD operations', 'Relationships', 'Image uploads', 'Search & filters'],
    },
    {
        icon: MessageSquare,
        title: 'Blog & CMS',
        description: 'Content management system with posts, comments, and authors',
        models: ['Post', 'Comment', 'Author', 'Category', 'Tag'],
        features: ['Rich text editor', 'Media library', 'SEO fields', 'Publishing workflow'],
    },
    {
        icon: Users,
        title: 'Team Collaboration Tool',
        description: 'Project management with teams, tasks, and assignments',
        models: ['Project', 'Task', 'Team', 'User', 'Comment'],
        features: ['User roles', 'Real-time updates', 'File attachments', 'Activity tracking'],
    },
    {
        icon: Calendar,
        title: 'Event Management',
        description: 'Event platform with bookings, attendees, and tickets',
        models: ['Event', 'Ticket', 'Attendee', 'Venue', 'Speaker'],
        features: ['Calendar views', 'Payment integration', 'QR codes', 'Email notifications'],
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
