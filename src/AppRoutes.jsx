import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from '../pages/home';
import Contact from '../pages/contact';
import Experience from '../pages/experience';
import Formation from '../pages/formation';
import Project from '../pages/project';
import Skills from '../pages/skills';
import { LanguageProvider } from './context/LanguageContext';

// Programmatically synthesize a warm, premium, dual-beat heartbeat sound ("Lub-Dub") via Web Audio API
const playHeartbeatSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const playBeat = (time, frequency, duration, volume) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(frequency, time);

      // Low pass filter to make the beat sound deeper and warmer (less clicky)
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(150, time);

      // Envelope for sound decay
      gainNode.gain.setValueAtTime(0, time);
      gainNode.gain.linearRampToValueAtTime(volume, time + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.001, time + duration);

      osc.connect(gainNode);
      gainNode.connect(filter);
      filter.connect(ctx.destination);

      osc.start(time);
      osc.stop(time + duration);
    };

    const now = ctx.currentTime;
    // Beat 1: Lub (52Hz, slightly longer, higher volume)
    playBeat(now, 52, 0.22, 0.7);
    // Beat 2: Dub (58Hz, slightly shorter, starts shortly after)
    playBeat(now + 0.16, 58, 0.18, 0.5);

  } catch (error) {
    console.warn("Web Audio API sound trigger skipped:", error);
  }
};

// Listen to navigation transitions and play the sound
function NavigationSound() {
  const location = useLocation();
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Skip the initial page load to avoid auto-play blocking warnings on cold open
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    playHeartbeatSound();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <div className="App bg-[#191a1d] min-h-screen text-white bg-cover bg-fixed bg-center pb-20 md:pb-0" style={{ backgroundImage: "url('/portfolio_bg.png')" }}>
        <Router>
          <NavigationSound />
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
