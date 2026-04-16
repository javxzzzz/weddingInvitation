import React from 'react';
export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <div className="w-16 h-px bg-gold-400/30" />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 0C8 0 16 6 16 10C16 13 12.5 16 8 16C3.5 16 0 13 0 10C0 6 8 0 8 0Z"
          fill="#d4a853"
          opacity="0.4" />
        
      </svg>
      <div className="w-16 h-px bg-gold-400/30" />
    </div>);

}