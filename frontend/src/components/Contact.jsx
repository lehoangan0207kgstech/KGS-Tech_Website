import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      id="contactSection"
      className="bg-gray-100 py-12 px-4"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
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
              className="flex flex-col items-center text-gray-700 hover:text-secondary transition font-bold"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 text-3xl">
                {item.icon}
              </div>
              <p className="mt-2 text-center text-sm sm:text-base">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
