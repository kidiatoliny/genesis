import LandingFooterSection from '@/components/landing/footer-section';
import LandingHeroSection from '@/components/landing/hero-section';
import LandingNavbar from '@/components/landing/navbar';
import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight,
    Calendar,
    CheckCircle,
    Cloud,
    Code,
    Database,
    DollarSign,
    Download,
    FileJson,
    FileText,
    Folder,
    Gamepad2,
    Github,
    Lock,
    Mail,
    MessageSquare,
    Package,
    Palette,
    Rocket,
    Server,
    ShoppingCart,
    Sparkles,
    Terminal,
    Users,
    Zap,
} from 'lucide-react';
import React, { useState } from 'react';
import LandingCtaSection from '@/components/landing/sections/cta-section';
import LandingHowItWorksSection from '@/components/landing/sections/how-it-works-section';
import LandingDeploySection from '@/components/landing/sections/deploy-section';
import LandingPerformanceSection from '@/components/landing/sections/performance-section';
import LandingFeaturesSection from '@/components/landing/sections/features-section';

export default function BuilderLanding() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const [isYearly, setIsYearly] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

            <div className="min-h-screen overflow-hidden bg-gradient-to-br from-neutral-950 via-purple-950/70 to-neutral-950 text-white">
                <LandingNavbar scrolled={scrolled} />

                <LandingHeroSection y={y} opacity={opacity}>
                    <AnimatedSchemaDemo />
                </LandingHeroSection>
                <LandingFeaturesSection />
                <LandingHowItWorksSection />
                <LandingDeploySection />

                {/* Examples Section */}
                <section
                    id="examples"
                    className="bg-gradient-to-b from-transparent via-neutral-900 to-transparent px-6 py-16 md:py-32"
                >
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-20 text-center"
                        >
                            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                                Real-world examples
                            </h2>
                            <p className="text-xl text-neutral-300">
                                See what you can build in minutes
                            </p>
                        </motion.div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {examples.map((example, index) => (
                                <ExampleCard
                                    key={index}
                                    example={example}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section
                    id="stack"
                    className="bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent px-6 py-16 md:py-32"
                >
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-16 text-center"
                        >
                            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                                Built with modern tech
                            </h2>
                            <p className="text-xl text-neutral-300">
                                Leveraging the best tools in the ecosystem
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card p-6 text-center"
                                    style={{ willChange: 'transform' }}
                                >
                                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center">
                                        {tech.isImage ? (
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className="h-full w-full object-contain"
                                                style={{
                                                    filter: 'brightness(0.9)',
                                                }}
                                            />
                                        ) : (
                                            <span className="text-4xl">
                                                {tech.icon}
                                            </span>
                                        )}
                                    </div>
                                    <h4 className="mb-1 font-bold">
                                        {tech.name}
                                    </h4>
                                    <p className="text-xs text-neutral-400">
                                        {tech.category}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Code Quality Section */}
                <section className="bg-gradient-to-b from-transparent via-rose-500/5 to-transparent px-6 py-16 md:py-32">
                    <div className="container mx-auto max-w-7xl">
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
                                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                                <span className="text-xs font-medium tracking-wider text-emerald-200 uppercase">
                                    Enterprise Ready
                                </span>
                            </motion.div>
                            <h2 className="mb-6 text-3xl font-bold md:text-6xl">
                                <span className="text-white">
                                    Production-ready
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                    from day one
                                </span>
                            </h2>
                            <p className="mx-auto max-w-3xl text-xl text-neutral-300">
                                Every line of code follows Laravel best
                                practices and modern PHP standards
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    title: 'Type Safety',
                                    description:
                                        'Full type hints, strict types, and PHPDoc annotations for better IDE support',
                                    features: [
                                        'PHP 8.2+',
                                        'Return types',
                                        'Property types',
                                        'Generics',
                                    ],
                                    color: 'from-purple-600 to-violet-600',
                                },
                                {
                                    title: 'PSR Standards',
                                    description:
                                        'Follows PSR-1, PSR-12, and PSR-4 autoloading standards',
                                    features: [
                                        'Clean code',
                                        'Consistent naming',
                                        'Proper structure',
                                        'Best practices',
                                    ],
                                    color: 'from-blue-600 to-cyan-600',
                                },
                                {
                                    title: 'Security First',
                                    description:
                                        'Built-in protection against common vulnerabilities',
                                    features: [
                                        'SQL injection',
                                        'XSS protection',
                                        'CSRF tokens',
                                        'Mass assignment',
                                    ],
                                    color: 'from-emerald-600 to-teal-600',
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="glass-card group relative overflow-hidden p-8"
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                                    />

                                    <div className="relative">
                                        <h3 className="mb-4 text-2xl font-bold text-white">
                                            {item.title}
                                        </h3>
                                        <p className="mb-6 leading-relaxed text-neutral-300">
                                            {item.description}
                                        </p>

                                        <div className="space-y-2">
                                            {item.features.map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-2 text-sm text-neutral-400"
                                                >
                                                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
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

                {/* Performance Section */}
                <LandingPerformanceSection />

                {/* Pricing Section */}
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
                                <span className="text-white">
                                    Choose your plan
                                </span>
                            </h2>

                            <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-400">
                                Start free and upgrade as you grow. All plans
                                include core features.
                            </p>

                            {/* Billing Toggle */}
                            <div className="flex items-center justify-center gap-3">
                                <span
                                    className={`text-sm transition-colors ${!isYearly ? 'font-medium text-white' : 'text-neutral-400'}`}
                                >
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
                                            isYearly
                                                ? 'translate-x-7'
                                                : 'translate-x-1'
                                        }`}
                                    />
                                </button>
                                <span
                                    className={`text-sm transition-colors ${isYearly ? 'font-medium text-white' : 'text-neutral-400'}`}
                                >
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
                                        <h3 className="mb-2 text-2xl font-bold text-white">
                                            Free
                                        </h3>
                                        <p className="mb-6 text-neutral-400">
                                            Perfect for learning and small
                                            projects
                                        </p>

                                        <div className="mb-8">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-5xl font-bold text-white">
                                                    €0
                                                </span>
                                                <span className="text-neutral-400">
                                                    /month
                                                </span>
                                            </div>
                                        </div>

                                        <Link href="/builder">
                                            <Button
                                                variant="outline"
                                                className="mb-8 w-full"
                                            >
                                                Get Started
                                            </Button>
                                        </Link>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600/20">
                                                    <div className="h-2 w-2 rounded-full bg-green-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">
                                                    3 projects
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600/20">
                                                    <div className="h-2 w-2 rounded-full bg-green-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">
                                                    Basic code generation
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600/20">
                                                    <div className="h-2 w-2 rounded-full bg-green-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">
                                                    All field types
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600/20">
                                                    <div className="h-2 w-2 rounded-full bg-green-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">
                                                    Community support
                                                </span>
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
                                <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
                                    <div className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                                        MOST POPULAR
                                    </div>
                                </div>

                                <div className="glass-card group relative h-full overflow-visible rounded-3xl border-2 border-purple-500/50 p-8 pt-12 transition-all duration-500 hover:border-purple-500">
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 transition-all duration-500 group-hover:from-purple-900/40 group-hover:to-blue-900/40" />

                                    <div className="relative">
                                        <h3 className="mb-2 text-2xl font-bold text-white">
                                            Pro
                                        </h3>
                                        <p className="mb-6 text-neutral-300">
                                            For professional developers and
                                            teams
                                        </p>

                                        <div className="mb-8">
                                            <div className="mb-1 flex items-baseline gap-2">
                                                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-5xl font-bold text-transparent">
                                                    €{isYearly ? '12' : '15'}
                                                </span>
                                                <span className="text-neutral-400">
                                                    /month
                                                </span>
                                            </div>
                                            {isYearly ? (
                                                <>
                                                    <p className="text-sm text-neutral-500">
                                                        €144 billed yearly
                                                    </p>
                                                    <p className="mt-1 text-xs text-green-400">
                                                        Save €36 per year
                                                    </p>
                                                </>
                                            ) : (
                                                <p className="text-sm text-neutral-500">
                                                    Billed monthly
                                                </p>
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
                                                <span className="text-sm font-medium text-white">
                                                    Unlimited projects
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/30">
                                                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                                                </div>
                                                <span className="text-sm font-medium text-white">
                                                    Advanced code generation
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/30">
                                                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                                                </div>
                                                <span className="text-sm font-medium text-white">
                                                    All stack options
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/30">
                                                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                                                </div>
                                                <span className="text-sm font-medium text-white">
                                                    Priority support
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/30">
                                                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                                                </div>
                                                <span className="text-sm font-medium text-white">
                                                    Custom templates
                                                </span>
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
                                <div className="glass-card group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-blue-600">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 transition-all duration-500 group-hover:from-blue-900/30 group-hover:to-cyan-900/30" />

                                    <div className="relative">
                                        <h3 className="mb-2 text-2xl font-bold text-white">
                                            Enterprise
                                        </h3>
                                        <p className="mb-6 text-neutral-400">
                                            For large teams and organizations
                                        </p>

                                        <div className="mb-8">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-5xl font-bold text-white">
                                                    Custom
                                                </span>
                                            </div>
                                            <p className="mt-2 text-sm text-neutral-500">
                                                Contact sales
                                            </p>
                                        </div>

                                        <Link href="/contact">
                                            <Button
                                                variant="outline"
                                                className="mb-8 w-full"
                                            >
                                                Contact Sales
                                            </Button>
                                        </Link>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">
                                                    Everything in Pro
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">
                                                    Dedicated support
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">
                                                    Custom integrations
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">
                                                    SLA guarantee
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                                                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                                                </div>
                                                <span className="text-sm text-neutral-300">
                                                    On-premise option
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent px-6 py-16 md:py-32">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid gap-8 md:grid-cols-4">
                            {[
                                {
                                    value: '50K+',
                                    label: 'Lines of Code Generated',
                                },
                                { value: '1,200+', label: 'Projects Created' },
                                { value: '95%', label: 'Time Saved' },
                                { value: '4.9/5', label: 'Developer Rating' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-6xl font-bold text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-lg text-neutral-400">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-gradient-to-b from-transparent via-amber-500/5 to-transparent px-6 py-16 md:py-32">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-16 text-center"
                        >
                            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                                Frequently asked questions
                            </h2>
                            <p className="text-xl text-neutral-300">
                                Everything you need to know
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {[
                                {
                                    question:
                                        'Can I customize the generated code?',
                                    answer: 'Absolutely! All generated code is clean, readable, and follows Laravel best practices. You have full control to modify and extend it.',
                                },
                                {
                                    question:
                                        'Does it work with existing Laravel projects?',
                                    answer: 'Yes! Genesis Builder integrates seamlessly with existing projects. Generate new models and migrations without affecting your current codebase.',
                                },
                                {
                                    question:
                                        'What frontend frameworks are supported?',
                                    answer: 'We support React, Vue, Blade, Livewire, and pure API mode. Choose the stack that works best for your project.',
                                },
                                {
                                    question: 'Is there a free trial?',
                                    answer: 'Yes! Try Genesis Builder free for 14 days. No credit card required. Experience the full power before committing.',
                                },
                                {
                                    question: 'Can I export my schemas?',
                                    answer: 'Yes! Export your schemas as JSON for backup, version control, or sharing with your team.',
                                },
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="glass-card p-6"
                                >
                                    <h3 className="mb-3 flex items-center gap-3 text-xl font-bold">
                                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                                        {faq.question}
                                    </h3>
                                    <p className="pl-5 text-neutral-400">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <LandingCtaSection />
                <LandingFooterSection />
            </div>
        </>
    );
}

const AnimatedSchemaDemo = () => {
    return (
        <div className="relative mx-auto h-[400px] w-full max-w-5xl overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-neutral-950 via-purple-950/30 to-neutral-950 shadow-2xl backdrop-blur-xl md:h-[600px] md:rounded-2xl">
            {/* Animated Grid Background - ReactFlow style - LIGHTER ON MOBILE */}
            <div className="absolute inset-0 opacity-30 md:opacity-100">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                        linear-gradient(to right, rgba(168, 85, 247, 0.15) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
                    `,
                        backgroundSize: '20px 20px',
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                        linear-gradient(to right, rgba(168, 85, 247, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(168, 85, 247, 0.05) 1px, transparent 1px)
                    `,
                        backgroundSize: '100px 100px',
                    }}
                />
            </div>

            {/* Ambient light effects - SMALLER ON MOBILE */}
            <div className="absolute top-0 left-1/4 h-0 w-0 animate-pulse rounded-full bg-purple-600/20 blur-3xl md:h-96 md:w-96" />
            <div
                className="absolute right-1/4 bottom-0 h-0 w-0 animate-pulse rounded-full bg-blue-600/20 blur-3xl md:h-96 md:w-96"
                style={{ animationDelay: '1s' }}
            />

            {/* Model Nodes - Inspired by ReactFlow */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="group absolute top-12 left-3 md:top-32 md:left-20"
            >
                <div className="relative origin-top-left scale-100 overflow-hidden rounded-lg border border-purple-400/50 bg-gradient-to-br from-purple-600/90 to-purple-700/90 shadow-lg backdrop-blur-sm md:scale-100 md:rounded-xl md:border-2 md:shadow-2xl">
                    {/* Node header */}
                    <div className="flex items-center gap-2 border-b border-purple-400/30 bg-purple-700/50 px-3 py-2 md:gap-3 md:px-6 md:py-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500/40 md:h-8 md:w-8">
                            <Database className="h-3 w-3 text-white md:h-4 md:w-4" />
                        </div>
                        <span className="text-sm font-bold text-white md:text-base">
                            User
                        </span>
                    </div>
                    {/* Node body */}
                    <div className="space-y-1.5 px-3 py-2.5 md:space-y-2 md:px-6 md:py-4">
                        <div className="flex items-center gap-2 text-[10px] text-purple-100 md:text-xs">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-400 md:h-2 md:w-2" />
                            <span className="font-mono">id: integer</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-purple-100 md:text-xs">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 md:h-2 md:w-2" />
                            <span className="font-mono">name: string</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-purple-100 md:text-xs">
                            <div className="h-1.5 w-1.5 rounded-full bg-teal-400 md:h-2 md:w-2" />
                            <span className="font-mono">email: email</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="group absolute top-10 right-3 md:top-28 md:right-24"
            >
                <div className="relative origin-top-right scale-100 overflow-hidden rounded-lg border border-blue-400/50 bg-gradient-to-br from-blue-600/90 to-blue-700/90 shadow-lg backdrop-blur-sm md:scale-100 md:rounded-xl md:border-2 md:shadow-2xl">
                    {/* Node header */}
                    <div className="flex items-center gap-2 border-b border-blue-400/30 bg-blue-700/50 px-3 py-2 md:gap-3 md:px-6 md:py-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500/40 md:h-8 md:w-8">
                            <Database className="h-3 w-3 text-white md:h-4 md:w-4" />
                        </div>
                        <span className="text-sm font-bold text-white md:text-base">
                            Post
                        </span>
                    </div>
                    {/* Node body */}
                    <div className="space-y-1.5 px-3 py-2.5 md:space-y-2 md:px-6 md:py-4">
                        <div className="flex items-center gap-2 text-[10px] text-blue-100 md:text-xs">
                            <div className="h-1.5 w-1.5 rounded-full bg-orange-400 md:h-2 md:w-2" />
                            <span className="font-mono">title: string</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-blue-100 md:text-xs">
                            <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 md:h-2 md:w-2" />
                            <span className="font-mono">content: text</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-blue-100 md:text-xs">
                            <div className="h-1.5 w-1.5 rounded-full bg-purple-400 md:h-2 md:w-2" />
                            <span className="font-mono">user_id: integer</span>
                        </div>
                    </div>
                    {/* Connection handles - removed for simplicity */}
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="group absolute bottom-10 left-1/2 -translate-x-1/2 md:bottom-28"
            >
                <div className="relative scale-100 overflow-hidden rounded-lg border border-cyan-400/50 bg-gradient-to-br from-cyan-600/90 to-cyan-700/90 shadow-lg backdrop-blur-sm md:scale-100 md:rounded-xl md:border-2 md:shadow-2xl">
                    {/* Node header */}
                    <div className="flex items-center gap-2 border-b border-cyan-400/30 bg-cyan-700/50 px-3 py-2 md:gap-3 md:px-6 md:py-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/40 md:h-8 md:w-8">
                            <Database className="h-3 w-3 text-white md:h-4 md:w-4" />
                        </div>
                        <span className="text-sm font-bold text-white md:text-base">
                            Comment
                        </span>
                    </div>
                    {/* Node body */}
                    <div className="space-y-1.5 px-3 py-2.5 md:space-y-2 md:px-6 md:py-4">
                        <div className="flex items-center gap-2 text-[10px] text-cyan-100 md:text-xs">
                            <div className="h-1.5 w-1.5 rounded-full bg-pink-400 md:h-2 md:w-2" />
                            <span className="font-mono">body: text</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-cyan-100 md:text-xs">
                            <div className="h-1.5 w-1.5 rounded-full bg-violet-400 md:h-2 md:w-2" />
                            <span className="font-mono">rating: integer</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-cyan-100 md:text-xs">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 md:h-2 md:w-2" />
                            <span className="font-mono">post_id: integer</span>
                        </div>
                    </div>
                    {/* Connection handles - removed for simplicity */}
                </div>
            </motion.div>

            {/* Mini toolbar - ReactFlow inspired */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.8 }}
                className="absolute bottom-6 left-6 flex items-center gap-2 rounded-lg border border-purple-500/20 bg-neutral-900/90 p-2 shadow-xl backdrop-blur-xl"
            >
                <button className="rounded-lg p-2 transition-colors hover:bg-purple-600/20">
                    <Zap className="h-4 w-4 text-purple-400" />
                </button>
                <button className="rounded-lg p-2 transition-colors hover:bg-purple-600/20">
                    <Code className="h-4 w-4 text-purple-400" />
                </button>
                <button className="rounded-lg p-2 transition-colors hover:bg-purple-600/20">
                    <Download className="h-4 w-4 text-purple-400" />
                </button>
            </motion.div>

            {/* Mini map indicator */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 3 }}
                className="absolute right-2 bottom-2 h-16 w-20 rounded-md border border-purple-500/20 bg-neutral-900/90 p-1.5 shadow-xl backdrop-blur-xl md:right-6 md:bottom-6 md:h-24 md:w-32 md:rounded-lg md:p-2"
            >
                <div className="relative h-full w-full">
                    <div className="absolute top-0.5 left-0.5 h-1.5 w-1.5 rounded-sm bg-purple-500 md:top-1 md:left-1 md:h-2 md:w-2" />
                    <div className="absolute top-0.5 right-1 h-1.5 w-1.5 rounded-sm bg-blue-500 md:top-1 md:right-2 md:h-2 md:w-2" />
                    <div className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-sm bg-cyan-500 md:bottom-2 md:h-2 md:w-2" />
                    <div className="absolute inset-1 rounded border border-purple-500/30 md:inset-2" />
                </div>
            </motion.div>

            {/* Floating action hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 3.2 }}
                className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full border border-purple-500/20 bg-neutral-900/90 px-2 py-1 shadow-xl backdrop-blur-xl md:top-6 md:px-4 md:py-2"
            >
                <span className="flex items-center gap-1 text-[10px] font-medium text-purple-300 md:gap-2 md:text-xs">
                    <Sparkles className="h-2.5 w-2.5 md:h-3 md:w-3" />
                    <span className="hidden sm:inline">
                        Drag to connect • Click to edit
                    </span>
                    <span className="sm:hidden">Drag • Edit</span>
                </span>
            </motion.div>
        </div>
    );
};

// Unused demo components removed

const ExampleCard = ({
    example,
    index,
}: {
    example: (typeof examples)[0];
    index: number;
}) => {
    const [activeTab, setActiveTab] = useState<'schema' | 'code' | 'api'>(
        'schema',
    );

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
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="glass-card relative flex h-full flex-col overflow-hidden p-6"
                style={{ willChange: 'transform' }}
            >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 transition-all duration-500 group-hover:from-purple-600/5 group-hover:to-blue-600/5" />

                {/* Header */}
                <div className="relative mb-6 flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg transition-shadow duration-300 group-hover:shadow-purple-500/50">
                        <example.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300">
                            {example.title}
                        </h3>
                        <p className="text-sm text-neutral-400">
                            {example.description}
                        </p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="relative mb-4 flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/50 p-1">
                    <button
                        onClick={() => setActiveTab('schema')}
                        className={`flex-1 rounded-md px-3 py-2 text-xs font-medium transition-all duration-200 ${
                            activeTab === 'schema'
                                ? 'border border-purple-500/30 bg-purple-600/30 text-purple-200'
                                : 'text-neutral-400 hover:text-neutral-300'
                        }`}
                    >
                        Schema
                    </button>
                    <button
                        onClick={() => setActiveTab('code')}
                        className={`flex-1 rounded-md px-3 py-2 text-xs font-medium transition-all duration-200 ${
                            activeTab === 'code'
                                ? 'border border-purple-500/30 bg-purple-600/30 text-purple-200'
                                : 'text-neutral-400 hover:text-neutral-300'
                        }`}
                    >
                        Code
                    </button>
                    <button
                        onClick={() => setActiveTab('api')}
                        className={`flex-1 rounded-md px-3 py-2 text-xs font-medium transition-all duration-200 ${
                            activeTab === 'api'
                                ? 'border border-purple-500/30 bg-purple-600/30 text-purple-200'
                                : 'text-neutral-400 hover:text-neutral-300'
                        }`}
                    >
                        API
                    </button>
                </div>

                {/* Content */}
                <div className="relative min-h-[300px] flex-1">
                    {activeTab === 'schema' && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3"
                        >
                            {example.schema.map((table, i) => (
                                <div
                                    key={i}
                                    className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
                                >
                                    <div className="mb-3 flex items-center gap-2">
                                        <Database className="h-4 w-4 text-purple-400" />
                                        <span className="text-sm font-bold text-white">
                                            {table.name}
                                        </span>
                                        <span className="text-xs text-neutral-500">
                                            ({table.fields.length} fields)
                                        </span>
                                    </div>
                                    <div className="space-y-1.5 pl-6">
                                        {table.fields.map((field, j) => (
                                            <div
                                                key={j}
                                                className="flex items-center gap-2 text-xs"
                                            >
                                                <div
                                                    className={`h-2 w-2 rounded-full ${field.color}`}
                                                />
                                                <span className="font-mono text-neutral-300">
                                                    {field.name}:
                                                </span>
                                                <span className="text-neutral-500">
                                                    {field.type}
                                                </span>
                                                {field.required && (
                                                    <span className="rounded bg-red-600/20 px-1.5 py-0.5 text-[10px] font-medium text-red-400">
                                                        required
                                                    </span>
                                                )}
                                                {field.unique && (
                                                    <span className="rounded bg-blue-600/20 px-1.5 py-0.5 text-[10px] font-medium text-blue-400">
                                                        unique
                                                    </span>
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
                            <div className="rounded-lg border border-blue-500/20 bg-neutral-900/80 p-4">
                                <div className="mb-3 flex items-center gap-2 text-xs text-blue-400">
                                    <Code className="h-3 w-3" />
                                    <span className="font-semibold">
                                        {example.code.controller.file}
                                    </span>
                                </div>
                                <pre className="overflow-x-auto font-mono text-[10px] leading-[1.6]">
                                    <code
                                        dangerouslySetInnerHTML={{
                                            __html: example.code.controller
                                                .content,
                                        }}
                                    />
                                </pre>
                            </div>
                            <div className="rounded-lg border border-green-500/20 bg-neutral-900/80 p-4">
                                <div className="mb-3 flex items-center gap-2 text-xs text-green-400">
                                    <Code className="h-3 w-3" />
                                    <span className="font-semibold">
                                        {example.code.action.file}
                                    </span>
                                </div>
                                <pre className="overflow-x-auto font-mono text-[10px] leading-[1.6]">
                                    <code
                                        dangerouslySetInnerHTML={{
                                            __html: example.code.action.content,
                                        }}
                                    />
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
                                <div
                                    key={i}
                                    className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
                                >
                                    <div className="mb-3 flex items-center gap-2">
                                        <span
                                            className={`rounded px-2 py-1 text-[10px] font-bold ${endpoint.methodColor}`}
                                        >
                                            {endpoint.method}
                                        </span>
                                        <span className="font-mono text-xs text-neutral-400">
                                            {endpoint.path}
                                        </span>
                                    </div>
                                    <div className="space-y-2 pl-4">
                                        <div className="mb-1 text-[10px] text-neutral-500">
                                            {endpoint.description}
                                        </div>
                                        {endpoint.response && (
                                            <div className="rounded border border-emerald-500/20 bg-neutral-950/50 p-2">
                                                <div className="mb-1 text-[9px] font-semibold text-emerald-400">
                                                    Response:
                                                </div>
                                                <pre className="overflow-x-auto font-mono text-[9px] leading-[1.5] text-neutral-300">
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
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </div>
            </motion.div>
        </motion.div>
    );
};

/* const features = [
    {
        icon: Palette,
        title: 'Visual Schema Designer',
        description:
            "Drag and drop models and fields to create your database schema. No code required until you're ready.",
    },
    {
        icon: Code,
        title: 'Generate Clean Code',
        description:
            'Automatically generate Models, Migrations, Controllers, and Views following Laravel best practices.',
    },
    {
        icon: Database,
        title: 'Type-Safe Fields',
        description:
            'Choose from 14+ field types including string, integer, json, uuid, email, and more with full validation.',
    },
    {
        icon: Zap,
        title: 'Instant CRUD',
        description:
            'Generate complete Create, Read, Update, Delete operations with proper routes and views in seconds.',
    },
    {
        icon: Download,
        title: 'Export Projects',
        description:
            'Download your complete Laravel project as a ZIP file, ready to run locally or deploy.',
    },
    {
        icon: Sparkles,
        title: 'Multiple Stacks',
        description:
            'Support for Inertia + React/Vue, Blade, Livewire, and JSON API responses.',
    },
]; */

/* const steps = [
    {
        title: 'Design Your Schema',
        description:
            'Use the visual builder to create models and define fields. Drag field types onto models and configure properties.',
    },
    {
        title: 'Configure Options',
        description:
            'Choose your project type, view engine, and response format. Customize field requirements and relationships.',
    },
    {
        title: 'Download & Deploy',
        description:
            'Export your complete Laravel project with all files generated. Run locally or deploy to production immediately.',
    },
]; */

const examples = [
    {
        icon: ShoppingCart,
        title: 'E-commerce Platform',
        description:
            'Complete online store with products, orders, and inventory',
        schema: [
            {
                name: 'Product',
                fields: [
                    {
                        name: 'id',
                        type: 'bigint',
                        color: 'bg-green-400',
                        required: true,
                        unique: true,
                    },
                    {
                        name: 'name',
                        type: 'string',
                        color: 'bg-blue-400',
                        required: true,
                    },
                    {
                        name: 'slug',
                        type: 'string',
                        color: 'bg-blue-400',
                        required: true,
                        unique: true,
                    },
                    {
                        name: 'price',
                        type: 'decimal',
                        color: 'bg-yellow-400',
                        required: true,
                    },
                    {
                        name: 'stock',
                        type: 'integer',
                        color: 'bg-green-400',
                        required: true,
                    },
                    {
                        name: 'category_id',
                        type: 'bigint',
                        color: 'bg-purple-400',
                        required: true,
                    },
                ],
            },
            {
                name: 'Order',
                fields: [
                    {
                        name: 'id',
                        type: 'bigint',
                        color: 'bg-green-400',
                        required: true,
                        unique: true,
                    },
                    {
                        name: 'customer_id',
                        type: 'bigint',
                        color: 'bg-purple-400',
                        required: true,
                    },
                    {
                        name: 'status',
                        type: 'enum',
                        color: 'bg-orange-400',
                        required: true,
                    },
                    {
                        name: 'total',
                        type: 'decimal',
                        color: 'bg-yellow-400',
                        required: true,
                    },
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
<span class="text-neutral-500">}</span>`,
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
<span class="text-neutral-500">}</span>`,
            },
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
}`,
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
}`,
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
                    {
                        name: 'id',
                        type: 'bigint',
                        color: 'bg-green-400',
                        required: true,
                        unique: true,
                    },
                    {
                        name: 'title',
                        type: 'string',
                        color: 'bg-blue-400',
                        required: true,
                    },
                    {
                        name: 'slug',
                        type: 'string',
                        color: 'bg-blue-400',
                        required: true,
                        unique: true,
                    },
                    {
                        name: 'content',
                        type: 'text',
                        color: 'bg-indigo-400',
                        required: true,
                    },
                    {
                        name: 'author_id',
                        type: 'bigint',
                        color: 'bg-purple-400',
                        required: true,
                    },
                    {
                        name: 'published_at',
                        type: 'datetime',
                        color: 'bg-rose-400',
                    },
                ],
            },
            {
                name: 'Comment',
                fields: [
                    {
                        name: 'id',
                        type: 'bigint',
                        color: 'bg-green-400',
                        required: true,
                        unique: true,
                    },
                    {
                        name: 'post_id',
                        type: 'bigint',
                        color: 'bg-purple-400',
                        required: true,
                    },
                    {
                        name: 'body',
                        type: 'text',
                        color: 'bg-indigo-400',
                        required: true,
                    },
                    {
                        name: 'status',
                        type: 'enum',
                        color: 'bg-orange-400',
                        required: true,
                    },
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
<span class="text-neutral-500">}</span>`,
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
<span class="text-neutral-500">}</span>`,
            },
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
}`,
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
}`,
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
                    {
                        name: 'id',
                        type: 'bigint',
                        color: 'bg-green-400',
                        required: true,
                        unique: true,
                    },
                    {
                        name: 'name',
                        type: 'string',
                        color: 'bg-blue-400',
                        required: true,
                    },
                    {
                        name: 'description',
                        type: 'text',
                        color: 'bg-indigo-400',
                    },
                    {
                        name: 'team_id',
                        type: 'bigint',
                        color: 'bg-purple-400',
                        required: true,
                    },
                    {
                        name: 'status',
                        type: 'enum',
                        color: 'bg-orange-400',
                        required: true,
                    },
                ],
            },
            {
                name: 'Task',
                fields: [
                    {
                        name: 'id',
                        type: 'bigint',
                        color: 'bg-green-400',
                        required: true,
                        unique: true,
                    },
                    {
                        name: 'title',
                        type: 'string',
                        color: 'bg-blue-400',
                        required: true,
                    },
                    {
                        name: 'project_id',
                        type: 'bigint',
                        color: 'bg-purple-400',
                        required: true,
                    },
                    {
                        name: 'assignee_id',
                        type: 'bigint',
                        color: 'bg-purple-400',
                    },
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
<span class="text-neutral-500">}</span>`,
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
<span class="text-neutral-500">}</span>`,
            },
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
}`,
            },
            {
                method: 'GET',
                path: '/api/projects/{id}/tasks?status=pending',
                methodColor: 'bg-blue-600 text-white',
                description: 'Get project tasks',
                response: `{
  "data": [...],
  "meta": {"total": 24}
}`,
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
                    {
                        name: 'id',
                        type: 'bigint',
                        color: 'bg-green-400',
                        required: true,
                        unique: true,
                    },
                    {
                        name: 'title',
                        type: 'string',
                        color: 'bg-blue-400',
                        required: true,
                    },
                    {
                        name: 'start_date',
                        type: 'datetime',
                        color: 'bg-rose-400',
                        required: true,
                    },
                    {
                        name: 'end_date',
                        type: 'datetime',
                        color: 'bg-rose-400',
                        required: true,
                    },
                    {
                        name: 'capacity',
                        type: 'integer',
                        color: 'bg-green-400',
                        required: true,
                    },
                    {
                        name: 'venue_id',
                        type: 'bigint',
                        color: 'bg-purple-400',
                        required: true,
                    },
                ],
            },
            {
                name: 'Ticket',
                fields: [
                    {
                        name: 'id',
                        type: 'bigint',
                        color: 'bg-green-400',
                        required: true,
                        unique: true,
                    },
                    {
                        name: 'event_id',
                        type: 'bigint',
                        color: 'bg-purple-400',
                        required: true,
                    },
                    {
                        name: 'attendee_id',
                        type: 'bigint',
                        color: 'bg-purple-400',
                        required: true,
                    },
                    {
                        name: 'code',
                        type: 'uuid',
                        color: 'bg-cyan-400',
                        required: true,
                        unique: true,
                    },
                    {
                        name: 'status',
                        type: 'enum',
                        color: 'bg-orange-400',
                        required: true,
                    },
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
<span class="text-neutral-500">}</span>`,
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
<span class="text-neutral-500">}</span>`,
            },
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
}`,
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
}`,
            },
        ],
    },
];

const techStack = [
    {
        name: 'Laravel',
        icon: 'https://laravel.com/img/logomark.min.svg',
        category: 'Backend Framework',
        isImage: true,
    },
    {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        category: 'Frontend Library',
        isImage: true,
    },
    { name: 'Inertia.js', icon: '⚡', category: 'Bridge', isImage: false },
    {
        name: 'Tailwind CSS',
        icon: 'https://www.svgrepo.com/show/374118/tailwind.svg',
        category: 'Styling',
        isImage: true,
    },
    {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        category: 'Type Safety',
        isImage: true,
    },
    {
        name: 'Vite',
        icon: 'https://vitejs.dev/logo.svg',
        category: 'Build Tool',
        isImage: true,
    },
    {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        category: 'Database',
        isImage: true,
    },
    {
        name: 'Pest',
        icon: 'https://pestphp.com/www/assets/logo.svg',
        category: 'Testing',
        isImage: true,
    },
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
                    <div className="rounded-lg border border-purple-500/30 bg-neutral-900/50 p-3">
                        <div className="mb-2 text-xs text-purple-300">
                            New Model
                        </div>
                        <div className="flex items-center gap-2 rounded border border-purple-500/30 bg-purple-600/20 p-2">
                            <Database className="h-5 w-5 text-purple-400" />
                            <input
                                type="text"
                                value="User"
                                readOnly
                                className="flex-1 bg-transparent font-bold text-white outline-none"
                            />
                        </div>
                    </div>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="rounded-lg border border-purple-500/30 bg-purple-600/20 p-4"
                    >
                        <div className="flex items-center gap-3">
                            <Database className="h-8 w-8 text-purple-400" />
                            <div>
                                <div className="font-bold text-white">User</div>
                                <div className="text-xs text-purple-300">
                                    Model created
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Add Field',
            description: 'Choose field type',
            content: (
                <div className="space-y-4">
                    <div className="flex items-center gap-3 rounded-lg border border-purple-500/30 bg-purple-600/20 p-4">
                        <Database className="h-6 w-6 text-purple-400" />
                        <div className="font-bold text-white">User</div>
                    </div>
                    <div className="rounded-lg border border-blue-500/30 bg-neutral-900/50 p-3">
                        <div className="mb-2 text-xs text-blue-300">
                            Select Field Type
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {['string', 'integer', 'email', 'boolean'].map(
                                (type, i) => (
                                    <motion.div
                                        key={type}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: type === 'email' ? 1 : 0.5,
                                            y: 0,
                                        }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`rounded p-2 text-center text-xs ${
                                            type === 'email'
                                                ? 'border border-blue-500/50 bg-blue-600/30 font-bold text-blue-200'
                                                : 'bg-neutral-800/50 text-neutral-400'
                                        }`}
                                    >
                                        {type}
                                    </motion.div>
                                ),
                            )}
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="pl-6"
                    >
                        <div className="flex items-center gap-2 text-sm">
                            <div className="h-3 w-3 rounded-full bg-blue-400" />
                            <span className="font-mono text-neutral-300">
                                email: email
                            </span>
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Configure Properties',
            description: 'Set field options',
            content: (
                <div className="space-y-4">
                    <div className="flex items-center gap-3 rounded-lg border border-purple-500/30 bg-purple-600/20 p-3">
                        <Database className="h-5 w-5 text-purple-400" />
                        <div className="text-sm font-bold text-white">User</div>
                    </div>
                    <div className="border-l-2 border-blue-500/30 pl-4">
                        <div className="mb-3 flex items-center gap-2 text-sm">
                            <div className="h-3 w-3 rounded-full bg-blue-400" />
                            <span className="font-mono text-neutral-300">
                                email
                            </span>
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
                                    <div
                                        className={`flex h-4 w-4 items-center justify-center rounded border-2 ${
                                            prop.checked
                                                ? 'border-blue-500 bg-blue-600'
                                                : 'border-neutral-600'
                                        }`}
                                    >
                                        {prop.checked && (
                                            <div className="h-2 w-2 rounded-sm bg-white" />
                                        )}
                                    </div>
                                    <span
                                        className={
                                            prop.checked
                                                ? 'font-medium text-blue-300'
                                                : 'text-neutral-500'
                                        }
                                    >
                                        {prop.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Apply Validations',
            description: 'Add validation rules',
            content: (
                <div className="space-y-4">
                    <div className="flex items-center gap-3 rounded-lg border border-purple-500/30 bg-purple-600/20 p-3">
                        <Database className="h-5 w-5 text-purple-400" />
                        <div className="text-sm font-bold text-white">User</div>
                    </div>
                    <div className="space-y-2 pl-4">
                        <div className="flex items-center gap-2 text-sm">
                            <div className="h-3 w-3 rounded-full bg-blue-400" />
                            <span className="font-mono text-neutral-300">
                                email
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-1 pl-5">
                            {['required', 'email', 'unique:users'].map(
                                (rule, i) => (
                                    <motion.span
                                        key={rule}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            delay: i * 0.15,
                                            type: 'spring',
                                        }}
                                        className="rounded border border-blue-500/30 bg-blue-500/20 px-2 py-0.5 font-mono text-[10px] text-blue-300"
                                    >
                                        {rule}
                                    </motion.span>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Link Relationships',
            description: 'Connect models',
            content: (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-600/20 p-3">
                            <Database className="h-5 w-5 text-purple-400" />
                            <div className="text-sm font-bold text-white">
                                User
                            </div>
                        </div>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="relative mx-4 h-0.5 flex-1 bg-gradient-to-r from-purple-500 to-blue-500"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded border border-cyan-500/50 bg-cyan-600/30 px-2 py-0.5 font-mono text-[10px] whitespace-nowrap text-cyan-300"
                            >
                                hasMany
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-600/20 p-3"
                        >
                            <Database className="h-5 w-5 text-blue-400" />
                            <div className="text-sm font-bold text-white">
                                Post
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="rounded-lg border border-cyan-500/20 bg-neutral-900/50 p-3"
                    >
                        <div className="mb-1 text-xs text-cyan-300">
                            Relationship Details
                        </div>
                        <div className="space-y-1 text-[10px] text-neutral-400">
                            <div>
                                • User{' '}
                                <span className="text-cyan-300">hasMany</span>{' '}
                                Post
                            </div>
                            <div>
                                • Post{' '}
                                <span className="text-purple-300">
                                    belongsTo
                                </span>{' '}
                                User
                            </div>
                            <div>
                                • Foreign key:{' '}
                                <span className="font-mono text-blue-300">
                                    user_id
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ),
        },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex h-full flex-col">
            {/* Step Indicator */}
            <div className="mb-6 flex items-center justify-between">
                {steps.map((s, i) => (
                    <div key={i} className="flex items-center">
                        <motion.div
                            animate={{
                                scale: step === i ? 1.2 : 1,
                                opacity: step >= i ? 1 : 0.3,
                            }}
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
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
                                className="h-0.5 w-8 origin-left bg-purple-500"
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
                    <h4 className="mb-1 text-lg font-bold text-white">
                        {steps[step].title}
                    </h4>
                    <p className="text-xs text-neutral-400">
                        {steps[step].description}
                    </p>
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
        {
            name: 'User.php',
            type: 'Model',
            icon: Package,
            color: 'text-purple-400',
        },
        {
            name: 'UserController.php',
            type: 'Controller',
            icon: Gamepad2,
            color: 'text-blue-400',
        },
        {
            name: 'StoreUserRequest.php',
            type: 'Request',
            icon: CheckCircle,
            color: 'text-emerald-400',
        },
        {
            name: 'StoreUserAction.php',
            type: 'Action',
            icon: Zap,
            color: 'text-cyan-400',
        },
        {
            name: 'UserResource.php',
            type: 'Resource',
            icon: FileJson,
            color: 'text-pink-400',
        },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % (files.length + 2)); // +2 for select stack and preview
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex h-full flex-col space-y-4">
            {/* Stack Selection */}
            {step === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                >
                    <div className="text-sm font-semibold text-blue-300">
                        Step 1: Select Stack
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            'React + Inertia',
                            'Vue + Inertia',
                            'Blade',
                            'API Only',
                        ].map((stack, i) => (
                            <motion.div
                                key={stack}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity:
                                        stack === 'React + Inertia' ? 1 : 0.4,
                                    scale: 1,
                                    borderColor:
                                        stack === 'React + Inertia'
                                            ? 'rgb(59 130 246)'
                                            : 'rgb(64 64 64)',
                                }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-lg border-2 p-3 text-center text-xs ${
                                    stack === 'React + Inertia'
                                        ? 'bg-blue-600/30 font-bold text-blue-200'
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
                    <div className="text-sm font-semibold text-blue-300">
                        Step 2: Generating Files...
                    </div>
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
                                    className={`flex items-center justify-between rounded-lg border p-3 ${
                                        isGenerated
                                            ? 'border-emerald-500/30 bg-emerald-900/20'
                                            : 'border-neutral-700/30 bg-neutral-900/30'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <file.icon className="h-5 w-5 text-white" />
                                        <div>
                                            <div
                                                className={`font-mono text-xs font-semibold ${file.color}`}
                                            >
                                                {file.name}
                                            </div>
                                            <div className="text-[10px] text-neutral-500">
                                                {file.type}
                                            </div>
                                        </div>
                                    </div>
                                    {isGenerated && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600"
                                        >
                                            <span className="text-xs text-white">
                                                ✓
                                            </span>
                                        </motion.div>
                                    )}
                                    {isCurrent && (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: 'linear',
                                            }}
                                            className="h-5 w-5 rounded-full border-2 border-blue-500 border-t-transparent"
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
                    <div className="text-sm font-semibold text-emerald-300">
                        Step 3: Preview Generated Code
                    </div>
                    <div className="rounded-lg border border-emerald-500/20 bg-neutral-900/80 p-4">
                        <div className="mb-3 flex items-center gap-2 text-xs">
                            <Code className="h-4 w-4 text-emerald-400" />
                            <span className="font-mono font-semibold text-emerald-400">
                                User.php
                            </span>
                        </div>
                        <pre className="font-mono text-[10px] leading-relaxed text-neutral-300">
                            <code
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="text-purple-400">class</span> <span class="text-yellow-300">User</span> <span class="text-purple-400">extends</span> <span class="text-blue-300">Model</span>
<span class="text-neutral-500">{</span>
    <span class="text-purple-400">protected</span> <span class="text-orange-300">$fillable</span> <span class="text-neutral-500">= [</span>
        <span class="text-green-400">'name'</span><span class="text-neutral-500">,</span> <span class="text-green-400">'email'</span>
    <span class="text-neutral-500">];</span>
<span class="text-neutral-500">}</span>`,
                                }}
                            />
                        </pre>
                    </div>
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-2"
                    >
                        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700">
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
                        className="flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-600/20 p-4"
                    >
                        <Download className="h-8 w-8 text-emerald-400" />
                        <div>
                            <div className="font-bold text-white">
                                my-laravel-app.zip
                            </div>
                            <div className="text-xs text-emerald-300">
                                3.2 MB • Ready to deploy
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-lg border border-emerald-500/20 bg-neutral-900/50 p-4"
                    >
                        <div className="mb-2 text-xs text-neutral-400">
                            Package Contents:
                        </div>
                        <div className="space-y-1.5 font-mono text-xs">
                            {[
                                {
                                    icon: Folder,
                                    name: 'app/',
                                    color: 'text-purple-300',
                                },
                                {
                                    icon: Folder,
                                    name: 'database/',
                                    color: 'text-blue-300',
                                },
                                {
                                    icon: Folder,
                                    name: 'resources/',
                                    color: 'text-cyan-300',
                                },
                                {
                                    icon: Folder,
                                    name: 'routes/',
                                    color: 'text-pink-300',
                                },
                                {
                                    icon: FileText,
                                    name: 'composer.json',
                                    color: 'text-yellow-300',
                                },
                                {
                                    icon: FileText,
                                    name: 'package.json',
                                    color: 'text-orange-300',
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-center gap-2"
                                >
                                    <item.icon
                                        className={`h-3 w-3 ${item.color}`}
                                    />
                                    <span className={item.color}>
                                        {item.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Extract & Install',
            content: (
                <div className="space-y-3">
                    <div className="rounded-lg border border-emerald-500/20 bg-neutral-900/80 p-3">
                        <div className="mb-2 flex items-center gap-2 text-xs text-emerald-400">
                            <Terminal className="h-4 w-4" />
                            <span className="font-semibold">Terminal</span>
                        </div>
                        <div className="space-y-2 font-mono text-xs">
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
                                <span className="text-neutral-600">
                                    Installing dependencies...
                                </span>
                                <motion.div
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                    }}
                                    className="text-emerald-400"
                                >
                                    ●
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Configure & Migrate',
            content: (
                <div className="space-y-3">
                    <div className="rounded-lg border border-blue-500/20 bg-neutral-900/80 p-3">
                        <div className="mb-2 flex items-center gap-2 text-xs text-blue-400">
                            <FileText className="h-4 w-4" />
                            <span className="font-semibold">.env</span>
                        </div>
                        <div className="space-y-1 font-mono text-[10px] text-neutral-400">
                            <div>
                                DB_CONNECTION=
                                <span className="text-blue-300">mysql</span>
                            </div>
                            <div>
                                DB_DATABASE=
                                <span className="text-blue-300">my_app</span>
                            </div>
                            <div>
                                DB_USERNAME=
                                <span className="text-blue-300">root</span>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border border-emerald-500/20 bg-neutral-900/80 p-3">
                        <div className="mb-2 flex items-center gap-2 text-xs text-emerald-400">
                            <Terminal className="h-4 w-4" />
                            <span className="font-semibold">
                                Database Setup
                            </span>
                        </div>
                        <div className="space-y-1.5 font-mono text-[10px]">
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
                                className="flex items-center gap-2 text-emerald-300"
                            >
                                <CheckCircle className="h-3 w-3" />
                                <span>3 migrations completed</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            ),
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
                                animate={{
                                    opacity: platform.selected ? 1 : 0.4,
                                    scale: 1,
                                }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-lg border-2 p-3 text-center text-xs ${
                                    platform.selected
                                        ? 'border-emerald-500/50 bg-emerald-600/30 font-bold text-emerald-200'
                                        : 'border-neutral-700 bg-neutral-900/50 text-neutral-500'
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
                        className="rounded-lg border border-emerald-500/30 bg-emerald-900/20 p-4"
                    >
                        <div className="mb-2 flex items-center gap-3">
                            <Rocket className="h-5 w-5 text-emerald-400" />
                            <span className="text-sm font-semibold text-emerald-300">
                                Deploying...
                            </span>
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
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                    className="h-3 w-3 rounded-full border-2 border-emerald-500 border-t-transparent"
                                />
                                <span>Running migrations</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="rounded-lg border border-emerald-500/30 bg-emerald-600/20 p-3 text-center"
                    >
                        <div className="mb-1 text-xs text-emerald-300">
                            🎉 Live at
                        </div>
                        <div className="font-mono text-sm font-bold text-white">
                            my-app.com
                        </div>
                    </motion.div>
                </div>
            ),
        },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex h-full flex-col">
            {/* Progress Bar */}
            <div className="mb-6">
                <div className="mb-2 flex items-center justify-between">
                    {steps.map((s, i) => (
                        <div key={i} className="flex flex-1 items-center">
                            <motion.div
                                animate={{
                                    scale: step === i ? 1.2 : 1,
                                    backgroundColor:
                                        step >= i
                                            ? 'rgb(16 185 129)'
                                            : 'rgb(64 64 64)',
                                }}
                                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white`}
                            >
                                {i + 1}
                            </motion.div>
                            {i < steps.length - 1 && (
                                <motion.div
                                    animate={{
                                        scaleX: step > i ? 1 : 0.3,
                                        backgroundColor:
                                            step > i
                                                ? 'rgb(16 185 129)'
                                                : 'rgb(64 64 64)',
                                    }}
                                    className="mx-2 h-1 flex-1 origin-left"
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
                    <h4 className="mb-1 text-lg font-bold text-white">
                        Step {step + 1}: {steps[step].title}
                    </h4>
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
                    <div
                        className={`h-1.5 w-1.5 rounded-full bg-emerald-400 md:h-2 md:w-2`}
                    />
                    <span
                        className={`truncate font-mono font-semibold ${codeExamples[activeTab].color}`}
                    >
                        {codeExamples[activeTab].file}
                    </span>
                </div>
                <pre className="max-w-full overflow-x-auto font-mono text-[9px] leading-relaxed md:text-[11px]">
                    <code
                        dangerouslySetInnerHTML={{
                            __html: codeExamples[activeTab].code,
                        }}
                    />
                </pre>
            </motion.div>

            {/* Features badges */}
            <div className="flex flex-wrap gap-1 pt-1 md:gap-1.5 md:pt-2">
                {['Type hints', 'Validation', 'PSR-12', 'Best practices'].map(
                    (item, i) => (
                        <span
                            key={i}
                            className="rounded border border-emerald-500/30 bg-emerald-600/20 px-1.5 py-0.5 text-[9px] font-medium text-emerald-200 md:px-2 md:text-[10px]"
                        >
                            {item}
                        </span>
                    ),
                )}
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
                        className={`rounded-lg border p-2 ${
                            isActive
                                ? 'border-white/30 bg-gradient-to-r shadow-lg shadow-blue-500/20'
                                : 'border-neutral-700/30 bg-neutral-900/30'
                        } ${isActive ? rule.color : ''}`}
                    >
                        <div className="mb-2 flex items-center gap-2">
                            <rule.icon className="h-4 w-4 text-white" />
                            <span className="font-mono text-xs font-bold text-white">
                                {rule.field}
                            </span>
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
                                    transition={{
                                        delay: isActive ? i * 0.08 : 0,
                                        duration: 0.2,
                                    }}
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
    const [droppedFields, setDroppedFields] = useState<
        Array<{ id: number; name: string; type: string; color: string }>
    >([]);

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
                            y:
                                draggedItem === field.id
                                    ? droppedFields.length * 48
                                    : 0,
                            scale: draggedItem === field.id ? 1.05 : 1,
                            opacity: droppedFields.some(
                                (f) => f.id === field.id,
                            )
                                ? 0.3
                                : 1,
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
                            <span className="text-xs font-bold text-white md:text-base">
                                User Model
                            </span>
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
                                <p className="text-[10px] text-purple-300/50 md:text-sm">
                                    Drag fields here
                                </p>
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
                    style={{
                        left: '20%',
                        top: '30%',
                    }}
                >
                    <div className="h-4 w-4 rounded-full bg-purple-500/50 blur-sm md:h-6 md:w-6" />
                </motion.div>
            )}
        </div>
    );
};
