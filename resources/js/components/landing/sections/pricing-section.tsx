import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

type Props = {
    isYearly: boolean;
    setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
};

const LandingPricingSection = ({ isYearly, setIsYearly }: Props) => {
    return (
        <section
            id="pricing"
            className="bg-gradient-to-b from-transparent via-orange-500/5 to-transparent px-6 py-16 md:py-32"
        >
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="glass-card mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                    >
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                        <span className="text-xs font-medium tracking-wider text-blue-200 uppercase">
                            Simple Pricing
                        </span>
                    </motion.div>

                    <h2 className="mb-6 text-3xl font-bold md:text-6xl">
                        <span className="text-white">Choose your plan</span>
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-400">
                        Start free and upgrade as you grow. All plans include core features.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-3">
                        <span className={`text-sm transition-colors ${!isYearly ? 'font-medium text-white' : 'text-neutral-400'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`relative h-7 w-14 rounded-full border transition-all duration-300 ${
                                isYearly
                                    ? 'border-purple-500/50 bg-purple-600/30 hover:border-purple-500'
                                    : 'border-neutral-500/50 bg-neutral-600/30 hover:border-neutral-500'
                            }`}
                        >
                            <div
                                className={`absolute top-1 h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 transition-transform duration-300 ${
                                    isYearly ? 'translate-x-7' : 'translate-x-1'
                                }`}
                            />
                        </button>
                        <span className={`text-sm transition-colors ${isYearly ? 'font-medium text-white' : 'text-neutral-400'}`}>
                            Yearly
                            {isYearly && (
                                <span className="ml-2 rounded-full border border-green-500/30 bg-green-600/20 px-2 py-0.5 text-xs text-green-400">
                                    Save 20%
                                </span>
                            )}
                        </span>
                    </div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass-card group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-neutral-600">
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-neutral-900/20 transition-all duration-500 group-hover:from-neutral-800/30 group-hover:to-neutral-900/30" />

                            <div className="relative">
                                <h3 className="mb-2 text-2xl font-bold text-white">Free</h3>
                                <p className="mb-6 text-neutral-400">Perfect for learning and small projects</p>

                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-white">€0</span>
                                        <span className="text-neutral-400">/month</span>
                                    </div>
                                </div>

                                <Link href="/builder">
                                    <Button variant="outline" className="mb-8 w-full">
                                        Get Started
                                    </Button>
                                </Link>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600/20">
                                            <div className="h-2 w-2 rounded-full bg-green-400" />
                                        </div>
                                        <span className="text-sm text-neutral-300">3 projects</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600/20">
                                            <div className="h-2 w-2 rounded-full bg-green-400" />
                                        </div>
                                        <span className="text-sm text-neutral-300">Basic code generation</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600/20">
                                            <div className="h-2 w-2 rounded-full bg-green-400" />
                                        </div>
                                        <span className="text-sm text-neutral-300">Standard templates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass-card group relative h-full overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 p-8 shadow-xl transition-all duration-500 hover:shadow-purple-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 transition-all duration-500 group-hover:from-purple-900/20 group-hover:to-blue-900/20" />
                            <div className="relative">
                                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1.5">
                                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
                                    <span className="text-xs font-semibold tracking-wider text-purple-200 uppercase">
                                        Most Popular
                                    </span>
                                </div>

                                <h3 className="mb-2 text-2xl font-bold text-white">Pro</h3>
                                <p className="mb-6 text-neutral-400">For professionals building real products</p>

                                <div className="mb-8">
                                    <div className="mb-1 flex items-baseline gap-2">
                                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-5xl font-bold text-transparent">
                                            €{isYearly ? '12' : '15'}
                                        </span>
                                        <span className="text-neutral-400">/month</span>
                                    </div>
                                    {isYearly ? (
                                        <>
                                            <p className="text-sm text-neutral-500">€144 billed yearly</p>
                                            <p className="mt-1 text-xs text-green-400">Save €36 per year</p>
                                        </>
                                    ) : (
                                        <p className="text-sm text-neutral-500">Billed monthly</p>
                                    )}
                                </div>

                                <Link href="/builder">
                                    <Button className="mb-8 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                                        Start Free Trial
                                    </Button>
                                </Link>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/30">
                                            <div className="h-2 w-2 rounded-full bg-purple-400" />
                                        </div>
                                        <span className="text-sm font-medium text-white">Unlimited projects</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/30">
                                            <div className="h-2 w-2 rounded-full bg-purple-400" />
                                        </div>
                                        <span className="text-sm font-medium text-white">Advanced code generation</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/30">
                                            <div className="h-2 w-2 rounded-full bg-purple-400" />
                                        </div>
                                        <span className="text-sm font-medium text-white">All stack options</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/30">
                                            <div className="h-2 w-2 rounded-full bg-purple-400" />
                                        </div>
                                        <span className="text-sm font-medium text-white">Priority support</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/30">
                                            <div className="h-2 w-2 rounded-full bg-purple-400" />
                                        </div>
                                        <span className="text-sm font-medium text-white">Custom templates</span>
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
                        <div className="glass-card group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-neutral-600">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 transition-all duration-500 group-hover:from-blue-900/20 group-hover:to-cyan-900/20" />

                            <div className="relative">
                                <h3 className="mb-2 text-2xl font-bold text-white">Enterprise</h3>
                                <p className="mb-6 text-neutral-400">For teams that need customization and support</p>

                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-white">Custom</span>
                                    </div>
                                    <p className="mt-2 text-sm text-neutral-500">Contact sales</p>
                                </div>

                                <Link href="/contact">
                                    <Button variant="outline" className="mb-8 w-full">
                                        Contact Sales
                                    </Button>
                                </Link>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                            <div className="h-2 w-2 rounded-full bg-blue-400" />
                                        </div>
                                        <span className="text-sm text-neutral-300">Everything in Pro</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                            <div className="h-2 w-2 rounded-full bg-blue-400" />
                                        </div>
                                        <span className="text-sm text-neutral-300">Dedicated support</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                            <div className="h-2 w-2 rounded-full bg-blue-400" />
                                        </div>
                                        <span className="text-sm text-neutral-300">Custom integrations</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                            <div className="h-2 w-2 rounded-full bg-blue-400" />
                                        </div>
                                        <span className="text-sm text-neutral-300">SLA guarantee</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                            <div className="h-2 w-2 rounded-full bg-blue-400" />
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
    );
};

export default LandingPricingSection;

