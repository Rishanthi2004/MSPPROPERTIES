import React, { useState, useRef, useEffect, TouchEvent } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Instagram,
  ExternalLink,
} from 'lucide-react';
import {
  INSTAGRAM_REELS,
  INSTAGRAM_ACCOUNT_URL,
  InstagramReel,
} from '../data/instagramReels';

interface InstagramSectionProps {
  language?: 'en' | 'ta';
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ language = 'en' }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
  const [isMuted, setIsMuted] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const desktopVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const mobileVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const pauseAllVideos = (except?: { variant: 'desktop' | 'mobile'; index: number }) => {
    desktopVideoRefs.current.forEach((vid, i) => {
      if (vid && !(except?.variant === 'desktop' && except.index === i)) {
        vid.pause();
      }
    });
    mobileVideoRefs.current.forEach((vid, i) => {
      if (vid && !(except?.variant === 'mobile' && except.index === i)) {
        vid.pause();
      }
    });
  };

  // Pause all other videos except the current one
  const handlePlayVideo = (index: number, variant: 'desktop' | 'mobile') => {
    pauseAllVideos({ variant, index });

    setIsPlaying(() => {
      const nextState: { [key: number]: boolean } = {};
      INSTAGRAM_REELS.forEach((_, i) => {
        nextState[i] = i === index;
      });
      return nextState;
    });

    const targetVid =
      variant === 'desktop' ? desktopVideoRefs.current[index] : mobileVideoRefs.current[index];
    if (targetVid) {
      targetVid.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  };

  const handlePauseVideo = (index: number, variant: 'desktop' | 'mobile') => {
    const targetVid =
      variant === 'desktop' ? desktopVideoRefs.current[index] : mobileVideoRefs.current[index];
    if (targetVid) {
      targetVid.pause();
    }
    setIsPlaying((prev) => ({ ...prev, [index]: false }));
  };

  const togglePlay = (index: number, variant: 'desktop' | 'mobile') => {
    if (isPlaying[index]) {
      handlePauseVideo(index, variant);
    } else {
      setActiveIndex(index);
      handlePlayVideo(index, variant);
    }
  };

  const toggleMute = (
    index: number,
    e: React.MouseEvent,
    variant: 'desktop' | 'mobile'
  ) => {
    e.stopPropagation();
    const targetVid =
      variant === 'desktop' ? desktopVideoRefs.current[index] : mobileVideoRefs.current[index];
    if (targetVid) {
      const nextMuted = !targetVid.muted;
      targetVid.muted = nextMuted;
      const otherVid =
        variant === 'desktop' ? mobileVideoRefs.current[index] : desktopVideoRefs.current[index];
      if (otherVid) {
        otherVid.muted = nextMuted;
      }
      setIsMuted((prev) => ({ ...prev, [index]: nextMuted }));
    }
  };

  const handleSelectVideo = (newIndex: number) => {
    // When changing video, pause the current playing video
    pauseAllVideos();
    setIsPlaying({});
    setActiveIndex(newIndex);
  };

  const handlePrev = () => {
    const nextIdx = activeIndex === 0 ? INSTAGRAM_REELS.length - 1 : activeIndex - 1;
    handleSelectVideo(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex === INSTAGRAM_REELS.length - 1 ? 0 : activeIndex + 1;
    handleSelectVideo(nextIdx);
  };

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Ensure horizontal gesture is stronger than vertical scroll
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  // Keyboard navigation when focused in section
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <section
      id="instagram"
      className="relative py-10 md:py-24 bg-[#FAF8F5] border-t border-[#E8E1D5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar & Pagination Controls */}
        <div className="flex items-center justify-between mb-6 md:mb-8 pb-3 md:pb-4 border-b border-[#E8E1D5]/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#881616] inline-block" />
            <h2 className="text-xl sm:text-2xl font-serif text-[#881616] tracking-wide font-medium">
              {language === 'ta' ? 'எம்எஸ்பி பிராப்பர்டீஸ் வீடியோக்கள்' : 'MSP Properties Videos'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Small Pagination Indicator (1/4, 2/4, 3/4, 4/4) */}
            <span className="text-sm font-semibold tracking-widest text-[#881616] bg-[#881616]/5 px-3 py-1 rounded-full border border-[#C5A059]/40">
              {activeIndex + 1} / {INSTAGRAM_REELS.length}
            </span>

            {/* Previous & Next Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Video"
                className="w-10 h-10 rounded-full border border-[#C5A059]/50 bg-white hover:bg-[#881616] text-[#881616] hover:text-[#FAF8F5] transition-all flex items-center justify-center shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Video"
                className="w-10 h-10 rounded-full border border-[#C5A059]/50 bg-white hover:bg-[#881616] text-[#881616] hover:text-[#FAF8F5] transition-all flex items-center justify-center shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* DESKTOP LAYOUT (Four videos in clean horizontal carousel) */}
        {/* ---------------------------------------------------- */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 items-stretch">
          {INSTAGRAM_REELS.map((reel: InstagramReel, index: number) => {
            const active = activeIndex === index;
            const playing = isPlaying[index] || false;
            const muted = isMuted[index] || false;

            return (
              <div
                key={reel.id}
                onClick={() => togglePlay(index, 'desktop')}
                className={`group relative rounded-2xl overflow-hidden bg-black aspect-[9/16] shadow-lg cursor-pointer transition-all duration-300 transform ${
                  active
                    ? 'ring-2 ring-[#C5A059] shadow-2xl scale-[1.02]'
                    : 'opacity-90 hover:opacity-100 hover:scale-[1.01] border border-[#E8E1D5]'
                }`}
              >
                <video
                  ref={(el) => {
                    desktopVideoRefs.current[index] = el;
                  }}
                  src={reel.videoUrl}
                  poster={reel.posterUrl}
                  playsInline
                  loop
                  preload="metadata"
                  muted={muted}
                  onPlay={() => {
                    pauseAllVideos({ variant: 'desktop', index });
                    setIsPlaying(() => {
                      const nextState: { [key: number]: boolean } = {};
                      INSTAGRAM_REELS.forEach((_, i) => {
                        nextState[i] = i === index;
                      });
                      return nextState;
                    });
                  }}
                  onPause={() => {
                    setIsPlaying((prev) => ({ ...prev, [index]: false }));
                  }}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />

                {/* Subtle Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none transition-opacity duration-300 ${
                    playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                  }`}
                />

                {/* Video Play/Pause Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {!playing && (
                    <div className="w-16 h-16 rounded-full bg-[#881616]/90 text-[#FAF8F5] border border-[#C5A059] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                      <Play className="w-7 h-7 ml-1 fill-[#FAF8F5]" />
                    </div>
                  )}
                </div>

                {/* Video Controls (Play/Pause & Mute/Unmute) */}
                <div
                  className={`absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 transition-opacity duration-200 ${
                    playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                  }`}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay(index, 'desktop');
                    }}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-[#881616] text-white flex items-center justify-center backdrop-blur-sm transition-colors border border-white/20"
                    aria-label={playing ? 'Pause' : 'Play'}
                  >
                    {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => toggleMute(index, e, 'desktop')}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-[#881616] text-white flex items-center justify-center backdrop-blur-sm transition-colors border border-white/20"
                    aria-label={muted ? 'Unmute' : 'Mute'}
                  >
                    {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------------------------------------------------- */}
        {/* MOBILE LAYOUT (One video at a time with touch swipe)  */}
        {/* ---------------------------------------------------- */}
        <div
          className="md:hidden relative w-full flex flex-col items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Mobile Video Card */}
          <div className="relative w-full max-w-[220px] sm:max-w-[240px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-xl border-2 border-[#C5A059]/40">
            {INSTAGRAM_REELS.map((reel: InstagramReel, index: number) => {
              const active = activeIndex === index;
              const playing = isPlaying[index] || false;
              const muted = isMuted[index] || false;

              if (!active) return null;

              return (
                <div
                  key={reel.id}
                  onClick={() => togglePlay(index, 'mobile')}
                  className="relative w-full h-full cursor-pointer"
                >
                  <video
                    ref={(el) => {
                      mobileVideoRefs.current[index] = el;
                    }}
                    src={reel.videoUrl}
                    poster={reel.posterUrl}
                    playsInline
                    loop
                    preload="metadata"
                    muted={muted}
                    onPlay={() => {
                      pauseAllVideos({ variant: 'mobile', index });
                      setIsPlaying(() => {
                        const nextState: { [key: number]: boolean } = {};
                        INSTAGRAM_REELS.forEach((_, i) => {
                          nextState[i] = i === index;
                        });
                        return nextState;
                      });
                    }}
                    onPause={() => {
                      setIsPlaying((prev) => ({ ...prev, [index]: false }));
                    }}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none transition-opacity duration-300 ${
                      playing ? 'opacity-0' : 'opacity-100'
                    }`}
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {!playing && (
                      <div className="w-13 h-13 rounded-full bg-[#881616]/90 text-[#FAF8F5] border border-[#C5A059] flex items-center justify-center shadow-xl">
                        <Play className="w-6 h-6 ml-0.5 fill-[#FAF8F5]" />
                      </div>
                    )}
                  </div>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay(index, 'mobile');
                      }}
                      className="w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 active:scale-95"
                      aria-label={playing ? 'Pause' : 'Play'}
                    >
                      {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>

                    <button
                      type="button"
                      onClick={(e) => toggleMute(index, e, 'mobile')}
                      className="w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 active:scale-95"
                      aria-label={muted ? 'Unmute' : 'Mute'}
                    >
                      {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Bottom Navigation & Dots */}
          <div className="flex items-center justify-between w-full max-w-[260px] mt-4 px-1">
            <button
              type="button"
              onClick={handlePrev}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#C5A059]/40 bg-white text-[#881616] font-medium text-xs shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {INSTAGRAM_REELS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelectVideo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'w-6 bg-[#881616]' : 'w-2 bg-[#C5A059]/40'
                  }`}
                  aria-label={`Go to video ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#C5A059]/40 bg-white text-[#881616] font-medium text-xs shadow-sm active:scale-95"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View Instagram Profile for More Videos */}
        <div className="mt-10 flex justify-center">
          <a
            href={INSTAGRAM_ACCOUNT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#881616] hover:bg-[#6E1010] text-[#FAF8F5] border border-[#C5A059]/60 text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-xl transition-all duration-300 active:scale-95"
          >
            <Instagram className="w-4 h-4 text-[#DCBA77]" />
            <span>
              {language === 'ta'
                ? 'மேலும் வீடியோக்களுக்கு இன்ஸ்டாகிராம் பக்கத்தை பார்க்கவும்'
                : 'View Instagram Profile for More Videos'}
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-[#DCBA77]" />
          </a>
        </div>
      </div>
    </section>
  );
};
