import React from 'react';
import { HeartIcon } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-emerald-950 py-12 border-t border-gold-400/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="font-playfair text-gold-400 text-2xl mb-2">
          Roje & Judy
        </h3>
        <p className="font-cormorant text-cream-200/50 text-base tracking-wider mb-6">
          July 25, 2026 • Agdeppa's Residence
        </p>
        <div className="w-16 h-px bg-gold-400/20 mx-auto mb-6" />
        <div className="flex items-center justify-center gap-1.5 text-cream-200/30">
          <span className="font-lato text-xs tracking-wider">Made with</span>
          <HeartIcon className="w-3 h-3 text-gold-400/50 fill-gold-400/50" />
          <span className="font-lato text-xs tracking-wider">
            for our special day
          </span>
        </div>
      </div>
    </footer>);

}