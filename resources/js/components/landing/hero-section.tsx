import { motion, MotionValue } from 'framer-motion';
import React from 'react';

type Props = {
    y: MotionValue<string | number>;
    opacity: MotionValue<number>;
    children: React.ReactNode; // AnimatedSchemaDemo
};

export default function LandingHeroSection({ y, opacity, children }: Props) {
    return (
        <section className="relative flex min-h-screen items-center justify-center px-6 pt-32 md:pt-48">
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 overflow-hidden"
            >
                <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-600/30 blur-3xl md:h-96 md:w-96" />
                <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl md:h-96 md:w-96" />
            </motion.div>

            <div className="relative z-10 mx-auto max-w-6xl text-center">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-5xl leading-tight font-bold text-transparent md:text-8xl">
                        Build Laravel Apps
                        <br />
                        <span className="text-purple-400">Visually</span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-3xl text-lg text-neutral-300 md:text-2xl">
                        Create database schemas, generate models, migrations,
                        and complete CRUD operations with a powerful
                        drag-and-drop interface.
                    </p>

                    {/* Link + Button are defined in the page, so keep markup identical there */}
                </motion.div>

                {/* Animated Schema Demo */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-12 md:mt-20"
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
