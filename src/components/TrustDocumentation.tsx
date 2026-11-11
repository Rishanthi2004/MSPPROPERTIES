import React, { useState } from 'react';
import {
  ShieldCheck,
  FileText,
  Building,
  CheckCircle2,
  FileCheck,
  Lock,
  Download,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { Language } from '../types/property';
import { TRANSLATIONS } from '../data/translations';

interface TrustDocumentationProps {
  language: Language;
  onOpenSiteVisit: (project?: string) => void;
}

export const TrustDocumentation: React.FC<TrustDocumentationProps> = ({
  language,
  onOpenSiteVisit,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const t = TRANSLATIONS[language];

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const checklistItems = [
    {
      title: '30-Year Encumbrance Certificate (EC)',
      desc: 'Form 15 issued by TN Registration Department verifying nil hypothecation or legal disputes.',
    },
    {
      title: 'Valid Revenue Patta & Chitta Adangal',
      desc: 'Direct sub-division computer patta ready for immediate transfer into buyer’s individual name.',
    },
    {
      title: 'Directorate of Town & Country Planning (DTCP)',
      desc: 'Sanctioned layout drawing with registered OSR gift deed to local civic bodies for public parks & roads.',
    },
    {
      title: 'Tamil Nadu Real Estate Regulatory Authority (TNRERA)',
      desc: 'Mandatory RERA project registration with quarterly compliance declarations.',
    },
    {
      title: 'Nationalized Bank Legal Scrutiny Reports (TSR)',
      desc: 'Title Search Reports issued by senior bank empaneled advocates from SBI and HDFC.',
    },
  ];

  return (
    <section id="trust" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7EFE1] border border-[#C5A059]/40 text-[#8F6B28] mb-4">
            <ShieldCheck className="w-4 h-4 text-[#731622]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">
              {t.trust.tag}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#460C14] tracking-tight mb-4">
            {t.trust.title}
          </h2>

          <p className="text-base sm:text-lg text-[#5C131D]/80 leading-relaxed font-light">
            {t.trust.subtitle}
          </p>
        </div>

        {/* 4 Trust Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-[#E7DFD4] shadow-xs hover:border-[#C5A059] transition-all">
            <div className="w-11 h-11 rounded-lg bg-[#FAF8F5] border border-[#E7DFD4] flex items-center justify-center text-[#731622] mb-4">
              <FileCheck className="w-5 h-5 text-[#731622]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#460C14] mb-2">
              {t.trust.box1Title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C131D]/80 leading-relaxed font-light">
              {t.trust.box1Desc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E7DFD4] shadow-xs hover:border-[#C5A059] transition-all">
            <div className="w-11 h-11 rounded-lg bg-[#FAF8F5] border border-[#E7DFD4] flex items-center justify-center text-[#8F6B28] mb-4">
              <Lock className="w-5 h-5 text-[#8F6B28]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#460C14] mb-2">
              {t.trust.box2Title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C131D]/80 leading-relaxed font-light">
              {t.trust.box2Desc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E7DFD4] shadow-xs hover:border-[#C5A059] transition-all">
            <div className="w-11 h-11 rounded-lg bg-[#FAF8F5] border border-[#E7DFD4] flex items-center justify-center text-[#731622] mb-4">
              <FileText className="w-5 h-5 text-[#731622]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#460C14] mb-2">
              {t.trust.box3Title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C131D]/80 leading-relaxed font-light">
              {t.trust.box3Desc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E7DFD4] shadow-xs hover:border-[#C5A059] transition-all">
            <div className="w-11 h-11 rounded-lg bg-[#FAF8F5] border border-[#E7DFD4] flex items-center justify-center text-[#8F6B28] mb-4">
              <Building className="w-5 h-5 text-[#8F6B28]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#460C14] mb-2">
              {t.trust.box4Title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C131D]/80 leading-relaxed font-light">
              {t.trust.box4Desc}
            </p>
          </div>
        </div>

        {/* Detailed Verification Checklist & Bank Tie-ups container */}
        <div className="bg-white rounded-2xl border border-[#E7DFD4] p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-[#8F6B28] uppercase block mb-2">
                TRANSPARENCY STANDARD
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#460C14] mb-4">
                What We Hand Over Before You Pay a Single Rupee
              </h3>
              <p className="text-sm text-[#5C131D]/85 leading-relaxed font-light mb-6">
                We believe you should have total clarity before making your commitment. You can request a certified copy of the parent link document, approved DTCP master layout drawing, and government revenue patta for any plot:
              </p>

              <div className="space-y-3">
                {checklistItems.map((item, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#8F6B28] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#460C14]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#5C131D]/80 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Approved Banks & Download Callout */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-7 rounded-xl border border-[#E7DFD4]">
              <h4 className="font-serif text-xl font-bold text-[#460C14] mb-3">
                Pre-Approved Bank Partnerships
              </h4>
              <p className="text-xs text-[#5C131D]/80 mb-5 font-light">
                Our layouts enjoy express loan sanctions up to 80% with flexible tenures up to 20 years:
              </p>

              <div className="grid grid-cols-2 gap-2.5 mb-6">
                <div className="p-3 bg-white rounded-lg border border-[#E7DFD4] text-center shadow-2xs">
                  <p className="font-bold text-xs text-[#460C14]">State Bank of India</p>
                  <p className="text-[10px] text-[#8F6B28]">SBI Realty Loan</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E7DFD4] text-center shadow-2xs">
                  <p className="font-bold text-xs text-[#460C14]">HDFC Bank</p>
                  <p className="text-[10px] text-[#8F6B28]">Plot + Construction</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E7DFD4] text-center shadow-2xs">
                  <p className="font-bold text-xs text-[#460C14]">ICICI Bank</p>
                  <p className="text-[10px] text-[#8F6B28]">Fast Track Approvals</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E7DFD4] text-center shadow-2xs">
                  <p className="font-bold text-xs text-[#460C14]">Canara Bank</p>
                  <p className="text-[10px] text-[#8F6B28]">Nationalized Scheme</p>
                </div>
              </div>

              {/* Action: Legal Checklist Guide Download */}
              <button
                onClick={handleDownload}
                className="w-full py-3 px-4 rounded-lg bg-[#5C131D] hover:bg-[#460C14] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-[#DCBA77]" />
                <span>{t.trust.btnDownloadBrochure}</span>
              </button>

              {downloadSuccess && (
                <div className="mt-3 p-2.5 bg-[#25D366]/10 border border-[#25D366]/30 rounded-md text-[11px] text-[#075E54] font-semibold text-center flex items-center justify-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Legal verification checklist downloaded successfully!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
