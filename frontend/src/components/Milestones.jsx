import React from "react";
import { useTranslation } from "react-i18next";

const Milestones = ({ milestones }) => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-accent mb-12">
        {t("milestones.title")}
      </h2>
      <div className="relative">
        {/* Đường kẻ dọc */}
        <div className="absolute top-0 left-4 h-full w-1 bg-accent md:left-1/2 md:transform md:-translate-x-1/2"></div>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center relative ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } mb-12 md:mb-16`}
          >
            {/* Nội dung */}
            <div className="md:w-1/2 px-4 md:px-8 text-center md:text-left">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">
                {milestone.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                {milestone.description}
              </p>
            </div>
            {/* Hình ảnh */}
            <div className="md:w-1/2 flex justify-center md:justify-end px-4 md:px-8">
              <img
                src={milestone.image}
                alt={milestone.title}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg"
              />
            </div>
            {/* Cột mốc */}
            <div className="absolute top-1/2 left-4 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-accent rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
