import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

export function ProjectGallery() {
  return (
    <section id="gallery" className="p-12 space-y-32">
      <div className="max-w-3xl">
        <h3 className="text-sm font-display tracking-[0.3em] text-brand-cyan mb-4 uppercase">
          Precision Showcase
        </h3>
        <h2 className="text-6xl font-display italic font-black tracking-tighter mb-8">
          DOCUMENTED <br />
          <span className="text-gradient">EXCELLENCE</span>
        </h2>
        <p className="text-brand-gray-400 font-light leading-relaxed">
          Every project is a testimony to our surgical approach. We don't hide behind filters. 
          See the raw quality of our seams, the tension of our wraps, and the clarity of our DTF prints.
        </p>
      </div>

      <div className="space-y-48">
        {PROJECTS.map((project, idx) => (
          <div key={project.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}>
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 1 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/3 relative"
            >
              <div className="relative aspect-video overflow-hidden border border-white/10 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              
              {/* Floating index */}
              <div className="absolute -top-12 -left-12 hidden lg:block">
                <span className="text-9xl font-display font-black text-white/5 italic select-none">
                  0{idx + 1}
                </span>
              </div>
            </motion.div>

            {/* Info side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3 space-y-8"
            >
              <div className="space-y-4">
                <h4 className="text-xs tracking-[0.4em] text-brand-cyan font-display uppercase italic">
                  Project #{project.id}
                </h4>
                <h3 className="text-4xl font-display italic font-black tracking-tight leading-none">
                  {project.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-8 border-y border-white/5 py-8">
                <div>
                  <p className="text-[10px] text-brand-gray-400 font-display tracking-widest uppercase mb-2">Base Vehicle</p>
                  <p className="font-display font-medium italic text-sm">{project.carModel}</p>
                </div>
                <div>
                  <p className="text-[10px] text-brand-gray-400 font-display tracking-widest uppercase mb-2">Applied Skin</p>
                  <p className="font-display font-medium italic text-sm text-brand-cyan">{project.vinylType}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-brand-gray-800 text-[9px] font-display tracking-[0.2em] font-bold text-brand-gray-400 uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-3 text-xs font-display font-bold italic tracking-widest text-white hover:text-brand-cyan transition-colors group pt-4">
                EXPLORE FULL GALLERY
                <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
