import React from 'react';
import { motion } from 'motion/react';
import {
  FileCheck2,
  ShieldCheck,
  TrendingUp,
  Wrench,
  Building2,
  Award,
} from 'lucide-react';
import { Language } from '../types/property';
import { TRANSLATIONS } from '../data/translations';
import { TRUST_POINTS } from '../data/properties';

interface WhyChooseUsProps {
  language: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck2':
        return <FileCheck2 className="w-5 h-5 text-[#881616]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#8F6B28]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#881616]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#8F6B28]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#881616]" />;
      default:
        return <Award className="w-5 h-5 text-[#8F6B28]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Hide & Show on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7EFE1] border border-[#C5A059]/40 text-[#8F6B28] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#881616]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
              {t.whyUs.tag}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#520B0B] tracking-wide mb-3">
            {t.whyUs.title}
          </h2>

          <p className="text-xs sm:text-sm text-[#6E1010]/80 leading-relaxed font-light">
            {t.whyUs.subtitle}
          </p>
        </motion.div>

        {/* 6 Feature Grid - Hide & Show on scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TRUST_POINTS.map((point, idx) => {
            const title = language === 'ta' ? point.titleTa : point.title;
            const desc = language === 'ta' ? point.descriptionTa : point.description;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  delay: (idx % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white p-6 rounded-xl border border-[#E7DFD4] shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Subtle top gold accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#881616] via-[#C5A059] to-[#881616] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E7DFD4] flex items-center justify-center mb-4 group-hover:bg-[#F7EFE1] transition-colors shadow-2xs">
                  {getIcon(point.icon)}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-[#8F6B28] tracking-widest uppercase">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#520B0B] tracking-wide">
                    {title}
                  </h3>
                </div>

                <p className="text-xs text-[#6E1010]/80 leading-relaxed font-light">
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
