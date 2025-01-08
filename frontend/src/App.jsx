import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from './i18n/locales/vi.json';
import ja from './i18n/locales/ja.json';
import './i18n/i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Business from './pages/Business';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Loading from './components/Loading'; // Import Loading Component
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';

function App() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false); // Trạng thái Loading
  const location = useLocation(); // Hook theo dõi đường dẫn hiện tại

  useEffect(() => {
    // Bật Loading khi đường dẫn thay đổi
    setIsLoading(true);

    // Tắt Loading sau một khoảng thời gian (giả lập tải)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Tùy chỉnh thời gian tải giả lập

    return () => clearTimeout(timeout);
  }, [location]); // Mỗi khi location thay đổi

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hiển thị Loading nếu isLoading = true */}
      {isLoading && <Loading />}

      {/* Header */}
      <Header
        home={t('header.home')}
        company={t('header.company')}
        business={t('header.business')}
        blog={t('header.blog')}
      />

      {/* Main Content */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/business" element={<Business />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            {/* Thêm các tuyến khác tại đây nếu cần */}
          </Routes>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <Footer className="absolute bottom-0" />
    </div>
  );
}

export default function RouterWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
