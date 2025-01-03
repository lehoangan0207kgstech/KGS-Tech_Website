import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("vi"); // Ngôn ngữ mặc định
  const [headerStyle, setHeaderStyle] = useState("primary"); // Trạng thái của Header
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái menu di động
  const location = useLocation(); // Lấy đường dẫn hiện tại

  const handleLanguageChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  // Chỉ áp dụng hiệu ứng cuộn trên trang Home
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const imageHeight = 600;

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        headerStyle === "transparent" ? "bg-transparent text-white" : "bg-primary text-white shadow-md"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 md:px-12 md:py-4">
        {/* Mobile - Nút mở menu */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        {/* Logo */}
        <div className="text-xl md:text-4xl font-extrabold tracking-wide text-center flex-grow md:flex-grow-0">
          <Link to="/home">KGS-Tech</Link>
        </div>

        {/* Mobile - Nút chuyển đổi ngôn ngữ */}
        <div className="md:hidden">
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-white text-gray-800 rounded-lg px-3 py-1 border shadow-md focus:outline-none"
          >
            <option value="vi">🇻🇳</option>
            <option value="en">🇺🇸</option>
            <option value="ja">🇯🇵</option>
          </select>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-12">
          <ul className="flex gap-10">
            {[
              { path: "/", label: t("header.home") },
              { path: "/company", label: t("header.company") },
              { path: "/business", label: t("header.business") },
              { path: "/blog", label: t("header.blog") },
            ].map((menuItem, index) => (
              <li
                key={index}
                className="hover:text-secondary font-semibold text-lg md:text-xl"
              >
                <Link to={menuItem.path}>{menuItem.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* PC - Nút chuyển đổi ngôn ngữ */}
        <div className="hidden md:block">
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-white text-gray-800 rounded-lg px-3 py-1 border shadow-md focus:outline-none"
          >
            <option value="vi">🇻🇳 Tiếng Việt</option>
            <option value="en">🇺🇸 English</option>
            <option value="ja">🇯🇵 日本語</option>
          </select>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white w-full absolute top-full left-0 px-4 py-4">
          <nav className="flex flex-col gap-4">
            {[
              { path: "/", label: t("header.home") },
              { path: "/company", label: t("header.company") },
              { path: "/business", label: t("header.business") },
              { path: "/blog", label: t("header.blog") },
            ].map((menuItem, index) => (
              <Link
                key={index}
                to={menuItem.path}
                className="hover:text-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {menuItem.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
