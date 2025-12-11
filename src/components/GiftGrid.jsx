import React from 'react';
import GiftCard from './GiftCard';
import { useAppContext } from '../context/AppContext';

const GiftGrid = () => {
    const { currentResults, loading } = useAppContext();

    if (loading) return (
        <section id="results-section" className="py-16 bg-white min-h-[400px] flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h2 className="text-xl font-bold text-gray-700">Curating the perfect gifts...</h2>
            </div>
        </section>
    );

    if (!currentResults || currentResults.length === 0) {
        return null;
    }

    return (
        <section id="results-section" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Curated Just For You</h2>
                    <p className="text-gray-600">Here are the top picks based on your criteria.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {currentResults.map((gift, index) => (
                        <GiftCard key={index} gift={gift} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GiftGrid;
