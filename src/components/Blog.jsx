import React from "react";
import { motion } from "framer-motion";
import ImagePath from "../assets/images/ImagePath";

const blogPosts = [
    {
        id: 1,
        title: "Designing with Purpose: UI/UX that Converts",
        date: "July 1, 2025",
        description:
            "Learn how to build user interfaces that not only look good but also drive results through intentional design.",
        image: ImagePath.Blog1,
        details:"In this post, we explore the principles of effective UI/UX design that lead to higher user engagement and conversion rates. From understanding user needs to creating intuitive navigation, discover how to design with purpose.",
    },
    {
        id: 2,
        title: "My Journey into React and Frontend Development",
        date: "June 20, 2025",
        description:
            "From designing in Figma to coding in React — here’s how I’m bridging the gap between design and development.",
        image: ImagePath.Blog2,
        details:"Join me as I share my personal journey transitioning from a UI/UX designer to a React developer. Learn about the challenges I faced, the skills I acquired, and how I’m applying design principles to create better user experiences in web applications.",
    },
    {
        id: 3,
        title: "Top 5 Design Mistakes Beginners Make initially",
        date: "June 5, 2025",
        description:
            "Avoid these common traps when starting out in UI/UX design and elevate your work immediately.",
        image: ImagePath.Blog3,
        details:"In this article, I highlight the top five design mistakes that many beginners make and how to avoid them. From neglecting user research to overcomplicating designs, learn how to create effective and user-friendly interfaces right from the start.",
    },
];

const Blog = () => {
    return (
        <section className="w-full text-white">
            <div className="w-full mx-auto">
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-10">
                    Latest Blog Posts
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div key={post.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="relative group bg-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-sm text-white/60 mb-2">{post.date}</p>
                                <p className="text-white/80 text-sm mb-10">{post.description}</p>
                                <a href="#" className="w-fit bg-white rounded-[4px] px-2.5 py-1 text-[#003] font-medium hover:underline">
                                    Read more →
                                </a>
                            </div>
                            <div className="absolute inset-0 bg-black/80 text-white flex flex-col items-center justify-center gap-10 text-center px-4 py-6 z-20 backdrop-blur-3xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-bold">{post.title}</h3>
                                <p className="mt-2 text-white/80 text-sm">{post.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
