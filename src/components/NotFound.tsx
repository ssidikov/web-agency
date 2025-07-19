'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)})`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            scale: [1, Math.random() * 0.5 + 0.8, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

const suggestions = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: () => <span className="text-2xl">👋</span> },
  { name: 'Services', href: '/services', icon: () => <span className="text-2xl">⚡</span> },
  { name: 'Portfolio', href: '/portfolio', icon: () => <span className="text-2xl">🎨</span> },
  { name: 'Contact', href: '/contact', icon: () => <span className="text-2xl">📧</span> },
];

export function NotFound() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString());
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center relative overflow-hidden">
      <FloatingShapes />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.h1
              className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(99, 102, 241, 0.3)',
                  '0 0 40px rgba(99, 102, 241, 0.5)',
                  '0 0 20px rgba(99, 102, 241, 0.3)',
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              404
            </motion.h1>
            
            {/* Glitch effect */}
            <motion.div
              className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-red-500 opacity-20"
              animate={{
                x: [0, -2, 2, 0],
                y: [0, 2, -2, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              404
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page not found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          {/* Status Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Error Code: 404</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Server Status: Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Time: {currentTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search for pages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 bg-white text-gray-900 shadow-lg"
            />
          </div>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Try these pages instead:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {filteredSuggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={suggestion.href}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <suggestion.icon />
                  </div>
                  <span className="font-medium text-gray-900 group-hover:text-indigo-600">
                    {suggestion.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            <ArrowLeftIcon />
            Go Back
          </motion.button>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors duration-200 shadow-lg"
            >
              <HomeIcon />
              Go Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 max-w-md mx-auto"
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            💡 Did you know?
          </h4>
          <p className="text-sm text-gray-600">
            The HTTP 404 error was named after room 404 at CERN, where the original web server was located.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
