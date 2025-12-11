import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gift, Heart, Menu, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const { wishlist } = useAppContext();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Trending', path: '/trending' },
        { name: 'About', path: '/about' }, // Placeholder
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 group">
                    <img src="/logo.png" alt="AI Gift Finder Logo" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        AI Gift Finder
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-600'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group">
                        <Heart className={`w-6 h-6 transition-colors ${wishlist.length > 0 ? 'fill-accent text-accent' : 'text-gray-600 group-hover:text-accent'}`} />
                        {wishlist.length > 0 && (
                            <span className="absolute top-0 right-0 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {wishlist.length}
                            </span>
                        )}
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-gray-600" onClick={toggleMenu}>
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-lg font-medium text-gray-700 hover:text-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/wishlist"
                                className="flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span>Wishlist</span>
                                <span className="bg-accent text-white text-xs font-bold rounded-full px-2 py-0.5">
                                    {wishlist.length}
                                </span>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
