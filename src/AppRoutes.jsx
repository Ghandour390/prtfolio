import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/home';
import Contact from '../pages/contact';
import Experience from '../pages/experience';
import Formation from '../pages/formation';
import Project from '../pages/project';
import Skills from '../pages/skills';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App bg-[#191a1d] min-h-screen text-white bg-cover bg-fixed bg-center pb-20 md:pb-0" style={{ backgroundImage: "url('/portfolio_bg.png')" }}>
        <Router>
          <Routes>
            {/* Public Portfolio Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/skills" element={<Skills />} />

            {/* Catch all - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;
