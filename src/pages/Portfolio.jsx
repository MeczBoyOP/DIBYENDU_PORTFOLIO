import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CommonButton from '../components/CommonButton';
import wavingGif from '../assets/gif/wave.gif';

const Portfolio = () => {
  const tabs = ["About", "Resume", "Portfolio", "Blog"];
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
      <div className="fixed top-0 left-0 w-full backdrop-blur-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-3">
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-extrabold bg-gradient-to-t from-[#003] via-[#00ffff] to-[#003] bg-clip-text text-transparent">
              Dibyendu Nayak
            </motion.div>
            <div className="relative flex gap-2 mt-3 md:mt-0 bg-black/20 backdrop-blur-md rounded-full p-2">
              {tabs.map((tab, index) => (
                <div key={tab} className="relative">

                  {/* Sliding Background Indicator */}
                  {activeTab === index && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white rounded-full z-0"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Tab Button */}
                  <button
                    ref={(el) => (tabRefs.current[index] = el)}
                    onClick={() => handleScrollTo(index)}
                    className={`relative z-10 px-5 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${activeTab === index
                      ? "font-bold text-[#003]"
                      : "text-white/80 hover:text-white"
                      }`}
                  >
                    {tab}
                  </button>
                </div>
              ))}
            </div>
            <CommonButton />
          </div>
        </div>
      </div>

      {/* 🔽 Main Content */}
      <div className="container mx-auto px-4 pt-[120px] space-y-20">
        {sectionIds.map((id, index) => (
          <section
            key={id}
            id={id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">{tabs[index]}</h2>
            {id === "about" && (
              <div className="grid md:grid-cols-2 gap-6 text-white/80 min-h-screen">
                <p>I am a passionate UI/UX and web designer with a knack for turning ideas into clean, functional interfaces. I specialize in frontend design using React, Tailwind CSS, and motion design.</p>
                <p>Outside of work, I love experimenting with visual design, building components, and learning new frontend trends.</p>
              </div>
            )}
            {id === "resume" && (
              <ul className="list-disc pl-6 text-white/80 space-y-2 min-h-screen">
                <li><strong>2023 – Present:</strong> UI/UX Designer at XYZ Company</li>
                <li><strong>2021 – 2023:</strong> Freelance Web Designer</li>
                <li><strong>2020 – 2021:</strong> B.A. in Arts & Design</li>
                <li><strong>Skills:</strong> React, Tailwind, Figma, Adobe XD, Framer Motion</li>
              </ul>
            )}
             {id === "portfolio" && (
              <>
                <div className="grid md:grid-cols-3 gap-6 min-h-screen ">
                  <img src="/assets/project1.png" alt="Project 1" className="rounded-lg w-full object-cover" />
                  <img src="/assets/project2.png" alt="Project 2" className="rounded-lg w-full object-cover" />
                  <img src="/assets/project3.png" alt="Project 3" className="rounded-lg w-full object-cover" />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6 text-white/80">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Landing Page Design</h3>
                    <p>A fully responsive website for a startup using React and Tailwind CSS.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dashboard UI</h3>
                    <p>Admin panel layout designed with clean charts, dark/light mode, and interactive tabs.</p>
                  </div>
                </div>
              </>
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
