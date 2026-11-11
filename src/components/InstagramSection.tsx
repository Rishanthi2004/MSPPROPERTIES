import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Instagram,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MapPin,
  Film,
  ArrowRight,
} from 'lucide-react';
import { INSTAGRAM_REELS } from '../data/instagramReels';
import { InstagramReelEmbed } from './InstagramReelEmbed';
import { Language } from '../types/property';

interface InstagramSectionProps {
  language: Language;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReel = INSTAGRAM_REELS[currentIndex];
  const totalReels = INSTAGRAM_REELS.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalReels - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalReels - 1 ? 0 : prev + 1));
  };

  const currentTitle = language === 'ta' ? currentReel.titleTa : currentReel.title;
  const currentDesc = language === 'ta' ? currentReel.descriptionTa : currentReel.description;

  return (
    <section
      id="instagram"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] text-[#222222] font-sans relative overflow-hidden border-t border-[#E7DFD4]"
    >
      {/* Background architectural gold accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Instagram Account Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F7EFE1] border border-[#C5A059]/50 text-[#731622] mb-3.5 shadow-2xs">
            <Instagram className="w-4 h-4 text-[#8F6B28]" />
            <span className="text-xs font-bold tracking-wider">@msp_properties</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[10px] text-[#8F6B28] font-semibold">Official Channel</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#460C14] mb-3">
            {language === 'ta' ? 'MSP பிராப்பர்ட்டீஸ் காணொளிகள்' : 'Discover MSP Properties'}
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-[#5C131D]/85 font-light leading-relaxed mb-6 max-w-2xl mx-auto">
            {language === 'ta'
              ? 'எங்களின் வீட்டு மனைகள், உள்கட்டமைப்பு மற்றும் சமீபத்திய வீடியோக்களை நேரலையாகப் பாருங்கள்.'
              : 'Explore our properties, developments and stories through our latest videos.'}
          </p>

          {/* Follow on Instagram Action Button */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/msp_properties/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DCBA77] hover:from-[#DCBA77] hover:to-[#EAD09C] text-[#2E050B] text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105 cursor-pointer border border-[#EAD09C]"
            >
              <Instagram className="w-4 h-4 text-[#2E050B]" />
              <span>{language === 'ta' ? 'இன்ஸ்டாகிராமில் தொடரவும்' : 'Follow on Instagram'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 
          MAIN VIDEO PLAYER (One-by-One Video Experience with Next/Previous Controls Only)
        */}
        <div id="reel-player-anchor" className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#E7DFD4] shadow-xl p-4 sm:p-7 lg:p-9 relative">
            {/* Top Reel Counter & Next/Prev Controls */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E7DFD4]">
              {/* Counter and Dot Progress Indicators */}
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#731622]" />
                <span className="text-xs font-bold tracking-widest text-[#8F6B28] uppercase">
                  REEL {String(currentIndex + 1).padStart(2, '0')} / {String(totalReels).padStart(2, '0')}
                </span>

                {/* Dots indicator for current reel */}
                <div className="hidden sm:flex items-center gap-1.5 ml-2">
                  {INSTAGRAM_REELS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentIndex
                          ? 'w-6 bg-[#731622]'
                          : 'w-2 bg-[#E7DFD4] hover:bg-[#C5A059]'
                      }`}
                      title={`Jump to Reel ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Prev & Next Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="px-3 py-1.5 rounded-full bg-[#FAF8F5] hover:bg-[#5C131D] hover:text-white text-[#460C14] border border-[#E7DFD4] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs hover:scale-105"
                  title="Previous Video"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleNext}
                  className="px-4 py-1.5 rounded-full bg-[#731622] hover:bg-[#5C131D] text-white border border-[#C5A059]/40 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs hover:scale-105"
                  title="Next Video"
                >
                  <span>Next Reel</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Centered Reel Player with AnimatePresence Smooth Fade */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Instagram Embed Box (7 cols) */}
              <div className="lg:col-span-7 flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReel.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="w-full flex justify-center"
                  >
                    <InstagramReelEmbed reel={currentReel} language={language} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Reel Info & Details (5 cols) */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7EFE1] text-[#731622] text-xs font-semibold border border-[#C5A059]/30">
                  <Film className="w-3.5 h-3.5 text-[#8F6B28]" />
                  <span>MSP Featured Reel</span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-[#460C14] tracking-tight leading-snug">
                  {currentTitle}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-[#5C131D]/80">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span className="font-medium">{currentReel.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#5C131D]/85 leading-relaxed font-light">
                  {currentDesc}
                </p>

                {/* Next Reel Quick Action Button */}
                <div className="pt-2">
                  <button
                    onClick={handleNext}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#DCBA77] hover:from-[#DCBA77] hover:to-[#EAD09C] text-[#2E050B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.02] cursor-pointer border border-[#EAD09C]"
                  >
                    <span>{language === 'ta' ? 'அடுத்த ரீல் பார்க்க' : 'Watch Next Reel'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Direct Action */}
                <div className="pt-3 border-t border-[#E7DFD4] flex flex-col gap-2">
                  <a
                    href={currentReel.reelUrl || 'https://www.instagram.com/msp_properties/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-[#FAF8F5] hover:bg-[#F7EFE1] text-[#731622] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-[#E7DFD4]"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#8F6B28]" />
                    <span>Watch on @msp_properties</span>
                    <ExternalLink className="w-3 h-3 text-[#8F6B28]" />
                  </a>

                  <p className="text-[11px] text-[#8F6B28] text-center font-medium">
                    Tap the video above to play audio & controls
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
