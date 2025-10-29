import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const LandingPerformanceSection = () => {
    return (
        <section className="bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent px-6 py-16 md:py-32">
            <div className="container mx-auto max-w-7xl">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="order-2 md:order-1"
                    >
                        <div className="glass-card relative overflow-hidden p-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 to-pink-600/10" />

                            <div className="relative space-y-6">
                                {[
                                    {
                                        label: 'Eager Loading',
                                        value: '95%',
                                        description: 'N+1 queries eliminated',
                                        color: 'from-fuchsia-600 to-pink-600',
                                    },
                                    {
                                        label: 'Query Optimization',
                                        value: '80%',
                                        description: 'Faster database queries',
                                        color: 'from-purple-600 to-fuchsia-600',
                                    },
                                    {
                                        label: 'Caching Strategy',
                                        value: '90%',
                                        description: 'Response time improved',
                                        color: 'from-pink-600 to-rose-600',
                                    },
                                ].map((metric, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-white">
                                                {metric.label}
                                            </span>
                                            <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent">
                                                {metric.value}
                                            </span>
                                        </div>
                                        <div className="h-2 overflow-hidden rounded-full bg-neutral-900/50">
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
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/20 px-3 py-1.5">
                            <Zap className="h-4 w-4 text-fuchsia-400" />
                            <span className="text-xs font-semibold tracking-wider text-fuchsia-200 uppercase">
                                Optimized
                            </span>
                        </div>
                        <h3 className="mb-6 text-4xl font-bold text-white">
                            Built for{' '}
                            <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                                performance
                            </span>
                        </h3>
                        <p className="mb-8 text-xl leading-relaxed text-neutral-300">
                            Generated code includes performance optimizations out of the box. From eager loading to
                            query optimization, your app is fast by default.
                        </p>
                        <div className="space-y-4">
                            {[
                                {
                                    title: 'Smart Eager Loading',
                                    description: 'Automatically prevents N+1 query problems',
                                },
                                {
                                    title: 'Index Suggestions',
                                    description: 'Database indexes for frequently queried fields',
                                },
                                {
                                    title: 'Pagination Built-in',
                                    description: 'Efficient pagination for large datasets',
                                },
                                {
                                    title: 'Response Caching',
                                    description: 'Cache-ready controller responses',
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-600/20">
                                        <div className="h-2 w-2 rounded-full bg-fuchsia-400" />
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
    );
};

export default LandingPerformanceSection;

