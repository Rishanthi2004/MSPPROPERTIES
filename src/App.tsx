import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PropertyShowcase } from './components/PropertyShowcase';
import { AboutSection } from './components/AboutSection';
import { InstagramSection } from './components/InstagramSection';
import { PropertyGallery } from './components/PropertyGallery';
import { SiteVisitSection } from './components/SiteVisitSection';
import { Footer } from './components/Footer';

import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PlotCalculatorModal } from './components/PlotCalculatorModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { PROPERTIES } from './data/properties';
import { Property, Language } from './types/property';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentRoute, setCurrentRoute] = useState<string>('/');

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [preselectedProjectName, setPreselectedProjectName] = useState<string | undefined>(undefined);
  const [calculatorProperty, setCalculatorProperty] = useState<Property | null>(null);

  // Handle initial hash or /instagram route by scrolling to corresponding section
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      const hash = window.location.hash.replace('#', '');

      if (pathname === '/instagram' || hash === 'instagram') {
        setTimeout(() => {
          const el = document.getElementById('instagram');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    }
  }, []);

  const handleNavigate = (route: string, hash?: string) => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined') {
      const targetHash = route === '/instagram' ? 'instagram' : hash;
      const url = targetHash ? `/#${targetHash}` : '/';
      window.history.pushState({}, '', url);

      if (targetHash) {
        setTimeout(() => {
          const el = document.getElementById(targetHash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenSiteVisit = (projectName?: string) => {
    if (projectName) {
      setPreselectedProjectName(projectName);
    }
    const el = document.getElementById('site-visit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestSiteVisitFromCard = (property: Property) => {
    setPreselectedProjectName(property.name);
    const el = document.getElementById('site-visit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = (property: Property) => {
    setCalculatorProperty(property);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#222222] font-sans antialiased selection:bg-[#881616] selection:text-[#FAF8F5]">
      {/* 1. NAVBAR */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenSiteVisit={handleOpenSiteVisit}
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
      />

      <main>
        {/* 2. HERO SECTION – ONE SINGLE FULL-SCREEN IMAGE */}
        <HeroSection
          language={language}
          onOpenSiteVisit={() => handleOpenSiteVisit()}
        />

        {/* 3. INSTAGRAM REELS SHOWCASE – RIGHT AFTER HERO SECTION */}
        <InstagramSection language={language} />

        {/* 4. PROPERTY SHOWCASE – FOUR VERTICALLY STACKED PROPERTY IMAGES */}
        <PropertyShowcase
          properties={PROPERTIES}
          language={language}
          onExploreProject={setSelectedProperty}
          onRequestSiteVisit={handleRequestSiteVisitFromCard}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* 5. ABOUT US */}
        <AboutSection language={language} />

        {/* 6. PROPERTY GALLERY – CONTINUOUS MOVING REEL */}
        <PropertyGallery language={language} />

        {/* 7. SINGLE DEDICATED BOOK SITE VISIT / ENQUIRY SECTION */}
        <SiteVisitSection
          properties={PROPERTIES}
          language={language}
          preselectedProject={preselectedProjectName}
        />
      </main>

      {/* FOOTER */}
      <Footer language={language} />

      {/* Interactive Modals */}
      <ProjectDetailModal
        property={selectedProperty}
        language={language}
        onClose={() => setSelectedProperty(null)}
        onRequestSiteVisit={handleRequestSiteVisitFromCard}
      />

      <PlotCalculatorModal
        isOpen={calculatorProperty !== null}
        onClose={() => setCalculatorProperty(null)}
        property={calculatorProperty}
      />

      {/* Floating WhatsApp Action Button in the Right Corner */}
      <FloatingWhatsApp language={language} />
    </div>
  );
}
