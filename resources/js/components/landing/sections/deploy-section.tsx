import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Github, Rocket, Server, Sparkles, Terminal, Users } from 'lucide-react';

const LandingDeploySection = () => {
    return (
        <section
            id="deploy"
            className="bg-gradient-to-b from-transparent via-violet-500/5 to-transparent px-6 py-16 md:py-32"
        >
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="mb-6 text-3xl font-bold md:text-5xl">Deploy with One Click</h2>
                    <p className="text-xl text-neutral-300">Ship to production faster with direct integrations</p>
                </motion.div>

                <div className="mx-auto mb-20 grid max-w-6xl gap-6 md:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-card group relative overflow-hidden p-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 transition-all duration-500 group-hover:from-orange-600/20 group-hover:to-red-600/20" />

                        <div className="relative">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 shadow-lg transition-shadow group-hover:shadow-orange-500/50">
                                <Cloud className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-white">Laravel Cloud</h3>
                            <p className="mb-4 leading-relaxed text-neutral-300">
                                Deploy directly from Genesis Builder to Laravel Cloud. One click and your app is
                                live with zero configuration.
                            </p>
                            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/20 px-3 py-1.5">
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
                        className="glass-card group relative overflow-hidden p-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 transition-all duration-500 group-hover:from-emerald-600/20 group-hover:to-teal-600/20" />

                        <div className="relative">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg transition-shadow group-hover:shadow-emerald-500/50">
                                <Rocket className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-white">Laravel Forge</h3>
                            <p className="mb-4 leading-relaxed text-neutral-300">
                                Connect your Forge account and deploy to any server. Automatic deployment pipelines
                                included.
                            </p>
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1.5">
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
                        className="glass-card group relative overflow-hidden p-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 transition-all duration-500 group-hover:from-blue-600/20 group-hover:to-cyan-600/20" />

                        <div className="relative">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg transition-shadow group-hover:shadow-blue-500/50">
                                <Server className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-white">Custom VPS</h3>
                            <p className="mb-4 leading-relaxed text-neutral-300">
                                Deploy to your own VPS with SSH. Works with DigitalOcean, Linode, AWS, or any Linux
                                server.
                            </p>
                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1.5">
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
                    className="mb-12 text-center"
                >
                    <h3 className="mb-4 text-3xl font-bold text-white">More Integrations Coming</h3>
                    <p className="text-lg text-neutral-400">We're building the tools you need</p>
                </motion.div>

                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-card p-6"
                    >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20">
                            <Github className="h-6 w-6 text-violet-400" />
                        </div>
                        <h4 className="mb-2 text-lg font-bold text-white">GitHub Integration</h4>
                        <p className="mb-3 text-sm text-neutral-400">Push generated code directly to your repository</p>
                        <div className="text-xs font-medium text-neutral-500">Coming Soon</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-6"
                    >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20">
                            <Terminal className="h-6 w-6 text-blue-400" />
                        </div>
                        <h4 className="mb-2 text-lg font-bold text-white">CLI Tool</h4>
                        <p className="mb-3 text-sm text-neutral-400">Generate schemas from your terminal</p>
                        <div className="text-xs font-medium text-neutral-500">Coming Soon</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-card p-6"
                    >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20">
                            <Users className="h-6 w-6 text-purple-400" />
                        </div>
                        <h4 className="mb-2 text-lg font-bold text-white">Team Collaboration</h4>
                        <p className="mb-3 text-sm text-neutral-400">Share and collaborate on schemas</p>
                        <div className="text-xs font-medium text-neutral-500">Coming Soon</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LandingDeploySection;

