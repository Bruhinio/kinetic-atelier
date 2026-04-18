import React from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Mail, Instagram, Zap } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="p-12 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-24 mt-12">
        <div className="text-left">
          <h3 className="text-sm font-display tracking-[0.3em] text-brand-cyan mb-4 uppercase">
            Initiate Contact
          </h3>
          <h2 className="text-7xl font-display italic font-black tracking-tighter leading-none mb-8">
            INQUIRY <br />
            <span className="text-gradient">COMMISSION</span>
          </h2>
          <p className="text-brand-gray-400 max-w-xl font-light italic">
            Due to the intensity of our precision process, we accept a limited number of commissions per month. 
            Please provide technical details for your vehicle below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Inquiry Form */}
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-display tracking-widest text-brand-gray-400 uppercase">IDENTIFIER</label>
                <input 
                  type="text" 
                  placeholder="NAME / TAG" 
                  className="w-full bg-brand-gray-900 border border-white/10 px-6 py-4 text-white font-display italic text-sm focus:border-brand-cyan outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-display tracking-widest text-brand-gray-400 uppercase">SIGNAL</label>
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-brand-gray-900 border border-white/10 px-6 py-4 text-white font-display italic text-sm focus:border-brand-cyan outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-display tracking-widest text-brand-gray-400 uppercase">VEHICLE SPECIFICATION</label>
              <input 
                type="text" 
                placeholder="YEAR, MAKE, MODEL" 
                className="w-full bg-brand-gray-900 border border-white/10 px-6 py-4 text-white font-display italic text-sm focus:border-brand-cyan outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-display tracking-widest text-brand-gray-400 uppercase">DESIRED CALIBRATION</label>
              <select className="w-full bg-brand-gray-900 border border-white/10 px-6 py-4 text-white font-display italic text-sm focus:border-brand-cyan outline-none transition-colors appearance-none" defaultValue="">
                <option value="" disabled>SELECT TIER</option>
                <option value="essential">ESSENTIAL CORE</option>
                <option value="precision">PRECISION ULTRA</option>
                <option value="apex">APEX ATELIER</option>
                <option value="dtf">DTF LIVERY ONLY</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-display tracking-widest text-brand-gray-400 uppercase">ADDITIONAL DATA</label>
              <textarea 
                rows={5} 
                placeholder="DESCRIBE YOUR VISION..." 
                className="w-full bg-brand-gray-900 border border-white/10 px-6 py-4 text-white font-display italic text-sm focus:border-brand-cyan outline-none transition-colors resize-none"
              />
            </div>

            <button className="px-12 py-5 bg-brand-cyan text-brand-black font-display font-black italic tracking-widest hover:bg-white transition-all flex items-center gap-4 group">
              TRANSMIT REQUEST
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

          {/* Contact Details side */}
          <div className="lg:pl-20 space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-brand-gray-900 border border-white/10 group-hover:border-brand-cyan transition-colors">
                  <MapPin className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] text-brand-gray-400 font-display uppercase mb-2">ATELIER LOCATION</h4>
                  <p className="text-white font-display font-black italic tracking-tight">1240 N SPRING ST, LOS ANGELES, CA</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-brand-gray-900 border border-white/10 group-hover:border-brand-cyan transition-colors">
                  <Mail className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] text-brand-gray-400 font-display uppercase mb-2">SIGNAL PORT</h4>
                  <p className="text-white font-display font-black italic tracking-tight">INQUIRY@KINETICATELIER.EXE</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-brand-gray-900 border border-white/10 group-hover:border-brand-cyan transition-colors">
                  <Instagram className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] text-brand-gray-400 font-display uppercase mb-2">DOCS & FEED</h4>
                  <p className="text-white font-display font-black italic tracking-tight">@KINETIC_ATELIER</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-10 relative overflow-hidden">
               <div className="relative z-10 space-y-4">
                 <h4 className="text-brand-cyan text-xs font-display font-black tracking-widest uppercase italic">ATELIER HOURS</h4>
                 <div className="space-y-2 text-[10px] tracking-[0.2em] font-display text-brand-gray-400">
                    <p className="flex justify-between"><span>MON - FRI</span> <span className="text-white">09:00 — 18:00</span></p>
                    <p className="flex justify-between"><span>SATURDAY</span> <span className="text-white">BY APPOINTMENT</span></p>
                    <p className="flex justify-between"><span>SUNDAY</span> <span className="text-brand-cyan animate-pulse">RECHARGING</span></p>
                 </div>
               </div>
               
               {/* Decorative gear or similar bg icon */}
               <div className="absolute -bottom-10 -right-10 opacity-5">
                 <Zap className="w-40 h-40" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
