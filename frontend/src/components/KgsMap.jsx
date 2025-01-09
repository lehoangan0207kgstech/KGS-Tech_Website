import React from "react";

const KgsMap = () => {
  return (
    <div className="flex justify-center items-center w-full">
      {/* Thẻ <a> bao iframe */}
      <a
        href="https://www.google.com/maps/place/40+Đường+16,+Khu+Phố+1,+Thành+Phố+Thủ+Đức,+TP+Hồ+Chí+Minh/"
        target="_blank"
        rel="noopener noreferrer"
        title="Mở bản đồ KGS Tech trên Google Maps"
        className="w-full"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3725433117456!2d106.75941247591855!3d10.859243389294615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175279b0083d543%3A0x3216a26b119c5d6b!2zNDAgxJAuIDE2LCBLaHUgcGjhu5EgMSwgVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1736405760731!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="KGS Tech Map"
        ></iframe>
      </a>
    </div>
  );
};

export default KgsMap;
