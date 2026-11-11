import React, { useState } from 'react';
import {
  X,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Download,
  Phone,
  Building,
  Droplets,
  Zap,
  Milestone,
  Compass,
} from 'lucide-react';
import { Property, Language } from '../types/property';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProjectDetailModalProps {
  property: Property | null;
  language: Language;
  onClose: () => void;
  onRequestSiteVisit: (property: Property) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  property,
  language,
  onClose,
  onRequestSiteVisit,
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!property) return null;

  const name = language === 'ta' ? property.nameTa : property.name;
  const category = language === 'ta' ? property.categoryTa : property.category;
  const location = language === 'ta' ? property.locationTa : property.location;
  const overview = language === 'ta' ? property.overviewTa : property.overview;
  const highlights = language === 'ta' ? property.highlightsTa : property.highlights;

  const handleDownloadBrochure = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-3 sm:p-6 lg:p-10 flex items-center justify-center animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-2xl my-auto text-[#520B0B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-[#881616] text-white transition-colors cursor-pointer shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#380606]">
          <img
            src={property.image}
            alt={name}
            className="w-full h-full object-cover object-center brightness-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#380606]/70 via-transparent to-transparent" />

          {/* Badges on image */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#6E1010] text-white rounded-full border border-[#C5A059]/40">
              {category}
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-white/95 text-[#520B0B] rounded-full flex items-center gap-1 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{property.approvalStatus}</span>
            </span>
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <span className="text-xs font-bold tracking-widest text-[#DCBA77] uppercase block mb-1">
              {category}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-1">
              {name}
            </h2>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#FAF8F5]/90">
              <MapPin className="w-4 h-4 text-[#DCBA77]" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-white rounded-xl border border-[#E7DFD4]">
            <div>
              <span className="text-[10px] font-bold tracking-wider text-[#8F6B28] uppercase block">
                Plot Range
              </span>
              <span className="font-serif font-bold text-sm sm:text-base text-[#520B0B]">
                {property.plotSize.split('(')[0]}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider text-[#8F6B28] uppercase block">
                Cents
              </span>
              <span className="font-serif font-bold text-sm sm:text-base text-[#520B0B]">
                {property.plotSize.includes('(')
                  ? property.plotSize.split('(')[1].replace(')', '')
                  : '3 - 10 Cents'}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider text-[#8F6B28] uppercase block">
                Status
              </span>
              <span className="font-serif font-bold text-sm sm:text-base text-[#881616]">
                Ready to Register
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider text-[#8F6B28] uppercase block">
                RERA Reg.
              </span>
              <span className="font-mono text-xs font-semibold text-[#520B0B]">
                {property.reraNo}
              </span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#520B0B] mb-2">
              Project Overview
            </h3>
            <p className="text-sm text-[#6E1010]/85 leading-relaxed font-light">
              {overview}
            </p>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#520B0B] mb-3">
              Infrastructure & Civil Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-[#E7DFD4] flex items-center gap-3">
                <Milestone className="w-4 h-4 text-[#881616]" />
                <div>
                  <span className="font-bold block text-[#520B0B]">Road Infrastructure</span>
                  <span className="text-[#6E1010]/80">{property.specifications.roadWidth}</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#E7DFD4] flex items-center gap-3">
                <Droplets className="w-4 h-4 text-[#8F6B28]" />
                <div>
                  <span className="font-bold block text-[#520B0B]">Water Facility</span>
                  <span className="text-[#6E1010]/80">{property.specifications.waterSource}</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#E7DFD4] flex items-center gap-3">
                <Zap className="w-4 h-4 text-[#881616]" />
                <div>
                  <span className="font-bold block text-[#520B0B]">Power Supply</span>
                  <span className="text-[#6E1010]/80">{property.specifications.electricity}</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#E7DFD4] flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#8F6B28]" />
                <div>
                  <span className="font-bold block text-[#520B0B]">Enclosure & Boundary</span>
                  <span className="text-[#6E1010]/80">{property.specifications.boundary}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#520B0B] mb-2.5">
              Approved Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-[#520B0B]">
                  <CheckCircle2 className="w-4 h-4 text-[#8F6B28] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nearby Landmarks */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#520B0B] mb-2.5">
              Strategic Connectivity & Proximities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {property.nearbyLandmarks.map((lm, i) => (
                <div
                  key={i}
                  className="p-2.5 bg-white rounded-lg border border-[#E7DFD4] flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{lm}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#E7DFD4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleDownloadBrochure}
              className="flex-1 sm:flex-initial py-2.5 px-4 rounded-lg bg-[#FAF8F5] hover:bg-[#F4EFE8] text-[#6E1010] text-xs font-bold uppercase tracking-wider border border-[#C5A059]/40 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#8F6B28]" />
              <span>{downloaded ? 'Brochure Downloaded!' : 'Download Brochure'}</span>
            </button>

            <a
              href={`https://wa.me/919443210987?text=Hello%20MSP%20Properties,%20please%20send%20me%20the%20master%20layout%20plan%20for%20${encodeURIComponent(
                property.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors flex items-center justify-center"
              title="WhatsApp Layout Query"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestSiteVisit(property);
            }}
            className="w-full sm:w-auto py-2.5 px-6 rounded-lg bg-[#881616] hover:bg-[#6E1010] text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/30"
          >
            <Calendar className="w-4 h-4 text-[#DCBA77]" />
            <span>Book Site Visit for this Project</span>
          </button>
        </div>
      </div>
    </div>
  );
};
