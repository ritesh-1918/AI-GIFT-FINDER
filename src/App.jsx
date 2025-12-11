import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import GiftGrid from './components/GiftGrid';
import Wishlist from './components/Wishlist';
import Trending from './components/Trending';
import FAQ from './components/FAQ';
import Legal from './components/Legal';

import About from './components/About';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <GiftGrid />
                    </>
                } />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/legal" element={<Legal />} />
            </Routes>
        </Layout>
    );
}

export default App;
