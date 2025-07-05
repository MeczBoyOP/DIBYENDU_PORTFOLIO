import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { image, title } from "framer-motion/client";
import ImagePath from "../assets/images/ImagePath";

const tabItems = ["All", "UI/UX Design", "Web App Design", "Mobile App Design"];

const PortfolioComponent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabRefs = useRef([]);

    const AllList = [
        {
            id: 1,
            type: "UI/UX Design",
            title: "Project 1",
            image: ImagePath.Finance,
            title: "Finance App",
            description: "This is a Finance mobile app ui/ux design."
        },
        {
            id: 2,
            type: "UI/UX Design",
            title: "Tips UI/UX Design",
            image: ImagePath.UI2,
            description: "This is a Mobile app ui/ux design."
        },
        {
            id: 3,
            type: "UI/UX Design",
            title: "Mobile App",
            image: ImagePath.UI3,
            description: "This is a Mobile app ui/ux design."
        },
        {
            id: 4,
            type: "UI/UX Design",
            title: "UI/UX Design",
            image: ImagePath.UI4,
            description: "This is a Mobile app ui/ux design."
        },
        {
            id: 5,
            type: "Web Design",
            title: "Task Management",
            image: ImagePath.WEB1,
            description: "This is a Task management dashboard design."
        },
        {
            id: 6,
            type: "Web Design",
            title: "Furniture Shop",
            image: ImagePath.WEB2,
            description: "This is a Furniture shop web app design."
        },
        {
            id: 7,
            type: "Web Design",
            title: "E-Commerce",
            image: ImagePath.WEB3,
            description: "This is a e-commerce shop web app design."
        },
        {
            id: 8,
            type: "Web Design",
            title: "Sells Dashboard",
            image: ImagePath.WEB4,
            description: "This is a Sells dashboard design."
        },
        {
            id: 9,
            type: "Mobile Design",
            title: "Sells Dashboard",
            image: ImagePath.Mobile1,
            description: "This is a Mobile app design."
        },
        {
            id: 10,
            type: "Mobile Design",
            title: "Sells Dashboard",
            image: ImagePath.Mobile2,
            description: "This is a Mobile app design."
        },
        {
            id: 11,
            type: "Mobile Design",
            title: "Sells Dashboard",
            image: ImagePath.Mobile3,
            description: "This is a Mobile app design."
        },
        {
            id: 12,
            type: "Mobile Design",
            title: "Sells Dashboard",
            image: ImagePath.Mobile4,
            description: "This is a Mobile app design."
        },
    ]

    return (
        <div className="w-full mx-auto py-10 px-4">
            {/* Tabs */}
            <div className="relative flex justify-center gap-4 bg-white/10 p-2 rounded-[4px] backdrop-blur-sm">
                {tabItems.map((tab, index) => (
                    <div key={index} className="relative">
                        {activeTab === index && (
                            <motion.div layoutId="active-tab" className="absolute inset-0 bg-white rounded-[4px] z-0" transition={{ type: "spring", stiffness: 400, damping: 30, }} />
                        )}
                        <button ref={(el) => (tabRefs.current[index] = el)} onClick={() => setActiveTab(index)} className={`relative z-10 px-6 py-2 text-sm md:text-base font-medium transition-all duration-300 ${activeTab === index ? "text-[#003]" : "text-white/80 hover:text-white"}`}>
                            {tab}
                        </button>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="mt-10 min-h-[100px] text-center text-white text-lg font-medium">
                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                        <div className="w-full grid grid-cols-4 gap-5">
                            {(tabItems[activeTab] === "All" ? AllList: AllList.filter((item) => {
                                    const typeMap = {
                                        "UI/UX Design": "UI/UX Design",
                                        "Web App Design": "Web Design",
                                        "Mobile App Design": "Mobile Design"
                                    };
                                    return item.type === typeMap[tabItems[activeTab]];
                                })
                            ).map((item) => (
                                <div  className="w-full rounded-[10px] hover:rounded-[4px] transition-all duration-500 bg-black/30 p-4 flex flex-col items-start group" key={item.id}>
                                    <div className="w-full h-50 rounded-[10px] overflow-hidden mb-5">
                                        <img src={item.image} alt={item.title} className="w-full h-full rounded-[10px] object-cover group-hover:scale-108 transition-all duration-500"/>
                                    </div>
                                    <h6 className="text-white text-lg font-[600] mb-2">{item.title}</h6>
                                    <p className="text-white/60 text-sm font-[400] text-left">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PortfolioComponent;
