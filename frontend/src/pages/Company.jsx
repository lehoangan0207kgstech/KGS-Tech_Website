import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Company = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState("challenge");

    const milestones = t("milestones.items", { returnObjects: true }) || [];
    const leaders = t("leaders.list", { returnObjects: true }) || [];

    return (
        <div className="bg-gray-50 min-h-screen pt-20"> {/* Thêm pt-20 để cách header */}
            {/* Giá trị cốt lõi */}
            <div className="container mx-auto px-4 py-12">
                {/* Tiêu đề chính */}
                <h1 className="text-secondary text-xl font-bold text-center mb-2 uppercase">
                    {t("vision.title")}
                </h1>
                <p className="text-2xl md:text-3xl font-extrabold text-center text-accent mb-6">
                    {t("vision.description")}
                </p>
                <p className="text-base md:text-lg text-center text-gray-600 mb-8">
                    {t("vision.subDescription")}
                </p>

                {/* Tabs */}
                <div className="flex justify-center flex-wrap gap-4">
                    {["challenge", "partner", "integrity"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 border-2 rounded-full font-bold transition-all duration-300 ${activeTab === tab
                                    ? "bg-secondary text-white border-secondary shadow-lg scale-105"
                                    : "bg-white text-secondary border-secondary hover:bg-orange-100"
                                }`}
                        >
                            {t(`vision.buttons.${tab}`)}
                        </button>
                    ))}
                </div>

                {/* Nội dung Tab */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Hình ảnh minh họa */}
                    <div className="flex justify-center">
                        <img
                            src={t(`vision.${activeTab}.image`)}
                            alt={t(`vision.${activeTab}.title`)}
                            className="w-full max-w-xs md:max-w-md h-auto object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Nội dung văn bản */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-extrabold mb-4 text-orange-500">
                            {t(`vision.${activeTab}.title`)}
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                            {t(`vision.${activeTab}.content`)}
                        </p>
                        <button className="mt-4 px-6 py-3 bg-secondary text-white font-medium text-sm md:text-lg rounded-full shadow-md hover:bg-orange-600 transition-all">
                            {t("vision.learnMore")}
                        </button>
                    </div>
                </div>
            </div>

            {/* Cột mốc chính */}
            <div className="container mx-auto px-40 py-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-center text-accent mb-6">{t("milestones.title")}</h2>
                <div className="space-y-6">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="bg-secondary w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-sm md:text-lg font-bold">
                                {milestone.year}
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold">{milestone.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{milestone.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ban lãnh đạo cấp cao */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-center text-accent mb-6">{t("leaders.title")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {leaders.map((leader, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={leader.image}
                                alt={leader.name}
                                className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
                            />
                            <h3 className="text-base md:text-lg font-bold">{leader.name}</h3>
                            <p className="text-gray-600 text-sm md:text-base">{leader.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Company;
