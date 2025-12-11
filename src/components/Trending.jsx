import React from 'react';
import GiftCard from './GiftCard';
import { TrendingUp } from 'lucide-react';

const Trending = () => {
    // Mock data for trending gifts
    const trendingGifts = [
        {
            name: "Smart Coffee Mug",
            description: "App-controlled heated coffee mug that keeps your drink at the perfect temperature.",
            price_range: "₹8,000 - ₹12,000",
            category: "Tech",
            why_perfect: "Top rated across all tech blogs this year."
        },
        {
            name: "Wireless Noise Cancelling Headphones",
            description: "Premium sound quality with active noise cancellation for immersive listening.",
            price_range: "₹15,000 - ₹25,000",
            category: "Audio",
            why_perfect: "Best seller for music lovers and commuters."
        },
        {
            name: "Minimalist Leather Wallet",
            description: "Slim, RFID-blocking leather wallet with a modern design.",
            price_range: "₹2,500 - ₹5,000",
            category: "Fashion",
            why_perfect: "A classic essential that never goes out of style."
        },
        {
            name: "Indoor Hydroponic Garden",
            description: "Grow fresh herbs and veggies indoors with this smart garden kit.",
            price_range: "₹4,000 - ₹8,000",
            category: "Home",
            why_perfect: "Perfect for eco-conscious friends and foodies."
        },
        {
            name: "Portable Bluetooth Speaker",
            description: "Waterproof, rugged speaker with 20-hour battery life.",
            price_range: "₹3,000 - ₹6,000",
            category: "Tech",
            why_perfect: "Essential for parties and outdoor adventures."
        },
        {
            name: "Weighted Blanket",
            description: "15lb weighted blanket for anxiety relief and better sleep.",
            price_range: "₹2,000 - ₹4,000",
            category: "Wellness",
            why_perfect: "The ultimate comfort gift for anyone needing relaxation."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                        <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Trending Now</h1>
                    <p className="text-gray-500">Most popular gifts this season</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {trendingGifts.map((gift, index) => (
                        <GiftCard key={index} gift={gift} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trending;
