import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { Language } from '../types/property';
import { TRANSLATIONS } from '../data/translations';
import { PROPERTIES } from '../data/properties';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-[#2E050B] text-white border-t border-[#C5A059]/30 relative overflow-hidden">
      {/* Top subtle gold accent border */}
      <div className="h-1 bg-gradient-to-r from-[#731622] via-[#C5A059] to-[#731622]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#5C131D] flex items-center justify-center text-[#C5A059] border border-[#C5A059]/40 shadow-sm">
                <span className="font-serif font-bold text-lg tracking-wider">MSP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-tight">
                  MSP PROPERTIES
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#DCBA77] uppercase">
                  {t.brandSubtitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF8F5]/75 leading-relaxed font-light">
              {t.footer.aboutText}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="tel:+919443210987"
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#2E050B] text-white transition-colors"
                title="Call MSP Properties"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919443210987"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#25D366] text-white transition-colors"
                title="WhatsApp MSP Properties"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@mspproperties.in"
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#2E050B] text-white transition-colors"
                title="Email MSP Properties"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DCBA77]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>
                <a href="#showcase" className="hover:text-[#DCBA77] transition-colors">
                  {t.nav.developments}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#DCBA77] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-[#DCBA77] transition-colors">
                  Instagram Reels
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#DCBA77] transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#site-visit" className="hover:text-[#DCBA77] transition-colors">
                  {t.nav.siteVisit}
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Developments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DCBA77]">
              {t.footer.developments}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F5]/80">
              {PROPERTIES.map((prop) => (
                <li key={prop.id}>
                  <a
                    href={`#project-${prop.id}`}
                    className="hover:text-[#DCBA77] transition-colors block"
                  >
                    <span className="font-semibold text-white block">
                      {language === 'ta' ? prop.nameTa : prop.name}
                    </span>
                    <span className="text-[11px] text-[#FAF8F5]/60">
                      {prop.category} • {prop.location.split(',')[0]}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DCBA77]">
              {t.footer.offices}
            </h4>
            <div className="space-y-3 text-xs text-[#FAF8F5]/80 font-light">
              <a
                href="https://maps.app.goo.gl/oam7PuZEW2iQ2JAp8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#DCBA77] transition-colors group cursor-pointer"
                title="Open MSP PROPERTIES & BUILDERS on Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="underline decoration-[#C5A059]/40 underline-offset-2">{t.footer.cbeOffice}</span>
                <ExternalLink className="w-3 h-3 text-[#C5A059] shrink-0 mt-0.5" />
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{t.footer.erodeOffice}</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-white font-medium">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>+91 94432 10987 / +91 98421 54321</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Credit Note */}
        <div className="pt-8 text-xs text-[#FAF8F5]/60 space-y-3 font-light">
          <p className="leading-relaxed">{t.footer.disclaimer}</p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/5">
            <p>© {new Date().getFullYear()} MSP PROPERTIES. All rights reserved.</p>
            <p className="text-[#DCBA77]/80 text-[11px]">
              {t.footer.credit}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
