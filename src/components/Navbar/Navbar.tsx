import './Navbar.css'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Função para troca de idioma
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Obtem o idioma atual
  const currentLanguage = i18n.language

  return (
    <header className='main-header'>
      <nav className='navbar'>
        <div className="nav-side logo-container">
          <a href="/" className="logo">Clínica Vida</a>
        </div>
        
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#home" className="nav-link">{t('navbar.home')}</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">{t('navbar.services')}</a>
          </li>
          <li className="nav-item">
            <a href="#doctors" className="nav-link">{t('navbar.doctors')}</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">{t('navbar.contact')}</a>
          </li>
        </ul>

        <div className="nav-side language-switcher">
          <button className={`lang ${currentLanguage === 'pt' ? 'active' : ''}`} onClick={() => changeLanguage('pt')} type='button'>PT</button>
          <span className="lang-divider">|</span>
          <button className={`lang ${currentLanguage === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')} type='button'>EN</button>
        </div>

        <input type="checkbox" id="menu-hamburguer" className="menu-hamburguer" />
        <label htmlFor="menu-hamburguer" className="hamburguer">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>

        <div className="nav-mobile">
          <ul className="nav-links-mobile">
            <li><a href="#home" className="nav-link">{t('navbar.home')}</a></li>
            <li><a href="#services" className="nav-link">{t('navbar.services')}</a></li>
            <li><a href="#doctors" className="nav-link">{t('navbar.doctors')}</a></li>
            <li><a href="#contact" className="nav-link">{t('navbar.contact')}</a></li>
          </ul>
          <div className="language-switcher-mobile">
            <button className={`lang ${currentLanguage === 'pt' ? 'active' : ''}`} onClick={() => changeLanguage('pt')} type='button'>PT</button>
            <span className="lang-divider">|</span>
            <button className={`lang ${currentLanguage === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')} type='button'>EN</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
