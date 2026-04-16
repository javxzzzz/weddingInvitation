import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { heroImages } from '../assets/images';

const floatingPetals = [
  { left: '6%', size: 18, duration: 32, delay: -12, swayDuration: 9, swayDelay: -3, color: 'rgba(110, 231, 183, 0.32)' },
  { left: '14%', size: 14, duration: 28, delay: -5, swayDuration: 8, swayDelay: -1, color: 'rgba(52, 211, 153, 0.28)' },
  { left: '24%', size: 22, duration: 35, delay: -20, swayDuration: 10, swayDelay: -4, color: 'rgba(16, 185, 129, 0.24)' },
  { left: '33%', size: 16, duration: 30, delay: -8, swayDuration: 7, swayDelay: -2, color: 'rgba(52, 211, 153, 0.3)' },
  { left: '42%', size: 20, duration: 38, delay: -16, swayDuration: 11, swayDelay: -6, color: 'rgba(5, 150, 105, 0.24)' },
  { left: '52%', size: 15, duration: 29, delay: -10, swayDuration: 8, swayDelay: -3, color: 'rgba(16, 185, 129, 0.26)' },
  { left: '61%', size: 24, duration: 40, delay: -24, swayDuration: 12, swayDelay: -5, color: 'rgba(4, 120, 87, 0.22)' },
  { left: '70%', size: 17, duration: 33, delay: -14, swayDuration: 9, swayDelay: -4, color: 'rgba(52, 211, 153, 0.26)' },
  { left: '79%', size: 13, duration: 27, delay: -6, swayDuration: 7, swayDelay: -2, color: 'rgba(110, 231, 183, 0.3)' },
  { left: '88%', size: 21, duration: 37, delay: -18, swayDuration: 10, swayDelay: -7, color: 'rgba(5, 150, 105, 0.25)' },
  { left: '95%', size: 16, duration: 31, delay: -9, swayDuration: 8, swayDelay: -2, color: 'rgba(16, 185, 129, 0.28)' }
];

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60) % 24),
        minutes: Math.floor(diff / (1000 * 60) % 60),
        seconds: Math.floor(diff / 1000 % 60)
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);
  return timeLeft;
}
export function HeroSection() {
  const weddingDate = new Date('2026-07-25T10:00:00');
  const countdown = useCountdown(weddingDate);
  const countdownItems = [
  {
    value: countdown.days,
    label: 'Days'
  },
  {
    value: countdown.hours,
    label: 'Hours'
  },
  {
    value: countdown.minutes,
    label: 'Minutes'
  },
  {
    value: countdown.seconds,
    label: 'Seconds'
  }];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute -inset-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
          `url(${heroImages.background})`,
          transformOrigin: 'center'
        }} />
      

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/70 to-emerald-950/85" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #d4a853 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, #d4a853 1px, transparent 1px),
                            radial-gradient(circle at 50% 80%, #d4a853 1px, transparent 1px)`,
          backgroundSize: '80px 80px, 120px 120px, 100px 100px'
        }} />

      {/* Floating emerald petals */}
      <div className="hero-petals-layer">
        {floatingPetals.map((petal, index) =>
        <span
          key={`${petal.left}-${index}`}
          className="hero-petal"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size * 1.5}px`,
            background: petal.color,
            animationDuration: `${petal.duration}s, ${petal.swayDuration}s`,
            animationDelay: `${petal.delay}s, ${petal.swayDelay}s`
          }} />
        )}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
        <motion.p
          className="font-cormorant text-gold-300/80 text-sm sm:text-base tracking-[0.4em] uppercase mb-4"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>
          
          Together with their families
        </motion.p>

        <motion.h1
          className="text-cream-50 text-5xl sm:text-7xl lg:text-8xl leading-tight font-[Cinzel,_serif]"
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.4
          }}>
          
          Roje
        </motion.h1>

        <motion.div
          className="flex items-center gap-4 my-2"
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}>
          
          <div className="w-16 sm:w-24 h-px bg-gold-400/50" />
          <span className="font-cormorant text-gold-400 text-2xl sm:text-3xl italic">
            &
          </span>
          <div className="w-16 sm:w-24 h-px bg-gold-400/50" />
        </motion.div>

        <motion.h1
          className="text-cream-50 text-5xl sm:text-7xl lg:text-8xl leading-tight font-[Cinzel,_serif]"
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.8
          }}>
          
          Judy
        </motion.h1>

        <motion.div
          className="mt-8 mb-2"
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: 1.2,
            duration: 0.8
          }}>
          
          <div className="w-24 h-px bg-gold-400/40 mx-auto mb-6" />
        </motion.div>

        <motion.p
          className="font-cormorant text-gold-300 text-lg sm:text-xl tracking-wider"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.4
          }}>
          
          Saturday, July 25, 2026 • 10:00 AM
        </motion.p>

        <motion.p
          className="font-cormorant text-cream-200/60 text-sm tracking-widest uppercase mt-1"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.5
          }}>
          
          Agdeppa's Residence
        </motion.p>

        {/* Countdown */}
        <motion.div
          className="flex gap-4 sm:gap-8 mt-10"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 1.6
          }}>
          
          {countdownItems.map((item) =>
          <div key={item.label} className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-emerald-900/50 border border-gold-400/20 flex items-center justify-center backdrop-blur-sm">
                <span className="font-playfair text-cream-50 text-2xl sm:text-3xl">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <span className="font-lato text-gold-300/60 text-xs mt-2 tracking-wider uppercase">
                {item.label}
              </span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2
        }}>
        
        <span className="font-cormorant text-cream-200/40 text-xs tracking-[0.3em] uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{
            y: [0, 6, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}>
          
          <ChevronDownIcon className="w-5 h-5 text-gold-400/50" />
        </motion.div>
      </motion.div>
    </section>);

}
