import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Palette, Box, Sparkles, RefreshCcw } from 'lucide-react';
import { cn } from '../lib/utils';
import { VINYLS } from '../constants';

export function BespokeLab() {
  const [selectedVinyl, setSelectedVinyl] = useState(VINYLS[0]);
  const [isRotating, setIsRotating] = useState(false);

  return (
    <section id="bespoke-lab" className="p-12 min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
        <div>
          <h3 className="text-sm font-display tracking-[0.3em] text-brand-cyan mb-4 uppercase">
            Interactive Studio
          </h3>
          <h2 className="text-6xl font-display italic font-black tracking-tighter">
            BESPOKE <br />
            <span className="text-gradient">LABORATORY</span>
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] text-brand-gray-400 font-display tracking-widest uppercase">Current Calibration</p>
            <p className="text-white font-display font-bold italic tracking-tighter">{selectedVinyl.name}</p>
          </div>
          <button 
            onClick={() => setIsRotating(!isRotating)}
            className={cn(
              "p-4 rounded-full border transition-all duration-500",
              isRotating ? "bg-brand-cyan border-brand-cyan text-brand-black" : "bg-white/5 border-white/10 text-white"
            )}
          >
            <RefreshCcw className={cn("w-6 h-6", isRotating && "animate-spin-slow")} />
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Visualizer Area */}
        <div className="lg:col-span-8 relative bg-brand-gray-900 border border-white/5 overflow-hidden flex items-center justify-center p-12">
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)', backgroundSize: '24px 24px' }} />
           
           <motion.div 
             animate={{ rotateY: isRotating ? 360 : 0 }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="relative z-10 w-full max-w-2xl perspective-1000"
           >
              <img 
                src={selectedVinyl.image}
                alt="Visualization"
                className="w-full h-auto aspect-video object-cover shadow-2xl skew-x-[-10deg] border-4 border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -inset-4 border border-brand-cyan/20 skew-x-[-10deg] -z-10 animate-pulse" />
              
              {/* Technical readout overlays */}
              <div className="absolute top-4 left-4 font-mono text-[8px] text-brand-cyan space-y-1">
                <p>SCAN_READY: TRUE</p>
                <p>MATERIAL_HASH: {Math.random().toString(16).substring(7).toUpperCase()}</p>
                <p>COMPACTION: 98.4%</p>
              </div>

              <div className="absolute bottom-4 right-4 font-mono text-[8px] text-brand-cyan text-right">
                <p>SURFACE_VAR: ±0.02MM</p>
                <p>REFLECTIVITY: 0.{Math.floor(Math.random() * 90) + 10}</p>
              </div>
           </motion.div>

           {/* Backdrop Text */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[20vw] font-display font-black text-white/[0.02] italic select-none">KINETIC</span>
           </div>
        </div>

        {/* Controls Area */}
        <div className="lg:col-span-4 space-y-8">
          <div className="glass-panel p-8 space-y-6">
            <h4 className="flex items-center gap-3 text-brand-cyan text-xs font-display font-black tracking-widest uppercase italic">
              <Palette className="w-4 h-4" />
              MATERIAL SELECTOR
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              {VINYLS.map((vinyl) => (
                <button
                  key={vinyl.id}
                  onClick={() => setSelectedVinyl(vinyl)}
                  className={cn(
                    "relative aspect-square border overflow-hidden p-1 transition-all group",
                    selectedVinyl.id === vinyl.id ? "border-brand-cyan" : "border-white/5 hover:border-white/20"
                  )}
                >
                  <img 
                    src={vinyl.image} 
                    alt={vinyl.name} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all"
                    referrerPolicy="no-referrer"
                  />
                  {selectedVinyl.id === vinyl.id && (
                    <div className="absolute inset-x-0 bottom-0 bg-brand-cyan flex items-center justify-center py-1">
                      <span className="text-brand-black text-[8px] font-black italic">ACTIVE</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 space-y-6">
            <h4 className="flex items-center gap-3 text-brand-cyan text-xs font-display font-black tracking-widest uppercase italic">
              <Box className="w-4 h-4" />
              BEYOND COLOR
            </h4>
            <div className="space-y-4">
              {[
                { name: 'Ceramic Shield+', desc: 'Molecular hydrophobic layer' },
                { name: 'Precision DTF', desc: 'Surgical Typography kit' },
                { name: 'Door Jambs', desc: 'Full factory finish look' }
              ].map((addon) => (
                <div key={addon.name} className="flex justify-between items-center group cursor-pointer">
                  <div>
                    <p className="text-white text-xs font-display italic font-bold tracking-tight">{addon.name}</p>
                    <p className="text-brand-gray-400 text-[9px] uppercase tracking-widest">{addon.desc}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full border border-white/20 group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <button className="w-full py-5 bg-white text-brand-black font-display font-black italic tracking-widest hover:bg-brand-cyan transition-all flex items-center justify-center gap-4 group">
            BOOK THIS CALIBRATION
            <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
}
