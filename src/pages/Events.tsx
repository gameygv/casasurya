import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import PodcastStyleHero from '../components/PodcastStyleHero';
import RecurringEventModal from '../components/RecurringEventModal';

export default function Events() {
  const { language } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<{
    title: string;
    schedule: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    video?: string;
    whatsappMessage?: string;
    registrationUrl?: string;
  } | null>(null);

  const heroGalleryImages = [
    '/media/g79.jpeg',
    '/media/g33.jpeg',
    '/media/g52.jpeg',
    '/media/g62.jpeg',
  ];

  const heroImagePositions: ('top' | 'center')[] = ['center', 'center', 'top', 'center'];

  const specialEvents = [
    {
      id: 'florece',
      title: language === 'es' ? 'Florece - Festival Equinoccio de Primavera' : 'Florece - Spring Equinox Festival',
      schedule: language === 'es'
        ? 'Marzo 21 y 22 - Sábado y Domingo'
        : 'March 21 & 22 - Saturday and Sunday',
      shortDescription: language === 'es'
        ? 'Festival gratuito y abierto a la comunidad con terapias grupales, clases, entrenamientos, baño de sonido, vendors y más.'
        : 'Free festival open to the community with group therapies, classes, trainings, sound bath, vendors and more.',
      fullDescription: language === 'es'
        ? 'FLORECE es nuestro festival del equinoccio de primavera, un evento gratuito y abierto a toda la comunidad. Únete a nosotros para celebrar el renacimiento de la naturaleza con terapias grupales, clases y entrenamientos, baño de sonido, artesanos locales y mucho más. Una experiencia transformadora de dos días llena de sanación, conexión y celebración comunitaria en Casa Surya.'
        : 'FLORECE is our spring equinox festival, a free event open to the entire community. Join us to celebrate nature\'s rebirth with group therapies, classes and trainings, sound bath, local artisans and much more. A transformative two-day experience filled with healing, connection and community celebration at Casa Surya.',
      image: '/media/Florece.jpeg',
      video: '/media/Florece.mp4',
      registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdc0rnY7m_RnXZm69gGwmo5xgeSe4gXWl3sE5xPrdO8vj99fw/viewform'
    },
    {
      id: 'temazcal-10-aniversario',
      title: language === 'es' ? '10º Aniversario del Temazcal' : '10th Temazcal Anniversary',
      schedule: language === 'es'
        ? 'Domingo 17 de Mayo, 2026 - Desde las 12pm'
        : 'Sunday May 17, 2026 - From 12pm',
      shortDescription: language === 'es'
        ? 'Save the date! Celebramos 10 años de mantener viva la sagrada tradición del temazcal en nuestra comunidad con una ceremonia especial.'
        : 'Save the date! We celebrate 10 years of keeping the sacred temazcal tradition alive in our community with a special ceremony.',
      fullDescription: language === 'es'
        ? 'Únete a nosotros el domingo 17 de mayo de 2026 para celebrar una década completa de ceremonias de temazcal en Casa Surya. Este evento especial honra 10 años de purificación, sanación y conexión con nuestras raíces ancestrales. Una ceremonia única para agradecer a todos quienes han sido parte de este camino sagrado y para renovar nuestro compromiso con esta medicina ancestral que ha transformado tantas vidas. Un día de celebración comunitaria, gratitud y conexión profunda.'
        : 'Join us on Sunday May 17, 2026 to celebrate a full decade of temazcal ceremonies at Casa Surya. This special event honors 10 years of purification, healing and connection with our ancestral roots. A unique ceremony to thank all those who have been part of this sacred journey and to renew our commitment to this ancestral medicine that has transformed so many lives. A day of community celebration, gratitude and deep connection.',
      image: '/media/Temazcal10.jpeg',
      whatsappMessage: language === 'es'
        ? 'Hola, me interesa participar en el 10º Aniversario del Temazcal el 17 de Mayo. ¿Podrían darme más información?'
        : 'Hello, I\'m interested in participating in the 10th Temazcal Anniversary on May 17. Could you give me more information?'
    }
  ];

  const recurringEvents = [
    {
      id: 'circulo-canto',
      title: language === 'es' ? 'Círculo de Canto' : 'Singing Circle',
      schedule: language === 'es'
        ? 'Gratuito y abierto a la comunidad, 2° & 4° jueves del mes'
        : 'Free and open to the community, 2nd & 4th Thursday of the month',
      shortDescription: language === 'es'
        ? 'Espacios comunitarios de sanación colectiva donde la voz, el canto, el ritmo y la palabra se convierten en medicina.'
        : 'Community spaces for collective healing where voice, song, rhythm and words become medicine.',
      fullDescription: language === 'es'
        ? 'Los círculos de canto y palabra de Casa Surya son espacios comunitarios de sanación colectiva donde la voz, el canto, el ritmo y la palabra se convierten en medicina. Estos círculos están abiertos a toda la comunidad y no requieren experiencia previa: todas las voces son bienvenidas.'
        : 'Casa Surya\'s singing and word circles are community spaces for collective healing where voice, song, rhythm and words become medicine. These circles are open to the entire community and require no previous experience: all voices are welcome.',
      image: '/media/CirculoCanto.jpeg',
      video: '/media/circulo-canto.mp4',
      whatsappMessage: language === 'es'
        ? 'Hola, me interesa participar en el Círculo de Canto. ¿Podrían darme más información?'
        : 'Hello, I\'m interested in participating in the Singing Circle. Could you give me more information?'
    },
    {
      id: 'circulo-sanacion',
      title: language === 'es' ? 'Círculo de Sanación' : 'Healing Circle',
      schedule: language === 'es'
        ? 'Gratuito y abierto a la comunidad, primer sábado del mes'
        : 'Free and open to the community, first Saturday of the month',
      shortDescription: language === 'es'
        ? 'Espacio gratuito y abierto donde la comunidad puede aprender, practicar y recibir terapias complementarias basadas en la sabiduría ancestral.'
        : 'Free and open space where the community can learn, practice and receive complementary therapies based on ancestral wisdom.',
      fullDescription: language === 'es'
        ? 'Casa Surya te invita con mucho cariño a nuestros círculos mensuales de sanación comunitaria, un espacio gratuito y abierto donde la comunidad puede aprender, practicar y recibir terapias complementarias basadas en la sabiduría ancestral y el cuidado colectivo.'
        : 'Casa Surya warmly invites you to our monthly community healing circles, a free and open space where the community can learn, practice and receive complementary therapies based on ancestral wisdom and collective care.',
      image: '/media/CirculoSanacion.jpeg',
      video: '/media/circulo-sanacion.mp4',
      whatsappMessage: language === 'es'
        ? 'Hola, me interesa participar en el Círculo de Sanación. ¿Podrían darme más información?'
        : 'Hello, I\'m interested in participating in the Healing Circle. Could you give me more information?'
    },
    {
      id: 'temazcal-comunitario',
      title: language === 'es' ? 'Temazcal Comunitario' : 'Community Temazcal',
      schedule: language === 'es'
        ? 'Gratuito y abierto a la comunidad, último domingo del mes'
        : 'Free and open to the community, last Sunday of the month',
      shortDescription: language === 'es'
        ? 'Ceremonia y ritual de temazcal abierto para toda la comunidad sin costo. El fuego se enciende a las 10am.'
        : 'Temazcal ceremony and ritual open to the entire community at no cost. The fire is lit at 10am.',
      fullDescription: language === 'es'
        ? 'Ceremonia, ritual de temazcal, abierto para toda la comunidad sin costo. El fuego se enciende a las 10am, entramos cuando las abuelitas piedras están listas. Una experiencia profunda de purificación y conexión con nuestras raíces ancestrales.'
        : 'Temazcal ceremony and ritual, open to the entire community at no cost. The fire is lit at 10am, we enter when the grandmother stones are ready. A deep experience of purification and connection with our ancestral roots.',
      image: '/media/TemazcalComunitario.jpeg',
      video: '/media/temazcal-comunitario.mp4',
      whatsappMessage: language === 'es'
        ? 'Hola, me interesa participar en el Temazcal Comunitario. ¿Podrían darme más información?'
        : 'Hello, I\'m interested in participating in the Community Temazcal. Could you give me more information?'
    }
  ];

  return (
    <div>
      <PodcastStyleHero
        titleTag={language === 'es' ? 'Ceremonias y encuentros' : 'Ceremonies and gatherings'}
        title={language === 'es' ? 'Eventos' : 'Events'}
        subtitle={language === 'es' ? 'Únete a nuestras ceremonias y actividades' : 'Join our ceremonies and activities'}
        galleryImages={heroGalleryImages}
        imagePositions={heroImagePositions}
      />

      <section className="pt-24 pb-12 bg-gradient-to-b from-stone-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              {language === 'es' ? 'Eventos Especiales' : 'Special Events'}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Celebraciones y ceremonias únicas durante el año'
                : 'Unique celebrations and ceremonies throughout the year'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {specialEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-full h-80 bg-stone-100 flex items-center justify-center">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm text-amber-600 font-semibold mb-4">
                    {event.schedule}
                  </p>
                  <p className="text-stone-700 mb-6 leading-relaxed">
                    {event.shortDescription}
                  </p>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-md"
                  >
                    {language === 'es' ? 'Conoce Más' : 'Learn More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12 pb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              {language === 'es' ? 'Eventos Gratuitos Recurrentes' : 'Recurring Free Events'}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Espacios comunitarios abiertos a todos. No se requiere experiencia previa.'
                : 'Community spaces open to all. No prior experience required.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recurringEvents.map((event) => (
              <div
                key={event.id}
                className="bg-stone-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-full h-64 bg-white flex items-center justify-center">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm text-amber-600 font-semibold mb-4">
                    {event.schedule}
                  </p>
                  <p className="text-stone-700 mb-6 leading-relaxed">
                    {event.shortDescription}
                  </p>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-md"
                  >
                    {language === 'es' ? 'Conoce Más' : 'Learn More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RecurringEventModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        event={selectedEvent || recurringEvents[0]}
      />
    </div>
  );
}
