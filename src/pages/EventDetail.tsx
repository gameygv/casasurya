import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { events } from '../data/events';
import { Calendar, Clock, MapPin, DollarSign, Users } from 'lucide-react';
import BookingModal from '../components/BookingModal';
import Toast from '../components/Toast';
import { useState } from 'react';

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return <Navigate to="/eventos" replace />;
  }

  const handleSuccess = () => {
    setToast({
      message: language === 'es'
        ? '¡Reserva confirmada! Te hemos enviado un email de confirmación.'
        : 'Booking confirmed! We have sent you a confirmation email.',
      type: 'success',
    });
  };

  const handleError = () => {
    setToast({
      message: language === 'es'
        ? 'Error al enviar la reserva. Por favor intenta de nuevo.'
        : 'Error sending booking. Please try again.',
      type: 'error',
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div>
      <section className="pt-24 pb-8 bg-gradient-to-b from-stone-800 to-stone-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  event.category === 'gratuitos'
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 text-white'
                }`}
              >
                {event.category === 'gratuitos'
                  ? language === 'es' ? 'Gratuito' : 'Free'
                  : language === 'es' ? 'Pago' : 'Paid'}
              </span>
              {event.featured && (
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-amber-600 text-white">
                  {language === 'es' ? 'Destacado' : 'Featured'}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              {language === 'es' ? event.title : event.titleEN}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-8 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex justify-center">
            <img
              src={event.image}
              alt={language === 'es' ? event.title : event.titleEN}
              className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 md:p-12 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 text-stone-700">
                  <Calendar size={24} className="text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-stone-500">
                      {language === 'es' ? 'Fecha' : 'Date'}
                    </p>
                    <p className="font-semibold">{formatDate(event.dateStart)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-stone-700">
                  <Clock size={24} className="text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-stone-500">
                      {language === 'es' ? 'Horario' : 'Time'}
                    </p>
                    <p className="font-semibold">
                      {event.timeStart}
                      {event.timeEnd && ` - ${event.timeEnd}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-stone-700">
                  <MapPin size={24} className="text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-stone-500">
                      {language === 'es' ? 'Ubicación' : 'Location'}
                    </p>
                    <p className="font-semibold">{event.locationName}</p>
                    <p className="text-sm text-stone-600">{event.address}</p>
                  </div>
                </div>

                {event.price && (
                  <div className="flex items-center gap-3 text-stone-700">
                    <DollarSign size={24} className="text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-stone-500">
                        {language === 'es' ? 'Precio' : 'Price'}
                      </p>
                      <p className="font-semibold">${event.price}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">
                {language === 'es' ? 'Sobre este evento' : 'About this Event'}
              </h2>
              <p className="text-stone-700 leading-relaxed whitespace-pre-line">
                {language === 'es' ? event.description : event.descriptionEN}
              </p>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 md:p-12 text-center">
              <Users size={48} className="text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                {language === 'es' ? 'Reserva tu lugar' : 'Reserve Your Spot'}
              </h3>
              <p className="text-stone-600 mb-6">
                {language === 'es'
                  ? 'Los espacios son limitados. Reserva ahora para asegurar tu participación.'
                  : 'Spaces are limited. Reserve now to secure your participation.'}
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-lg"
              >
                <Calendar size={24} />
                {language === 'es' ? 'Reservar ahora' : 'Book Now'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventName={language === 'es' ? event.title : event.titleEN}
        onSuccess={handleSuccess}
        onError={handleError}
      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
