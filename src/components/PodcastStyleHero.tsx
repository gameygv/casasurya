import { Sparkles } from 'lucide-react';

interface PodcastStyleHeroProps {
  titleTag: string;
  title: string;
  subtitle: string;
  galleryImages: string[];
  imagePositions?: ('top' | 'center')[];
}

export default function PodcastStyleHero({ titleTag, title, subtitle, galleryImages, imagePositions }: PodcastStyleHeroProps) {
  return (
    <>
      <div className="relative min-h-[50vh] w-full overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23d97706' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }} />
        </div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="relative flex items-center justify-center min-h-[50vh] px-4">
          <div className="text-center text-white space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-amber-400" size={24} />
              <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">
                {titleTag}
              </span>
              <Sparkles className="text-amber-400" size={24} />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-light text-amber-200/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-stone-900 py-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {galleryImages.map((img, idx) => {
            const position = imagePositions?.[idx] || (idx === 0 || idx === 2 ? 'top' : 'center');
            const positionClass = position === 'top' ? 'object-top' : 'object-center';
            return (
              <div key={idx} className="relative h-32 md:h-48 overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className={`w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 ${positionClass}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
