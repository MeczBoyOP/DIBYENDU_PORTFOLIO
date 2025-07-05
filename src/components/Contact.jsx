import React from 'react'
import { motion } from "framer-motion";
import ImagePath from '../assets/images/ImagePath'

const Contact = () => {
    return (
        <div className='container mx-auto px-4 pt-30'>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg flex flex-col gap-10">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className="w-full flex items-center gap-3">
                    <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-l from-white/30 via-[#00ffff] to-white/30 bg-clip-text text-transparent">Contact Me</h2>
                    <div className="w-50 h-1 bg-white/80 rounded-[5px]"></div>
                </motion.div>
                <div className="w-full h-80 overflow-hidden rounded-lg shadow-lg aspect-video">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.291556014612!2d88.42368324394354!3d22.576377035302546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1751739341655!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    ></iframe>
                </div>

                <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
                    <div className="w-full">
                        <img src={ImagePath.Contact} alt="Contact Me" className='w-full h-70 object-contain' />
                    </div>

                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className="w-full mx-auto p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
                        <h2 className="text-2xl font-bold text-white mb-6">Contact Me</h2>
                        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-white/80 mb-1 text-sm">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 bg-white/5 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 mb-1 text-sm">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 bg-white/5 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003] transition-all"
                                />
                            </div>
                            <div className='col-span-1 md:col-span-2'>
                                <label className="block text-white/80 mb-1 text-sm">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Your message..."
                                    className="w-full px-4 py-2 bg-white/5 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003] transition-all"
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                type="submit"
                                className="w-fit bg-[#003] text-white px-6 py-2 rounded-md font-medium transition-all hover:bg-[#002244]"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Contact