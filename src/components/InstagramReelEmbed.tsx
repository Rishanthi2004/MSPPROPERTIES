import React, { useEffect, useState } from 'react';
import { ExternalLink, Instagram, Play, RefreshCw, Volume2 } from 'lucide-react';
import { InstagramReel, INSTAGRAM_ACCOUNT_URL } from '../data/instagramReels';

interface InstagramReelEmbedProps {
  reel: InstagramReel;
  language: 'en' | 'ta';
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export const InstagramReelEmbed: React.FC<InstagramReelEmbedProps> = ({ reel, language }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPoster, setShowPoster] = useState(false);

  // Extract clean reel shortcode (e.g. C8qX5N0yB7R)
  const extractReelId = (url: string) => {
    const match = url.match(/(?:reel|p)\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const reelId = extractReelId(reel.reelUrl);
  const iframeSrc = reelId
    ? `https://www.instagram.com/reel/${reelId}/embed/?utm_source=ig_web_copy_link`
    : null;

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setShowPoster(false);

    // Inject Instagram embed.js only once
    const existingScript = document.getElementById('instagram-embed-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      script.onerror = () => {
        // Fallback to iframe
      };
      document.body.appendChild(script);
    } else if (window.instgrm) {
      setTimeout(() => {
        try {
          window.instgrm?.Embeds.process();
        } catch {
          // ignore
        }
      }, 100);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [reel.reelUrl]);

  return (
    <div className="relative w-full max-w-[360px] sm:max-w-[400px] mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/40 min-h-[580px] sm:min-h-[640px] flex flex-col justify-between">
      {/* Top Bar linking to MSP Properties Instagram */}
      <div className="w-full bg-[#1A0307] px-3.5 py-2.5 border-b border-[#C5A059]/30 flex items-center justify-between z-10">
        <a
          href={INSTAGRAM_ACCOUNT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
          title="Visit @msp_properties on Instagram"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#731622] p-[1.5px] flex items-center justify-center">
            <div className="w-full h-full bg-[#1A0307] rounded-full flex items-center justify-center">
              <Instagram className="w-3.5 h-3.5 text-[#EAD09C] group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <span className="font-bold text-xs text-white block leading-none group-hover:text-[#DCBA77] transition-colors">
              msp_properties
            </span>
            <span className="text-[10px] text-[#DCBA77]/80 block font-medium">
              MSP PROPERTIES • Official
            </span>
          </div>
        </a>

        <a
          href={INSTAGRAM_ACCOUNT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2.5 py-1 rounded-full bg-[#731622] hover:bg-[#5C131D] text-white text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1 border border-[#C5A059]/40"
        >
          <span>Follow</span>
        </a>
      </div>

      {/* Middle Embed / Video Player Box */}
      <div className="relative w-full flex-1 min-h-[480px] sm:min-h-[540px] bg-black flex items-center justify-center overflow-hidden">
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 z-20 bg-[#1A0307]/90 flex flex-col items-center justify-center text-white gap-3 p-6 text-center">
            <div className="w-9 h-9 rounded-full border-3 border-[#C5A059] border-t-transparent animate-spin" />
            <p className="text-xs font-semibold text-[#FAF8F5]/80 uppercase tracking-widest">
              {language === 'ta' ? 'இன்ஸ்டாகிராம் ரீல் ஏற்றப்படுகிறது...' : 'Loading @msp_properties Reel...'}
            </p>
          </div>
        )}

        {/* Iframe Embed or Poster */}
        {!hasError && iframeSrc && !showPoster ? (
          <iframe
            key={reel.reelUrl}
            src={iframeSrc}
            title={reel.title}
            className="w-full h-[520px] sm:h-[570px] border-0 bg-black"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            scrolling="no"
            onError={() => setHasError(true)}
          />
        ) : (
          /* Visual Fallback Poster with real aerial photography and 1-click Instagram launch */
          <div className="relative w-full h-[520px] sm:h-[570px] bg-black flex flex-col justify-end p-5 overflow-hidden group">
            <img
              src={reel.thumbnail}
              alt={reel.title}
              className="absolute inset-0 w-full h-full object-cover object-center brightness-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

            {/* Play Button in Center */}
            <a
              href={reel.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center z-10"
              title="Play Video on Instagram"
            >
              <div className="w-16 h-16 rounded-full bg-[#731622]/90 border-2 border-[#EAD09C] flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#5C131D] transition-all cursor-pointer">
                <Play className="w-7 h-7 text-[#EAD09C] fill-current ml-1" />
              </div>
            </a>

            <div className="relative z-10 text-white space-y-2">
              <span className="text-[10px] font-bold text-[#EAD09C] uppercase tracking-wider block bg-black/60 px-2 py-0.5 rounded-sm w-fit backdrop-blur-xs">
                @msp_properties • Reel Video
              </span>
              <h4 className="font-bold text-sm text-white line-clamp-2 drop-shadow-sm">
                {language === 'ta' ? reel.titleTa : reel.title}
              </h4>
              <p className="text-[11px] text-white/80 line-clamp-2 font-light">
                {language === 'ta' ? reel.descriptionTa : reel.description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Bar: Action link to @msp_properties */}
      <div className="w-full bg-[#1A0307] p-3 border-t border-[#C5A059]/30 flex items-center justify-between text-xs text-white z-10">
        <div className="flex items-center gap-1.5 text-xs text-[#FAF8F5]/90">
          <Instagram className="w-3.5 h-3.5 text-[#EAD09C]" />
          <span className="font-semibold text-[11px]">@msp_properties</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={reel.reelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DCBA77] text-[#2E050B] text-[11px] font-bold uppercase tracking-wider transition-all hover:brightness-110 shadow-xs"
          >
            <span>{language === 'ta' ? 'வீடியோ பார்க்க' : 'Watch on Instagram'}</span>
            <ExternalLink className="w-3 h-3 text-[#2E050B]" />
          </a>
        </div>
      </div>
    </div>
  );
};
