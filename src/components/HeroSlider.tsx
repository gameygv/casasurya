import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSliderProps {
  images: string[];
  title: string;
  subtitle: string;
  descriptionES: string;
  descriptionEN: string;
  language: 'es' | 'en';
  buttons?: Array<{ label: string; href: string; primary?: boolean; onClick?: () => void }>;
}

export default function HeroSlider({
  images,
  title,
  subtitle,
  descriptionES,
  descriptionEN,
  language,
  buttons,
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`${title} ${index + 1}`}
            className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 animate-fade-in">
              {title}
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-amber-200 mb-6 animate-fade-in-delay">
              {subtitle}
            </p>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto animate-fade-in-delay-2">
              {language === 'es' ? descriptionES : descriptionEN}
            </p>

            {buttons && buttons.length > 0 && (
              <div className="flex flex-wrap gap-4 justify-center mt-8 animate-fade-in-delay-3">
                {buttons.map((button, idx) => (
                  button.onClick ? (
                    <button
                      key={idx}
                      onClick={button.onClick}
                      className={`px-8 py-3 rounded-full font-medium transition-all hover:scale-105 ${
                        button.primary
                          ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg'
                          : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40'
                      }`}
                    >
                      {button.label}
                    </button>
                  ) : (
                    <a
                      key={idx}
                      href={button.href}
                      className={`px-8 py-3 rounded-full font-medium transition-all hover:scale-105 ${
                        button.primary
                          ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg'
                          : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40'
                      }`}
                    >
                      {button.label}
                    </a>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
