import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const CarouselBasicExample = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            title: "Discover Your Dream Destinations",
            bgImage: "url('https://ambitioncity20.web.app/assets/hero1-9Oyq8O8a.png')",
        },
        {
            title: "Discover Your Dream Destinations",
            bgImage: "url('https://ambitioncity20.web.app/assets/hero2-DemESpx_.png')",

            content: (

                <div className="absolute inset-0 top-[62%] md:flex items-center justify-center lg:max-w-4xl md:max-w-xl max-w-80 hidden bg-[#101828B8] text-white m-5 mx-auto">
                    <div className="relative text-white lg:text-sm text-xs mx-auto grid grid-cols-3 md:gap-5 gap-2 md:px-6 px-3">
                        <ul className="space-y-2">
                            <li>• Visa: New/Renew & Visits</li>
                            <li>• Business Startup, Trade License</li>
                            <li>• Ejari Business Location Set up</li>
                        </ul>
                        <ul className="space-y-2">
                            <li>• RTA Applications</li>
                            <li>• Health Insurance</li>
                            <li>• Dubai Police Applications</li>
                        </ul>
                        <ul className="space-y-2">
                            <li>• Certificate Attestation</li>
                            <li>• Bulk Lamination</li>
                            <li>• Photocopy Color/B&W</li>
                        </ul>
                    </div>
                </div>


            )
        },
        {
            title: "React, Vue, and HTML",
            bgImage: "url('https://ambitioncity20.web.app/assets/hero3-DA8Jd1cb.png')",
        },
        {
            title: "React, Vue, and HTML",
            bgImage: "url('https://ambitioncity20.web.app/assets/hero4-CmWCgHkG.png')",
        },
    ];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const autoSlide = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(autoSlide);
    }, [currentIndex]);

    const nextSlide = () => {
        const slider = sliderRef.current;
        if (!slider) return;

        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
        slider.scrollTo({ left: newIndex * slider.clientWidth, behavior: "smooth" });
    };

    const prevSlide = () => {
        const slider = sliderRef.current;
        if (!slider) return;

        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
        slider.scrollTo({ left: newIndex * slider.clientWidth, behavior: "smooth" });
    };

    return (
        <div className="relative  overflow-hidden rounded-4xl w-full xl:h-[700px]  md:h-[500px] h-96 px-3 md:px-8  max-w-screen-2xl  mx-auto  bg-[#fdfaf5]">
            {/* Slider Container */}
            <div ref={sliderRef} className="flex w-full h-full overflow-x-hidden snap-x snap-mandatory z-30">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="text-white flex-none w-full flex flex-col items-center justify-center snap-center rounded-4xl z-30"
                        style={{
                            backgroundImage: slide.bgImage,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="flex flex-col items-center justify-center gap-3 w-full">
                            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-md text-center px-4">
                                {slide.title}
                            </h2>
                            {index === 1 && slide.content}
                            
                           
                            {/* Search Bar - Added at the top */}
                            <div className="transform z-10 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto px-4">
                                <div className="relative flex">
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="w-full px-4 py-3 rounded-full bg-white bg-opacity-50 text-[#E6CA9C] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-80 transition"
                                    />
                                    <Search className="absolute right-4 top-1/2 text-4xl rounded-4xl font-bold p-1 transform -translate-y-1/2 text-white bg-[#E6CA9C] " />

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:top-1/2  min-[360px]:top-[40%] top-[38%] transform -translate-y-1/2 bg-[#10182880] bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition z-50"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:top-1/2 min-[360px]:top-[40%] top-[38%] transform -translate-y-1/2 bg-[#10182880] bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition z-50 "
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

export default CarouselBasicExample;
