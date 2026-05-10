import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './NavBar.css';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { to: '/', labelKey: 'nav_home' },
    { to: '/projects', labelKey: 'nav_projects' },
    { to: '/skills', labelKey: 'nav_skills' },
    { to: '/experience', labelKey: 'nav_experience' },
    { to: '/formation', labelKey: 'nav_formation' },
    { to: '/contact', labelKey: 'nav_contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-animated px-4 sm:px-6 lg:px-8 py-3 text-white w-full z-20 border-b border-[#232323] fixed top-0 left-0 bg-[#0a0a0a]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <span className="text-xl sm:text-2xl font-bold text-[#ffc72c] cursor-pointer">Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          <ul className="flex gap-6 lg:gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-semibold transition-colors duration-200 px-2 pb-1 ${
                      isActive
                        ? 'text-[#ffc72c] border-b-2 border-[#ffc72c]'
                        : 'text-[#f5eec5] hover:text-[#ffc72c]'
                    }`
                  }
                  end={link.to === '/'}
                >
                  {t(link.labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Language Selector Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-[#2e3138] hover:border-[#ffc72c] bg-[#191a1d] text-[#f6f3d7] hover:text-[#ffc72c] hover:shadow-md hover:shadow-[#ffc72c]/10 transition-all duration-300 rounded-full font-bold text-xs cursor-pointer"
          >
            <span>🌐</span>
            <span>{language.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile Header Buttons (Language + Toggle) */}
        <div className="flex items-center gap-3 md:hidden z-30">
          {/* Mobile Quick Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#2e3138] bg-[#191a1d] text-xs font-bold text-[#ffc72c] active:scale-95 transition-transform"
          >
            <span>🌐</span>
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleMenu}
            className="text-[#ffc72c] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-[57px] left-0 w-full bg-[#0a0a0a] border-b border-[#232323] transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col items-center py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.to} className="w-full text-center">
              <NavLink
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block font-semibold transition-colors duration-200 px-4 py-2 ${
                    isActive
                      ? 'text-[#ffc72c] bg-[#ffc72c1a]'
                      : 'text-[#f5eec5] hover:text-[#ffc72c] hover:bg-[#ffc72c0d]'
                  }`
                }
                end={link.to === '/'}
              >
                {t(link.labelKey)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}