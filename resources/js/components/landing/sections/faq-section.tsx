import React from 'react';
import { motion } from 'framer-motion';

const LandingFaqSection = () => {
    return (
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
                            question: 'Can I customize the generated code?',
                            answer:
                                'Absolutely! All generated code is clean, readable, and follows Laravel best practices. You have full control to modify and extend it.',
                        },
                        {
                            question:
                                'Does it work with existing Laravel projects?',
                            answer:
                                'Yes! Genesis Builder integrates seamlessly with existing projects. Generate new models and migrations without affecting your current codebase.',
                        },
                        {
                            question:
                                'What frontend frameworks are supported?',
                            answer:
                                'We support React, Vue, Blade, Livewire, and pure API mode. Choose the stack that works best for your project.',
                        },
                        {
                            question: 'Is there a free trial?',
                            answer:
                                'Yes! Try Genesis Builder free for 14 days. No credit card required. Experience the full power before committing.',
                        },
                        {
                            question: 'Can I export my schemas?',
                            answer:
                                'Yes! Export your schemas as JSON for backup, version control, or sharing with your team.',
                        },
                    ].map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6"
                        >
                            <h3 className="mb-3 flex items-center gap-3 text-xl font-bold">
                                <div className="h-2 w-2 rounded-full bg-purple-500" />
                                {faq.question}
                            </h3>
                            <p className="pl-5 text-neutral-400">{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingFaqSection;

