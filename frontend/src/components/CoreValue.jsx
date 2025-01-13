import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const slideVariants = {
  enter: { x: "100%", opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const tabs = ["challenge", "partner", "integrity"];

const CoreValue = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("challenge");
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch tabs every 3 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsPaused(true); // Stop auto-switching when a tab is clicked
  };

  return (
    <motion.div
      id="core-value-section"
      className="container mx-auto pt-36 px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      {/* Main Title */}
      <motion.h1
        className="text-secondary text-xl font-bold text-center mb-2 uppercase"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        {t("vision.title")}
      </motion.h1>
      <motion.p
        className="text-3xl md:text-4xl font-extrabold text-center text-accent mb-6"
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
      >
        {t("vision.description")}
      </motion.p>
      <motion.p
        className="text-lg md:text-xl text-center text-gray-600 mb-8 leading-relaxed"
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
      >
        {t("vision.subDescription")}
      </motion.p>

      {/* Tabs */}
      <motion.div
        className="flex justify-center flex-wrap gap-4"
        variants={fadeInUp}
        transition={{ delay: 0.5 }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-6 py-3 border-2 rounded-full font-bold transition-all duration-300 ${
              activeTab === tab
                ? "bg-secondary text-white border-secondary shadow-lg scale-105"
                : "bg-white text-secondary border-secondary hover:bg-secondary hover:text-white"
            }`}
          >
            {t(`vision.buttons.${tab}`)}
          </button>
        ))}
      </motion.div>

      {/* Tab Content with Slide Animation */}
      <div className="mt-8 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            key={activeTab}
            initial="enter"
            animate="center"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.5 }}
          >
            {/* Image */}
            <div className="flex justify-center">
              <motion.img
                src={t(`vision.${activeTab}.image`)}
                alt={t(`vision.${activeTab}.title`)}
                className="w-full max-w-xs md:max-w-md h-auto object-cover rounded-lg shadow-xl border-2 border-gray-200"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-secondary">
                {t(`vision.${activeTab}.title`)}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                {t(`vision.${activeTab}.content`)}
              </p>
              <button className="px-6 py-3 bg-secondary text-white rounded-full font-bold transition-all duration-300 hover:bg-orange-600">
                {t("vision.learnMore")}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CoreValue;
