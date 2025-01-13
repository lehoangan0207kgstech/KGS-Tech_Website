import React, { useState } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const { t } = useTranslation();
  const slides = t("bannerSlides", { returnObjects: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="relative w-full h-screen">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-5 items-center h-screen">
              {/* Left Content */}
              <div className="col-span-2 flex flex-col justify-center px-6 md:px-10 relative text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-black leading-snug">
                  {slide.title}
                  <br />
                  <span className="text-secondary">{slide.subtitle}</span>
                </h1>
                {/* Search Bar */}
                <div className="mt-6 w-full">
                  <div className="flex items-center bg-gray-100 rounded-full shadow-lg overflow-hidden">
                    <input
                      type="text"
                      className="flex-grow px-4 md:px-6 py-3 md:py-4 text-base md:text-lg text-gray-700 focus:outline-none"
                      placeholder={slide.placeholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                      onClick={handleSearch}
                      className="bg-accent text-white px-4 md:px-6 py-3 md:py-4 rounded-r-full font-bold hover:bg-bt_hover transition-all flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-4.35-4.35m2.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="col-span-3 mt-8 md:mt-0">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-64 md:h-screen object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
