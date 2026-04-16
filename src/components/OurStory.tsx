import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HeartIcon, CalendarIcon, SparklesIcon, GemIcon } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
import { storyImages } from '../assets/images';
const milestones = [
{
  icon: SparklesIcon,
  date: 'June 2019',
  title: 'First Meeting',
  description:
  "A chance encounter at a friend's garden party changed everything. Our eyes met across the room, and the rest is history.",
  photo: storyImages.milestones[0]
},
{
  icon: HeartIcon,
  date: 'August 2019',
  title: 'First Date',
  description:
  'A cozy dinner at a little Italian restaurant downtown. We talked for hours and knew this was something special.',
  photo: storyImages.milestones[1]
},
{
  icon: CalendarIcon,
  date: 'December 2024',
  title: 'The Proposal',
  description:
  'Under a canopy of winter stars, Sebastian got down on one knee. Through happy tears, Amara said yes.',
  photo: storyImages.milestones[2]
},
{
  icon: GemIcon,
  date: 'October 2025',
  title: 'The Wedding',
  description:
  "The day we've been dreaming of — surrounded by the people we love most.",
  photo: storyImages.milestones[3]
}];

const galleryPhotos = storyImages.moments;

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
export function OurStory() {
  return (
    <section id="story" className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="font-cormorant text-gold-500 text-sm tracking-[0.3em] uppercase mb-3">
            How it all began
          </p>
          <h2 className="font-playfair text-emerald-900 text-4xl sm:text-5xl mb-4">
            Our Story
          </h2>
          <SectionDivider />
          <p className="font-lato text-emerald-800/70 text-base leading-relaxed max-w-2xl mx-auto mt-6">
            Some love stories are written in the stars. Ours began with a simple
            hello and blossomed into a lifetime of laughter, adventure, and
            unwavering devotion. Here's a glimpse into our journey together.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-emerald-200 sm:-translate-x-px" />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;
            return (
              <AnimatedSection
                key={milestone.title}
                delay={index * 0.15}
                className={`relative flex items-start gap-4 sm:gap-0 mb-16 last:mb-0 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                
                {/* Content + Image stacked vertically */}
                <div
                  className={`flex-1 sm:w-1/2 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'} pl-12 sm:pl-0`}>
                  
                  <p className="font-cormorant text-gold-500 text-sm tracking-wider mb-1">
                    {milestone.date}
                  </p>
                  <h3 className="font-playfair text-emerald-900 text-xl mb-2">
                    {milestone.title}
                  </h3>
                  <p className="font-lato text-emerald-800/60 text-sm leading-relaxed mb-4">
                    {milestone.description}
                  </p>
                  {/* Photo below the text */}
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src={milestone.photo}
                      alt={milestone.title}
                      className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 hover:scale-105" />
                    
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-emerald-700 border-4 border-cream-50 flex items-center justify-center shadow-md z-10">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>

                {/* Spacer for the other side */}
                <div className="hidden sm:block flex-1 sm:w-1/2" />
              </AnimatedSection>);

          })}
        </div>

        {/* Extra Photos */}
        <AnimatedSection className="text-center mb-8">
          <h3 className="font-playfair text-emerald-900 text-2xl mb-2">
            Moments Together
          </h3>
          <SectionDivider />
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {galleryPhotos.map((photo, i) =>
          <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative overflow-hidden rounded-lg group aspect-square">
                <img
                src={photo}
                alt={`Couple photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-colors duration-500" />
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>);

}
