import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Milestones from "../components/Milestones";
import { motion } from "framer-motion"; // Import Framer Motion

const Company = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("challenge");

  const milestonesData = t("milestones.items", { returnObjects: true }) || [];
  const leaders = t("leaders.list", { returnObjects: true }) || [];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-gray-50 min-h-screen pt-20"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      {/* Giá trị cốt lõi */}
      <motion.div
        className="container mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {/* Tiêu đề chính */}
        <motion.h1
          className="text-secondary text-xl font-bold text-center mb-2 uppercase"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          {t("vision.title")}
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl font-extrabold text-center text-accent mb-6"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          {t("vision.description")}
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-center text-gray-600 mb-8"
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
          {["challenge", "partner", "integrity"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 border-2 rounded-full font-bold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-secondary text-white border-secondary shadow-lg scale-105"
                  : "bg-white text-secondary border-secondary hover:bg-orange-100"
              }`}
            >
              {t(`vision.buttons.${tab}`)}
            </button>
          ))}
        </motion.div>

        {/* Nội dung Tab */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          {/* Hình ảnh minh họa */}
          <div className="flex justify-center">
            <motion.img
              src={t(`vision.${activeTab}.image`)}
              alt={t(`vision.${activeTab}.title`)}
              className="w-full max-w-xs md:max-w-md h-auto object-contain rounded-lg shadow-lg"
              variants={fadeInUp}
              transition={{ delay: 0.7 }}
            />
          </div>

          {/* Nội dung văn bản */}
          <motion.div variants={fadeInUp} transition={{ delay: 0.8 }}>
            <h2 className="text-xl md:text-2xl font-extrabold mb-4 text-secondary">
              {t(`vision.${activeTab}.title`)}
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              {t(`vision.${activeTab}.content`)}
            </p>
            <button className="px-6 py-3 border-2 rounded-full font-bold transition-all duration-300 bg-white text-secondary border-secondary hover:bg-orange-100">
              {t("vision.learnMore")}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Cột mốc chính */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
      >
        <Milestones milestones={milestonesData} />
      </motion.div>

      {/* Ban lãnh đạo cấp cao */}
      <motion.div
        className="container mx-auto px-4 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-accent mb-6">
          {t("leaders.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-base md:text-lg font-bold">{leader.name}</h3>
              <p className="text-gray-600 text-sm md:text-base">
                {leader.position}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Company;
