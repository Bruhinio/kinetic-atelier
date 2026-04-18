import React from 'react';
import { motion } from 'motion/react';
import { VINYLS } from '../constants';
import { Layers } from 'lucide-react';

export function Catalogue() {
  return (
    <section id="catalogue" className="p-12">
      <div className="flex items-end justify-between mb-16 border-b border-white/5 pb-8">
        <div>
          <h3 className="text-sm font-display tracking-[0.3em] text-brand-cyan mb-4 uppercase">
            The Material Lab
          </h3>
          <h2 className="text-5xl font-display italic font-black tracking-tighter">
            ELITE VINYL SERIES
          </h2>
        </div>
        <div className="hidden md:flex gap-4">
          {['ALL', 'MATTE', 'SATIN', 'GLOSS', 'SHIFT'].map((filter) => (
            <button
              key={filter}
              className="text-[10px] tracking-widest font-display text-brand-gray-400 hover:text-white px-4 py-2 border border-white/5 hover:border-white/20 transition-all"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {VINYLS.map((vinyl, idx) => (
          <motion.div
            key={vinyl.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-gray-800 mb-6 border border-white/5 group-hover:border-brand-cyan/30 transition-colors">
              <img
                src={vinyl.image}
                alt={vinyl.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {vinyl.isBestSeller && (
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-brand-cyan text-brand-black text-[9px] font-display font-black tracking-widest px-3 py-1 italic uppercase">
                    Bestseller
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="px-6 py-3 bg-white text-brand-black font-display font-bold italic text-xs tracking-widest flex items-center gap-2">
                  <Layers className="w-3 h-3" />
                  REQUEST SAMPLE
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <p className="text-[10px] tracking-widest text-brand-gray-400 font-display">
                  {vinyl.category}
                </p>
                <div className="h-[1px] flex-1 mx-4 bg-white/5" />
              </div>
              <h4 className="text-xl font-display italic font-black group-hover:text-brand-cyan transition-colors">
                {vinyl.name}
              </h4>
              <p className="text-[10px] tracking-[0.2em] text-white/50 font-display uppercase italic">
                {vinyl.finish}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
