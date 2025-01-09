import React from "react";
import { useTranslation } from "react-i18next";

const Message = () => {
    const { t } = useTranslation();

    return (
        <div
            className="relative min-h-screen bg-cover bg-top text-white px-6 py-12 pt-40"
            style={{
                backgroundImage:
                    "url('https://img.freepik.com/free-photo/trans-person-working-office-with-colleagues_23-2149287016.jpg?t=st=1736415820~exp=1736419420~hmac=839a563381cdfa84a93f6888d60619a017f9baa8f00104885fe1e061a3b6f8a2&w=1380')", // Đặt URL hình ảnh thực tế tại đây
                backgroundSize: "cover", // Đảm bảo ảnh phủ toàn bộ vùng
                backgroundPosition: "center", // Căn giữa ảnh
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-90"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-secondary">
                    {t("message.title")}
                </h1>
                <h2 className="text-3xl font-extrabold text-center mb-8 text-accent">
                    {t("message.subtitle")}
                </h2>

                <div className="text-base md:text-lg leading-relaxed space-y-6 text-left font-beVietnam pt-20">
                    {t("message.content", { returnObjects: true }).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Message;
