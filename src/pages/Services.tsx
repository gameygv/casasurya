import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Toast from '../components/Toast';
import PodcastStyleHero from '../components/PodcastStyleHero';
import { Star, Sun, Send, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Services() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
    honeypot: '',
  });

  const heroGalleryImages = [
    '/media/g109.jpeg',
    '/media/g46.jpeg',
    '/media/g73.jpeg',
     '/media/g86.jpeg',
  ];

  const serviceImages = [
    { src: '/media/reiki.jpeg', alt: 'Reiki', position: 'object-cover' },
    { src: '/media/masaje.jpeg', alt: 'Masaje', position: 'object-cover' },
    { src: '/media/limpias.jpeg', alt: 'Limpias Energéticas', position: 'object-cover' },
  ];

  const serviceOptions = [
    'Reiki',
    'Barras de Access',
    'Terapia Biomagnética',
    'Terapia Cuántica de Biofeedback',
    'Sobada',
    'Masaje',
    'Ajuste con Rebozo',
    'Ventosas',
    'Reflexologia',
    'Curación de Susto y Espanto',
    'Limpia Energética',
    'Sanación con Raíces (Limpia + Biofeedback) - $150',
    'Hablar con Xochitl García',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        phone: formData.telefono,
        service: formData.servicio,
        message: formData.mensaje,
      };

      await emailjs.send(
        'service_z0qeibu',
        'template_2nwib0o',
        templateParams,
        'jmzQeg2B0BZZgHV4v'
      );

      setToast({
        message: language === 'es'
          ? '¡Reserva enviada! Nos pondremos en contacto contigo pronto.'
          : 'Booking sent! We will contact you soon.',
        type: 'success',
      });

      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: '',
        honeypot: '',
      });
    } catch (error) {
      console.error('Error sending booking:', error);
      setToast({
        message: language === 'es'
          ? 'Error al enviar la reserva. Por favor intenta de nuevo.'
          : 'Error sending booking. Please try again.',
        type: 'error',
      });
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <div>
      <PodcastStyleHero
        titleTag={language === 'es' ? 'Sanación holística' : 'Holistic healing'}
        title={language === 'es' ? 'Servicios y Terapias' : 'Services & Therapies'}
        subtitle={language === 'es' ? 'Sanación holística y ancestral' : 'Holistic and ancestral healing'}
        galleryImages={heroGalleryImages}
      />

      {/* Sección destacada: Sanación con Raíces */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-stone-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles size={16} />
              {language === 'es' ? 'Destacado' : 'Featured'}
              <Sparkles size={16} />
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <Link to="/servicios/sanacion-con-raices" className="block group">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 transition-all duration-500 hover:shadow-amber-100/50">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src="/media/SanacionConRaices.jpeg"
                      alt={language === 'es' ? 'Sanación con Raíces' : 'Healing with Roots'}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      $150
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 mb-4 group-hover:text-amber-700 transition-colors">
                      {language === 'es' ? 'Sanación con Raíces, Tecnología con Corazón' : 'Healing with Roots, Technology with Heart'}
                    </h2>
                    <p className="text-lg text-stone-600 leading-relaxed mb-6">
                      {language === 'es'
                        ? 'Paquete de terapia integral que combina lo mejor de dos mundos: Limpia Energética (medicina ancestral) + Terapia de Biofeedback (medicina cuántica). Libera, equilibra, reconéctate y sana desde la raíz.'
                        : 'Comprehensive therapy package combining the best of two worlds: Energy Cleansing (ancestral medicine) + Biofeedback Therapy (quantum medicine). Release, balance, reconnect and heal from the root.'}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {(language === 'es'
                        ? ['Limpia Energética', 'Terapia de Biofeedback', 'Medicina Ancestral', 'Medicina Cuántica']
                        : ['Energy Cleansing', 'Biofeedback Therapy', 'Ancestral Medicine', 'Quantum Medicine']
                      ).map((tag, i) => (
                        <span key={i} className="text-sm bg-stone-100 text-stone-700 px-3 py-1.5 rounded-full text-center">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-4 transition-all">
                      {language === 'es' ? 'Ver más y reservar' : 'Learn more & book'}
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Tarjetas de servicios originales */}
      <section className="py-24 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl translate-x-1/2" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="text-amber-600" size={24} />
              <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
                {language === 'es' ? 'Nuestras terapias' : 'Our therapies'}
              </span>
              <Star className="text-amber-600" size={24} />
            </div>
            <p className="text-xl text-stone-600 leading-relaxed">
              {language === 'es'
                ? 'Ofrecemos una variedad de terapias holísticas y prácticas ancestrales diseñadas para apoyar tu proceso de sanación física, emocional y espiritual.'
                : 'We offer a variety of holistic therapies and ancestral practices designed to support your physical, emotional and spiritual healing process.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {serviceImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full ${image.position}`}
                />
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-200 to-stone-200 rounded-[40px] blur-2xl opacity-30" />
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100">
                <div className="bg-gradient-to-r from-stone-800 to-stone-900 p-8 md:p-12">
                  <div className="flex items-center justify-center gap-4">
                    <Sun size={32} className="text-amber-400" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center">
                      {language === 'es' ? 'Reservar una sesión' : 'Book a session'}
                    </h2>
                    <Sun size={32} className="text-amber-400" />
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div style={{ display: 'none' }}>
                      <input
                        type="text"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        {language === 'es' ? 'Nombre completo' : 'Full Name'} *
                      </label>
                      <input
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors bg-stone-50 focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full px-5 py-4 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors bg-stone-50 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          {language === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'} *
                        </label>
                        <input
                          type="tel"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          required
                          className="w-full px-5 py-4 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors bg-stone-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        {language === 'es' ? 'Servicio o Terapia' : 'Service or Therapy'} *
                      </label>
                      <select
                        value={formData.servicio}
                        onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors bg-stone-50 focus:bg-white"
                      >
                        <option value="">
                          {language === 'es' ? 'Selecciona un servicio...' : 'Select a service...'}
                        </option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        {language === 'es' ? 'Mensaje (opcional)' : 'Message (optional)'}
                      </label>
                      <textarea
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        rows={4}
                        className="w-full px-5 py-4 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors resize-none bg-stone-50 focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-5 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={22} />
                      {isSubmitting
                        ? language === 'es' ? 'Enviando...' : 'Sending...'
                        : language === 'es' ? 'Enviar reserva' : 'Send Booking'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
