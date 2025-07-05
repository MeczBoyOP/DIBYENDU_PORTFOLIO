import React from "react";

const CommonButton = () => {
    return (
        <a href="#contact"
            className="relative inline-block px-6 py-2 font-medium text-white border border-white/20 rounded-[4px] overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
                Contact Me
            </span>
            <span className="absolute inset-0 bg-[#003] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0" />
        </a>
    );
};

export default CommonButton;
