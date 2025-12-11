import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "How does the AI Gift Finder work?",
            answer: "We use advanced artificial intelligence (like Gemini, Llama, and others) to analyze your inputs—recipient details, interests, budget—and generate unique, personalized gift ideas just for you."
        },
        {
            question: "Are the buying links real?",
            answer: "Yes! We search major retailers like Amazon to provide direct links to the products we suggest. However, prices and availability may vary."
        },
        {
            question: "Is this service free?",
            answer: "Yes, AI Gift Finder is completely free to use. We want to help you find the best gifts without any cost."
        },
        {
            question: "Why do I see different results for the same inputs?",
            answer: "The AI is creative and generative! It tries to come up with fresh ideas every time. If you don't like the first batch, just try again."
        }
    ];

    return (
        <div className="container mx-auto py-20 px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h1>
            <div className="max-w-3xl mx-auto space-y-8">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
