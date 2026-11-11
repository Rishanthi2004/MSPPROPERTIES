import React from 'react';
import { ArrowDown, Calendar, ShieldCheck, Compass, Sparkles } from 'lucide-react';
import { Language } from '../types/property';
import { TRANSLATIONS } from '../data/translations';

interface HeroSectionProps {
  language: Language;
  onOpenSiteVisit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onOpenSiteVisit,
}) => {
  const t = TRANSLATIONS[language];

  const handleScrollToProjects = () => {
    const el = document.getElementById('showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#2E050B]">
      {/* 
        CRITICAL REQUIREMENT:
        ONE SINGLE FULL-SCREEN HERO IMAGE.
        No carousel, no multiple slides, no 4 property images in hero.
        Full viewport coverage (background-size: cover / object-cover).
      */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/e4afbe01-3e47-4d62-a793-7a545da84bb7_7e463a75.jpg"
          alt="MSP Properties Premium Plotted Community Aerial View"
          className="w-full h-full object-cover object-center scale-[1.01] brightness-[1.03] contrast-[1.04] transform transition-transform duration-1000 ease-out"
        />
        {/* Subtle gradient overlay to keep text readable while showcasing the aerial layout clearly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E050B]/85 via-[#2E050B]/35 to-black/20 pointer-events-none" />
      </div>

      {/* Spacer to push content down below fixed single-line navbar */}
      <div className="h-14 sm:h-16" />

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white leading-[1.12] mb-5 drop-shadow-md">
            <span className="block text-white">{t.hero.headlinePart1}</span>
            <span className="block text-[#EAD09C]">{t.hero.headlinePart2}</span>
            <span className="block text-white">{t.hero.headlinePart3}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-[#FAF8F5]/90 max-w-2xl font-light leading-relaxed mb-9 drop-shadow-sm">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={handleScrollToProjects}
              className="px-7 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#DCBA77] text-[#2E050B] font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 border border-[#EAD09C]"
            >
              <span>{t.hero.btnExplore}</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenSiteVisit}
              className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold text-sm tracking-wider uppercase transition-all border border-white/30 hover:border-white/60 shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#DCBA77]" />
              <span>{t.hero.btnSchedule}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trust & Stats Bar at Bottom of Hero */}
      <div className="relative z-10 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-t border-[#C5A059]/40 py-4 sm:py-5 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#E7DFD4]">
            <div className="flex items-center gap-3 py-1 md:py-0 md:px-4">
              <div className="w-9 h-9 rounded-full bg-[#F7EFE1] flex items-center justify-center text-[#731622] shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#8F6B28]" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg sm:text-xl text-[#460C14] leading-tight">
                  15+ Years
                </p>
                <p className="text-xs text-[#5C131D]/80">{t.hero.stats.years}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 py-1 md:py-0 md:px-4">
              <div className="w-9 h-9 rounded-full bg-[#F7EFE1] flex items-center justify-center text-[#731622] shrink-0">
                <Compass className="w-5 h-5 text-[#8F6B28]" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg sm:text-xl text-[#460C14] leading-tight">
                  45+ Layouts
                </p>
                <p className="text-xs text-[#5C131D]/80">{t.hero.stats.layouts}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 py-1 md:py-0 md:px-4">
              <div className="w-9 h-9 rounded-full bg-[#F7EFE1] flex items-center justify-center text-[#731622] shrink-0">
                <Sparkles className="w-5 h-5 text-[#8F6B28]" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg sm:text-xl text-[#460C14] leading-tight">
                  4,200+
                </p>
                <p className="text-xs text-[#5C131D]/80">{t.hero.stats.families}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 py-1 md:py-0 md:px-4">
              <div className="w-9 h-9 rounded-full bg-[#F7EFE1] flex items-center justify-center text-[#731622] shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#731622]" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg sm:text-xl text-[#460C14] leading-tight">
                  100% Clear
                </p>
                <p className="text-xs text-[#5C131D]/80">{t.hero.stats.legal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
