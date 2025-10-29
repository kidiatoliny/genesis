import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export default function LandingCtaSection() {
    return (
        <section className="bg-gradient-to-b from-transparent via-green-500/5 to-transparent px-6 py-16 md:py-32">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="container mx-auto max-w-4xl text-center"
            >
                <div className="glass-card relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-cyan-600/30 p-12 md:p-20">
                    <div className="grid-pattern absolute inset-0 opacity-30" />
                    <div className="relative z-10">
                        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                            Ready to build something amazing?
                        </h2>
                        <p className="mb-10 text-xl text-neutral-200">
                            Start creating your Laravel application with
                            Genesis Builder today.
                        </p>
                        <Link href="/builder">
                            <Button
                                size="lg"
                                className="bg-white px-10 py-6 text-lg text-purple-600 shadow-xl transition-all hover:scale-105 hover:bg-neutral-100"
                            >
                                Get Started Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

