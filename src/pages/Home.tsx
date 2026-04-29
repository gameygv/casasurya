import { useLanguage } from '../context/LanguageContext';
import HeroSlider from '../components/HeroSlider';
import ImageCarousel from '../components/ImageCarousel';
import VideoCarousel from '../components/VideoCarousel';
import TestimonialCard from '../components/TestimonialCard';
import Toast from '../components/Toast';
import { Calendar, Heart, Users, Sparkles, Flame, Leaf, Sun, Moon, Star } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const { language } = useLanguage();
  const [donationForm, setDonationForm] = useState({
    amount: '',
    name: '',
    email: '',
    note: '',
  });

  const [newsletterForm, setNewsletterForm] = useState({
    email: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const heroImages = [
    '/media/h01.jpeg',
    '/media/h02.jpeg',
    '/media/h03.jpeg',
    '/media/h04.jpeg',
  ];

  const allGalleryImages = [
    ...Array.from({ length: 56 }, (_, i) => `/media/g${String(i + 1).padStart(2, '0')}.jpeg`).filter(img => img !== '/media/g18.jpeg'),
    ...Array.from({ length: 58 }, (_, i) => `/media/g${String(i + 58).padStart(2, '0')}.jpeg`),
  ];

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [galleryImages] = useState(() => shuffleArray(allGalleryImages));

  const videos = Array.from({ length: 7 }, (_, i) =>
    `/media/video${String(i + 1).padStart(2, '0')}.mp4`
  );

  const testimonials = [
    {
      name: 'Jessica',
      image: '/media/testimonio_jessica-300x300.png',
      text: 'Hola mi nombre es Jessica Bermúdez para mí ha sido fantástico conocer casa SURYA me devolvió la vida, mi experiencia está llena de agradecimiento hacia Xóchitl García una mujer medicina maravillosa que DIOS Y EL UNIVERSO puso en mi camino.',
    },
    {
      name: 'Yohan',
      image: '/media/testimonio_yohan-300x300.png',
      text: 'En Casa Surya he encontrado una comunidad de personas que buscan la sanación holística a nivel físico, mental, emocional y espiritual. Me ha encantado experimentar las ceremonias curativas y mágicas del Temazcal, así como los círculos de Canto y Palabra.',
    },
    {
      name: 'Lupita',
      image: '/media/testimonio_lupita-300x300.png',
      text: 'Agradezco a Casa Surya por beneficiarme con su terapia de biomagnetismo la cuál me quitó dolores fuertes en ambas manos ya que también tenía problemas para sujetar cosas. Ahora increíblemente están sanas..',
    },
  ];

  const scrollToDonations = () => {
    const element = document.getElementById('donaciones');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation form:', donationForm);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newsletterForm.honeypot) {
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
        body: JSON.stringify({
          email: newsletterForm.email,
          firstName: newsletterForm.nombre,
          lastName: newsletterForm.apellidos,
          phone: newsletterForm.telefono,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setToast({
        message: language === 'es'
          ? data.alreadySubscribed
            ? '¡Ya estás suscrito a nuestro boletín!'
            : '¡Gracias por suscribirte! Recibirás nuestras actualizaciones.'
          : data.alreadySubscribed
            ? 'You are already subscribed to our newsletter!'
            : 'Thanks for subscribing! You will receive our updates.',
        type: 'success',
      });

      setNewsletterForm({
        email: '',
        nombre: '',
        apellidos: '',
        telefono: '',
        honeypot: '',
      });
    } catch (error) {
      console.error('Error sending newsletter subscription:', error);
      setToast({
        message: language === 'es'
          ? 'Error al suscribirse. Por favor intenta de nuevo.'
          : 'Error subscribing. Please try again.',
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
      <HeroSlider
        images={heroImages}
        title="Casa Surya Healings"
        subtitle="La casa donde sale el sol"
        descriptionES="Casa Surya Healings es una organización sin fines de lucro que brinda prácticas holísticas y ancestrales, para apoyar el proceso de sanación, desarrollo y crecimiento personal y colectivo de la comunidad latina en el estado de Washington."
        descriptionEN="Casa Surya Healings is a grass root non-profit organization, that provides holistic and ancestral practices to support the process of healing, development, and personal and collective growth of the Latino community in the state of Washington."
        language={language}
        buttons={[
          { label: language === 'es' ? 'Ver eventos' : 'View Events', href: '/eventos' },
          { label: language === 'es' ? 'Donar' : 'Donate', href: '#donaciones', primary: true, onClick: scrollToDonations },
        ]}
      />

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-stone-50" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="absolute top-20 right-20 opacity-10">
          <Sun size={120} className="text-amber-600" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <Moon size={80} className="text-stone-600" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="text-amber-600" size={28} />
              <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
                {language === 'es' ? 'Comunidad' : 'Community'}
              </span>
              <Sparkles className="text-amber-600" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              {language === 'es' ? 'Programas y eventos abiertos a la comunidad' : 'Community Programs and Events'}
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              {language === 'es'
                ? 'Participa en nuestras ceremonias, talleres y actividades diseñadas para el bienestar de nuestra comunidad.'
                : 'Join our ceremonies, workshops and activities designed for the wellbeing of our community.'}
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
              <video
                src="/media/eventos.mp4"
                controls
                className="w-full h-auto"
                playsInline
              />
            </div>
          </div>

          <div className="text-center">
            <a
              href="/eventos"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Calendar size={20} />
              {language === 'es' ? 'Ver todos los eventos' : 'View All Events'}
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-stone-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="absolute top-10 left-10 opacity-20">
          <Star size={40} className="text-amber-400" />
        </div>
        <div className="absolute top-20 right-20 opacity-20">
          <Star size={24} className="text-amber-400" />
        </div>
        <div className="absolute bottom-10 left-1/4 opacity-20">
          <Star size={32} className="text-amber-400" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Leaf className="text-amber-400" size={28} />
              <span className="text-amber-400 font-medium tracking-wider uppercase text-sm">
                {language === 'es' ? 'Memorias' : 'Memories'}
              </span>
              <Leaf className="text-amber-400" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              {language === 'es' ? 'Galería' : 'Gallery'}
            </h2>
            <p className="text-xl text-stone-300 leading-relaxed">
              {language === 'es'
                ? 'Momentos de sanación, comunidad y celebración ancestral.'
                : 'Moments of healing, community and ancestral celebration.'}
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <ImageCarousel
              images={galleryImages}
              title={language === 'es' ? 'Galería Casa Surya' : 'Casa Surya Gallery'}
            />
          </div>
        </div>
      </section>

      <section id="donaciones" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-stone-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="absolute top-1/4 left-10 opacity-10">
          <Heart size={100} className="text-amber-600" />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-10">
          <Sparkles size={80} className="text-amber-600" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-lg mb-6">
                <Heart size={36} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                {language === 'es' ? 'Apoya Nuestra Misión' : 'Support Our Mission'}
              </h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                {language === 'es'
                  ? 'Tu donación ayuda a mantener nuestras actividades y servicios accesibles para toda la comunidad latina en Washington. Cada contribución hace la diferencia.'
                  : 'Your donation helps keep our activities and services accessible to the entire Latino community in Washington. Every contribution makes a difference.'}
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-100">
              <form onSubmit={handleDonationSubmit} className="space-y-8">
                <div>
                  <label className="block text-lg font-medium text-stone-800 mb-4">
                    {language === 'es' ? 'Selecciona un monto' : 'Select an amount'}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {[25, 50, 100, 250].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setDonationForm({ ...donationForm, amount: amount.toString() })}
                        className={`py-4 rounded-xl font-semibold text-lg transition-all border-2 ${
                          donationForm.amount === amount.toString()
                            ? 'bg-amber-600 text-white border-amber-600 shadow-lg scale-105'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-amber-300 hover:bg-amber-50'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder={language === 'es' ? 'Otra cantidad' : 'Other amount'}
                    value={donationForm.amount}
                    onChange={(e) => setDonationForm({ ...donationForm, amount: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors text-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      {language === 'es' ? 'Nombre' : 'Name'}
                    </label>
                    <input
                      type="text"
                      value={donationForm.name}
                      onChange={(e) => setDonationForm({ ...donationForm, name: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={donationForm.email}
                      onChange={(e) => setDonationForm({ ...donationForm, email: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {language === 'es' ? 'Nota (opcional)' : 'Note (optional)'}
                  </label>
                  <textarea
                    value={donationForm.note}
                    onChange={(e) => setDonationForm({ ...donationForm, note: e.target.value })}
                    rows={3}
                    className="w-full px-5 py-3 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <a
                  href={`https://www.paypal.com/paypalme/casasurya${donationForm.amount ? `/${donationForm.amount}USD` : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl text-center"
                >
                  {language === 'es' ? 'Donar con PayPal' : 'Donate with PayPal'}
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-stone-700 to-stone-800 rounded-full shadow-lg mb-6">
                <Users size={36} className="text-amber-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                {language === 'es' ? 'Suscríbete a nuestro boletín' : 'Subscribe to Our Newsletter'}
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
                {language === 'es'
                  ? 'Suscríbete a nuestro boletín y recibe en tu email información de todas nuestras actividades y links de acceso a nuestros eventos On Line.'
                  : 'Subscribe to our newsletter and receive information about all our activities and access links to our online events.'}
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-stone-100">
              <form onSubmit={handleNewsletterSubmit} className="space-y-6">
                <div style={{ display: 'none' }}>
                  <input
                    type="text"
                    value={newsletterForm.honeypot}
                    onChange={(e) => setNewsletterForm({ ...newsletterForm, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      {language === 'es' ? 'Nombre' : 'First Name'}
                    </label>
                    <input
                      type="text"
                      value={newsletterForm.nombre}
                      onChange={(e) => setNewsletterForm({ ...newsletterForm, nombre: e.target.value })}
                      required
                      className="w-full px-5 py-3 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      {language === 'es' ? 'Apellidos' : 'Last Name'}
                    </label>
                    <input
                      type="text"
                      value={newsletterForm.apellidos}
                      onChange={(e) => setNewsletterForm({ ...newsletterForm, apellidos: e.target.value })}
                      required
                      className="w-full px-5 py-3 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={newsletterForm.email}
                    onChange={(e) => setNewsletterForm({ ...newsletterForm, email: e.target.value })}
                    required
                    className="w-full px-5 py-3 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {language === 'es' ? 'Número de teléfono' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    value={newsletterForm.telefono}
                    onChange={(e) => setNewsletterForm({ ...newsletterForm, telefono: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? language === 'es' ? 'Enviando...' : 'Sending...'
                    : language === 'es' ? 'Suscribirme' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-10 right-10 opacity-10">
          <Flame size={100} className="text-amber-600" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Leaf size={80} className="text-stone-600" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="text-amber-600" size={28} />
              <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
                {language === 'es' ? 'Voces de sanación' : 'Voices of healing'}
              </span>
              <Star className="text-amber-600" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              {language === 'es' ? 'Testimonios' : 'Testimonials'}
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              {language === 'es'
                ? 'Historias de sanación y transformación de nuestra comunidad.'
                : 'Stories of healing and transformation from our community.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(217, 119, 6, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(217, 119, 6, 0.2) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Flame className="text-amber-400" size={28} />
              <span className="text-amber-400 font-medium tracking-wider uppercase text-sm">
                {language === 'es' ? 'Experiencias' : 'Experiences'}
              </span>
              <Flame className="text-amber-400" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              {language === 'es' ? 'Videos' : 'Videos'}
            </h2>
            <p className="text-xl text-stone-300 leading-relaxed">
              {language === 'es'
                ? 'Conoce más sobre nuestras ceremonias y actividades.'
                : 'Learn more about our ceremonies and activities.'}
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <VideoCarousel
              videos={videos}
              title={language === 'es' ? 'Video' : 'Video'}
            />
          </div>
        </div>
      </section>

      <section className="relative h-[500px] overflow-hidden">
        <img
          src="/media/g64.jpeg"
          alt="Casa Surya Healings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Sun size={64} className="text-amber-400 mb-6 animate-pulse" />
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {language === 'es'
              ? 'Únete a nuestra comunidad de sanación'
              : 'Join our healing community'}
          </h3>
          <p className="text-xl text-stone-200 max-w-2xl mb-8">
            {language === 'es'
              ? 'La casa donde sale el sol te espera con los brazos abiertos.'
              : 'The house where the sun rises awaits you with open arms.'}
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Sparkles size={20} />
            {language === 'es' ? 'Contáctanos' : 'Contact Us'}
          </a>
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
