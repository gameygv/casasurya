import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/services';
import { CheckCircle, Calendar } from 'lucide-react';
import MasonryGallery from '../components/MasonryGallery';
import BookingModal from '../components/BookingModal';
import Toast from '../components/Toast';
import { useState } from 'react';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const handleSuccess = () => {
    setToast({
      message: language === 'es'
        ? '¡Reserva enviada! Nos pondremos en contacto contigo pronto.'
        : 'Booking sent! We will contact you soon.',
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

  return (
    <div>
      <section className="pt-24 pb-8 bg-gradient-to-b from-stone-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex justify-center">
            <img
              src={service.heroImage}
              alt={language === 'es' ? service.name : service.nameEN}
              className="max-w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="mt-8 text-center">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-stone-700 leading-relaxed">
                {language === 'es' ? service.longDescription : service.longDescriptionEN}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8">
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">
                  {language === 'es' ? 'Beneficios' : 'Benefits'}
                </h2>
                <ul className="space-y-3">
                  {(language === 'es' ? service.benefits : service.benefitsEN).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-amber-600 flex-shrink-0 mt-1" />
                      <span className="text-stone-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8">
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">
                  {language === 'es' ? 'Qué esperar' : 'What to Expect'}
                </h2>
                <p className="text-stone-700 leading-relaxed">
                  {language === 'es' ? service.whatToExpect : service.whatToExpectEN}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {service.gallery.length > 0 && (
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-serif font-bold text-stone-900 text-center mb-12">
                {language === 'es' ? 'Galería' : 'Gallery'}
              </h2>
              <MasonryGallery images={service.gallery} />
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              {language === 'es' ? '¿Tienes preguntas?' : 'Have Questions?'}
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              {language === 'es'
                ? 'Estamos aquí para ayudarte. Contáctanos para más información sobre este servicio.'
                : 'We are here to help. Contact us for more information about this service.'}
            </p>
            <a
              href="/contacto"
              className="inline-block bg-stone-700 hover:bg-stone-800 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-md"
            >
              {language === 'es' ? 'Contáctanos' : 'Contact Us'}
            </a>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={language === 'es' ? service.name : service.nameEN}
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
