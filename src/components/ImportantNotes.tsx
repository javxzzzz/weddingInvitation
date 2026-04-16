import React, { useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';
import { CalendarIcon, UsersIcon, MailIcon, InfoIcon } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
const notes = [
{
  icon: CalendarIcon,
  title: 'RSVP Deadline',
  description:
  'Please respond by September 15, 2025 so we can finalize arrangements.'
},
{
  icon: UsersIcon,
  title: 'Families Welcome',
  description:
  'Children are welcome at our celebration! Please include them in your RSVP guest count so we can prepare accordingly.'
},
{
  icon: MailIcon,
  title: 'Contact Us',
  description:
  'For any questions, please reach out to us at wedding@amaraandsebastian.com'
},
{
  icon: InfoIcon,
  title: 'Special Instructions',
  description:
  'The ceremony will be held outdoors. Please plan accordingly for weather. A shuttle service will be available between venues.'
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
export function ImportantNotes() {
  return (
    <section className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="font-cormorant text-gold-500 text-sm tracking-[0.3em] uppercase mb-3">
            Please note
          </p>
          <h2 className="font-playfair text-emerald-900 text-4xl sm:text-5xl mb-4">
            Important Details
          </h2>
          <SectionDivider />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {notes.map((note, i) => {
            const Icon = note.icon;
            return (
              <AnimatedSection key={note.title} delay={i * 0.1}>
                <div className="bg-white border border-emerald-100 rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h3 className="font-playfair text-emerald-900 text-lg mb-2">
                    {note.title}
                  </h3>
                  <p className="font-lato text-emerald-800/60 text-sm leading-relaxed">
                    {note.description}
                  </p>
                </div>
              </AnimatedSection>);

          })}
        </div>
      </div>
    </section>);

}