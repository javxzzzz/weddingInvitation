import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
import { galleryImages } from '../assets/images';

const photos = galleryImages;

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
export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
  setLightboxIndex((i) =>
  i !== null ? (i - 1 + photos.length) % photos.length : null
  );
  const next = () =>
  setLightboxIndex((i) => i !== null ? (i + 1) % photos.length : null);
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="font-cormorant text-gold-500 text-sm tracking-[0.3em] uppercase mb-3">
            Captured moments
          </p>
          <h2 className="font-playfair text-emerald-900 text-4xl sm:text-5xl mb-4">
            Gallery
          </h2>
          <SectionDivider />
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((photo, i) =>
          <AnimatedSection key={i} delay={i * 0.05}>
              <button
              onClick={() => openLightbox(i)}
              className="relative overflow-hidden rounded-lg group aspect-square w-full">
              
                <img
                src={photo}
                alt={`Gallery photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/30 transition-colors duration-500 flex items-center justify-center">
                  <span className="font-lato text-cream-50 text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </button>
            </AnimatedSection>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null &&
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={closeLightbox}>
          
            <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close lightbox">
            
              <XIcon className="w-8 h-8" />
            </button>

            <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Previous photo">
            
              <ChevronLeftIcon className="w-10 h-10" />
            </button>

            <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Next photo">
            
              <ChevronRightIcon className="w-10 h-10" />
            </button>

            <motion.img
            key={lightboxIndex}
            src={photos[lightboxIndex]}
            alt={`Gallery photo ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.9
            }}
            transition={{
              duration: 0.3
            }}
            onClick={(e) => e.stopPropagation()} />
          
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}
