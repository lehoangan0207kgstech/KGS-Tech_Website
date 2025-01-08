import React from "react";
import PropTypes from "prop-types";

const WhyChoose = ({ features, t }) => {
  return (
    <div id="chooseSection" className="container mx-auto py-24 px-4">
      <h2 className="text-3xl font-extrabold text-center text-accent mb-8">
        {t("features.whyChoose")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-md h-64 overflow-hidden group transform transition-transform duration-300 hover:scale-105`}
          >
            {/* Màu nền mặc định */}
            <div
              className={`absolute inset-0 bg-accent transition-all duration-300 group-hover:bg-secondary`}
            ></div>

            {/* Nội dung hiển thị trên PC */}
            <div className="hidden md:flex absolute inset-0 items-center justify-center text-white transition-all duration-300">
              <div className="flex flex-col items-center justify-center text-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-5xl mb-4">{feature.icon}</div> {/* Tăng kích thước icon */}
                <h3 className="text-2xl font-extrabold uppercase">
                  {feature.description}
                </h3>
              </div>
            </div>

            {/* Nội dung hiển thị trên mobile */}
            <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="text-4xl mb-2">{feature.icon}</div>
              <h3 className="text-2xl font-extrabold uppercase text-center">
                {feature.description}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

WhyChoose.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      bgColor: PropTypes.string,
      image: PropTypes.string,
      icon: PropTypes.node,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  t: PropTypes.func.isRequired,
};

export default WhyChoose;
