import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Camera, Palette, Shield, Info, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NAV_ITEMS = [
  { id: 'catalogue', label: 'COLLECTIONS', icon: LayoutGrid },
  { id: 'gallery', label: 'PRECISION SHOWCASE', icon: Camera },
  { id: 'services', label: 'SERVICES & PRICING', icon: Shield },
  { id: 'custom', label: 'BESPOKE LAB', icon: Palette },
  { id: 'about', label: 'ATELIER STORY', icon: Info },
  { id: 'contact', label: 'INQUIRY', icon: Phone },
];

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside id="sidebar" className="fixed left-0 top-0 h-screen w-64 bg-brand-gray-900 border-r border-white/5 flex flex-col z-50">
      <div className="p-8 pb-12">
        <h1 className="text-2xl font-display italic font-black tracking-tighter text-white">
          KINETIC<br /><span className="text-brand-cyan">ATELIER</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3 text-sm font-display tracking-widest transition-all relative group",
                isActive ? "text-brand-cyan" : "text-brand-gray-400 hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-accent"
                  className="absolute left-0 w-1 h-6 bg-brand-cyan"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className={cn("w-5 h-5", isActive ? "text-brand-cyan" : "text-brand-gray-400 group-hover:text-white")} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-8 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          <span className="text-[10px] font-display text-brand-gray-400 tracking-widest uppercase">
            Surgical Precision Active
          </span>
        </div>
      </div>
    </aside>
  );
}
