import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-600 text-white overflow-hidden">
      
      {/* Animated gradient bubbles */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-pink-400 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 50, -50, 0], y: [0, 50, -50, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, -50, 50, 0], y: [0, -50, 50, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <motion.div
        className="z-10 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-[120px] font-extrabold tracking-wider drop-shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 180 }}
        >
          404
        </motion.h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4">Oops! Page not found</p>
        <p className="text-white/70 max-w-md mx-auto mb-8">
          The page you’re looking for might have been removed, renamed, or doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-medium rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300"
        >
          <FaHome /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
