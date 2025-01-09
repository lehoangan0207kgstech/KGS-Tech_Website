import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick"; // Ensure react-slick is installed
import { motion } from "framer-motion"; // Import Framer Motion

const BannerSlide = ({ bannerSlides, settings }) => {
    return (
        <div className="bg-white min-h-screen">
            <Slider {...settings} className="relative">
                {bannerSlides.map((slide, index) => (
                    <div key={index} className="relative w-full h-[90vh]">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        {/* Text and Search Input */}
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full px-6 md:px-12 text-white">
                            {/* Left Text Content */}
                            <motion.div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 "
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}>
                                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-2 drop-shadow-lg text-white">
                                    {slide.title}
                                </h1>
                                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 drop-shadow-lg">
                                    {slide.subtitle}
                                </h2>
                                <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
                                    <input
                                        type="text"
                                        placeholder={slide.placeholder}
                                        className="w-full lg:w-2/3 p-3 rounded-t-lg lg:rounded-l-full border-none focus:ring-2 focus:ring-secondary text-secondary"
                                    />
                                    <button className="w-full lg:w-auto px-4 py-3 bg-secondary text-white font-bold rounded-b-lg lg:rounded-r-full hover:bg-secondary transition">
                                        Tìm kiếm
                                    </button>
                                </div>
                            </motion.div>
                            {/* Right Image */}
                            <div className="lg:w-1/2 hidden lg:flex items-center justify-center">
                                <img
                                    src={slide.image}
                                    alt="Hero Slide"
                                    className="rounded-lg shadow-lg object-cover max-h-[70%] w-full"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

BannerSlide.propTypes = {
    bannerSlides: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            placeholder: PropTypes.string,
        })
    ).isRequired,
    settings: PropTypes.object.isRequired,
};

export default BannerSlide;
