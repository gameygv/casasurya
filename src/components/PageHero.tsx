interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ image, title, subtitle }: PageHeroProps) {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center"
        style={{ imageRendering: 'auto' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white space-y-4 px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl font-light text-amber-200 drop-shadow-md">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
