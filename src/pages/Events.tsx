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
    },
    {
      id: 'taller-limpias-energeticas',
      title: language === 'es' ? 'Taller de Limpias Energéticas' : 'Energy Cleansing Workshop',
      schedule: language === 'es'
        ? 'Viernes 22 y 29 de Mayo, 2026 - 9am a 5pm'
        : 'Friday May 22 & 29, 2026 - 9am to 5pm',
      shortDescription: language === 'es'
        ? 'Aprende técnicas ancestrales de limpias energéticas con huevo, plantas medicinales y sahumerio. Impartido por la Curandera Sofía Díaz Hernández. Inversión: $175.'
        : 'Learn ancestral energy cleansing techniques with egg, medicinal plants and incense. Taught by Curandera Sofía Díaz Hernández. Investment: $175.',
      fullDescription: language === 'es'
        ? 'Taller de Limpias Energéticas con Huevo, Plantas Medicinales y Sahumerio, impartido por la Curandera Sofía Díaz Hernández. En este taller aprenderás: el significado y uso del huevo en las limpias energéticas, el poder de las plantas medicinales y su preparación, el sahumerio como herramienta de limpieza, protección y elevación de la energía, y técnicas prácticas para tu bienestar y el de otros. Conéctate con tu intuición y la sabiduría ancestral. ¡Cupo limitado! Inversión: $175 dólares.'
        : 'Energy Cleansing Workshop with Egg, Medicinal Plants and Incense, taught by Curandera Sofía Díaz Hernández. In this workshop you will learn: the meaning and use of the egg in energy cleansings, the power of medicinal plants and their preparation, incense as a tool for cleansing, protection and energy elevation, and practical techniques for your wellbeing and others. Connect with your intuition and ancestral wisdom. Limited spots! Investment: $175.',
      image: '/media/TallerDeLimpiasEnergeticas.jpeg',
      whatsappMessage: language === 'es'
        ? 'Hola, me interesa inscribirme en el Taller de Limpias Energéticas del 22 y 29 de Mayo. ¿Podrían darme más información?'
        : 'Hello, I\'m interested in enrolling in the Energy Cleansing Workshop on May 22 & 29. Could you give me more information?'
    },
    {
      id: 'bao-memoria-ancestral',
      title: language === 'es' ? 'BAO - Memoria Ancestral' : 'BAO - Ancestral Memory',
      schedule: language === 'es'
        ? 'Sábado 23 y Domingo 24 de Mayo, 2026 - 9am a 5pm'
        : 'Saturday May 23 & Sunday May 24, 2026 - 9am to 5pm',
      shortDescription: language === 'es'
        ? 'Taller de Vaporización Uterina en la Medicina Tradicional Mexicana. Un viaje sagrado al cuidado del centro femenino. Impartido por Sofía Díaz Hernández. Inversión: $300 (material incluido).'
        : 'Uterine Steaming Workshop in Traditional Mexican Medicine. A sacred journey to caring for the feminine center. Taught by Sofía Díaz Hernández. Investment: $300 (materials included).',
      fullDescription: language === 'es'
        ? 'BAO - Memoria Ancestral: Taller de Vaporización Uterina en la Medicina Tradicional Mexicana, impartido por la Curandera Sofía Díaz Hernández. Un viaje sagrado hacia el cuidado del centro femenino a través de la sabiduría ancestral. En este taller aprenderás: el significado y uso del huevo en las limpias energéticas, el poder de las plantas medicinales y su preparación, el sahumerio como limpieza, protección y elevación de la energía, el ritual de la vaporización uterina — el vapor húmedo que abre, limpia y reconecta — y la aplicación práctica del ritual con respeto, intención y cuidado del centro. Más allá del efecto físico, este ritual es un espacio de introspección, sanación y reconexión con el propio cuerpo. La mujer va a sentir calor y comenzará a sudar. ¡Cupo limitado! Inversión: $300 por los dos días, material incluido.'
        : 'BAO - Ancestral Memory: Uterine Steaming Workshop in Traditional Mexican Medicine, taught by Curandera Sofía Díaz Hernández. A sacred journey to caring for the feminine center through ancestral wisdom. In this workshop you will learn: the meaning and use of the egg in energy cleansings, the power of medicinal plants and their preparation, incense for cleansing, protection and energy elevation, the uterine steaming ritual — the warm steam that opens, cleanses and reconnects — and the practical application of the ritual with respect, intention and care. Beyond the physical effect, this ritual is a space for introspection, healing and reconnection with your own body. Limited spots! Investment: $300 for both days, materials included.',
      image: '/media/BaoMemoriaAncestral.jpeg',
      whatsappMessage: language === 'es'
        ? 'Hola, me interesa inscribirme en el Taller BAO - Memoria Ancestral del 23 y 24 de Mayo. ¿Podrían darme más información?'
        : 'Hello, I\'m interested in enrolling in the BAO - Ancestral Memory Workshop on May 23 & 24. Could you give me more information?'
    },
    {
      id: 'taller-sobadas-tradicionales',
      title: language === 'es' ? 'Taller de Sobadas Tradicionales' : 'Traditional Sobadas Workshop',
      schedule: language === 'es'
        ? 'Sábado 30 y Domingo 31 de Mayo, 2026 - 9am a 5pm'
        : 'Saturday May 30 & Sunday May 31, 2026 - 9am to 5pm',
      shortDescription: language === 'es'
        ? 'Taller de Sobadas Tradicionales y Salud de la Mujer. Aprende a sobar la matriz, una práctica de la medicina tradicional indígena. Con Sofía Díaz Hernández. Inversión: $300 (material incluido).'
        : 'Traditional Sobadas and Women\'s Health Workshop. Learn to massage the womb, a traditional indigenous medicine practice. With Sofía Díaz Hernández. Investment: $300 (materials included).',
      fullDescription: language === 'es'
        ? 'Taller de Sobadas Tradicionales y Salud de la Mujer, con la Curandera Sofía Díaz Hernández. Sobar la matriz es una práctica de la medicina tradicional indígena. Un espacio sagrado para aprender y fortalecer nuestras manos como medicina, honrando el cuerpo femenino en cada etapa de su vida. El taller incluye: juntada de pulso — lectura del cuerpo para conocer su estado y necesidades; sobada de ovarios — armoniza el sistema reproductivo femenino y regula su energía; sobada de vejiga — libera tensiones y mejora el funcionamiento de la vejiga; ajuste correctivo con rebozo en el post parto — alinea el cuerpo, cierra el ciclo y apoya la recuperación de la madre; y las sobadas de matriz y el prolapso uterino — técnicas ancestrales para fortalecer, recolocar y sanar desde la raíz. Con respeto, amor y técnica adecuada, podemos acompañar procesos profundos de sanación. ¡Cupo limitado! Inversión: $300 por los dos días, material incluido.'
        : 'Traditional Sobadas and Women\'s Health Workshop, with Curandera Sofía Díaz Hernández. Womb massage is a practice from traditional indigenous medicine. A sacred space to learn and strengthen our hands as medicine, honoring the feminine body at every stage of life. The workshop includes: pulse reading — body assessment to understand its state and needs; ovary massage — harmonizes the female reproductive system and regulates its energy; bladder massage — releases tension and improves bladder function; corrective adjustment with rebozo postpartum — aligns the body, closes the cycle and supports the mother\'s recovery; and womb massage and uterine prolapse — ancestral techniques to strengthen, reposition and heal from the root. With respect, love and proper technique, we can accompany deep healing processes. Limited spots! Investment: $300 for both days, materials included.',
      image: '/media/TallerDeSobadasTradicionaled.jpeg',
      whatsappMessage: language === 'es'
        ? 'Hola, me interesa inscribirme en el Taller de Sobadas Tradicionales del 30 y 31 de Mayo. ¿Podrían darme más información?'
        : 'Hello, I\'m interested in enrolling in the Traditional Sobadas Workshop on May 30 & 31. Could you give me more information?'
    },
    {
      id: 'almas-sonoras',
      title: language === 'es' ? 'Almas Sonoras - Cantos Medicina y Tambor en el Parque' : 'Almas Sonoras - Medicine Songs & Drums in the Park',
      schedule: language === 'es'
        ? 'Domingos: Jun 14, Jul 12, Ago 9, Sep 13, Oct 11, 2026 - 2pm'
        : 'Sundays: Jun 14, Jul 12, Aug 9, Sep 13, Oct 11, 2026 - 2pm',
      shortDescription: language === 'es'
        ? 'Eventos gratuitos y abiertos a toda la comunidad en el Duwamish Waterway Park, Seattle. Cantos medicina y tambor al aire libre. Con el apoyo de Seattle Parks & Recreation y Office of Arts & Culture.'
        : 'Free events open to the entire community at Duwamish Waterway Park, Seattle. Medicine songs and drums outdoors. Supported by Seattle Parks & Recreation and Office of Arts & Culture.',
      fullDescription: language === 'es'
        ? 'Almas Sonoras — Cantos Medicina y Tambor en el Parque. Una serie de encuentros gratuitos y abiertos a toda la comunidad donde nos reunimos al aire libre para compartir cantos de medicina, el ritmo del tambor y la conexión con la naturaleza. Estos eventos se realizan en el Duwamish Waterway Park (7900 10th Ave S, Seattle, WA 98108) y cuentan con el apoyo de la Ciudad de Seattle, Seattle Parks & Recreation y la Office of Arts & Culture. Próximas fechas: domingo 14 de junio, 12 de julio, 9 de agosto, 13 de septiembre y 11 de octubre de 2026, a las 2pm. Un espacio de sanación comunitaria a través de la voz, el canto y el sonido ancestral. ¡No te lo pierdas!'
        : 'Almas Sonoras — Medicine Songs & Drums in the Park. A series of free gatherings open to the entire community where we meet outdoors to share medicine songs, drum rhythms and connection with nature. These events take place at Duwamish Waterway Park (7900 10th Ave S, Seattle, WA 98108) and are supported by the City of Seattle, Seattle Parks & Recreation and the Office of Arts & Culture. Upcoming dates: Sunday June 14, July 12, August 9, September 13 and October 11, 2026, at 2pm. A space for community healing through voice, song and ancestral sound. Don\'t miss it!',
      image: '/media/AlmasSonoras.jpeg',
      whatsappMessage: language === 'es'
        ? 'Hola, me interesa participar en Almas Sonoras - Cantos Medicina en el Parque. ¿Podrían darme más información?'
        : 'Hello, I\'m interested in participating in Almas Sonoras - Medicine Songs in the Park. Could you give me more information?'
    },
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
      image: '/media/CirculoDeSanacion_new.jpeg',
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
      image: '/media/TemazcalComunitario_new.jpeg',
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
