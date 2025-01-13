import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      id="formSection"
      className="bg-secondary py-16 px-10 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      {/* Left Content */}
      <div className="text-white text-center md:text-left md:w-1/2 px-8">
        <h3 className="text-4xl font-extrabold uppercase mb-6">
          {t("contactForm.title")}
        </h3>
        <p className="text-xl">{t("contactForm.description")}</p>
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
    </motion.div>
  );
};

export default ContactForm;
