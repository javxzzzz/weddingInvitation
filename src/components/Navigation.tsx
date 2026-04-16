import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const navLinks = [
{
  label: 'Home',
  href: '#hero'
},
{
  label: 'Our Story',
  href: '#story'
},
{
  label: 'Events',
  href: '#events'
},
{
  label: 'Location',
  href: '#map'
},
{
  label: 'Dress Code',
  href: '#dresscode'
},
{
  label: 'Gallery',
  href: '#gallery'
},
{
  label: 'Guestbook',
  href: '#guestbook'
}];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-emerald-950/90 backdrop-blur-md border-b border-gold-400/20 shadow-lg"
      initial={{
        y: -80,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.6,
        delay: 0.2
      }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('#hero')}
            className="font-playfair text-gold-400 text-xl tracking-wider hover:text-gold-300 transition-colors">
            
            R & J
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-lato text-cream-100 text-sm tracking-wide hover:text-gold-400 transition-colors duration-300 px-4 py-2 rounded-md hover:bg-emerald-800/30">
              
                {link.label}
              </button>
            )}

            {/* RSVP - highlighted and last */}
            <button
              onClick={() => scrollTo('#rsvp')}
              className="ml-2 font-lato text-sm tracking-wider px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-emerald-950 font-semibold rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
              
              RSVP
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-cream-100 hover:text-gold-400 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">
            
            {mobileOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          className="lg:hidden bg-emerald-950/98 backdrop-blur-md border-b border-gold-400/20"
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.3
          }}>
          
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) =>
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-lato text-cream-100 text-sm tracking-wide hover:text-gold-400 transition-colors text-left py-2 px-3 rounded-md hover:bg-emerald-800/30">
              
                  {link.label}
                </button>
            )}

              {/* RSVP - highlighted in mobile too */}
              <button
              onClick={() => scrollTo('#rsvp')}
              className="mt-2 font-lato text-sm tracking-wider py-3 px-4 bg-gold-500 hover:bg-gold-600 text-emerald-950 font-semibold rounded-md transition-colors duration-300 text-center">
              
                RSVP
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}