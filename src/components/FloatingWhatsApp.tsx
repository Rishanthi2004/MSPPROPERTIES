import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Language } from '../types/property';

interface FloatingWhatsAppProps {
  language: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
      {/* Optional dismissible quick bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-1.5 py-1.5 px-3 bg-white text-[#460C14] text-xs font-semibold rounded-full shadow-lg border border-[#E7DFD4] animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>{language === 'ta' ? 'வாட்ஸ்அப் உதவி' : 'Chat on WhatsApp'}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="p-0.5 text-gray-400 hover:text-gray-600 rounded-full ml-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/919443210987?text=Hello%20MSP%20Properties,%20I%20would%20like%20to%20enquire%20about%20your%20villa%20plots."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-white focus:outline-none"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing radar ripple effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-[#25D366] relative z-10" />
      </a>
    </div>
  );
};
