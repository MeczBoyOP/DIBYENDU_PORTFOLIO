import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CommonButton from '../components/CommonButton';
import ImagePath from '../assets/images/ImagePath';
import AboutUs from '../components/AboutUs';
import Profile from '../components/Profile';
import PortfolioComponent from '../components/PortfolioComponent';

const Portfolio = () => {
  const tabs = ["About Me", "Resume", "Portfolio", "Blog"];
  const sectionIds = ["about", "resume", "portfolio", "blog"];

  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((section, index) => {
        const rect = section?.getBoundingClientRect();
        const offsetTop = section?.offsetTop;
        const offsetHeight = section?.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
          setActiveTab(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (index) => {
    document.getElementById(sectionIds[index])?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-[#140071] to-[#01003E] relative">
      <div className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-3">
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-extrabold bg-gradient-to-t from-[#003] via-[#00ffff] to-[#003] bg-clip-text text-transparent">
              Dibyendu Nayak
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="relative flex gap-2 mt-3 md:mt-0 bg-black/20 backdrop-blur-md rounded-full p-2">
              {tabs.map((tab, index) => (
                <div key={tab} className="relative">
                  {activeTab === index && (
                    <motion.div layoutId="active-pill" className="absolute inset-0 bg-white rounded-full z-0"
                      transition={{ type: "spring", stiffness: 500, damping: 30, }} />
                  )}
                  <button ref={(el) => (tabRefs.current[index] = el)} onClick={() => handleScrollTo(index)}
                    className={`relative z-10 px-5 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${activeTab === index ? "font-bold text-[#003]" : "text-white/80 hover:text-white"}`}>
                    {tab}
                  </button>
                </div>
              ))}
            </motion.div>
            <CommonButton />
          </div>
        </div>
      </div>

      {/* My Details */}
      <Profile />

      {/* 🔽 Main Content */}
      <div className="container mx-auto px-4 pt-10 space-y-10">
        {sectionIds.map((id, index) => (
          <section key={id} id={id} ref={(el) => (sectionRefs.current[index] = el)} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg flex flex-col gap-5">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className="w-full flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-l from-white/30 via-[#00ffff] to-white/30 bg-clip-text text-transparent">{tabs[index]}</h2>
              <div className="w-50 h-1 bg-white/80 rounded-[5px]"></div>
            </motion.div>
            {id === "about" && (
              <AboutUs />
            )}
            {id === "resume" && (
              <PortfolioComponent />
            )}
            {id === "portfolio" && (
             <PortfolioComponent />
            )}
            {id === "blog" && (
              <div className="space-y-4 text-white/80 min-h-screen">
                <div>
                  <h3 className="text-xl font-semibold">Why Tailwind CSS is a Game-Changer</h3>
                  <p className="text-sm">Tailwind helps you build beautiful UIs with less custom CSS and better responsiveness.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">How to Animate Your React App</h3>
                  <p className="text-sm">Framer Motion allows for easy and powerful animations in your frontend projects.</p>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
