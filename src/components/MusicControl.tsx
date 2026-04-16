import React from 'react';
import { motion } from 'framer-motion';
import { Music2Icon, VolumeXIcon } from 'lucide-react';
type MusicControlProps = {
  playing: boolean;
  onToggle: () => void;
};
export function MusicControl({ playing, onToggle }: MusicControlProps) {
  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-gold-400/40 transition-colors duration-300"
      style={{
        background: playing ?
        'linear-gradient(135deg, #065f46, #047857)' :
        'linear-gradient(135deg, #064e3b, #022c22)'
      }}
      onClick={onToggle}
      whileHover={{
        scale: 1.1
      }}
      whileTap={{
        scale: 0.95
      }}
      initial={{
        opacity: 0,
        scale: 0
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        delay: 0.5
      }}
      aria-label={playing ? 'Pause wedding music' : 'Play wedding music'}>
      
      {playing ?
      <Music2Icon className="w-5 h-5 text-gold-400" /> :

      <VolumeXIcon className="w-5 h-5 text-gold-400/60" />
      }
    </motion.button>);

}
