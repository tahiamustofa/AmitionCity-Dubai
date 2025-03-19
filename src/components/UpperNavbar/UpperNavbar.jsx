import React from 'react';
import logo from "../../assets/img/logo 1.png";
import { BsWhatsapp } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";

const UpperNavbar = () => {
    return (
        <div className='bg-[#fdfaf5] shadow-md border-b border-b-[#D0D5DD]'>
        <div className="w-full  md:px-5  max-w-screen-2xl mx-auto  py-3 px-3 sm:py-4 sm:px-6 grid grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-between ">
            {/* Logo Section */}
            <div className="flex items-center">
                <img src={logo} alt="Ambition Logo" className="w-3/5 sm:w-2/5 md:w-1/3" />
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-1 sm:space-x-2 text-gray-700 text-xs sm:text-sm md:text-base">
                <TbPhoneCall className="text-gray-600 text-sm sm:text-base md:text-lg" />
                <span className="font-medium">+971 58 142 5513</span>
            </div>

<div className='flex justify-end'>
            {/* WhatsApp Contact Button */}
            <a href="https://wa.me/971581425513" target="_blank" className="relative inline-flex items-center justify-start px-4 py-2 sm:px-6 sm:py-3 overflow-hidden font-medium transition-all bg-[#4BC45C] rounded-xl group max-w-28 sm:max-w-32 md:max-w-40 text-xs sm:text-sm">
                <span className="absolute top-0 right-0 inline-block w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ease-in-out bg-[#DC893F] text-white rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#FF8800] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex gap-0.5 items-center">
                    <BsWhatsapp className="text-xs sm:text-sm" /> Contact Us
                </span>
            </a>
            </div>
        </div>
        </div>
    );
};

export default UpperNavbar;
