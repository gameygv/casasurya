import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SpotifyIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const MexicoFlag = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="12" height="24" fill="#006847"/>
    <rect x="12" width="12" height="24" fill="#FFFFFF"/>
    <rect x="24" width="12" height="24" fill="#CE1126"/>
    <g transform="translate(18, 12)">
      <circle r="3" fill="#8B4513"/>
      <path d="M-1,-1 L1,-1 L0,-3 Z" fill="#228B22"/>
    </g>
  </svg>
);

const USAFlag = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="24" fill="#B22234"/>
    <path d="M0,2.77 h36 M0,5.54 h36 M0,8.31 h36 M0,11.08 h36 M0,13.85 h36 M0,16.62 h36 M0,19.39 h36" stroke="#fff" strokeWidth="1.85"/>
    <rect width="14.4" height="12.92" fill="#3C3B6E"/>
    <g fill="#fff">
      <circle cx="2.4" cy="2.15" r="0.6"/>
      <circle cx="4.8" cy="2.15" r="0.6"/>
      <circle cx="7.2" cy="2.15" r="0.6"/>
      <circle cx="9.6" cy="2.15" r="0.6"/>
      <circle cx="12" cy="2.15" r="0.6"/>
      <circle cx="3.6" cy="3.69" r="0.6"/>
      <circle cx="6" cy="3.69" r="0.6"/>
      <circle cx="8.4" cy="3.69" r="0.6"/>
      <circle cx="10.8" cy="3.69" r="0.6"/>
      <circle cx="2.4" cy="5.23" r="0.6"/>
      <circle cx="4.8" cy="5.23" r="0.6"/>
      <circle cx="7.2" cy="5.23" r="0.6"/>
      <circle cx="9.6" cy="5.23" r="0.6"/>
      <circle cx="12" cy="5.23" r="0.6"/>
      <circle cx="3.6" cy="6.77" r="0.6"/>
      <circle cx="6" cy="6.77" r="0.6"/>
      <circle cx="8.4" cy="6.77" r="0.6"/>
      <circle cx="10.8" cy="6.77" r="0.6"/>
      <circle cx="2.4" cy="8.31" r="0.6"/>
      <circle cx="4.8" cy="8.31" r="0.6"/>
      <circle cx="7.2" cy="8.31" r="0.6"/>
      <circle cx="9.6" cy="8.31" r="0.6"/>
      <circle cx="12" cy="8.31" r="0.6"/>
      <circle cx="3.6" cy="9.85" r="0.6"/>
      <circle cx="6" cy="9.85" r="0.6"/>
      <circle cx="8.4" cy="9.85" r="0.6"/>
      <circle cx="10.8" cy="9.85" r="0.6"/>
      <circle cx="2.4" cy="11.39" r="0.6"/>
      <circle cx="4.8" cy="11.39" r="0.6"/>
      <circle cx="7.2" cy="11.39" r="0.6"/>
      <circle cx="9.6" cy="11.39" r="0.6"/>
      <circle cx="12" cy="11.39" r="0.6"/>
    </g>
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/nosotros', label: t('nav.about') },
    { path: '/servicios', label: t('nav.services') },
    { path: '/eventos', label: t('nav.events') },
    { path: '/podcast', label: t('nav.podcast') },
    { path: '/contacto', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src="/media/logocasasurya.png"
              alt="Casa Surya Healings"
              className="h-20 w-20 object-contain transition-transform group-hover:scale-110"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  location.pathname === link.path ? 'text-amber-600' : 'text-stone-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
              <a
                href="https://www.facebook.com/casaSuryahealing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/casasuryahealing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://open.spotify.com/show/06GeMnY1Ar8APRWmrrNhwu?si=09cba7abc7bc4716"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-amber-600 transition-colors"
                aria-label="Spotify"
              >
                <SpotifyIcon size={18} />
              </a>
              <a
                href="https://www.youtube.com/@casasuryahealingsofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-amber-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('es')}
                className={`p-1 rounded-lg transition-all hover:scale-110 ${
                  language === 'es' ? 'ring-2 ring-amber-600 shadow-md' : 'opacity-60 hover:opacity-100'
                }`}
                aria-label="Español"
                title="Español"
              >
                <MexicoFlag size={28} />
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`p-1 rounded-lg transition-all hover:scale-110 ${
                  language === 'en' ? 'ring-2 ring-amber-600 shadow-md' : 'opacity-60 hover:opacity-100'
                }`}
                aria-label="English"
                title="English"
              >
                <USAFlag size={28} />
              </button>
            </div>
          </div>

          <button
            className="lg:hidden text-stone-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                    location.pathname === link.path ? 'text-amber-600' : 'text-stone-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 mt-4 pt-4 border-t">
              <a
                href="https://www.facebook.com/casaSuryahealing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/casasuryahealing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://open.spotify.com/show/06GeMnY1Ar8APRWmrrNhwu?si=09cba7abc7bc4716"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-amber-600 transition-colors"
                aria-label="Spotify"
              >
                <SpotifyIcon size={20} />
              </a>
              <a
                href="https://www.youtube.com/@casasuryahealingsofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-amber-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t">
              <button
                onClick={() => setLanguage('es')}
                className={`p-2 rounded-lg transition-all hover:scale-110 ${
                  language === 'es' ? 'ring-2 ring-amber-600 shadow-md' : 'opacity-60 hover:opacity-100'
                }`}
                aria-label="Español"
                title="Español"
              >
                <MexicoFlag size={32} />
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`p-2 rounded-lg transition-all hover:scale-110 ${
                  language === 'en' ? 'ring-2 ring-amber-600 shadow-md' : 'opacity-60 hover:opacity-100'
                }`}
                aria-label="English"
                title="English"
              >
                <USAFlag size={32} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
