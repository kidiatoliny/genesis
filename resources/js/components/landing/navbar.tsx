import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Box, CreditCard, Layers, Play, Rocket, Sparkles } from 'lucide-react';

export default function LandingNavbar({ scrolled }: { scrolled: boolean }) {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'border-b border-purple-500/20 bg-neutral-950/80 shadow-lg backdrop-blur-lg'
                    : 'border-b border-transparent bg-transparent'
            }`}
        >
            <div className="relative container mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex w-48 items-center gap-2">
                    <Box className="h-6 w-6 text-purple-500" />
                    <span className="text-xl font-bold">Genesis Builder</span>
                </div>

                <div className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-6 md:flex">
                    <a
                        href="#features"
                        className="group flex items-center gap-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                    >
                        <Sparkles className="h-4 w-4 text-purple-400 transition-colors group-hover:text-purple-300" />
                        Features
                    </a>
                    <a
                        href="#how-it-works"
                        className="group flex items-center gap-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                    >
                        <Play className="h-4 w-4 text-blue-400 transition-colors group-hover:text-blue-300" />
                        How it Works
                    </a>
                    <a
                        href="#deploy"
                        className="group flex items-center gap-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                    >
                        <Rocket className="h-4 w-4 text-orange-400 transition-colors group-hover:text-orange-300" />
                        Deploy
                    </a>
                    <a
                        href="#examples"
                        className="group flex items-center gap-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                    >
                        <Layers className="h-4 w-4 text-emerald-400 transition-colors group-hover:text-emerald-300" />
                        Examples
                    </a>
                    <a
                        href="#pricing"
                        className="group flex items-center gap-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                    >
                        <CreditCard className="h-4 w-4 text-emerald-400 transition-colors group-hover:text-emerald-300" />
                        Pricing
                    </a>
                </div>

                <div className="flex w-48 items-center justify-end gap-4">
                    <Link
                        href="/builder"
                        className="rounded-lg bg-purple-600 px-6 py-2 font-medium transition-colors hover:bg-purple-700"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
