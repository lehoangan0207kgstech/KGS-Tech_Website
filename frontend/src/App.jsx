import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from './i18n/locales/vi.json';
import ja from './i18n/locales/ja.json';
import './i18n/i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Business from  './pages/Business';
import Blog from  './pages/Blog';
import BlogDetail from "./pages/BlogDetail";
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
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
    </Router>
  );
}
