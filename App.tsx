import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ProjectGallery from './components/ProjectGallery';
import ContactFooter from './components/ContactFooter';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simple loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-rola-bg flex items-center justify-center z-50 fixed top-0 left-0">
        <div className="flex flex-col items-center">
          <div className="text-rola-dark font-serif text-3xl tracking-widest-xl animate-pulse">
            ROLA/DSGN
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-rola-bg min-h-screen text-rola-dark overflow-x-hidden selection:bg-rola-dark selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-noise mix-blend-multiply"></div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <ProjectGallery />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;