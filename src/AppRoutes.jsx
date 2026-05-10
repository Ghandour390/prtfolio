import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from '../pages/home';
import Contact from '../pages/contact';
import Experience from '../pages/experience';
import Formation from '../pages/formation';
import Project from '../pages/project';
import Skills from '../pages/skills';
import { LanguageProvider } from './context/LanguageContext';

// Shared global AudioContext to persist state across mobile touch gestures
let globalAudioContext = null;

const getAudioContext = () => {
  if (!globalAudioContext) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      globalAudioContext = new AudioContext();
    }
  }
  return globalAudioContext;
};

// Global click/touchstart listener to unlock AudioContext on mobile web browsers (Safari, Chrome)
if (typeof window !== 'undefined') {
  const unlockAudio = () => {
    const ctx = getAudioContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().then(() => {
        // Once successfully resumed and unlocked, remove listeners
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('touchstart', unlockAudio);
      });
    }
  };
  window.addEventListener('click', unlockAudio);
  window.addEventListener('touchstart', unlockAudio);
}

// Programmatically synthesize a warm, dual-beat heartbeat ("Lub-Dub") audible on mobile speakers
const playHeartbeatSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const playBeat = (time, baseFreq, subFreq, duration, volume) => {
      // Base oscillator: audible on small mobile speakers (100Hz - 110Hz)
      const oscBase = ctx.createOscillator();
      // Sub oscillator: deep chest rumble for computers & headphones (50Hz - 55Hz)
      const oscSub = ctx.createOscillator();
      
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      oscBase.type = "sine";
      oscBase.frequency.setValueAtTime(baseFreq, time);

      oscSub.type = "sine";
      oscSub.frequency.setValueAtTime(subFreq, time);

      // Low pass filter cut-off slightly higher to let mobile-audible frequencies through
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(250, time);

      // Envelope for natural decay
      gainNode.gain.setValueAtTime(0, time);
      gainNode.gain.linearRampToValueAtTime(volume, time + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.001, time + duration);

      oscBase.connect(gainNode);
      oscSub.connect(gainNode);
      gainNode.connect(filter);
      filter.connect(ctx.destination);

      oscBase.start(time);
      oscSub.start(time);
      
      oscBase.stop(time + duration);
      oscSub.stop(time + duration);
    };

    const now = ctx.currentTime;
    // Beat 1: Lub (Base 100Hz, Sub 50Hz, slightly longer & louder)
    playBeat(now, 100, 50, 0.24, 0.6);
    // Beat 2: Dub (Base 110Hz, Sub 55Hz, slightly shorter)
    playBeat(now + 0.16, 110, 55, 0.20, 0.4);

  } catch (error) {
    console.warn("Audio play skipped:", error);
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
