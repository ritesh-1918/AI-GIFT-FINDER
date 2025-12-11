import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem('giftFinderWishlist');
        return saved ? JSON.parse(saved) : [];
    });
    const [currentResults, setCurrentResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Theme Logic
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        localStorage.setItem('giftFinderWishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (gift) => {
        setWishlist((prev) => {
            if (prev.some(item => item.name === gift.name)) return prev;
            return [...prev, gift];
        });
    };

    const removeFromWishlist = (giftName) => {
        setWishlist((prev) => prev.filter(item => item.name !== giftName));
    };

    return (
        <AppContext.Provider value={{
            wishlist,
            addToWishlist,
            removeFromWishlist,
            currentResults,
            setCurrentResults,
            loading,
            setLoading,
            theme,
            toggleTheme
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
