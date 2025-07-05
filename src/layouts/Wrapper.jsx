import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Wrapper = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gradient-to-b from-[#140071] to-[#01003E] text-white overflow-hidden">
    
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-64 p-6 bg-black/20 backdrop-blur-md border-r border-white/10">
        <div className="text-2xl font-bold mb-8">🚀 Portfolio</div>
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="hover:text-purple-400 transition">
              {link.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-black/30 backdrop-blur-md z-30">
        <span className="text-xl font-bold">🚀 Portfolio</span>
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Sidebar Animation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 bottom-0 w-64 bg-black/90 p-6 z-40 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-5 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={toggleSidebar}
                  className="text-lg hover:text-purple-400 transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pt-16 md:pt-0 md:ml-64 p-6 z-10">
        {children}
      </main>
    </div>
  );
};

export default Wrapper;
