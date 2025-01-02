import React, { useState } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  
  // Chuyển đổi ngôn ngữ
  const { t, i18n } = useTranslation();


  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.aboutUs")}</h4>
            <p className="text-sm">{t("footer.aboutDescription")}</p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <p className="text-sm">{t("footer.email")}</p>
            <p className="text-sm">{t("footer.phone")}</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.followUs")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer.facebook")}
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer.twitter")}
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer.linkedin")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 text-center py-4">
        <p className="text-sm">&copy; Create By Hoang An 2024 KGS-Tech </p>
      </div>
    </footer>
  );
};

export default Footer;
