import './App.css'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from './i18n/locales/vi.json';  
import ja from './i18n/locales/ja.json';  
import './i18n/i18n';   
import Header from './components/Header';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next'; 

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
      <Header home={t('header.home')} company={t('header.company')} business={t('header.business')} blog={t('header.blog')} />
      <div className="flex-1 p-4">
      <h1 class='font-beVietnam'>{t('header.welcome')}</h1> {/* Dịch văn bản từ file ngôn ngữ */}
      </div>
      <Footer class='absolute bottom-0'/>
    </div>
  )
}
