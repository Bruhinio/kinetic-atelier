import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, Microscope, Award } from 'lucide-react';

const STATS = [
  { label: 'CALIBRATIONS', value: '450+', icon: Target },
  { label: 'PRECISION', value: '0.01MM', icon: Microscope },
  { label: 'VELOCITY', value: 'INSTANT', icon: Zap },
  { label: 'EXCELLENCE', value: '100%', icon: Award },
];

export function About() {
  return (
    <section id="about" className="p-12 space-y-32">
      {/* Intro section */}
      <div className="flex flex-col lg:flex-row gap-20 items-center mt-12">
        <div className="w-full lg:w-1/2">
          <h3 className="text-sm font-display tracking-[0.3em] text-brand-cyan mb-6 uppercase">
            The Philosophy
          </h3>
          <h2 className="text-7xl font-display italic font-black tracking-tighter leading-none mb-10">
            SURGICAL <br />
            <span className="text-gradient">ADHERENCE</span>
          </h2>
          <p className="text-brand-gray-400 text-lg font-light leading-relaxed italic border-l-2 border-brand-cyan pl-8 mb-12">
            "We don't see cars as transportation. We see them as molecules waiting for a transformation. At Kinetic Atelier, the wrap isn't applied; it's integrated."
          </p>
          <div className="space-y-6 text-brand-gray-400 font-light max-w-xl">
            <p>
              Founded in 2021 by automotive purists, Kinetic Atelier was birthed from a frustration with the 'standard' wrapping industry. Good wasn't enough. Precision was the only metric.
            </p>
            <p>
              Our process involves full vehicle disassembly (when required by the tier), medical-grade decontamination, and the exclusive use of high-micron vinyls found nowhere else.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
           <div className="aspect-[4/5] bg-brand-gray-900 overflow-hidden border border-white/5 relative">
              <img 
                src="https://picsum.photos/seed/atelier-workshop/800/1000?grayscale" 
                alt="Workshop" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
              
              {/* Technical floating cards */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 glass-panel p-8 w-[120%] -rotate-2">
                 <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-brand-cyan font-display font-black italic tracking-widest text-xs">ATELIER CORE</h4>
                      <p className="text-white text-2xl font-display font-black tracking-tighter">QUALITY INVARIANT</p>
                    </div>
                    <Microscope className="w-10 h-10 text-brand-cyan opacity-50" />
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-8 border border-white/5 bg-brand-gray-900/50 flex flex-col items-center text-center group hover:border-brand-cyan transition-colors"
          >
            <stat.icon className="w-8 h-8 text-brand-cyan mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-4xl font-display font-black italic mb-2 tracking-tighter">{stat.value}</h4>
            <p className="text-[10px] tracking-[0.4em] text-brand-gray-400 font-display uppercase">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Philosophy breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-32">
        <div className="space-y-6">
          <h3 className="text-2xl font-display italic font-black">THE ADHESION MANIFESTO</h3>
          <p className="text-brand-gray-400 font-light leading-relaxed">
            Every wrap has a lifespan. We extend it through molecular bonding techniques and exclusive ceramic pre-treatments. Our team is trained in high-stakes environments, ensuring that every edge is tucked and every corner is seamless.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-display italic font-black text-brand-cyan">FUTURE CALIBRATION</h3>
          <p className="text-brand-gray-400 font-light leading-relaxed">
            With the advent of DTF Liveries, we are now offering digital-physical integration. Custom designs that are printed and adhered with surgical precision, offering a level of detail never before seen in the automotive world.
          </p>
        </div>
      </div>
    </section>
  );
}
