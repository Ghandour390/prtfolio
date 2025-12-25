import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/home';
import Contact from '../pages/contact';
import Experience from '../pages/experience';
import Formation from '../pages/formation';
import Project from '../pages/project';
import Skills from '../pages/skills';

function App() {
  return (
    <div className="App bg-gradient-to-b from-[#191a1d] to-[#23232b] min-h-screen text-white">
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
  );
}

export default App;
