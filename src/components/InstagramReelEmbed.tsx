import React, { useEffect, useState } from 'react';
import { ExternalLink, Instagram, RefreshCw, AlertCircle } from 'lucide-react';
import { InstagramReel } from '../data/instagramReels';

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

  // Extract clean shortcode from URL or reel object
  const extractShortcode = (url: string) => {
    const match = url.match(/(?:reel|p)\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : reel.shortcode;
  };

  const shortcode = extractShortcode(reel.reelUrl);
  // Official Instagram embed endpoint for individual post/reel
  const embedUrl = `https://www.instagram.com/p/${shortcode}/embed/`;

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    // Load official Instagram embed.js script once
    const SCRIPT_ID = 'instagram-embed-script';
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.instgrm) {
          try {
            window.instgrm.Embeds.process();
          } catch {
            // ignore
          }
        }
      };
      document.body.appendChild(script);
    } else if (window.instgrm) {
      // Reprocess embeds when switching reels
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
    }, 600);

    return () => clearTimeout(timer);
  }, [reel.reelUrl, shortcode]);

  return (
    <div className="relative w-full max-w-[360px] sm:max-w-[420px] mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/40 min-h-[580px] sm:min-h-[640px] flex flex-col justify-center items-center">
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-20 bg-[#240404]/90 backdrop-blur-xs flex flex-col items-center justify-center text-white gap-3 p-6 text-center">
          <div className="w-10 h-10 rounded-full border-3 border-[#C5A059] border-t-transparent animate-spin" />
          <p className="text-xs font-semibold text-[#FAF8F5]/85 uppercase tracking-widest">
            {language === 'ta' ? 'இன்ஸ்டாகிராம் ரீல் ஏற்றப்படுகிறது...' : 'Loading Instagram Reel...'}
          </p>
        </div>
      )}

      {/* Official Instagram Reel Embed */}
      {!hasError ? (
        <div className="w-full h-full min-h-[580px] sm:min-h-[640px] flex items-center justify-center bg-black">
          <iframe
            key={shortcode}
            src={embedUrl}
            title={`MSP Reel ${reel.id}`}
            className="w-full h-[580px] sm:h-[640px] border-0 bg-black"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            scrolling="no"
            onError={() => setHasError(true)}
          />
        </div>
      ) : (
        /* Graceful Fallback if Instagram blocks playback */
        <div className="w-full h-full min-h-[580px] sm:min-h-[640px] bg-[#240404] p-8 flex flex-col items-center justify-center text-center text-white space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#881616] border border-[#C5A059]/40 flex items-center justify-center mb-2">
            <Instagram className="w-8 h-8 text-[#EAD09C]" />
          </div>

          <h4 className="text-base font-bold text-white max-w-xs">
            {language === 'ta' ? 'ரீல் வீடியோவை காண' : 'Watch Reel on Instagram'}
          </h4>

          <p className="text-xs text-[#FAF8F5]/70 max-w-xs font-light">
            {language === 'ta'
              ? 'இந்த பிரவுசரில் நேரடி ஒளிபரப்பு கட்டுப்படுத்தப்பட்டுள்ளது. அதிகாரப்பூர்வ இன்ஸ்டாகிராமில் பார்க்க கீழே கிளிக் செய்யவும்.'
              : 'Direct embedded playback is restricted by your browser privacy settings. Open directly on Instagram to watch and listen.'}
          </p>

          <div className="flex flex-col gap-2.5 pt-2 w-full max-w-xs">
            <a
              href={reel.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DCBA77] hover:from-[#DCBA77] hover:to-[#EAD09C] text-[#380606] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{language === 'ta' ? 'இன்ஸ்டாகிராமில் திறக்க' : 'Open on Instagram'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#380606]" />
            </a>

            <button
              onClick={() => {
                setHasError(false);
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 500);
              }}
              className="w-full py-2 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3 h-3 text-[#DCBA77]" />
              <span>{language === 'ta' ? 'மீண்டும் முயற்சிக்க' : 'Retry Loading'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
