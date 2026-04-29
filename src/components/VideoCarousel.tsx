import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

interface VideoCarouselProps {
  videos: string[];
  title?: string;
}

export default function VideoCarousel({ videos, title }: VideoCarouselProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const openVideo = (video: string) => {
    setActiveVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('left')}
          className="bg-white/90 hover:bg-white shadow-lg rounded-full p-3 text-stone-700 hover:text-amber-600 transition-all hover:scale-110 -ml-4"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('right')}
          className="bg-white/90 hover:bg-white shadow-lg rounded-full p-3 text-stone-700 hover:text-amber-600 transition-all hover:scale-110 -mr-4"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            onClick={() => openVideo(video)}
            className="flex-shrink-0 relative group cursor-pointer"
          >
            <div className="w-80 h-52 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-stone-900">
              <video
                src={video}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-amber-600/90 group-hover:bg-amber-600 flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                  <Play size={28} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-white/90 text-sm font-medium drop-shadow-lg">
                  {title || 'Video'} {index + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close video"
          >
            <X size={32} />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl"
              style={{ maxHeight: '80vh' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
