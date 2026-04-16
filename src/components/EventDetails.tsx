import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChurchIcon, PartyPopperIcon, ClockIcon } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
import { eventImages } from '../assets/images';
const timeline = [
{
  time: '10:00 AM',
  event: 'Ceremony',
},
{
  time: '11:30 AM',
  event: 'Cocktail Hour',
},
{
  time: '12:00 PM',
  event: 'Dinner & Toasts',
},
{
  time: '2:00 PM',
  event: 'Dancing & Celebration',
}
];

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
export function EventDetails() {
  return (
    <section
      id="events"
      className="py-20 sm:py-28 bg-emerald-950 relative overflow-hidden">
      
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #d4a853 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="font-cormorant text-gold-400/70 text-sm tracking-[0.3em] uppercase mb-3">
            Join us for
          </p>
          <h2 className="font-playfair text-cream-50 text-4xl sm:text-5xl mb-4">
            Event Details
          </h2>
          <SectionDivider />
        </AnimatedSection>

        {/* Venue Cards */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-16">
          <AnimatedSection delay={0.1}>
            <div className="bg-emerald-900/50 border border-gold-400/20 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="h-48 overflow-hidden">
                <img
                  src={eventImages.ceremony}
                  alt="St. Mary's Cathedral"
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-800 border border-gold-400/30 flex items-center justify-center mx-auto mb-4">
                  <ChurchIcon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="font-playfair text-cream-50 text-xl mb-1">
                  The Ceremony
                </h3>
                <p className="font-cormorant text-gold-400 text-lg mb-3">
                  8:00 AM
                </p>
                <p className="font-lato text-cream-200/80 text-sm font-semibold">
                  St. Peter the Martyr Parish Church
                </p>
                <p className="font-lato text-cream-200/50 text-sm mt-1">
                  Centro Pamplona Cagayan
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-emerald-900/50 border border-gold-400/20 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="h-48 overflow-hidden">
                <img
                  src={eventImages.reception}
                  alt="The Grand Emerald Ballroom"
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-800 border border-gold-400/30 flex items-center justify-center mx-auto mb-4">
                  <PartyPopperIcon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="font-playfair text-cream-50 text-xl mb-1">
                  The Reception
                </h3>
                <p className="font-cormorant text-gold-400 text-lg mb-3">
                  11:30 PM
                </p>
                <p className="font-lato text-cream-200/80 text-sm font-semibold">
                  Agdeppa's Residence
                </p>
                <p className="font-lato text-cream-200/50 text-sm mt-1">
                  Tabba Pamplona Cagayan
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Event Timeline */}
        <AnimatedSection className="text-center mb-8">
          <h3 className="font-playfair text-cream-50 text-2xl">
            Schedule of Events
          </h3>
        </AnimatedSection>

        <div className="max-w-md mx-auto">
          {timeline.map((item, i) =>
          <AnimatedSection key={item.event} delay={0.1 * i}>
              <div className="flex items-center gap-4 py-4 border-b border-gold-400/10 last:border-0">
                <div className="w-10 h-10 rounded-full bg-emerald-800/50 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-4 h-4 text-gold-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-playfair text-cream-50 text-base">
                      {item.event}
                    </h4>
                    <span className="font-cormorant text-gold-400 text-sm">
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>);

}
