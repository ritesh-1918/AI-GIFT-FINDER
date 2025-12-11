import React from 'react';
import GiftForm from './GiftForm';
import { Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <Gift className="absolute top-10 left-10 w-32 h-32 text-primary rotate-12" />
                <Gift className="absolute bottom-10 right-10 w-40 h-40 text-accent -rotate-12" />
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full filter blur-3xl opacity-20"></div>
            </div>

            <div className="relative container mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-600 mb-4 shadow-sm">
                        ✨ AI-Powered Gift Discovery
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                        The Perfect Gift is <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            One Click Away
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        Struggling to find the right gift? Let our AI analyze your recipient's interests and find thoughtful, personalized suggestions in seconds.
                    </p>
                </motion.div>

                <GiftForm />
            </div>
        </section>
    );
};

export default Hero;
