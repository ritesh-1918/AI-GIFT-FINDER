import React, { useState } from 'react';
import { Heart, Eye, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import GiftModal from './GiftModal';
import { motion } from 'framer-motion';

const GiftCard = ({ gift, index }) => {
    const { addToWishlist, removeFromWishlist, wishlist } = useAppContext();
    const [showModal, setShowModal] = useState(false);

    const isWishlisted = wishlist.some(item => item.name === gift.name);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(gift.name + " " + gift.category + " photorealistic product")}`;

    const toggleWishlist = (e) => {
        e.stopPropagation();
        if (isWishlisted) {
            removeFromWishlist(gift.name);
        } else {
            addToWishlist(gift);
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col cursor-pointer h-full"
                onClick={() => setShowModal(true)}
            >
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={gift.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                        <button
                            onClick={toggleWishlist}
                            className={`p-2 rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-all hover:scale-110 ${isWishlisted ? 'text-accent' : 'text-gray-400 hover:text-accent'}`}
                        >
                            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                        </button>
                    </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                    <div className="mb-auto">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-gray-900 line-clamp-1 group-hover:text-primary transition-colors">{gift.name}</h3>
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{gift.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-4">
                        <span className="text-primary font-bold">{gift.price_range}</span>
                        <button className="text-gray-400 group-hover:text-primary transition-colors flex items-center text-sm font-medium">
                            View Details <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                </div>
            </motion.div>

            {showModal && (
                <GiftModal gift={gift} onClose={() => setShowModal(false)} />
            )}
        </>
    );
};

export default GiftCard;
