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
        <div className="absolute top-0 left-4 w-1 bg-accent h-full md:left-1/2 md:transform md:-translate-x-1/2"></div>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center md:items-stretch ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } mb-8 sm:mb-12`}
          >
            {/* Nội dung */}
            <div className="md:w-1/2 px-4 md:px-8 text-center md:text-left flex items-center justify-center">
              <div>
                <h3 className="text-sm sm:text-base text-secondary md:text-lg font-extrabold mb-2 sm:mb-4">
                  {milestone.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">
                  {milestone.description}
                </p>
              </div>
            </div>
            {/* Hình ảnh */}
            <div className="md:w-1/2 px-4 md:px-8 flex justify-center items-center">
              <img
                src={milestone.image}
                alt={milestone.title}
                className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] rounded-lg shadow-lg"
              />
            </div>
            {/* Hiển thị năm */}
            <div className="absolute top-1/2 left-4 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 z-20 text-sm sm:text-base font-bold bg-white px-4 py-2 rounded-full shadow">
              {milestone.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
