import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Cột 1 */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">{t("footer.about_us")}</h3>
          <ul className="space-y-2">
            <li><a href="/business" className="hover:underline">{t("footer.store")}</a></li>
            <li><a href="/blog" className="hover:underline">{t("footer.blog_kgs")}</a></li>
          </ul>
        </div>

        {/* Cột 2 */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">{t("footer.company_address")}</h3>
          <p className="text-sm mb-2">{t("footer.address_detail")}</p>
          <p className="text-sm mb-2">{t("footer.email_support")}: <a href="mailto:support@kgstech.com" className="hover:underline">support@kgstech.com</a></p>
          <p className="text-sm">{t("footer.hotline_support")}: 0362 *** ***</p>
        </div>

        {/* Cột 3 */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">{t("footer.newsletter_title")}</h3>
          <div className="flex justify-center sm:justify-start space-x-4 mb-4">
            <a href="#" className="text-white text-xl sm:text-2xl hover:text-gray-400"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white text-xl sm:text-2xl hover:text-gray-400"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-white text-xl sm:text-2xl hover:text-gray-400"><i className="fab fa-tiktok"></i></a>
          </div>
          <p className="text-sm mb-4">{t("footer.newsletter_description")}</p>
          <div className="flex items-center justify-center sm:justify-start">
            <input
              type="email"
              placeholder={t("footer.email_placeholder")}
              className="flex-1 px-4 py-2 text-black rounded-l-lg focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-gray-300">{t("footer.send_button")}</button>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="text-center mt-8 border-t border-gray-700 pt-9 flex justify-center items-center">
        <p className="text-sm">©2024 {t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
