import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Maximize2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calculator,
  Compass,
  Check,
  Layers,
} from 'lucide-react';
import { Property, Language } from '../types/property';
import { TRANSLATIONS } from '../data/translations';

interface PropertyShowcaseProps {
  properties: Property[];
  language: Language;
  onExploreProject: (property: Property) => void;
  onRequestSiteVisit: (property: Property) => void;
  onOpenCalculator: (property: Property) => void;
}

export const PropertyShowcase: React.FC<PropertyShowcaseProps> = ({
  properties,
  language,
  onExploreProject,
  onRequestSiteVisit,
  onOpenCalculator,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="showcase" className="py-10 sm:py-14 lg:py-20 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle luxury grid accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Simple & Clean Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#F7EFE1] border border-[#C5A059]/40 text-[#8F6B28] mb-2 sm:mb-3">
            <Compass className="w-3 h-3 text-[#731622]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
              {t.showcase.tag}
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#460C14] tracking-tight mb-1.5 sm:mb-2.5">
            {t.showcase.heading}
          </h2>

          <p className="text-xs sm:text-sm text-[#5C131D]/80 leading-relaxed font-light max-w-lg mx-auto">
            {t.showcase.subtitle}
          </p>
        </motion.div>

        {/* 
          EXACTLY FOUR PROPERTY CARDS:
          - Optimized for mobile: compact, concise, easy to scan in one glance without exhausting scrolling.
          - Desktop: alternating layout with full specs.
          - Numbers and price removed.
          - Crystal clear images.
        */}
        <div className="space-y-5 sm:space-y-8 lg:space-y-12">
          {properties.slice(0, 4).map((property, index) => {
            const isImageLeft = index % 2 === 0;
            const initialX = isImageLeft ? -50 : 50;

            const name = language === 'ta' ? property.nameTa : property.name;
            const category = language === 'ta' ? property.categoryTa : property.category;
            const location = language === 'ta' ? property.locationTa : property.location;
            const plotSize = language === 'ta' ? property.plotSizeTa : property.plotSize;
            const availability =
              language === 'ta' ? property.availabilityTa : property.availability;
            const highlights =
              language === 'ta' ? property.highlightsTa : property.highlights;

            return (
              <motion.article
                key={property.id}
                id={`project-${property.id}`}
                initial={{ opacity: 0, x: initialX, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white rounded-xl border border-[#E7DFD4] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${
                    isImageLeft ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                  }`}
                >
                  {/* Property Image: Compact 170px on mobile, full height on desktop */}
                  <div className="lg:col-span-5 relative group overflow-hidden bg-[#FAF8F5] h-44 sm:h-56 lg:h-full lg:min-h-[300px]">
                    <img
                      src={property.image}
                      alt={`${name} - ${category}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.02] contrast-[1.03]"
                      loading="lazy"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
                      <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#5C131D]/90 backdrop-blur-xs text-[#FAF8F5] rounded shadow-xs border border-[#C5A059]/40">
                        {category}
                      </span>
                      <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-medium bg-white/95 backdrop-blur-xs text-[#460C14] rounded shadow-xs flex items-center gap-1 border border-[#E7DFD4]">
                        <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
                        <span>{property.approvalStatus}</span>
                      </span>
                    </div>

                    {/* Quick view button */}
                    <button
                      onClick={() => onExploreProject(property)}
                      className="absolute bottom-2.5 right-2.5 z-10 p-1.5 sm:p-2 rounded-full bg-white/95 hover:bg-white text-[#5C131D] shadow-md transition-transform hover:scale-110 cursor-pointer border border-[#E7DFD4]"
                      title="View Details"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Information Column: Compact on mobile, rich on desktop */}
                  <div className="lg:col-span-7 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between bg-white">
                    <div>
                      {/* Top Row: Category + Availability */}
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#8F6B28] uppercase">
                          {category}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold bg-[#F7EFE1] text-[#731622] border border-[#C5A059]/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                          {availability}
                        </span>
                      </div>

                      {/* Project Name */}
                      <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-[#460C14] tracking-tight mb-1">
                        {name}
                      </h3>

                      {/* Location with icon */}
                      <div className="flex items-center gap-1 text-[11px] sm:text-xs text-[#5C131D]/80 mb-2.5 sm:mb-3.5">
                        <MapPin className="w-3 h-3 text-[#C5A059] shrink-0" />
                        <span className="font-medium truncate">{location}</span>
                      </div>

                      {/* Compact Plot Specifications */}
                      <div className="grid grid-cols-2 gap-2 p-2 sm:p-2.5 bg-[#FAF8F5] rounded-lg border border-[#E7DFD4] mb-2.5 sm:mb-3.5 text-xs">
                        <div>
                          <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8F6B28] font-bold">
                            {t.showcase.plotSizeLabel}
                          </p>
                          <p className="font-bold text-xs sm:text-sm text-[#460C14] truncate">
                            {plotSize}
                          </p>
                        </div>
                        <div>
                          <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8F6B28] font-bold">
                            Status
                          </p>
                          <p className="font-bold text-xs sm:text-sm text-[#731622] flex items-center gap-1">
                            <Check className="w-3 h-3 text-[#25D366] shrink-0" />
                            <span className="truncate">Ready to Register</span>
                          </p>
                        </div>
                      </div>

                      {/* Key Highlights (compact on mobile: shows top 2 items so card is clean, all on sm+) */}
                      <div className="mb-3">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5">
                          {highlights.slice(0, 4).map((h, hIdx) => (
                            <li
                              key={hIdx}
                              className={`items-start gap-1 text-[11px] sm:text-xs text-[#460C14]/85 leading-tight ${
                                hIdx >= 2 ? 'hidden sm:flex' : 'flex'
                              }`}
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#8F6B28] shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons: 2 clean equal buttons on mobile, full flex on desktop */}
                    <div className="pt-2 sm:pt-3 border-t border-[#E7DFD4] flex items-center gap-2">
                      <button
                        onClick={() => onExploreProject(property)}
                        className="flex-1 py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-md bg-[#FAF8F5] hover:bg-[#F4EFE8] text-[#5C131D] font-bold text-[10px] sm:text-[11px] uppercase tracking-wider border border-[#C5A059]/40 transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>{t.showcase.btnExplore}</span>
                        <ArrowRight className="w-3 h-3 text-[#C5A059]" />
                      </button>

                      <button
                        onClick={() => onOpenCalculator(property)}
                        className="hidden sm:flex py-2 px-2.5 text-[11px] font-semibold text-[#8F6B28] hover:text-[#5C131D] transition-colors items-center gap-1 shrink-0"
                        title="Convert Cent to Sq.Ft"
                      >
                        <Calculator className="w-3 h-3" />
                        <span>Cent Calc</span>
                      </button>

                      <button
                        onClick={() => onRequestSiteVisit(property)}
                        className="flex-1 py-1.5 sm:py-2 px-2.5 sm:px-4 rounded-md bg-[#731622] hover:bg-[#5C131D] text-[#FAF8F5] font-bold text-[10px] sm:text-[11px] uppercase tracking-wider transition-all shadow-2xs hover:shadow-xs flex items-center justify-center gap-1 cursor-pointer border border-[#C5A059]/30"
                      >
                        <Calendar className="w-3 h-3 text-[#DCBA77]" />
                        <span>{t.showcase.btnVisit}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
