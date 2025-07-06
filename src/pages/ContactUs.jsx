import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ Import Link
import CommonButton from '../components/CommonButton';
import Profile from '../components/Profile';
import Contact from '../components/Contact';

// Create animated Link
const MotionLink = motion(Link);

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-[#140071] to-[#01003E] relative">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-3">

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-extrabold bg-gradient-to-t from-[#003] via-[#00ffff] to-[#003] bg-clip-text text-transparent"
            >
              Dibyendu Nayak
            </motion.div>

            {/* Portfolio Button */}
            <MotionLink
              to="/"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative inline-block px-6 py-2 font-medium text-white border border-white/20 rounded-[4px] overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                My Portfolio
              </span>
              <span className="absolute inset-0 bg-[#003] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0" />
            </MotionLink>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default ContactUs;
