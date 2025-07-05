import React from 'react'
import ImagePath from '../assets/images/ImagePath'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Profile = () => {
    return (
        <div className='container mx-auto px-4 pt-30'>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg flex items-center gap-15">
                <div className="w-50 h-50 flex items-center justify-center rounded-full p-3 bg-gradient-to-br from-[#1f1f47] via-[#003] to-[#1b1b3a]">
                    <img src={ImagePath.Profile} alt="Profile Picture" className='w-40 h-full rounded-full object-cover' />
                </div>
                <div className="flex flex-col">
                    <span className='text-white/80 text-[14px] font-[400]'>Hi, i am</span>
                    <h4 className='text-white/80 text-[32px] font-[700] mb-3'>Dibyendu Nayak</h4>
                    <div className='w-fit px-5 py-2 rounded-[4px] bg-black/20 text-white/80 text-[16px] font-[500] shadow-[inset_0px_0px_4px_#fff] mb-5'>
                        Frontend Designer
                    </div>
                    <span className='text-white/80 text-[14px] font-[400] mb-3'>Follow me on:</span>
                    <div className="w-full flex items-center gap-4">
                        <a href="https://www.facebook.com/dibyendu.nayak.7545" target="_blank" rel="noopener noreferrer" className="relative w-10 h-10 rounded-[4px] bg-black/20 overflow-hidden group">
                            <span className="absolute inset-0 bg-[#1877F2] scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 z-0" />
                            <span className="relative z-10 flex items-center justify-center w-full h-full">
                                <FaFacebookF className="w-6 h-6 text-white" />
                            </span>
                        </a>
                        <a href="https://www.instagram.com/delete.zeta/" target="_blank" rel="noopener noreferrer" className="relative w-10 h-10 rounded-[4px] bg-black/20 overflow-hidden group">
                            <span className="absolute inset-0 bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 z-0" />
                            <span className="relative z-10 flex items-center justify-center w-full h-full">
                                <FaInstagram className="w-6 h-6 text-white" />
                            </span>
                        </a>
                        <a href="https://github.com/MeczBoyOP" target="_blank" rel="noopener noreferrer" className="relative w-10 h-10 rounded-[4px] bg-black/20 overflow-hidden group">
                            <span className="absolute inset-0 bg-[#171515] scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 z-0" />
                            <span className="relative z-10 flex items-center justify-center w-full h-full">
                                <FaGithub className="w-6 h-6 text-white" />
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/dibyendu-nayak-161301189/" target="_blank" rel="noopener noreferrer" className="relative w-10 h-10 rounded-[4px] bg-black/20 overflow-hidden group">
                            <span className="absolute inset-0 bg-[#0A66C2] scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 z-0" />
                            <span className="relative z-10 flex items-center justify-center w-full h-full">
                                <FaLinkedinIn className="w-6 h-6 text-white" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile