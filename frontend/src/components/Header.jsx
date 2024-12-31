import React, { useState } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const Header = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState('vi'); // Ngôn ngữ mặc định

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái menu

  const handleLanguageChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };


  return (
    <header className="flex justify-between items-center p-4 bg-primary text-white">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Logo */}
      <div className="text-xl font-bold">KGS-Tech</div>

      {/* Menu Desktop */}
      <nav className="hidden md:flex gap-12">
        <a href="#home" className="hover:text-accent">
          {t('header.home')}
        </a>
        <a href="#company" className="hover:text-accent">
          {t('header.company')}
        </a>
        <a href="#business" className="hover:text-accent">
          {t('header.business')}
        </a>
        <a href="#blog" className="hover:text-accent">
          {t('header.blog')}
        </a>
      </nav>



      <div className="flex items-center gap-4">
        <Select
          defaultValue={language}
          onChange={handleLanguageChange}
          dropdownStyle={{
            width: 120,
            backgroundColor: '#A9BFA8',
            color: '#ffffff',
          }}
          className="custom-select"
        >
          <Option value="vi">Tiếng Việt</Option>
          <Option value="en">English</Option>
          <Option value="ja">日本語</Option>
        </Select>
      </div>


      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4 absolute top-16 right-0 w-full">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="hover:text-accent">
              {t('header.home')}
            </a>
            <a href="#company" className="hover:text-accent">
              {t('header.company')}
            </a>
            <a href="#business" className="hover:text-accent">
              {t('header.business')}
            </a>
            <a href="#blog" className="hover:text-accent">
              {t('header.blog')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
