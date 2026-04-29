import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SpotifyIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const { t, language } = useLanguage();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/newsletter-subscribe`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setEmail('');
      alert(language === 'es'
        ? data.alreadySubscribed
          ? '¡Ya estás suscrito a nuestro boletín!'
          : '¡Gracias por suscribirte!'
        : data.alreadySubscribed
          ? 'You are already subscribed to our newsletter!'
          : 'Thank you for subscribing!');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      alert(language === 'es'
        ? 'Error al suscribirse. Por favor, intenta de nuevo.'
        : 'Error subscribing. Please try again.');
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
  };

  const quickLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/nosotros', label: t('nav.about') },
    { to: '/servicios', label: t('nav.services') },
    { to: '/eventos', label: t('nav.events') },
    { to: '/podcast', label: t('nav.podcast') },
    { to: '/contacto', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/media/logocasasurya.png"
              alt="Casa Surya Healings"
              className="h-24 w-24 object-contain mb-4"
            />
            <h3 className="text-white font-serif text-xl mb-4">Casa Surya Healings</h3>
            <p className="text-sm text-stone-400">
              {language === 'es'
                ? 'Comunidad, sanación y tradición ancestral'
                : 'Community, healing and ancestral tradition'}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span>614 SW 136th St Burien 98166, Washington USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-amber-600 flex-shrink-0" />
                <a href="tel:+12063932804" className="hover:text-amber-600 transition-colors">
                  +1 206 393 2804
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-amber-600 flex-shrink-0" />
                <a href="mailto:casasuryahealing@gmail.com" className="hover:text-amber-600 transition-colors">
                  casasuryahealing@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === 'es' ? 'Enlaces Rapidos' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-amber-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.newsletter')}</h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div style={{ display: 'none' }}>
                <input
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'es' ? 'Tu email' : 'Your email'}
                required
                className="w-full px-4 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-amber-600 transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? language === 'es' ? 'Enviando...' : 'Sending...'
                  : t('footer.subscribe')}
              </button>
            </form>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.facebook.com/casaSuryahealing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/casasuryahealing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://open.spotify.com/show/06GeMnY1Ar8APRWmrrNhwu?si=09cba7abc7bc4716"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-600 transition-colors"
                aria-label="Spotify"
              >
                <SpotifyIcon size={20} />
              </a>
              <a
                href="https://www.youtube.com/@casasuryahealingsofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Casa Surya Healings. {language === 'es' ? 'Todos los derechos reservados' : 'All rights reserved'}.</p>
        </div>
      </div>
    </footer>
  );
}
