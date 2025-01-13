import React from "react";
import { useTranslation } from "react-i18next";

const partners = [
  {
    id: 1,
    name: "FPT Software",
    logo: "https://img5.thuthuatphanmem.vn/uploads/2022/01/16/logo-fpt-software_043151683.png",
  },
  {
    id: 2,
    name: "VNG Corporation",
    logo: "https://corp.vcdn.vn/products/upload/vng/source/Gallery/LOGO%20VNG/MasterArtwork-OrangeVNG%20Master.png",
  },
  {
    id: 3,
    name: "VNPT",
    logo: "https://th.bing.com/th/id/R.4ba3f21e836a0ec1a38e7974c60bea4a?rik=EDEQ4aGwZyLXOg&pid=ImgRaw&r=0",
  },
  {
    id: 4,
    name: "Viettel",
    logo: "https://th.bing.com/th/id/OIP.4lAzp2oANJQ-N7BchpmofAHaBX?rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    name: "Cốc Cốc",
    logo: "https://vieclamnhamay.vn/uploads/images/16-10-31-10/2942deddf31d47333fcac9fff9b97219.png",
  },
  {
    id: 6,
    name: "Tiki",
    logo: "https://static.cdnlogo.com/logos/t/18/tiki-800x800.png",
  },
  {
    id: 7,
    name: "VCCorp",
    logo: "https://static.ybox.vn/2022/6/2/1656408537168-logo-vcc.png",
  },
  {
    id: 8,
    name: "Haravan",
    logo: "https://file.hstatic.net/1000175882/file/logo-haravan-2x_8c43ee895800472ab4b177e9b5021909.png",
  },
];

const Partner = () => {
  const { t } = useTranslation(); // Hook để lấy nội dung dịch từ JSON

  return (
    <div className="bg-white py-10 pt-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-accent text-center mb-8">
            {t("partners.title")} {/* Lấy nội dung tiêu đề từ JSON */}
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            {t("partners.description")} {/* Lấy nội dung mô tả từ JSON */}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
