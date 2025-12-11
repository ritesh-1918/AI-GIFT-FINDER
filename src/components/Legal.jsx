import React from 'react';

const Legal = () => {
    return (
        <div className="container mx-auto py-20 px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Legal Documentation</h1>

            <section className="mb-12">
                <h2 id="privacy" className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Privacy Policy</h2>
                <div className="prose text-gray-600 space-y-4">
                    <p>
                        <strong>Last Updated: December 2025</strong>
                    </p>
                    <p>
                        At AI Gift Finder ("we," "our," or "us"), we respect your privacy. This Privacy Policy explains how we handle your information.
                    </p>
                    <h3 className="text-lg font-bold text-gray-700">1. Information We Collect</h3>
                    <p>
                        We do not collect personal identifiable information (PII) like your name or email unless you voluntarily provide it (e.g., for a newsletter).
                        The gift criteria you enter (age, interests) is sent to our AI providers (Google, Groq, OpenRouter) anonymously to generate suggestions.
                    </p>
                    <h3 className="text-lg font-bold text-gray-700">2. How We Use Information</h3>
                    <p>
                        - To generate gift suggestions.<br />
                        - To improve the performance of our website.<br />
                        - To comply with legal obligations.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 id="terms" className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Terms of Service</h2>
                <div className="prose text-gray-600 space-y-4">
                    <p>
                        By using AI Gift Finder, you agree to these Terms.
                    </p>
                    <h3 className="text-lg font-bold text-gray-700">1. Services</h3>
                    <p>
                        We provide AI-generated gift suggestions. We do not sell products directly. We are not responsible for the quality, safety, or legality of items purchased through third-party links (e.g., Amazon).
                    </p>
                    <h3 className="text-lg font-bold text-gray-700">2. Disclaimer</h3>
                    <p>
                        The AI suggestions are for entertainment and informational purposes. AI can make mistakes. Please verify product details before purchasing.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Legal;
