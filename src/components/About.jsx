import React from 'react';
import { Gift, Heart, Sparkles, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                    {/* Header Section */}
                    <div className="bg-primary p-12 text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h1 className="text-5xl font-bold mb-6">About AI Gift Finder</h1>
                            <p className="text-xl opacity-90">Revolutionizing the art of giving with Artificial Intelligence.</p>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
                    </div>

                    <div className="p-12 space-y-12">
                        {/* Mission Section */}
                        <section className="text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We believe that the best gifts aren't just things—they're memories.
                                Our mission is to eliminate the stress of shopping and bring back the joy of giving.
                                Using tailored AI algorithms, we help you find distinctive, thoughtful presents that resonate emotionally.
                            </p>
                        </section>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="font-bold text-xl mb-2">Smart Analysis</h3>
                                <p className="text-gray-500">Understanding nuances of personality, hobbies, and occasions.</p>
                            </div>
                            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                                <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
                                <h3 className="font-bold text-xl mb-2">Creative Ideas</h3>
                                <p className="text-gray-500">Generating unique suggestions you won't find on standard lists.</p>
                            </div>
                            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                <h3 className="font-bold text-xl mb-2">Personal Touch</h3>
                                <p className="text-gray-500">Every recommendation is curated specifically for your recipient.</p>
                            </div>
                        </div>

                        {/* Creator Section */}
                        <div className="border-t border-gray-100 pt-12 text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet the Creator</h2>
                            <p className="text-gray-600 mb-6">
                                Designed and developed by <span className="font-bold text-primary">Prakashini</span>.
                            </p>
                            <p className="text-gray-500 italic max-w-lg mx-auto">
                                "I built this project to showcase how technology can enhance our personal connections, making every celebration a little more special."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
