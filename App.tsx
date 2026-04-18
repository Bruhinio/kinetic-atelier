import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { Catalogue } from './components/Catalogue';
import { ProjectGallery } from './components/ProjectGallery';
import { Services } from './components/Services';
import { BespokeLab } from './components/BespokeLab';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('catalogue');

  const renderContent = () => {
    switch (activeTab) {
      case 'catalogue':
        return (
          <motion.div
            key="catalogue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Catalogue />
          </motion.div>
        );
      case 'gallery':
        return (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProjectGallery />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Services />
          </motion.div>
        );
      case 'custom':
        return (
          <motion.div
            key="custom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BespokeLab />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <About />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Contact />
          </motion.div>
        );
      default:
        return (
          <div className="h-screen flex items-center justify-center flex-col gap-4 text-center p-12">
            <h2 className="text-4xl font-display italic font-black text-white">SYSTEM UNDER DEVELOPMENT</h2>
            <p className="text-brand-gray-400 tracking-widest font-display text-sm">THE {activeTab.toUpperCase()} MODULE IS CURRENTLY IN SURGICAL CALIBRATION</p>
            <button 
              onClick={() => setActiveTab('catalogue')}
              className="mt-8 px-8 py-3 bg-brand-cyan text-brand-black font-display font-black italic text-xs tracking-widest"
            >
              RETURN TO CORE
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-brand-black overflow-x-hidden">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 relative">
        {/* Custom Header Bar */}
        <header className="sticky top-0 z-40 bg-brand-black/80 backdrop-blur-md border-b border-white/5 py-4 px-12 flex justify-between items-center lg:hidden">
           <h1 className="text-xl font-display italic font-black tracking-tighter text-white">
            KINETIC <span className="text-brand-cyan">ATELIER</span>
          </h1>
          <button className="text-brand-cyan text-xs font-display tracking-widest font-black italic">
            MENU
          </button>
        </header>

        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>

        {/* Footer */}
        <footer className="border-t border-white/5 p-12 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <h2 className="text-2xl font-display italic font-black mb-2 text-white">PRECISION ATELIER</h2>
              <p className="text-brand-gray-400 text-xs tracking-[0.3em] font-display uppercase">© 2026 SURGICAL AUTOMOTIVE ADHESION</p>
            </div>
            <div className="flex gap-12 text-[10px] tracking-[0.3em] font-display text-brand-gray-400 uppercase">
              <a href="#" className="hover:text-brand-cyan transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-cyan transition-colors">Behance</a>
              <a href="#" className="hover:text-brand-cyan transition-colors">Terms of Adhesion</a>
            </div>
          </div>
        </footer>

        {/* Floating Contact Detail for desktop */}
        <div className="fixed bottom-12 right-12 z-50 hidden lg:block">
           <button className="bg-brand-cyan text-brand-black px-6 py-3 font-display font-black italic text-xs tracking-[0.3em] shadow-2xl cyan-glow-intense hover:scale-105 transition-transform">
             SYSTEM INQUIRY
           </button>
        </div>
      </main>
    </div>
  );
}
