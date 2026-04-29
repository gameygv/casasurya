import { X, MessageCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface RecurringEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    schedule: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    video?: string;
    programImage?: string;
    whatsappMessage?: string;
    registrationUrl?: string;
  };
}

export default function RecurringEventModal({ isOpen, onClose, event }: RecurringEventModalProps) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    if (event.whatsappMessage) {
      const message = encodeURIComponent(event.whatsappMessage);
      window.open(`https://wa.me/12063932804?text=${message}`, '_blank');
    }
  };

  const handleRegistrationClick = () => {
    if (event.registrationUrl) {
      window.open(event.registrationUrl, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
          >
            <X className="text-stone-700" size={24} />
          </button>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
              {event.title}
            </h2>

            <p className="text-xl text-amber-600 font-semibold mb-6">
              {event.schedule}
            </p>

            <p className="text-lg text-stone-700 leading-relaxed mb-8">
              {event.fullDescription}
            </p>

            {event.programImage && (
              <div className="mb-8">
                <img
                  src={event.programImage}
                  alt={`${event.title} - Programa`}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            )}

            {event.video && (
              <div className="mb-8">
                <video
                  src={event.video}
                  controls
                  className="w-full rounded-2xl shadow-lg"
                  playsInline
                />
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {event.registrationUrl ? (
                <button
                  onClick={handleRegistrationClick}
                  className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
                >
                  <ExternalLink size={24} />
                  {language === 'es' ? 'Registro' : 'Registration'}
                </button>
              ) : event.whatsappMessage ? (
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
                >
                  <MessageCircle size={24} />
                  {language === 'es' ? 'Reservar por WhatsApp' : 'Reserve via WhatsApp'}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
