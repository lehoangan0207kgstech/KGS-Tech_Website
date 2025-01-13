import React from "react";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Reel = () => {
  const { t } = useTranslation(); // Hook để lấy nội dung dịch

  const video = {
    url: "https://www.youtube.com/watch?v=W2FGWkDgFnw", // Đường dẫn video YouTube
  };

  return (
    <div className="relative bg-white py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-accent text-center mb-8">
          {t("reel.title")}
        </h1>
        <p className="text-lg text-gray-600">{t("reel.subtitle")}</p>
        <div className="text-5xl md:text-7xl font-extrabold text-secondary mt-4">
          {t("reel.smileCount")}
        </div>
        <p className="text-sm text-gray-500 mt-2">{t("reel.note")}</p>
      </div>

      {/* Video lớn hiển thị */}
      <div className="flex justify-center items-center px-4">
        <div
          className="relative w-full max-w-lg md:max-w-2xl rounded-xl overflow-hidden shadow-lg"
          style={{
            height: "300px", // Chiều cao cho mobile
            maxHeight: "400px", // Chiều cao tối đa cho PC
          }}
        >
          <ReactPlayer
            url={video.url}
            playing
            loop
            muted
            controls={true} // Hiển thị điều khiển video
            width="100%"
            height="100%"
            config={{
              youtube: {
                playerVars: { showinfo: 0, modestbranding: 1 },
              },
            }}
            style={{
              objectFit: "cover", // Video lấp đầy toàn bộ container
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Reel;
