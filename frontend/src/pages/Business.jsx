import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import PageDownUp from "../components/PageDownUp";
import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";
import Banner from "../components/BannerSlideHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"; // Import Framer Motion

const Business = () => {
  const { t } = useTranslation();

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
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* <BannerSlide bannerSlides={slideData} settings={bannerSettings} /> */}
        <Banner />
      </motion.div>

      <PageDownUp
        sections={[
          "infoSection",
          "benefitSection",
          "formSection",
          "contactSection",
        ]}
      />

      {/* Information Section */}
      <motion.div
        id="infoSection"
        className="bg-gray-100 py-24"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
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
                {t("business.values.items", { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        id="benefitSection"
        className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
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
      </motion.div>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Business;
