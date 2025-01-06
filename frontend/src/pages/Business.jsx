import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import PageDownUp from '../components/PageDownUp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Business = () => {
    const { t } = useTranslation();

    const bannerSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Image Slide Show */}
            <div className="bg-white min-h-screen">
                <Slider {...bannerSettings} className="relative">
                    {t("bannerSlides", { returnObjects: true }).map((slide, index) => (
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
                                <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
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
                                            className="w-full lg:w-2/3 p-3 rounded-t-lg lg:rounded-l-full border-none focus:ring-2 focus:ring-secondary"
                                        />
                                        <button className="w-full lg:w-auto px-4 py-3 bg-secondary text-white font-bold rounded-b-lg lg:rounded-r-full hover:bg-secondary transition">
                                            Tìm kiếm
                                        </button>
                                    </div>
                                </div>
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

            <PageDownUp sections={["infoSection", "benefitSection", "formSection", "contactSection"]}/>

            {/* Information Section */}
            <div id="infoSection" className="bg-gray-100 py-24">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://images.pexels.com/photos/6147360/pexels-photo-6147360.jpeg?cs=srgb&dl=pexels-diva-plavalaguna-6147360.jpg&fm=jpg"
                            alt="KGS Office"
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-extrabold text-secondary mb-4">
                            {t("business.bestWorkplaceTitle")}
                        </h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {t("business.about.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("business.about.description")}
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {t("business.history.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("business.history.description")}
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {t("business.life.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("business.life.description")}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {t("business.values.title")}
                            </h3>
                            <ul className="text-gray-600 list-disc list-inside">
                                {t("business.values.items", { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div id="benefitSection" className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <p className="text-lg text-accent leading-relaxed font-bold">
                        {t("business.benefitsDescription")}
                    </p>
                    <h2 className="text-3xl font-extrabold text-secondary mb-4">
                        {t("business.benefitTitle")}
                    </h2>
                </div>
                <div>
                    <Slider {...sliderSettings}>
                        {t("slides", { returnObjects: true }).map((slide, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="rounded-lg object-cover w-full h-64 mb-4"
                                />
                                <div className="text-5xl mb-4 text-secondary">{slide.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                                    {slide.title}
                                </h3>
                                <p className="text-gray-600 text-center">{slide.description}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Contact Form Section */}
            <div id="formSection" className="bg-secondary py-16 px-10 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto">
                {/* Left Content */}
                <div className="text-white text-center md:text-left md:w-1/2 px-8">
                    <h3 className="text-4xl font-extrabold uppercase mb-6">
                        {t("contactForm.title")}
                    </h3>
                    <p className="text-xl">
                        {t("contactForm.description")}
                    </p>
                </div>

                {/* Right Content */}
                <div className="mt-8 md:mt-0 flex items-center md:w-1/2 w-full px-8">
                    <div className="relative flex w-full">
                        <input
                            type="email"
                            placeholder={t("contactForm.placeholder")}
                            className="w-full px-6 py-4 rounded-l-full border-none focus:ring-2 focus:ring-secondary text-lg"
                        />
                        <button className="px-10 bg-white text-secondary font-extrabold rounded-r-full hover:bg-gray-100 transition text-lg whitespace-nowrap">
                            {t("contactForm.buttonText")}
                        </button>
                    </div>
                </div>
            </div>



            {/* Contact Section */}
            <div id="contactSection" className="bg-gray-100 py-12 px-4">
                <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-center gap-12">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                        <p className="text-lg text-accent font-bold">
                            {t("business.contactUsSubtitle")}
                        </p>
                        <h2 className="text-3xl font-extrabold text-secondary">
                            {t("business.contactUsTitle")}
                        </h2>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
                        {t("contactItems", { returnObjects: true }).map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-gray-700 hover:text-orange-500 transition"
                            >
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 text-3xl">
                                    {item.icon}
                                </div>
                                <p className="mt-2 text-center text-sm sm:text-base">{item.title}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Business;
