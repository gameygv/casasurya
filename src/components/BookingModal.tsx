import { X, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
  eventName?: string;
  onSuccess: () => void;
  onError: () => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  serviceName,
  eventName,
  onSuccess,
  onError,
}: BookingModalProps) {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asistentes: '1',
    mensaje: '',
    honeypot: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_z0qeibu',
        'template_2nwib0o',
        {
          from_name: formData.nombre,
          from_email: formData.email,
          phone: formData.telefono,
          service_or_event: serviceName || eventName || '',
          attendees: formData.asistentes,
          message: formData.mensaje,
        },
        'jmzQeg2B0BZZgHV4v'
      );

      onSuccess();
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asistentes: '1',
        mensaje: '',
        honeypot: '',
      });
      onClose();
    } catch (error) {
      console.error('Error sending booking:', error);
      onError();
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            {language === 'es' ? 'Reservar' : 'Book'}{' '}
            {serviceName || eventName}
          </h2>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
              className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-600 transition-colors"
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
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-600 transition-colors"
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
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-600 transition-colors"
              />
            </div>
          </div>

          {eventName && (
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                {language === 'es' ? 'Número de asistentes' : 'Number of attendees'}
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={formData.asistentes}
                onChange={(e) => setFormData({ ...formData, asistentes: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-600 transition-colors"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              {language === 'es' ? 'Mensaje (opcional)' : 'Message (optional)'}
            </label>
            <textarea
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-600 transition-colors resize-none"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {language === 'es' ? 'Cancelar' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              {isSubmitting
                ? language === 'es' ? 'Enviando...' : 'Sending...'
                : language === 'es' ? 'Enviar reserva' : 'Send Booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
