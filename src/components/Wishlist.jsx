import React from 'react';
import { useAppContext } from '../context/AppContext';
import GiftCard from './GiftCard';
import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const { wishlist } = useAppContext();

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                        <Heart className="w-8 h-8 text-accent fill-accent" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">My Wishlist</h1>
                    <p className="text-gray-500">Your saved gift ideas</p>
                </div>

                {wishlist.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm max-w-2xl mx-auto border border-dashed border-gray-200">
                        <div className="text-6xl mb-6">🎁</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h2>
                        <p className="text-gray-500 mb-8">Start exploring to find the perfect gifts!</p>
                        <Link
                            to="/"
                            className="inline-flex items-center space-x-2 bg-primary text-gray-900 font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Gift Finder</span>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {wishlist.map((gift, index) => (
                            <GiftCard key={index} gift={gift} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
