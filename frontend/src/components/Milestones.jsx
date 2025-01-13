import React from "react";
import { useTranslation } from "react-i18next";

const MilestonesTimeline = ({ milestones }) => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-accent mb-12">
        {t("milestones.title")}
      </h2>
      <div className="relative flex flex-col">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block"></div>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center mb-20 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Thời gian */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent text-white text-sm sm:text-base px-4 py-2 rounded-full z-10">
              {milestone.year}
            </div>

            {/* Nội dung */}
            <div
              className={`flex flex-col justify-center md:w-1/2 px-6 ${
                index % 2 === 0 ? "md:items-end" : "md:items-start"
              }`}
              style={{
                flex: "1 1 50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="bg-white p-6 rounded-lg shadow-lg w-full flex justify-center items-center border-4 border-gray-100 sm:border-8 sm:mb-8"
                style={{
                  aspectRatio: "4 / 3",
                  maxWidth: "500px",
                  minHeight: "300px",
                }}
              >
                <div className="text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-accent">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Hình ảnh */}
            <div
              className="flex justify-center md:w-1/2 px-6"
              style={{
                flex: "1 1 50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="relative w-full border-4 border-white shadow-lg rounded-lg flex items-center justify-center sm:border-8 sm:mb-8"
                style={{
                  aspectRatio: "4 / 3",
                  maxWidth: "500px",
                  minHeight: "300px",
                }}
              >
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestonesTimeline;
