import React from 'react';
import { Compass, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { Language } from '../types/property';
import { TRANSLATIONS } from '../data/translations';

interface FinalCTAProps {
  language: Language;
  onOpenSiteVisit: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  language,
  onOpenSiteVisit,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section className="py-20 lg:py-24 bg-[#460C14] text-white relative overflow-hidden">
      {/* Background ambient gold luxury glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/40 text-[#DCBA77] mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#DCBA77]" />
          <span className="text-xs font-bold tracking-widest uppercase">
            LIMITED PLOT AVAILABILITY
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          {t.cta.title}
        </h2>

        <p className="text-base sm:text-lg text-[#FAF8F5]/85 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenSiteVisit}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#DCBA77] text-[#2E050B] font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 border border-[#EAD09C]"
          >
            <Compass className="w-4 h-4 text-[#2E050B]" />
            <span>{t.cta.btn1}</span>
          </button>

          <a
            href="tel:+919443210987"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/30 hover:border-white/60 shadow-md flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#DCBA77]" />
            <span>{t.cta.btn2}</span>
          </a>

          <a
            href="https://wa.me/919443210987?text=Hello%20MSP%20Properties,%20I%20would%20like%20to%20know%20more%20about%20your%20villa%20plots."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
