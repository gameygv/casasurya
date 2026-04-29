import { useLanguage } from '../context/LanguageContext';
import Toast from '../components/Toast';
import PodcastStyleHero from '../components/PodcastStyleHero';
import { MapPin, Phone, Mail, Send, Sun, Sparkles } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    asunto: '',
    mensaje: '',
    honeypot: '',
  });

  const heroGalleryImages = [
    '/media/g14.jpeg',
    '/media/g31.jpeg',
    '/media/g49.jpeg',
    '/media/g61.jpeg',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_z0qeibu',
        'template_epodgll',
        {
          from_name: formData.nombre,
          from_email: formData.email,
          phone: formData.telefono,
          subject: formData.asunto,
          message: formData.mensaje,
        },
        'jmzQeg2B0BZZgHV4v'
      );

      setToast({
        message: language === 'es'
          ? '¡Mensaje enviado! Te responderemos pronto.'
          : 'Message sent! We will respond soon.',
        type: 'success',
      });

      setFormData({
        nombre: '',
        telefono: '',
        email: '',
        asunto: '',
        mensaje: '',
        honeypot: '',
      });
    } catch (error) {
      console.error('Error sending contact form:', error);
      setToast({
        message: language === 'es'
          ? 'Error al enviar el mensaje. Por favor intenta de nuevo.'
          : 'Error sending message. Please try again.',
        type: 'error',
      });
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'es' ? 'Dirección' : 'Address',
      content: '614 SW 136th St\nBurien 98166\nWashington USA',
      href: 'https://maps.google.com/?q=614+SW+136th+St+Burien+98166',
    },
    {
      icon: Phone,
      title: language === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp',
      content: '+1 206 393 2804',
      href: 'tel:+12063932804',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'casasuryahealing@gmail.com',
      href: 'mailto:casasuryahealing@gmail.com',
    },
  ];

  return (
    <div>
      <PodcastStyleHero
        titleTag={language === 'es' ? 'Conecta con nosotros' : 'Connect with us'}
        title={language === 'es' ? 'Contacto' : 'Contact'}
        subtitle={language === 'es' ? 'Estamos aqui para ayudarte' : "We're here to help"}
        galleryImages={heroGalleryImages}
        imagePositions={['top', 'center', 'center', 'center']}
      />

      <section className="py-24 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl translate-x-1/2" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Agradecemos su interés en contactarnos, favor de llenar el siguiente formulario de contacto. También estamos a sus órdenes en el teléfono / WhatsApp +1 206 393 2804 o en el email casasuryahealing@gmail.com. Responderemos a la brevedad posible.'
                  : 'We appreciate your interest in contacting us. Please fill out the contact form below. We are also available by phone / WhatsApp at +1 206 393 2804 or by email at casasuryahealing@gmail.com. We will respond as soon as possible.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.icon === MapPin ? '_blank' : undefined}
                  rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <info.icon size={28} className="text-amber-600" />
                  </div>
                  <h3 className="font-bold text-stone-900 mb-3 text-lg">
                    {info.title}
                  </h3>
                  <p className="text-stone-600 whitespace-pre-line group-hover:text-amber-700 transition-colors">
                    {info.content}
                  </p>
                </a>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-200 to-stone-200 rounded-[40px] blur-2xl opacity-30" />
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100">
                <div className="bg-gradient-to-r from-stone-800 to-stone-900 p-8 md:p-12">
                  <div className="flex items-center justify-center gap-4">
                    <Sun size={32} className="text-amber-400" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center">
                      {language === 'es' ? 'Envianos un mensaje' : 'Send us a message'}
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
                        {language === 'es' ? 'Nombre completo' : 'Full Name'}
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
                          {language === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'}
                        </label>
                        <input
                          type="tel"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          required
                          className="w-full px-5 py-4 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors bg-stone-50 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full px-5 py-4 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors bg-stone-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        {language === 'es' ? 'Asunto' : 'Subject'}
                      </label>
                      <input
                        type="text"
                        value={formData.asunto}
                        onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-stone-200 focus:outline-none focus:border-amber-500 transition-colors bg-stone-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        {language === 'es' ? 'Mensaje' : 'Message'}
                      </label>
                      <textarea
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        required
                        rows={6}
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
                        : language === 'es' ? 'Enviar mensaje' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-stone-800 to-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 50%, rgba(217, 119, 6, 0.4) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(217, 119, 6, 0.3) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Sun size={64} className="text-amber-400 mx-auto mb-8 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              {language === 'es'
                ? 'Te esperamos con los brazos abiertos'
                : 'We await you with open arms'}
            </h2>
            <p className="text-xl text-stone-300 mb-10">
              {language === 'es'
                ? 'La casa donde sale el sol siempre tiene un lugar para ti.'
                : 'The house where the sun rises always has a place for you.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/eventos"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <Sparkles size={20} />
                {language === 'es' ? 'Ver eventos' : 'View events'}
              </a>
              <a
                href="/servicios"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all border border-white/20"
              >
                {language === 'es' ? 'Nuestros servicios' : 'Our services'}
              </a>
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
