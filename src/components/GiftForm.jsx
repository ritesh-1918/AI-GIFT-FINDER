import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Loader2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { generateGiftSuggestions } from '../services/gemini';
import { useNavigate } from 'react-router-dom';

const GiftForm = () => {
    const { setJsonResults, setLoading, setCurrentResults } = useAppContext();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        recipient: 'Friend',
        age: '',
        interests: '',
        occasion: 'Birthday',
        budget: '1000-5000',
        notes: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setLoading(true);
        setError(null);
        setCurrentResults([]);

        try {
            const results = await generateGiftSuggestions(formData);
            setCurrentResults(results);
            setTimeout(() => {
                setIsSubmitting(false);
                setLoading(false);
                document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        } catch (err) {
            console.error("Failed to fetch suggestions", err);
            setIsSubmitting(false);
            setLoading(false);
            setError(`Error: ${err.message || err.toString()} (Details: Check logs)`);
        }
    };

    const handleSurpriseMe = () => {
        const scenarios = [
            { recipient: 'Grandmother', age: '70', interests: 'Gardening, Knitting, Mystery Novels', occasion: 'Birthday', budget: '2000-5000', notes: 'Loves flowers' },
            { recipient: 'Brother', age: '25', interests: 'Gaming, Tech, Marvel Movies', occasion: 'Christmas', budget: '1000-5000', notes: 'Already has a PS5' },
            { recipient: 'Best Friend', age: '22', interests: 'Yoga, Coffee, Travel', occasion: 'Friendship Day', budget: '500-2000', notes: 'Something aesthetic' },
            { recipient: 'Toddler', age: '3', interests: 'Dinosaurs, Space, Building Blocks', occasion: 'Birthday', budget: '1000-2000', notes: 'Educational but fun' },
            { recipient: 'Colleague', age: '30', interests: 'Organization, Coffee, productivity', occasion: 'Secret Santa', budget: '500-1000', notes: 'Useful for office' }
        ];
        const random = scenarios[Math.floor(Math.random() * scenarios.length)];
        setFormData(random);
        setError(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl w-full mx-auto transition-colors duration-300"
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Tell us about them</h2>
                <button
                    type="button"
                    onClick={handleSurpriseMe}
                    className="text-sm text-primary hover:text-primary/80 font-semibold flex items-center space-x-1"
                >
                    <span>🎲 Surprise Me</span>
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Who is this for?</label>
                        <select
                            name="recipient"
                            value={formData.recipient}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        >
                            <option>Friend</option>
                            <option>Family Member</option>
                            <option>Partner/Spouse</option>
                            <option>Colleague</option>
                            <option>Child</option>
                            <option>Pet</option>
                            <option>Myself</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Age</label>
                        <select
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        >
                            <option value="" disabled>Select Age Group</option>
                            <option>Toddler (0-3)</option>
                            <option>Child (4-12)</option>
                            <option>Teenager (13-19)</option>
                            <option>Young Adult (20-35)</option>
                            <option>Adult (36-60)</option>
                            <option>Senior (60+)</option>
                        </select>
                    </div>
                </div >

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Interests & Hobbies</label>
                    <input
                        type="text"
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        placeholder="e.g. Gaming, Cooking, Tech, Marvel Movies..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Occasion</label>
                        <select
                            name="occasion"
                            value={formData.occasion}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        >
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Christmas / Holiday</option>
                            <option>Wedding</option>
                            <option>Graduation</option>
                            <option>Housewarming</option>
                            <option>Just Because</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Budget (INR)</label>
                        <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        >
                            <option>Under ₹500</option>
                            <option>₹500 - ₹2000</option>
                            <option>₹2000 - ₹5000</option>
                            <option>₹5000 - ₹10000</option>
                            <option>₹10000+</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-yellow-400 hover:to-red-500 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center space-x-2 text-lg"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span>Finding Perfect Gifts...</span>
                        </>
                    ) : (
                        <>
                            <Search className="w-6 h-6" />
                            <span>Find My Gift</span>
                        </>
                    )}
                </button>
                {
                    error && (
                        <div className="text-red-500 text-center font-medium mt-2">
                            {error}
                        </div>
                    )
                }
            </form >
        </motion.div >
    );
};

export default GiftForm;
