import React from 'react';
import { X, Star, ShoppingBag, Share2, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const GiftModal = ({ gift, onClose }) => {
    const { addToWishlist, wishlist } = useAppContext();
    const isWishlisted = wishlist.some(item => item.name === gift.name);

    if (!gift) return null;

    // Use Pollinations.ai for dynamic AI-generated images based on the gift name
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(gift.name + " " + gift.category + " photorealistic product")}`;

    const handleShare = async () => {
        const shareData = {
            title: `Check out this gift: ${gift.name}`,
            text: `I found this perfect gift on AI Gift Finder: ${gift.name} - ${gift.description}`,
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            // Fallback to clipboard
            navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
            alert("Link and details copied to clipboard!");
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden relative flex flex-col md:flex-row"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-gray-100 z-10"
                    >
                        <X className="w-6 h-6 text-gray-600" />
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={gift.name}
                            loading="lazy"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.src = `https://placehold.co/600x400/png?text=${encodeURIComponent(gift.name)}` }}
                        />
                        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-gray-800 shadow-sm">
                            {gift.category}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-8 flex flex-col h-full">
                        <div className="mb-6">
                            <div className="flex justify-between items-start">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{gift.name}</h2>
                            </div>
                            <div className="flex items-center space-x-2 text-yellow-500 mb-4">
                                <Star className="w-5 h-5 fill-current" />
                                <span className="font-bold text-gray-900">4.8</span>
                                <span className="text-gray-400 text-sm">(120+ reviews)</span>
                            </div>
                            <p className="text-2xl font-bold text-primary mb-4">{gift.price_range} <span className="text-sm font-normal text-gray-500">approx.</span></p>
                        </div>

                        <div className="space-y-6 flex-grow">
                            <div>
                                <h3 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {gift.description}
                                </p>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <h3 className="text-sm font-bold uppercase text-blue-500 tracking-wider mb-2">Why it's perfect</h3>
                                <p className="text-blue-800 text-sm italic">
                                    "{gift.why_perfect}"
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex space-x-3">
                                <a
                                    href={`https://www.amazon.in/s?k=${encodeURIComponent(gift.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors"
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    <span>Buy on Amazon</span>
                                </a>
                                <button
                                    onClick={() => addToWishlist(gift)}
                                    className={`p-3 rounded-xl border-2 transition-colors ${isWishlisted ? 'border-accent bg-accent/10 text-accent' : 'border-gray-200 hover:border-accent hover:text-accent text-gray-400'}`}
                                >
                                    <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                                </button>
                            </div>
                            <button
                                onClick={handleShare}
                                className="w-full py-3 text-gray-500 font-medium hover:text-gray-800 transition-colors flex items-center justify-center space-x-2"
                            >
                                <Share2 className="w-4 h-4" />
                                <span>Share this gift</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default GiftModal;
