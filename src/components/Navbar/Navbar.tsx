import './Navbar.css'

function Navbar() {
  return (
    <header className='main-header'>
      <nav className='navbar'>
        <div className="nav-side logo-container">
          <a href="/" className="logo">Clínica Vida</a>
        </div>
        
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#doctors" className="nav-link">Doctors</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>

        <div className="nav-side language-switcher">
          <a href="#" className="lang" data-lang="pt">PT</a>
            <span className="lang-divider">|</span>
          <a href="#" className="lang" data-lang="en">EN</a>
        </div>

        <input type="checkbox" id="menu-hamburguer" className="menu-hamburguer" />
        <label htmlFor="menu-hamburguer" className="hamburguer">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>

        <div className="nav-mobile">
          <ul className="nav-links-mobile">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#doctors" className="nav-link">Doctors</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <div className="language-switcher-mobile">
            <a href="#" className="lang" data-lang="pt">PT</a>
            <span className="lang-divider">|</span>
            <a href="#" className="lang" data-lang="en">EN</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
