import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, ShieldCheck, Building } from 'lucide-react';
import { Language } from '../types/property';
import { TRANSLATIONS } from '../data/translations';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="about" className="py-10 sm:py-16 lg:py-20 bg-[#FCFBF9] relative overflow-hidden border-t border-[#E7DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Visual Collage - Hide and Show on Scroll */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg border-2 sm:border-4 border-white">
              <img
                src="/assets/aistudio/34bc6433-6e99-4621-916a-73d35c0f7d74_739b0252.jpg"
                alt="MSP Properties Demarcated Plots with Infrastructure"
                className="w-full h-48 sm:h-80 lg:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E050B]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium">
                Demarcated plots with streetlights & individual boundary stones
              </div>
            </div>

            {/* Inset floating secondary photo */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block absolute -bottom-7 -right-5 z-20 w-60 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white"
            >
              <img
                src="/assets/aistudio/8fcb9853-2f8f-4c8e-9428-ac1122023487_48721bf8.jpg"
                alt="MSP Properties Interconnecting Layout Aerial View"
                className="w-full h-36 object-cover"
              />
              <div className="p-2 bg-white text-center">
                <span className="text-[10px] font-bold text-[#460C14] uppercase tracking-wider block">
                  Prime Regional Corridors
                </span>
                <span className="text-[9px] text-[#8F6B28]">Namma Namakkal • Namma Karur • Salem • Erode</span>
              </div>
            </motion.div>

            {/* Experience Badge overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.15, ease: 'easeOut' }}
              className="absolute -top-4 -left-3 z-20 bg-[#5C131D] text-white p-3.5 sm:p-4 rounded-xl shadow-lg border border-[#C5A059]/40 flex items-center gap-3"
            >
              <Award className="w-7 h-7 text-[#DCBA77]" />
              <div>
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#EAD09C] leading-none">15+</p>
                <p className="text-[10px] text-[#FAF8F5]/90 uppercase tracking-wider font-semibold">
                  Years of Trust
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Narrative Content - Hide and Show on Scroll */}
          <motion.div
            initial={{ opacity: 0, x: 70, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7EFE1] border border-[#C5A059]/40 text-[#8F6B28] mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#731622]" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                {t.about.tag}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#460C14] tracking-wide leading-tight mb-5">
              {t.about.title}
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#5C131D]/85 leading-relaxed font-light mb-7">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* 3 Pillar Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-7">
              <div className="p-2.5 bg-white rounded-xl border border-[#E7DFD4] shadow-2xs flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8F6B28] shrink-0" />
                <span className="text-[11px] font-bold text-[#460C14]">{t.about.badge1}</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-[#E7DFD4] shadow-2xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#731622] shrink-0" />
                <span className="text-[11px] font-bold text-[#460C14]">{t.about.badge2}</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-[#E7DFD4] shadow-2xs flex items-center gap-2">
                <Building className="w-4 h-4 text-[#8F6B28] shrink-0" />
                <span className="text-[11px] font-bold text-[#460C14]">{t.about.badge3}</span>
              </div>
            </div>

            {/* Founder Quote */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border-l-4 border-[#731622] shadow-2xs">
              <p className="font-serif italic text-sm sm:text-base text-[#460C14] mb-1.5 leading-relaxed">
                {t.about.quote}
              </p>
              <p className="text-[11px] font-bold tracking-wider text-[#8F6B28] uppercase">
                {t.about.author}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
