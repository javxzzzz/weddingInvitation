import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShirtIcon } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
const colorPalette = [
{
  name: 'Dark Emerald',
  color: '#064e3b'
},
{
  name: 'Emerald',
  color: '#065f46'
},
{
  name: 'Forest Green',
  color: '#047857'
},
{
  name: 'Sea Green',
  color: '#059669'
},
{
  name: 'Jade',
  color: '#10b981'
},
{
  name: 'Mint',
  color: '#6ee7b7'
}];

function AnimatedSection({
  children,
  className,
  delay = 0




}: {children: React.ReactNode;className?: string;delay?: number;}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: 40
      }}
      animate={
      inView ?
      {
        opacity: 1,
        y: 0
      } :
      undefined
      }
      transition={{
        duration: 0.8,
        delay,
        ease: 'easeOut'
      }}>
      
      {children}
    </motion.div>);

}
export function DressCode() {
  return (
    <section
      id="dresscode"
      className="py-20 sm:py-28 bg-emerald-900 relative overflow-hidden">
      
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #d4a853 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <div className="w-14 h-14 rounded-full bg-emerald-800 border border-gold-400/30 flex items-center justify-center mx-auto mb-6">
            <ShirtIcon className="w-6 h-6 text-gold-400" />
          </div>
          <p className="font-cormorant text-gold-400/70 text-sm tracking-[0.3em] uppercase mb-3">
            What to wear
          </p>
          <h2 className="font-playfair text-cream-50 text-4xl sm:text-5xl mb-4">
            Dress Code
          </h2>
          <SectionDivider />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-8">
          <h3 className="font-playfair text-gold-400 text-2xl mb-4">
            Black Tie Optional
          </h3>
          <p className="font-lato text-cream-200/70 text-base leading-relaxed max-w-xl mx-auto mb-10">
            We kindly request formal attire for our celebration. Gentlemen are
            encouraged to wear dark suits or tuxedos, and ladies may choose
            floor-length gowns or elegant cocktail dresses.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="font-cormorant text-cream-200/50 text-sm tracking-wider uppercase mb-6">
            Suggested Color Palette
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {colorPalette.map((c, i) =>
            <motion.div
              key={c.name}
              className="flex flex-col items-center gap-2"
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.3 + i * 0.08
              }}>
              
                <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gold-400/30 shadow-lg"
                style={{
                  backgroundColor: c.color
                }} />
              
                <span className="font-lato text-cream-200/50 text-xs">
                  {c.name}
                </span>
              </motion.div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>);

}