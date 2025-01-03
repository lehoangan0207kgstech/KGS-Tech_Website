import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  // Chuyển đổi ngôn ngữ
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Responsive Flexbox Grid */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left gap-8">
          {/* About Section */}
          <div className="md:flex-1">
            <h4 className="text-lg font-semibold mb-4">{t("footer.aboutUs")}</h4>
            <p className="text-sm leading-relaxed">{t("footer.aboutDescription")}</p>
          </div>

          {/* Contact Section */}
          <div className="md:flex-1">
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <p className="text-sm leading-relaxed">{t("footer.email")}</p>
            <p className="text-sm leading-relaxed">{t("footer.phone")}</p>
          </div>

          {/* Social Media Section */}
          <div className="md:flex-1">
            <h4 className="text-lg font-semibold mb-4">{t("footer.followUs")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:underline text-sm leading-relaxed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer.facebook")}
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:underline text-sm leading-relaxed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer.twitter")}
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="hover:underline text-sm leading-relaxed"
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
        <p className="text-sm">&copy;2024 Create By Hoang An KGS-Tech</p>
      </div>
    </footer>
  );
};

export default Footer;
