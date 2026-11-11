import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Instagram,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowLeft,
  MapPin,
  Film,
} from 'lucide-react';
import { INSTAGRAM_REELS, InstagramReel } from '../data/instagramReels';
import { InstagramReelEmbed } from './InstagramReelEmbed';
import { Language } from '../types/property';

interface InstagramPageProps {
  language: Language;
  onBackToHome: () => void;
}

export const InstagramPage: React.FC<InstagramPageProps> = ({
  language,
  onBackToHome,
}) => {
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#222222] font-sans pt-20 pb-20 relative overflow-hidden">
      {/* Background architectural gold accents */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#2E050B] via-[#460C14] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back to Home Button */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/25 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:-translate-x-0.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'ta' ? 'முகப்பு பக்கத்திற்கு செல்ல' : 'Back to Home'}</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Instagram Account Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/40 text-[#DCBA77] mb-4 shadow-sm">
            <Instagram className="w-4 h-4 text-[#EAD09C]" />
            <span className="text-xs font-bold tracking-wider">@msp_properties</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[10px] text-white/80 font-medium">Official Channel</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 drop-shadow-md">
            {language === 'ta' ? 'MSP பிராப்பர்ட்டீஸ் காணொளிகள்' : 'Discover MSP Properties'}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#FAF8F5]/90 font-light leading-relaxed mb-6 max-w-2xl mx-auto">
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
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DCBA77] hover:from-[#DCBA77] hover:to-[#EAD09C] text-[#2E050B] text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer border border-[#EAD09C]"
            >
              <Instagram className="w-4 h-4 text-[#2E050B]" />
              <span>{language === 'ta' ? 'இன்ஸ்டாகிராமில் தொடரவும்' : 'Follow on Instagram'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 
          MAIN VIDEO PLAYER (One-by-One Video Experience)
        */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl border border-[#E7DFD4] shadow-xl p-4 sm:p-8 lg:p-10 relative">
            {/* Top Reel Counter & Controls */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E7DFD4]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#731622]" />
                <span className="text-xs font-bold tracking-widest text-[#8F6B28] uppercase">
                  REEL {String(currentIndex + 1).padStart(2, '0')} / {String(totalReels).padStart(2, '0')}
                </span>
              </div>

              {/* Prev & Next Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#FAF8F5] hover:bg-[#5C131D] hover:text-white text-[#460C14] border border-[#E7DFD4] text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs"
                  title="Previous Video"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <button
                  onClick={handleNext}
                  className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#731622] hover:bg-[#5C131D] text-white border border-[#C5A059]/40 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-xs"
                  title="Next Video"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Centered Reel Player with AnimatePresence Smooth Fade */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Instagram Embed Box (7 cols) */}
              <div className="lg:col-span-7 flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReel.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex justify-center"
                  >
                    <InstagramReelEmbed reel={currentReel} language={language} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Reel Info & Details (5 cols) */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7EFE1] text-[#731622] text-xs font-semibold border border-[#C5A059]/30">
                  <Film className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>MSP Featured Reel</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#460C14] tracking-tight leading-snug">
                  {currentTitle}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-[#5C131D]/80">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span className="font-medium">{currentReel.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#5C131D]/85 leading-relaxed font-light">
                  {currentDesc}
                </p>

                {/* Direct Action */}
                <div className="pt-4 border-t border-[#E7DFD4] flex flex-col gap-2.5">
                  <a
                    href={currentReel.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#5C131D] hover:bg-[#460C14] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
                  >
                    <Instagram className="w-4 h-4 text-[#DCBA77]" />
                    <span>Watch Full Quality on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <p className="text-[11px] text-[#8F6B28] text-center font-medium">
                    Tap the reel video above to play audio & controls
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
