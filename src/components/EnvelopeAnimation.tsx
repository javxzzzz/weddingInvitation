import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartIcon } from 'lucide-react';
type EnvelopeAnimationProps = {
  onOpen: () => void;
};
function Petal({
  delay,
  x,
  y,
  rotation





}: {delay: number;x: number;y: number;rotation: number;}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 pointer-events-none"
      initial={{
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0,
        rotate: 0
      }}
      animate={{
        x,
        y,
        scale: [0, 1.2, 1, 0.6],
        opacity: [0, 0.8, 0.6, 0],
        rotate: rotation
      }}
      transition={{
        duration: 4.5,
        delay,
        ease: 'easeOut'
      }}>
      
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
        <path
          d="M10 0C10 0 20 8 20 16C20 20.4 15.5 24 10 24C4.5 24 0 20.4 0 16C0 8 10 0 10 0Z"
          fill="#d4a853"
          opacity="0.6" />
        
      </svg>
    </motion.div>);

}
function Sparkle({ delay, x, y }: {delay: number;x: number;y: number;}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-gold-400 pointer-events-none"
      initial={{
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0
      }}
      animate={{
        x,
        y,
        scale: [0, 1, 0.5, 0],
        opacity: [0, 0.9, 0.5, 0]
      }}
      transition={{
        duration: 3.5,
        delay,
        ease: 'easeOut'
      }} />);


}
function LeafDecoration({
  className,
  flip



}: {className: string;flip?: boolean;}) {
  return (
    <svg
      className={className}
      width="40"
      height="60"
      viewBox="0 0 40 60"
      fill="none"
      style={{
        transform: flip ? 'scaleX(-1)' : undefined
      }}>
      
      <path
        d="M20 0C20 0 40 20 40 40C40 52 31 60 20 60C9 60 0 52 0 40C0 20 20 0 20 0Z"
        fill="#065f46"
        opacity="0.3" />
      
      <path d="M20 5V55" stroke="#d4a853" strokeWidth="0.5" opacity="0.5" />
      <path d="M20 15L12 25" stroke="#d4a853" strokeWidth="0.5" opacity="0.4" />
      <path d="M20 25L28 35" stroke="#d4a853" strokeWidth="0.5" opacity="0.4" />
    </svg>);

}
export function EnvelopeAnimation({ onOpen }: EnvelopeAnimationProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [showBurst, setShowBurst] = useState(false);
  const petals = Array.from(
    {
      length: 12
    },
    (_, i) => ({
      id: i,
      delay: 1.2 + i * 0.12,
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 500,
      rotation: Math.random() * 360 - 180
    })
  );
  const sparkles = Array.from(
    {
      length: 20
    },
    (_, i) => ({
      id: i,
      delay: 1.4 + i * 0.08,
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 600
    })
  );
  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => setShowBurst(true), 800);
    setTimeout(() => onOpen(), 3500);
  };
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950 overflow-hidden"
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.8
      }}>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #d4a853 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, #d4a853 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        
      </div>

      {/* Burst effects */}
      {showBurst &&
      <div className="absolute inset-0 pointer-events-none">
          {petals.map((p) =>
        <Petal
          key={p.id}
          delay={p.delay - 1.2}
          x={p.x}
          y={p.y}
          rotation={p.rotation} />

        )}
          {sparkles.map((s) =>
        <Sparkle key={s.id} delay={s.delay - 1.2} x={s.x} y={s.y} />
        )}
        </div>
      }

      <div className="relative flex flex-col items-center">
        {/* Envelope container */}
        <motion.div
          className="relative cursor-pointer"
          onClick={handleOpen}
          animate={
          isOpening ?
          {
            scale: [1, 1.02, 0.3],
            opacity: [1, 1, 0],
            y: [0, -20, 100]
          } :
          undefined
          }
          transition={
          isOpening ?
          {
            duration: 3,
            times: [0, 0.3, 1],
            ease: 'easeInOut'
          } :
          undefined
          }>
          
          {/* Envelope body */}
          <motion.div
            className="relative w-[320px] h-[220px] sm:w-[400px] sm:h-[270px] rounded-lg overflow-visible"
            style={{
              background:
              'linear-gradient(135deg, #065f46 0%, #047857 50%, #065f46 100%)',
              boxShadow:
              '0 20px 60px rgba(0,0,0,0.4), 0 0 0 2px #d4a853, inset 0 0 30px rgba(0,0,0,0.1)'
            }}
            animate={
            !isOpening ?
            {
              y: [0, -6, 0]
            } :
            undefined
            }
            transition={
            !isOpening ?
            {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            } :
            undefined
            }>
            
            {/* Gold border inset */}
            <div className="absolute inset-3 border border-gold-400/30 rounded pointer-events-none" />

            {/* Floral decorations */}
            <LeafDecoration className="absolute -top-4 -left-4 opacity-60" />
            <LeafDecoration
              className="absolute -top-4 -right-4 opacity-60"
              flip />
            
            <LeafDecoration className="absolute -bottom-4 -left-4 opacity-40 rotate-180" />
            <LeafDecoration
              className="absolute -bottom-4 -right-4 opacity-40 rotate-180"
              flip />
            

            {/* Envelope flap */}
            <div className="perspective-1000 absolute -top-[1px] left-0 right-0 z-10">
              <motion.div
                className="w-full origin-top"
                animate={
                isOpening ?
                {
                  rotateX: -180
                } :
                {
                  rotateX: 0
                }
                }
                transition={{
                  duration: 1,
                  delay: isOpening ? 0.3 : 0,
                  ease: 'easeInOut'
                }}
                style={{
                  transformStyle: 'preserve-3d'
                }}>
                
                <svg
                  viewBox="0 0 400 140"
                  className="w-full"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                  }}>
                  
                  <path
                    d="M0 0 L200 130 L400 0 Z"
                    fill="#054d38"
                    stroke="#d4a853"
                    strokeWidth="1" />
                  
                  <path
                    d="M0 0 L200 130 L400 0"
                    fill="none"
                    stroke="#d4a853"
                    strokeWidth="0.5"
                    opacity="0.5"
                    strokeDasharray="4 4"
                    transform="translate(0, 8) scale(0.96) translate(8, 0)" />
                  
                </svg>
              </motion.div>
            </div>

            {/* Inner V shape */}
            <svg
              viewBox="0 0 400 270"
              className="absolute inset-0 w-full h-full pointer-events-none">
              
              <path
                d="M0 270 L200 140 L400 270 Z"
                fill="#043d2e"
                opacity="0.5" />
              
            </svg>

            {/* Wax seal */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <motion.div
                animate={
                isOpening ?
                {
                  scale: [1, 1.1, 0],
                  opacity: [1, 0.6, 0]
                } :
                undefined
                }
                transition={
                isOpening ?
                {
                  duration: 1,
                  ease: 'easeOut'
                } :
                undefined
                }>
                
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center relative"
                  style={{
                    background:
                    'radial-gradient(circle at 35% 35%, #c0392b, #8b1a1a)',
                    boxShadow:
                    '0 4px 15px rgba(0,0,0,0.4), inset 0 -2px 6px rgba(0,0,0,0.3), inset 0 2px 6px rgba(255,255,255,0.1)'
                  }}>
                  
                  <div className="absolute inset-2 rounded-full border border-gold-400/40" />
                  <span className="font-playfair text-gold-300 text-xs sm:text-sm font-semibold tracking-wider">
                    R & J
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Card sliding out */}
            <AnimatePresence>
              {isOpening &&
              <motion.div
                className="absolute inset-4 bg-cream-50 rounded shadow-lg flex flex-col items-center justify-center z-5"
                initial={{
                  y: 40,
                  opacity: 0
                }}
                animate={{
                  y: [-20, -80],
                  opacity: [0, 1]
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                  ease: 'easeOut'
                }}>
                
                  <div className="absolute inset-2 border border-gold-400/30 rounded" />
                  <p className="font-cormorant text-emerald-800/60 text-xs tracking-widest uppercase mb-1">
                    You are invited
                  </p>
                  <h3 className="font-playfair text-emerald-900 text-lg sm:text-xl">
                   Roje & Judy
                  </h3>
                  <div className="w-12 h-px bg-gold-400 my-2" />
                  <p className="font-cormorant text-emerald-700 text-sm">
                   July 25, 2026
                  </p>
                </motion.div>
              }
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Tap to open text */}
        <AnimatePresence>
          {!isOpening &&
          <motion.div
            className="mt-12 flex flex-col items-center gap-3"
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -10
            }}
            transition={{
              delay: 0.5
            }}>
            
              <motion.div
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}>
              
                <HeartIcon className="w-5 h-5 text-gold-400" />
              </motion.div>
              <p className="font-cormorant text-gold-300 text-lg tracking-[0.3em] uppercase">
                Tap to Open
              </p>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.div>);

}
