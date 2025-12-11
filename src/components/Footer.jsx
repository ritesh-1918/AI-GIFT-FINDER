import React from 'react';
import { Gift, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
                            <Gift className="w-8 h-8 text-primary" />
                            <span>AI Gift Finder</span>
                        </div>
                        <p className="text-gray-400">
                            Discover the perfect gift in seconds with the power of Advanced AI.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/legal" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="/legal" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <p className="text-gray-400">
                            Made with ❤️ by Prakashini
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 flex items-center justify-center space-x-1">
                    <span>Made by Prakashini</span>
                    <Heart className="w-4 h-4 text-accent fill-accent" />
                    <span>using React & AI</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
