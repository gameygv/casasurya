import { useLanguage } from '../context/LanguageContext';
import { Play, ExternalLink, Sparkles, Headphones } from 'lucide-react';

const SpotifyIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const YouTubeIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const heroImages = [
  '/media/g115.jpeg',
  '/media/g100.jpeg',
  '/media/g99.jpeg',
  '/media/g113.jpeg',
];

const decorativeImages = [
  '/media/g10.jpeg',
  '/media/g25.jpeg',
  '/media/g30.jpeg',
  '/media/g37.jpeg',
];

export default function Podcast() {
  const { language } = useLanguage();

  return (
    <div>
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
                {language === 'es' ? 'Voces de sanación' : 'Voices of healing'}
              </span>
              <Sparkles className="text-amber-400" size={24} />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
              Podcast
            </h1>
            <p className="text-xl md:text-2xl font-light text-amber-200/90 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Conversaciones sobre sanación, espiritualidad y prácticas ancestrales'
                : 'Conversations about healing, spirituality and ancestral practices'}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-stone-900 py-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {heroImages.map((img, idx) => (
            <div key={idx} className="relative h-32 md:h-48 overflow-hidden">
              <img
                src={img}
                alt=""
                className={`w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 ${idx === 0 || idx === 2 ? 'object-top' : ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-100/50 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl translate-x-1/2" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100 mb-16">
              <div className="bg-[#1DB954] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="relative flex items-center gap-6">
                  <div className="w-20 h-20 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <SpotifyIcon size={48} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Spotify
                    </h2>
                    <p className="text-white/80 text-lg">
                      {language === 'es'
                        ? 'Escucha todos nuestros episodios'
                        : 'Listen to all our episodes'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="bg-gradient-to-br from-stone-50 to-green-50/50 rounded-2xl p-8 mb-8 border border-green-100/50">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-48 h-48 bg-gradient-to-br from-[#1DB954] to-[#169c46] rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%221%22%20fill%3D%22rgba(255%2C255%2C255%2C0.1)%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
                      <SpotifyIcon size={100} className="text-white relative z-10" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                        <Headphones size={20} className="text-[#1DB954]" />
                        <span className="text-[#1DB954] font-medium text-sm uppercase tracking-wide">Podcast</span>
                      </div>
                      <h3 className="text-2xl font-bold text-stone-900 mb-3">
                        Casa Surya Healings
                      </h3>
                      <p className="text-stone-600 mb-6 leading-relaxed">
                        {language === 'es'
                          ? 'Exploramos temas de sanación holística, medicina ancestral, espiritualidad y crecimiento personal. Cada episodio es una invitación a conectar con tu ser interior.'
                          : 'We explore topics of holistic healing, ancestral medicine, spirituality and personal growth. Each episode is an invitation to connect with your inner self.'}
                      </p>
                      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                          href="https://open.spotify.com/show/06GeMnY1Ar8APRWmrrNhwu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-[#1DB954] hover:bg-[#1ed760] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <Play size={24} fill="currentColor" />
                          {language === 'es' ? 'Escuchar en Spotify' : 'Listen on Spotify'}
                        </a>
                        <a
                          href="https://open.spotify.com/show/06GeMnY1Ar8APRWmrrNhwu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-700 px-6 py-4 rounded-full font-medium transition-all"
                        >
                          <ExternalLink size={20} />
                          {language === 'es' ? 'Abrir app' : 'Open app'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { num: '50+', label: language === 'es' ? 'Episodios' : 'Episodes' },
                    { num: '1K+', label: language === 'es' ? 'Oyentes' : 'Listeners' },
                    { num: '4.9', label: language === 'es' ? 'Valoración' : 'Rating' },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-stone-50 to-green-50/30 rounded-xl p-6 text-center border border-green-100/30">
                      <div className="text-3xl font-bold text-[#1DB954] mb-1">{stat.num}</div>
                      <div className="text-stone-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-16">
              {decorativeImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl overflow-hidden group"
                  style={{ height: idx % 2 === 0 ? '240px' : '300px' }}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100">
              <div className="bg-[#FF0000] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="relative flex items-center gap-6">
                  <div className="w-20 h-20 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <YouTubeIcon size={48} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      YouTube
                    </h2>
                    <p className="text-white/80 text-lg">
                      {language === 'es'
                        ? 'Videos, ceremonias y contenido exclusivo'
                        : 'Videos, ceremonies and exclusive content'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="bg-gradient-to-br from-stone-50 to-red-50/50 rounded-2xl p-8 mb-8 border border-red-100/50">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-48 h-48 bg-gradient-to-br from-[#FF0000] to-[#cc0000] rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%221%22%20fill%3D%22rgba(255%2C255%2C255%2C0.1)%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
                      <YouTubeIcon size={100} className="text-white relative z-10" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                        <YouTubeIcon size={20} className="text-[#FF0000]" />
                        <span className="text-[#FF0000] font-medium text-sm uppercase tracking-wide">Canal Oficial</span>
                      </div>
                      <h3 className="text-2xl font-bold text-stone-900 mb-3">
                        Casa Surya Healings
                      </h3>
                      <p className="text-stone-600 mb-6 leading-relaxed">
                        {language === 'es'
                          ? 'Videos de ceremonias, entrevistas y contenido educativo sobre sanación holística.'
                          : 'Videos of ceremonies, interviews and educational content about holistic healing.'}
                      </p>
                      <a
                        href="https://www.youtube.com/@casasuryahealingsofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#FF0000] font-medium hover:gap-3 transition-all"
                      >
                        {language === 'es' ? 'Visitar canal' : 'Visit channel'}
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://www.youtube.com/@casasuryahealingsofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#FF0000] hover:bg-[#cc0000] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <YouTubeIcon size={24} />
                    {language === 'es' ? 'Suscribirse al canal' : 'Subscribe to Channel'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {['/media/g15.jpeg', '/media/g20.jpeg', '/media/g40.jpeg', '/media/g60.jpeg', '/media/g70.jpeg', '/media/g80.jpeg'].map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-amber-900/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-stone-900 to-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(217, 119, 6, 0.2) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="text-amber-400 mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              {language === 'es'
                ? 'Conecta con nosotros'
                : 'Connect with us'}
            </h2>
            <p className="text-xl text-stone-300 mb-10">
              {language === 'es'
                ? 'Síguenos en nuestras redes sociales para no perderte ningún episodio nuevo.'
                : "Follow us on social media so you don't miss any new episodes."}
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="https://open.spotify.com/show/06GeMnY1Ar8APRWmrrNhwu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 bg-stone-800/50 hover:bg-[#1DB954] p-6 rounded-2xl transition-all duration-300 hover:scale-105 min-w-[140px]"
              >
                <div className="w-16 h-16 bg-[#1DB954] group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <SpotifyIcon size={32} className="text-white" />
                </div>
                <span className="text-white font-semibold">Spotify</span>
              </a>
              <a
                href="https://www.youtube.com/@casasuryahealingsofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 bg-stone-800/50 hover:bg-[#FF0000] p-6 rounded-2xl transition-all duration-300 hover:scale-105 min-w-[140px]"
              >
                <div className="w-16 h-16 bg-[#FF0000] group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <YouTubeIcon size={32} className="text-white" />
                </div>
                <span className="text-white font-semibold">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
