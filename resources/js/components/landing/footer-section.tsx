import { Box, Github } from 'lucide-react';

export default function LandingFooterSection() {
    return (
        <footer className="relative mt-16 border-t border-purple-500/20 bg-neutral-950/80 backdrop-blur-lg md:mt-32">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-neutral-950/50 to-neutral-950" />

            <div className="relative container mx-auto max-w-7xl px-6 py-8 md:py-16">
                <div className="mb-8 grid grid-cols-2 gap-8 md:mb-12 md:grid-cols-4 md:gap-12">
                    <div className="col-span-3 md:col-span-1">
                        <div className="mb-3 flex items-center gap-2 md:mb-4">
                            <Box className="h-6 w-6 text-purple-500 md:h-7 md:w-7" />
                            <span className="text-lg font-bold text-white md:text-xl">
                                Genesis Builder
                            </span>
                        </div>
                        <p className="mb-4 text-xs leading-relaxed text-neutral-400 md:mb-6 md:text-sm">
                            Visual Laravel schema builder for modern developers.
                            Build faster, ship sooner.
                        </p>
                        <div className="flex items-center gap-2 md:gap-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-700/50 bg-neutral-800/50 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-600/20 md:h-10 md:w-10"
                            >
                                <Github className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-purple-400 md:h-5 md:w-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-700/50 bg-neutral-800/50 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-600/20 md:h-10 md:w-10"
                            >
                                <svg
                                    className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-purple-400 md:h-5 md:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-3 text-xs font-semibold tracking-wider text-white uppercase md:mb-4 md:text-sm">
                            Product
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
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
                                        className="group flex items-center gap-2 text-xs text-neutral-400 transition-colors duration-200 hover:text-purple-400 md:text-sm"
                                    >
                                        <span className="h-1 w-0 rounded-full bg-purple-500 transition-all duration-200 group-hover:w-1 md:h-1.5 md:group-hover:w-1.5" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 text-xs font-semibold tracking-wider text-white uppercase md:mb-4 md:text-sm">
                            Resources
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
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
                                        className="group flex items-center gap-2 text-xs text-neutral-400 transition-colors duration-200 hover:text-purple-400 md:text-sm"
                                    >
                                        <span className="h-1 w-0 rounded-full bg-purple-500 transition-all duration-200 group-hover:w-1 md:h-1.5 md:group-hover:w-1.5" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 text-xs font-semibold tracking-wider text-white uppercase md:mb-4 md:text-sm">
                            Company
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
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
                                        className="group flex items-center gap-2 text-xs text-neutral-400 transition-colors duration-200 hover:text-purple-400 md:text-sm"
                                    >
                                        <span className="h-1 w-0 rounded-full bg-purple-500 transition-all duration-200 group-hover:w-1 md:h-1.5 md:group-hover:w-1.5" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800/50 pt-6 md:pt-8">
                    <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-4">
                        <div className="text-center text-xs text-neutral-400 md:text-left md:text-sm">
                            © {new Date().getFullYear()} Genesis Builder. Built
                            with{' '}
                            <span className="text-purple-400">Laravel</span> &{' '}
                            <span className="text-blue-400">React</span>.
                        </div>
                        <div className="flex items-center gap-4 md:gap-6">
                            <a
                                href="/privacy"
                                className="text-xs text-neutral-400 transition-colors hover:text-purple-400 md:text-sm"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/terms"
                                className="text-xs text-neutral-400 transition-colors hover:text-purple-400 md:text-sm"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />
        </footer>
    );
}
