import React, { useState } from 'react'
import { motion } from 'framer-motion';
import ImagePath from '../assets/images/ImagePath';

const AboutUs = () => {
    const [SkillList, setSkillList] = useState(
    [
      {
        id: 1,
        icon: ImagePath.UiUx,
        title: "UI/UX Design",
        description: "I craft clean, engaging UI/UX experiences that blend visual appeal with usability. From wire frames to pixel-perfect layouts, I design interfaces that feel intuitive, responsive, and built for real users."
      },
      {
        id: 2,
        icon: ImagePath.WebDesign,
        title: "Web App Design",
        description: "I specialize in designing modern, responsive web apps with user-focused interfaces. Every layout I create balances clarity, usability, and aesthetics to deliver seamless digital experiences across all devices."
      },
      {
        id: 3,
        icon: ImagePath.MobileDesign,
        title: "Mobile App Design",
        description: "I design clean, intuitive mobile app interfaces that prioritize user experience and performance. My focus is on crafting responsive, touch-friendly layouts that feel natural and visually engaging on every screen."
      },
    ]
  )

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };
  return (
    <motion.div className="w-full flex flex-col gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={containerVariants}>
                <motion.p variants={itemVariants} className="text-white text-base font-[500]">
                  I am a frontend design specialist skilled in crafting clean, responsive UIs
                  using Tailwind, Bootstrap, React, and Next.js. With a strong design sense
                  and growing expertise in React Native, I build modern web and mobile
                  interfaces that are both aesthetic and functional. I focus on delivering
                  smooth, scalable, and user-first experiences across every screen.
                </motion.p>

                <motion.p variants={itemVariants} className="text-white text-lg font-[600] text-center my-4">
                  What i Do!
                </motion.p>

                <motion.div variants={containerVariants} className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
                  {SkillList.map((skill) => (
                    <motion.div key={skill.id} variants={itemVariants} className="w-full p-5 bg-black/30 rounded-[10px] flex flex-col gap-4">
                      <div className="w-full flex items-center gap-5">
                        <div className="w-13 h-13 rounded-[4px] bg-black/30 flex items-center justify-center">
                          <img src={skill.icon} alt="Skill Images" className="w-8 h-8 object-contain" />
                        </div>
                        <h4 className="text-white text-[20px] font-[600]">{skill.title}</h4>
                      </div>
                      <p className="text-white text-[14px] font-[400]">{skill.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
  )
}

export default AboutUs