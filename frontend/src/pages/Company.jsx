import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Milestones from "../components/Milestones";
import VideoBanner from "../components/VideoBanner";
import PageDownUp from "../components/PageDownUp";
import KgsMap from "../components/KgsMap";
import Message from "../components/Message";
import CoreValue from "../components/CoreValue";
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
      className="bg-[#F9FAFB] min-h-screen pt-18"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      {/* VideoBanner */}
      <VideoBanner />

      {/* Scroll Indicator */}
      <PageDownUp
        sections={[
          "first-section",
          "coreValue",
          "mileStones",
          "leader",
          "kgsMap",
        ]}
        label="Roll"
        icon="⬇"
      />

      {/* Thông điệp của sếp */}
      <div id="first-section">
        <Message />
      </div>

      {/* Giá trị cốt lõi */}
      <div id="coreValue">
        <CoreValue />
      </div>

      {/* Cột mốc chính */}
      <motion.div
        id="mileStones"
        className="pt-20 bg-white"
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
        id="leader"
        className="container mx-auto px-4 py-12 pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-3xl font-extrabold text-accent text-center mb-8">
          {t("leaders.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full object-cover mb-4 shadow-md border-2 border-gray-300"
              />
              <h3 className="text-lg md:text-xl font-bold text-secondary">
                {leader.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {leader.position}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* KGS Tech Map */}
      <KgsMap />
    </motion.div>
  );
};

export default Company;
