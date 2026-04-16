import React, { useRef, lazy } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MapPinIcon,
  CarIcon,
  NavigationIcon,
  ChurchIcon,
  PartyPopperIcon, 
  PhoneCallIcon} from
'lucide-react';
import { SectionDivider } from './SectionDivider';
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
export function MapSection() {
  return (
    <section id="map" className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="font-cormorant text-gold-500 text-sm tracking-[0.3em] uppercase mb-3">
            Find your way
          </p>
          <h2 className="font-playfair text-emerald-900 text-4xl sm:text-5xl mb-4">
            Map & Directions
          </h2>
          <SectionDivider />
        </AnimatedSection>

        {/* Two separate maps */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Ceremony Map */}
          <AnimatedSection delay={0.1}>
            <div className="bg-white border border-emerald-100 rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 flex items-center gap-3 border-b border-emerald-50">
                <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <ChurchIcon className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-playfair text-emerald-900 text-sm">
                    The Ceremony
                  </h4>
                  <p className="font-lato text-emerald-800/50 text-xs"></p>
                </div>
              </div>
              <iframe
                title="Ceremony Location - St. Mary's Cathedral"
                src="https://www.google.com/maps/embed?pb=!4v1776145031193!6m8!1m7!1s51cZ5R63HA1OprHJUWhRjg!2m2!1d18.46395193565272!2d121.3397230676995!3f195.74344581033117!4f2.9591509967142002!5f0.7820865974627469"
                width="100%"
                height="250"
                style={{
                  border: 0
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full" />
              
              <div className="p-4">
                <p className="font-lato text-emerald-800/70 text-sm">
                  St. Peter the Martyr Parish Church
                </p>
                <p className="font-lato text-emerald-800/50 text-xs mt-1">
                  Ceremony begins at 10:00 AM
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Reception Map */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white border border-emerald-100 rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 flex items-center gap-3 border-b border-emerald-50">
                <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <PartyPopperIcon className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-playfair text-emerald-900 text-sm">
                    The Reception
                  </h4>
                  <p className="font-lato text-emerald-800/50 text-xs"></p>
                </div>
              </div>
              <iframe
                title="Reception Location - The Grand Emerald Ballroom"
                src="https://www.google.com/maps/embed?pb=!4v1776321624523!6m8!1m7!1sE3dz0Yq5eowqziBywlv5vQ!2m2!1d18.46917286876404!2d121.3685138278267!3f331.7687253231963!4f-9.405131748401644!5f0.7820865974627469"
                width="100%"
                height="250"
                style={{
                  border: 0
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full" />
              
              <div className="p-4">
                <p className="font-lato text-emerald-800/70 text-sm">
                  Agdeppa's Residence
                </p>
                <p className="font-lato text-emerald-800/50 text-xs mt-1">
                  Reception begins at 11:00 AM
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          <AnimatedSection delay={0.3}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <MapPinIcon className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-playfair text-emerald-900 text-base mb-1">
                  Venues
                </h4>
                <p className="font-lato text-emerald-800/60 text-sm leading-relaxed">
                  The ceremony venue is located in front of the Central School, while the reception will be held in Tayawa, Tabba, Pamplona, Cagayan. You can refer to Google Maps for directions.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <CarIcon className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-playfair text-emerald-900 text-base mb-1">
                  Parking
                </h4>
                <p className="font-lato text-emerald-800/60 text-sm leading-relaxed">
                 Please use the designated parking areas for your vehicles. Kindly avoid bringing too many vehicles to the reception, as parking space is limited.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <PhoneCallIcon className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-playfair text-emerald-900 text-base mb-1">
                  Contacts
                </h4>
                <p className="font-lato text-emerald-800/60 text-sm leading-relaxed">
                  For assistance with directions, please feel free to contact ExampleName at ExamplePhone.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>);

}