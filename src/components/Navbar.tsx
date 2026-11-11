import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Compass, Instagram } from 'lucide-react';
import { Language } from '../types/property';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenSiteVisit: (projectName?: string) => void;
  currentRoute: string;
  onNavigate: (route: string, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenSiteVisit,
  currentRoute,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'projects' | 'about' | 'instagram' | 'gallery' | 'contact' | null>(null);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 30);

      const contact = document.getElementById('site-visit');
      const gallery = document.getElementById('gallery');
      const instagram = document.getElementById('instagram');
      const about = document.getElementById('about');
      const showcase = document.getElementById('showcase');

      const offset = 220;

      if (contact && scrollPos >= contact.offsetTop - offset) {
        setActiveSection('contact');
      } else if (gallery && scrollPos >= gallery.offsetTop - offset) {
        setActiveSection('gallery');
      } else if (instagram && scrollPos >= instagram.offsetTop - offset) {
        setActiveSection('instagram');
      } else if (about && scrollPos >= about.offsetTop - offset) {
        setActiveSection('about');
      } else if (showcase && scrollPos >= showcase.offsetTop - offset) {
        setActiveSection('projects');
      } else {
        // Scrolled to Hero Section at top
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  // Navigation items (HOME removed; touching MSP name brings to hero section):
  // PROJECTS | ABOUT | INSTAGRAM | GALLERY | CONTACT
  const navItems = [
    { id: 'projects', route: '/', hash: 'showcase', label: language === 'ta' ? 'திட்டங்கள்' : 'PROJECTS' },
    { id: 'about', route: '/', hash: 'about', label: language === 'ta' ? 'எங்களை பற்றி' : 'ABOUT' },
    { id: 'instagram', route: '/', hash: 'instagram', label: language === 'ta' ? 'இன்ஸ்டாகிராம்' : 'INSTAGRAM' },
    { id: 'gallery', route: '/', hash: 'gallery', label: language === 'ta' ? 'படத்தொகுப்பு' : 'GALLERY' },
    { id: 'contact', route: '/', hash: 'site-visit', label: language === 'ta' ? 'தொடர்புக்கு' : 'CONTACT' },
  ];

  const handleItemClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate('/', item.hash);
  };

  const isDarkHeroHeader = !isScrolled && currentRoute === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkHeroHeader
          ? 'bg-gradient-to-b from-black/70 via-black/35 to-transparent border-b border-white/10 py-3.5 text-white'
          : 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E7DFD4] py-2.5 text-[#460C14]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 sm:h-12 gap-3">
          {/* Brand Logo - Touching/Clicking brings user to the Hero Section */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              onNavigate('/', 'home');
              const el = document.getElementById('home');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2.5 shrink-0 group cursor-pointer"
            title="MSP PROPERTIES - Go to Hero Section"
          >
            <div
              className={`w-8 h-8 rounded flex items-center justify-center font-black text-sm tracking-wider transition-all ${
                isDarkHeroHeader
                  ? 'bg-white/15 backdrop-blur-md text-[#EAD09C] border border-white/30 shadow-md group-hover:bg-[#C5A059] group-hover:text-[#2E050B]'
                  : 'bg-[#5C131D] text-[#C5A059] border border-[#C5A059]/40 shadow-xs group-hover:bg-[#731622]'
              }`}
            >
              MSP
            </div>
            <span
              className={`font-bold tracking-wider whitespace-nowrap text-lg sm:text-xl transition-colors ${
                isDarkHeroHeader ? 'text-white drop-shadow-sm' : 'text-[#460C14] group-hover:text-[#731622]'
              }`}
            >
              MSP PROPERTIES
            </span>
          </a>

          {/* 
            NAV ITEMS:
            HOME | PROJECTS | ABOUT | INSTAGRAM | GALLERY | CONTACT
          */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.hash ? `#${item.hash}` : '#'}
                  onClick={(e) => handleItemClick(e, item)}
                  className={`text-xs xl:text-sm tracking-[0.14em] uppercase font-semibold transition-all relative py-1.5 whitespace-nowrap flex items-center gap-1 ${
                    isDarkHeroHeader
                      ? isActive
                        ? 'text-[#F5D580] font-bold drop-shadow-[0_2px_8px_rgba(245,213,128,0.4)]'
                        : 'text-white/85 hover:text-white hover:drop-shadow-sm'
                      : isActive
                      ? 'text-[#731622] font-bold'
                      : 'text-[#460C14]/80 hover:text-[#731622]'
                  }`}
                >
                  {item.id === 'instagram' && <Instagram className="w-3.5 h-3.5 shrink-0" />}
                  <span>{item.label}</span>

                  {/* Glowing gold underline indicator matching reference image */}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2.5px] rounded-full transition-all ${
                        isDarkHeroHeader
                          ? 'bg-gradient-to-r from-transparent via-[#F5D580] to-transparent shadow-[0_0_8px_#F5D580]'
                          : 'bg-[#731622]'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions & Language Switcher */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Language Toggle */}
            <div
              className={`flex items-center rounded-full p-0.5 border transition-colors ${
                isDarkHeroHeader
                  ? 'bg-white/10 backdrop-blur-md border-white/20'
                  : 'bg-[#F4EFE8] border-[#E7DFD4]'
              }`}
            >
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full transition-all ${
                  language === 'en'
                    ? isDarkHeroHeader
                      ? 'bg-white text-[#2E050B] shadow-xs'
                      : 'bg-[#5C131D] text-white shadow-xs'
                    : isDarkHeroHeader
                    ? 'text-white/80 hover:text-white'
                    : 'text-[#460C14] hover:text-[#731622]'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('ta')}
                className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full transition-all ${
                  language === 'ta'
                    ? isDarkHeroHeader
                      ? 'bg-white text-[#2E050B] shadow-xs'
                      : 'bg-[#5C131D] text-white shadow-xs'
                    : isDarkHeroHeader
                    ? 'text-white/80 hover:text-white'
                    : 'text-[#460C14] hover:text-[#731622]'
                }`}
                title="தமிழ்"
              >
                தமிழ்
              </button>
            </div>

            {/* Direct Phone Call */}
            <a
              href="tel:+919443210987"
              className={`hidden md:flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold rounded-full border transition-all whitespace-nowrap ${
                isDarkHeroHeader
                  ? 'text-white bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-xs'
                  : 'text-[#5C131D] bg-[#F7EFE1] hover:bg-[#EAD09C]/40 border-[#C5A059]/40'
              }`}
            >
              <Phone className={`w-3 h-3 ${isDarkHeroHeader ? 'text-[#F5D580]' : 'text-[#731622]'}`} />
              <span>+91 94432 10987</span>
            </a>

            {/* Site Visit Button */}
            <button
              onClick={() => {
                if (currentRoute !== '/') {
                  onNavigate('/', 'site-visit');
                } else {
                  onOpenSiteVisit();
                }
              }}
              className={`px-4 py-1.5 text-[11px] uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shadow-xs ${
                isDarkHeroHeader
                  ? 'bg-[#C5A059] hover:bg-[#DCBA77] text-[#2E050B] border border-[#EAD09C] shadow-md hover:scale-105'
                  : 'bg-[#731622] hover:bg-[#5C131D] text-[#FAF8F5] border border-[#C5A059]/40'
              }`}
            >
              <Compass className="w-3 h-3" />
              <span>{t.nav.siteVisit}</span>
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'ta' : 'en')}
              className={`px-2 py-0.5 text-[10px] font-bold rounded border ${
                isDarkHeroHeader
                  ? 'text-white bg-white/15 border-white/25'
                  : 'text-[#5C131D] bg-[#F7EFE1] border-[#C5A059]/40'
              }`}
            >
              {language === 'en' ? 'தமிழ்' : 'EN'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1.5 rounded-md transition-colors ${
                isDarkHeroHeader ? 'text-white hover:bg-white/10' : 'text-[#460C14] hover:bg-[#F4EFE8]'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E7DFD4] px-4 pt-2.5 pb-5 shadow-2xl animate-in slide-in-from-top-2 duration-150 text-[#460C14]">
          <nav className="flex flex-col space-y-2 pt-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.hash ? `#${item.hash}` : '#'}
                onClick={(e) => handleItemClick(e, item)}
                className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold rounded-md transition-colors flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-[#F7EFE1] text-[#731622] font-bold'
                    : 'text-[#460C14] hover:bg-[#F4EFE8]'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'instagram' && <Instagram className="w-4 h-4 text-[#C5A059]" />}
              </a>
            ))}
            <div className="pt-2.5 border-t border-[#E7DFD4] flex flex-col gap-2">
              <a
                href="tel:+919443210987"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#5C131D] bg-[#F7EFE1] border border-[#C5A059]/40 rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-[#731622]" />
                <span>Call +91 94432 10987</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (currentRoute !== '/') {
                    onNavigate('/', 'site-visit');
                  } else {
                    onOpenSiteVisit();
                  }
                }}
                className="w-full py-2.5 text-xs uppercase tracking-wider font-bold bg-[#731622] text-[#FAF8F5] rounded-lg shadow-sm"
              >
                {t.nav.siteVisit}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
