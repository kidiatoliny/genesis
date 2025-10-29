import React from 'react';
import { motion } from 'framer-motion';

const LandingStatsSection = () => {
    return (
        <section className="bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent px-6 py-16 md:py-32">
            <div className="container mx-auto max-w-6xl">
                <div className="grid gap-8 md:grid-cols-4">
                    {[
                        { value: '50K+', label: 'Lines of Code Generated' },
                        { value: '1,200+', label: 'Projects Created' },
                        { value: '95%', label: 'Time Saved' },
                        { value: '4.9/5', label: 'Developer Rating' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-6xl font-bold text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-lg text-neutral-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingStatsSection;

