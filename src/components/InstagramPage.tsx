import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { InstagramSection } from './InstagramSection';
import { Language } from '../types/property';

interface InstagramPageProps {
  language: Language;
  onBackToHome: () => void;
}

export const InstagramPage: React.FC<InstagramPageProps> = ({
  language,
  onBackToHome,
}) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#222222] font-sans pt-20 pb-20 relative overflow-hidden">
      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#731622] text-[#731622] hover:text-[#FAF8F5] border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{language === 'ta' ? 'முகப்பு பக்கத்திற்கு செல்ல' : 'Back to Home'}</span>
        </button>
      </div>

      {/* 4-Video Showcase Component */}
      <InstagramSection language={language} />
    </div>
  );
};
