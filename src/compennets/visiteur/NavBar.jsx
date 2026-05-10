import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './NavBar.css';

export default function NavBar() {
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { 
      to: '/', 
      labelKey: 'nav_home',
      icon: (
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      to: '/projects', 
      labelKey: 'nav_projects',
      icon: (
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      to: '/skills', 
      labelKey: 'nav_skills',
      icon: (
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    { 
      to: '/experience', 
      labelKey: 'nav_experience',
      icon: (
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      to: '/formation', 
      labelKey: 'nav_formation',
      icon: (
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    { 
      to: '/contact', 
      labelKey: 'nav_contact',
      icon: (
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <>
      {/* Top Header Navbar */}
      <nav className="navbar-animated px-4 sm:px-6 lg:px-8 py-3 text-white w-full z-20 border-b border-[#232323] fixed top-0 left-0 bg-[#0a0a0a]">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-[#ffc72c] cursor-pointer">Portfolio</span>
          </div>

          {/* Desktop Menu - Hidden on Mobile */}
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

            {/* Desktop Language Selector */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#2e3138] hover:border-[#ffc72c] bg-[#191a1d] text-[#f6f3d7] hover:text-[#ffc72c] hover:shadow-md hover:shadow-[#ffc72c]/10 transition-all duration-300 rounded-full font-bold text-xs cursor-pointer"
            >
              <span>🌐</span>
              <span>{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Top Header (Language switch ONLY, hamburger is gone!) */}
          <div className="flex items-center gap-3 md:hidden z-30">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#2e3138] bg-[#191a1d] text-xs font-bold text-[#ffc72c] active:scale-95 transition-transform cursor-pointer"
            >
              <span>🌐</span>
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Tab Navigation - Fixed at the very bottom, hidden on Desktop */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-lg border-t border-[#232323] px-2 py-2 flex justify-around items-center shadow-[0_-5px_15px_rgba(0,0,0,0.5)]">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 py-1 transition-all duration-300 text-[10px] font-semibold group ${
                isActive
                  ? 'text-[#ffc72c] scale-105'
                  : 'text-[#bfc3c9] hover:text-[#ffc72c]'
              }`
            }
            end={link.to === '/'}
          >
            <div className="mb-1 transition-colors duration-300">{link.icon}</div>
            <span className="text-[9px] tracking-tight transition-colors duration-300">{t(link.labelKey)}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
}