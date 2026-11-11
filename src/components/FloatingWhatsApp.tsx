import React, { useState } from 'react';
import { X, Instagram } from 'lucide-react';
import { Language } from '../types/property';
import { INSTAGRAM_ACCOUNT_URL } from '../data/instagramReels';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingWhatsAppProps {
  language: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* 1. Floating Instagram Action (Directly above WhatsApp) */}
      <div className="flex items-center gap-2 group">
        <div className="hidden sm:group-hover:flex items-center gap-1.5 py-1 px-3 bg-white text-[#881616] text-xs font-semibold rounded-full shadow-lg border border-[#C5A059]/40 animate-in fade-in slide-in-from-right-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#E1306C] animate-pulse" />
          <span>{language === 'ta' ? 'இன்ஸ்டாகிராம் பக்கம்' : 'MSP Properties Instagram'}</span>
        </div>

        <a
          href={INSTAGRAM_ACCOUNT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-white focus:outline-none"
          title={language === 'ta' ? 'MSP Properties இன்ஸ்டாகிராம் பக்கம்' : 'Visit MSP Properties on Instagram'}
          aria-label="MSP Properties Instagram Profile"
        >
          <Instagram className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* 2. Floating WhatsApp Action */}
      <div className="flex items-center gap-2 group">
        {/* Optional dismissible quick bubble */}
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-1.5 py-1.5 px-3 bg-white text-[#520B0B] text-xs font-semibold rounded-full shadow-lg border border-[#E7DFD4] animate-in fade-in slide-in-from-right-4 duration-300">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>{language === 'ta' ? 'வாட்ஸ்அப் உதவி' : 'Chat on WhatsApp'}</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="p-0.5 text-gray-400 hover:text-gray-600 rounded-full ml-0.5 cursor-pointer"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <a
          href="https://wa.me/919443210987?text=Hello%20MSP%20Properties,%20I%20would%20like%20to%20enquire%20about%20your%20villa%20plots."
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer focus:outline-none"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing radar ripple effect */}
          <span className="absolute inset-0.5 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
          <WhatsAppIcon alt="WhatsApp" className="w-full h-full drop-shadow-xl relative z-10" />
        </a>
      </div>
    </div>
  );
};
