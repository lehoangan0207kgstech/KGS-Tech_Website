import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading"; // Import Loading Component

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem("language") || "vi");
  const [headerStyle, setHeaderStyle] = useState("primary");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Trạng thái Loading
  const location = useLocation();

  const handleLanguageChange = async (value) => {
    setIsLoading(true); // Hiển thị loading
    try {
      setLanguage(value);
      localStorage.setItem("language", value); // Lưu ngôn ngữ vào localStorage
      await i18n.changeLanguage(value); // Thay đổi ngôn ngữ
    } catch (error) {
      console.error("Error changing language:", error);
    } finally {
      setTimeout(() => setIsLoading(false), 500); // Ẩn loading sau 500ms
    }
  };

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/company" || location.pathname === "/business") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const imageHeight = 300;

        if (scrollY < imageHeight) {
          setHeaderStyle("transparent");
        } else {
          setHeaderStyle("primary");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setHeaderStyle("primary");
    }
  }, [location.pathname]);

  useEffect(() => {
    i18n.changeLanguage(language); // Đặt ngôn ngữ khi component khởi tạo
  }, [language, i18n]);

  return (
    <>
      {/* Hiển thị Loading nếu isLoading = true */}
      {isLoading && <Loading />}

      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 font-extrabold ${
          headerStyle === "transparent" ? "bg-transparent text-white" : "bg-primary text-white shadow-md"
        }`}
      >
        <div className="flex justify-between items-center px-3 py-3 md:px-8 md:py-4">
          {/* Mobile - Nút mở menu */}
          <button
            className="md:hidden text-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>

          {/* Logo */}
          <div className="text-base md:text-xl font-bold tracking-wide text-center flex-grow md:flex-grow-0">
            <Link to="/home">KGS-Tech</Link>
          </div>

          {/* Mobile - Nút chuyển đổi ngôn ngữ */}
          <div className="md:hidden">
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-white text-gray-800 rounded-lg px-2 py-1 border shadow-md focus:outline-none"
            >
              <option value="vi">🇻🇳</option>
              <option value="en">🇺🇸</option>
              <option value="ja">🇯🇵</option>
            </select>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-8">
            <ul className="flex gap-8">
              {[ 
                { path: "/", label: t("header.home") },
                { path: "/company", label: t("header.company") },
                { path: "/business", label: t("header.business") },
                { path: "/blog", label: t("header.blog") },
              ].map((menuItem, index) => (
                <li
                  key={index}
                  className={`relative font-medium text-sm md:text-base ${
                    location.pathname === menuItem.path
                      ? "text-secondary"
                      : "hover:text-secondary"
                  }`}
                >
                  <Link to={menuItem.path}>{menuItem.label}</Link>
                  {location.pathname === menuItem.path && (
                    <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-secondary rounded-full"></span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* PC - Nút chuyển đổi ngôn ngữ */}
          <div className="hidden md:block">
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-white text-accent rounded-lg px-2 py-1 border shadow-md focus:outline-none"
            >
              <option value="vi">🇻🇳 Tiếng Việt</option>
              <option value="en">🇺🇸 English</option>
              <option value="ja">🇯🇵 日本語</option>
            </select>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white w-full absolute top-full left-0 px-3 py-3">
            <nav className="flex flex-col gap-3">
              {[
                { path: "/", label: t("header.home") },
                { path: "/company", label: t("header.company") },
                { path: "/business", label: t("header.business") },
                { path: "/blog", label: t("header.blog") },
              ].map((menuItem, index) => (
                <Link
                  key={index}
                  to={menuItem.path}
                  className={`text-sm ${
                    location.pathname === menuItem.path
                      ? "text-secondary font-bold"
                      : "hover:text-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menuItem.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
