import React from "react";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

const VideoBanner = () => {
  const { t } = useTranslation();

  // Hàm cuộn tới section đầu tiên
  const scrollToSection = () => {
    const targetSection = document.getElementById("first-section"); // ID của section đầu tiên
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
      {/* Video từ YouTube */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=W2FGWkDgFnw"
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="absolute top-0 left-0 object-cover"
      />

      {/* Nội dung chồng lên video */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
          {t("videoBanner.title")}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
          {t("videoBanner.description")}
        </p>
        <div className="flex justify-center gap-2 sm:gap-4">
          <button
            onClick={scrollToSection} // Gọi hàm cuộn khi nhấn nút
            className="py-2 px-4 sm:py-3 sm:px-6 bg-secondary hover:bg-orange-800 text-white text-sm sm:text-base md:text-lg rounded-lg font-bold transition duration-300"
          >
            {t("videoBanner.buttonGetStarted")}
          </button>
          <button
            onClick={scrollToSection} // Gọi hàm cuộn khi nhấn nút
            className="py-2 px-4 sm:py-3 sm:px-6 bg-white text-secondary hover:bg-orange-200 text-sm sm:text-base md:text-lg rounded-lg font-bold transition duration-300"
          >
            {t("videoBanner.buttonFindEvent")}
          </button>
        </div>
      </div>

      {/* Lớp phủ màu tối */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
    </div>
  );
};

export default VideoBanner;
