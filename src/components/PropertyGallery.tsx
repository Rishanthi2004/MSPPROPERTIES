import React, { useState } from 'react';
import { Eye, X, ZoomIn, Play, Pause, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Language } from '../types/property';
import { TRANSLATIONS } from '../data/translations';
import { GALLERY_ITEMS } from '../data/properties';

interface PropertyGalleryProps {
  language: Language;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const t = TRANSLATIONS[language];

  // Duplicate items to ensure seamless infinite looping in CSS marquee
  const marqueeItems = [...GALLERY_ITEMS, ...GALLERY_ITEMS];
  const reversedMarqueeItems = [...GALLERY_ITEMS.slice().reverse(), ...GALLERY_ITEMS.slice().reverse()];

  return (
    <section id="gallery" className="py-10 sm:py-16 lg:py-20 bg-[#FCFBF9] border-t border-[#E7DFD4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#F7EFE1] border border-[#C5A059]/40 text-[#8F6B28] mb-2">
              <Sparkles className="w-3 h-3 text-[#731622]" />
              <span className="text-[9px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                {t.gallery.tag} • LIVE ON-SITE DOCUMENTATION
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#460C14] tracking-tight">
              {t.gallery.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5C131D]/80 font-light mt-1 max-w-xl">
              {t.gallery.subtitle}
            </p>
          </div>

          {/* Moving Reel Status Indicator */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white border border-[#E7DFD4] text-[#460C14] text-[11px] sm:text-xs font-semibold hover:border-[#C5A059] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#731622]" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[#8F6B28]" />
                  <span>Pause</span>
                </>
              )}
            </button>
            <span className="text-[9px] sm:text-[10px] text-[#8F6B28] font-bold uppercase tracking-wider bg-[#F7EFE1] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-[#C5A059]/30">
              Auto-Moving Reel
            </span>
          </div>
        </div>
      </div>

      {/* 
        CONTINUOUS MOVING GALLERY REEL
      */}
      <div className="relative w-full space-y-3 sm:space-y-4 py-1">
        {/* Gradient edge fades for luxury look */}
        <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-28 bg-gradient-to-r from-[#FCFBF9] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-28 bg-gradient-to-l from-[#FCFBF9] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Moving Left */}
        <div className="overflow-hidden w-full flex">
          <div
            className="animate-marquee flex gap-3 sm:gap-5"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {marqueeItems.map((item, idx) => {
              const title = language === 'ta' ? item.titleTa : item.title;

              return (
                <div
                  key={`m1-${item.id}-${idx}`}
                  onClick={() => setSelectedImage(item)}
                  className="w-52 sm:w-80 h-36 sm:h-52 shrink-0 rounded-xl overflow-hidden relative group bg-[#2E050B] border border-[#E7DFD4] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                >
                  <img
                    src={item.src}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out brightness-[1.03] contrast-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute inset-0 p-3.5 flex flex-col justify-end text-white">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[9px] font-bold tracking-widest text-[#DCBA77] uppercase">
                        REAL SITE SHOT
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center group-hover:bg-[#C5A059] text-white group-hover:text-[#2E050B] transition-colors">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-sm font-bold text-white line-clamp-1">
                      {title}
                    </h3>
                    <p className="text-[10px] text-[#FAF8F5]/80 line-clamp-1 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Moving Reverse (Right) */}
        <div className="overflow-hidden w-full flex">
          <div
            className="animate-marquee-reverse flex gap-4 sm:gap-5"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {reversedMarqueeItems.map((item, idx) => {
              const title = language === 'ta' ? item.titleTa : item.title;

              return (
                <div
                  key={`m2-${item.id}-${idx}`}
                  onClick={() => setSelectedImage(item)}
                  className="w-48 sm:w-72 h-32 sm:h-48 shrink-0 rounded-xl overflow-hidden relative group bg-[#2E050B] border border-[#E7DFD4] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                >
                  <img
                    src={item.src}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out brightness-[1.03] contrast-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute inset-0 p-3.5 flex flex-col justify-end text-white">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[9px] font-bold tracking-widest text-[#DCBA77] uppercase">
                        INFRASTRUCTURE
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center group-hover:bg-[#C5A059] text-white group-hover:text-[#2E050B] transition-colors">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-sm font-bold text-white line-clamp-1">
                      {title}
                    </h3>
                    <p className="text-[10px] text-[#FAF8F5]/80 line-clamp-1 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-10 flex items-center justify-center animate-in fade-in duration-150"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1A0307] rounded-xl overflow-hidden border border-[#C5A059]/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#731622] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-4 sm:p-5 bg-[#2E050B] text-white border-t border-[#C5A059]/30">
              <span className="text-[10px] font-bold text-[#DCBA77] uppercase tracking-widest block mb-1">
                MSP PROPERTIES • ON-SITE PHOTOGRAPH
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
                {language === 'ta' ? selectedImage.titleTa : selectedImage.title}
              </h3>
              <p className="text-xs text-[#FAF8F5]/85 font-light">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
