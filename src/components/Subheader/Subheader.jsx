import React from 'react';
import r from "../../assets/img/Rectangle 6.png";
import r1 from "../../assets/img/Rectangle 75.png";
import r2 from "../../assets/img/Rectangle 6.png";

const Subheader = () => {
    const services = [
        {
            title: "Airlines Tickets",
            image: r1,
            alt: "Airplane flying over a city",
        },
        {
            title: "Tour Planner",
            image: r2,
            alt: "Illustration of Dubai skyline",
        },
        {
            title: "Business Setup Services",
            image: r,
            alt: "Business meeting with documents",
        },
    ];

    return (
        <div className="flex flex-col gap-2 bg-[#fdfaf5] items-center  justify-center mx-auto">
            <div className="flex md:flex-row flex-col gap-2 w-full mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative  cursor-pointer hover:scale-105 transition-transform mx-auto"
                    >
                        <img
                            src={service.image}
                            alt={service.alt}
                            className="w-50 h-18 lg:w-72 lg:h-24 "
                        />
                        

                          {/* Gradient overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>
                        {/* Text */}
                        <div className="absolute left-0 bottom-0 w-full text-white  py-1 font-semibold px-2 text-start text-xs">
                            {service.title} →
                        </div>
                    </div>
                ))}
            </div>
            <button className=" flex justify-end md:mx-0 mx-auto bg-[#DC893F] text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition-colors duration-300 text-sm">
                Many More
            </button>
        </div>
    );
};

export default Subheader;

