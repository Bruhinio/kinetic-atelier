import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] w-full overflow-hidden flex items-end">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/hypercar-dark/1920/1080?brightness=0.8"
          alt="Kinetic Atelier Background"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-12 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-brand-cyan" />
            <span className="text-brand-cyan font-display tracking-[0.3em] text-xs uppercase">
              Established Precision
            </span>
          </div>

          <h2 className="text-7xl lg:text-8xl font-display italic font-black leading-[0.9] tracking-tighter mb-8">
            REDEFINING <br />
            <span className="text-gradient">FORM & FUNCTION</span>
          </h2>

          <p className="text-brand-gray-400 text-lg max-w-lg mb-12 leading-relaxed font-light">
            Surgical precision in automotive aesthetics. We don't just wrap cars; we redefine their molecular presence on the tarmac.
          </p>

          <div className="flex flex-wrap gap-6">
            <button className="px-8 py-4 bg-white text-brand-black font-display font-bold italic text-sm tracking-widest hover:bg-brand-cyan transition-colors flex items-center gap-3 group">
              VIEW THE CATALOGUE
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-display font-bold italic text-sm tracking-widest hover:bg-white/10 transition-colors flex items-center gap-3">
              <Play className="w-4 h-4 fill-white" />
              WATCH THE FLOW
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom info pills */}
      <div className="absolute bottom-0 right-0 p-12 hidden lg:flex gap-12 text-[10px] tracking-[0.4em] text-brand-gray-400 font-display uppercase">
        <div className="space-y-2">
          <p className="text-white opacity-50">LOCATION</p>
          <p className="text-white">LOS ANGELES ATELIER</p>
        </div>
        <div className="space-y-2">
          <p className="text-white opacity-50">STATUS</p>
          <p className="text-brand-cyan">ACCEPTING COMMISSIONS</p>
        </div>
      </div>
    </section>
  );
}
