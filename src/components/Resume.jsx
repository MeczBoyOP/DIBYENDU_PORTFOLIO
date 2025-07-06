import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { GiGiftOfKnowledge, GiSkills } from "react-icons/gi";
import { div } from "framer-motion/client";
import ImagePath from "../assets/images/ImagePath";

// Tab List with icons
const TabList = [
  {
    id: 1,
    title: "Education",
    icon: <FaGraduationCap />,
    content: "I have completed my B.Tech in Computer Science from XYZ University.",
  },
  {
    id: 2,
    title: "Skills",
    icon: <GiSkills />,
    content: "JavaScript, React, Tailwind CSS, Figma, Adobe XD.",
  },
];

const educationData = [
  {
    title: "Graduation",
    year: "2017 - 2021",
    degree: "Mechanical Engineering",
    institute: "B.I.E.T",
  },
  {
    title: "Higher Secondary",
    year: "2015 - 2017",
    degree: "Science",
    institute: "Bankura Zilla School",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SkillList = [
  {
    id: 1,
    title: "UI/UX",
    list: [
      { id: 1, title: "Figma", icon: ImagePath.Figma },
      { id: 2, title: "XD", icon: ImagePath.XD },
    ]
  },
  {
    id: 2,
    title: "Web Design",
    list: [
      { id: 1, title: "HTML", icon: ImagePath.Html },
      { id: 2, title: "CSS", icon: ImagePath.Css },
      { id: 3, title: "Tailwind", icon: ImagePath.Tailwind },
      { id: 3, title: "Bootstrap", icon: ImagePath.Bootstrap },
      { id: 3, title: "React", icon: ImagePath.React },
      { id: 3, title: "Next", icon: ImagePath.Next },
    ]
  },
  {
    id: 3,
    title: "Mobile Design",
    list: [
      { id: 1, title: "React Native", icon: ImagePath.RN },
    ]
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants1 = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};


const Resume = () => {
  const [activeTab, setActiveTab] = useState(TabList[0].id);
  const [prevTab, setPrevTab] = useState(TabList[0].id);

  const getTabIndex = (tabId) => TabList.findIndex((tab) => tab.id === tabId);
  const direction = getTabIndex(activeTab) > getTabIndex(prevTab) ? 1 : -1;

  const handleTabClick = (tabId) => {
    setPrevTab(activeTab);
    setActiveTab(tabId);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto mt-10 px-4">
      {/* Tabs */}
      <div className="w-[50%] flex justify-around border-b border-white/20 relative">
        {TabList.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`relative flex items-center gap-3 pb-2 px-10 text-white font-medium transition-colors duration-300 ${activeTab === tab.id ? "text-white" : "text-white/60"
              }`}
          >
            {tab.icon} {tab.title}
            {activeTab === tab.id && (
              <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 1 && (
        <div className="w-full min-h-[100px] mt-6 relative">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ x: direction * 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: direction * -100, opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="text-white text-base w-full">
              <div className="w-full mx-auto px-4 py-10">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                  {educationData.map((item, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={cardVariants}
                      className="relative bg-white/5 border border-white/10 rounded-2xl p-6 group transition-all duration-300 hover:shadow-[0_0_15px_#00ffff33]">
                      <div className="absolute -top-3 left-4 px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r from-[#003] to-[#003366] rounded-full shadow-md group-hover:scale-105 transition-transform duration-300">
                        {item.title}
                      </div>
                      <p className="text-white/70 text-sm mb-1 mt-4">{item.year}</p>
                      <h3 className="text-white text-xl font-bold mb-1">{item.degree}</h3>
                      <p className="text-white/60 text-sm">{item.institute}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>)}
      {activeTab === 2 && (
        <div className="w-full min-h-[100px] mt-6 relative">
          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {SkillList.map((skill) => (
              <motion.div
                key={skill.id}
                className="w-full flex flex-col gap-5 bg-black/20 rounded-[10px] p-5 group hover:shadow-[0_0_20px_#00ffff33] transition-shadow duration-300"
                variants={cardVariants1}>
                <h3 className="text-white text-[24px] font-[500]">{skill.title}</h3>
                <div className="w-full grid grid-cols-3 gap-4">
                  {skill.list.map((tool) => (
                    <motion.div
                      key={tool.id}
                      className="w-full flex flex-col gap-3 items-start"
                      variants={iconVariants}
                    >
                      <div className="w-20 h-20 rounded-[6px] overflow-hidden bg-white/10 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                        <img
                          src={tool.icon}
                          alt={tool.title}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <p className="text-white text-[16px] font-[400] text-center">
                        {tool.title}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Resume;
