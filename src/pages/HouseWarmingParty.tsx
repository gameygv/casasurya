import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, MapPin, Clock, Sparkles, Heart, Music, Flame, X, ZoomIn, Gift, PartyPopper } from 'lucide-react';

export default function HouseWarmingParty() {
  const { language } = useLanguage();
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      <section className="relative overflow-hidden bg-stone-100">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative group cursor-pointer" onClick={() => setIsZoomOpen(true)}>
              <img
                src="/media/HouseWarmingParty.jpeg"
                alt="House Warming & Birthday Celebration"
                className="w-full h-auto object-contain rounded-lg shadow-2xl transition-transform group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-4 shadow-xl">
                  <ZoomIn size={32} className="text-amber-600" />
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {language === 'es' ? 'Click para ampliar mapa' : 'Click to zoom map'}
              </div>
            </div>

            {isZoomOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
                onClick={() => setIsZoomOpen(false)}
              >
                <button
                  className="absolute top-4 right-4 bg-white text-stone-900 rounded-full p-3 hover:bg-stone-100 transition-colors shadow-xl z-10"
                  onClick={() => setIsZoomOpen(false)}
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
                <div className="relative max-w-7xl max-h-[90vh] overflow-auto">
                  <img
                    src="/media/HouseWarmingParty.jpeg"
                    alt="House Warming & Birthday Celebration - Zoomed"
                    className="w-full h-auto object-contain"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
                  {language === 'es' ? 'Click fuera de la imagen para cerrar' : 'Click outside image to close'}
                </p>
              </div>
            )}

            <div className="mt-8 bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <p className="text-lg text-stone-600 mb-4">
                  {language === 'es' ? 'ESTÁS INVITADO A UNA' : 'YOU ARE INVITED TO A'}
                </p>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
                  {language === 'es'
                    ? 'Celebración de Inauguración y Cumpleaños'
                    : 'House Warming & Birthday Celebration'}
                </h1>

                <p className="text-xl text-stone-700 mb-6 italic">
                  {language === 'es'
                    ? 'Celebración y revelación de la casa - Celebración del cumpleaños de Xochitl'
                    : 'House celebration and reveal - Xochitl\'s birthday celebration'}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="text-amber-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <p className="font-bold text-stone-900 text-lg">
                      {language === 'es' ? 'Fecha' : 'Date'}
                    </p>
                    <p className="text-stone-600 text-lg">
                      {language === 'es'
                        ? 'Lunes, 10 de Febrero'
                        : 'Monday, February 10'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-amber-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <p className="font-bold text-stone-900 text-lg">
                      {language === 'es' ? 'Hora' : 'Time'}
                    </p>
                    <p className="text-stone-600 text-lg">6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-amber-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <p className="font-bold text-stone-900 text-lg">
                      {language === 'es' ? 'Ubicación' : 'Location'}
                    </p>
                    <p className="text-stone-600 text-lg">
                      El Colorado, San Pedro<br />
                      Puchutla, Oaxaca
                    </p>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-6 mt-6">
                  <p className="font-bold text-stone-900 text-lg mb-3">
                    {language === 'es' ? 'Confirmar Asistencia' : 'RSVP'}
                  </p>
                  <a
                    href="https://wa.me/12063932804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-md"
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {language === 'es' ? 'Reservar por WhatsApp' : 'Reserve via WhatsApp'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-stone-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="absolute top-20 right-20 opacity-10">
          <Music size={120} className="text-amber-600" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <Heart size={100} className="text-amber-600" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-lg mb-6">
                <Heart size={40} className="text-white" />
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                {language === 'es'
                  ? 'Celebremos Juntos'
                  : 'Let\'s Celebrate Together'}
              </h2>

              <div className="text-xl text-stone-600 leading-relaxed mb-8 space-y-6">
                <p>
                  {language === 'es'
                    ? 'Con gran alegría y gratitud, te invito a ser parte de un momento muy especial. Después de meses de trabajo, dedicación y amor, finalmente abriré las puertas de mi nuevo hogar en el hermoso corazón de Oaxaca. Este sueño se ha hecho realidad y quiero compartirlo contigo.'
                    : 'With great joy and gratitude, I invite you to be part of a very special moment. After months of work, dedication and love, I will finally open the doors of my new home in the beautiful heart of Oaxaca. This dream has come true and I want to share it with you.'}
                </p>
                <p>
                  {language === 'es'
                    ? 'Esta celebración también coincide con mi cumpleaños, así que es un doble motivo para festejar. Me encantaría que me acompañes, ya sea presencialmente en Oaxaca o a través de nuestra transmisión en línea para quienes están lejos pero cerca en el corazón.'
                    : 'This celebration also coincides with my birthday, so it\'s a double reason to celebrate. I would love for you to join me, whether in person in Oaxaca or through our online broadcast for those who are far away but close at heart.'}
                </p>
                <p>
                  {language === 'es'
                    ? 'Este nuevo espacio es más que un hogar; es un refugio donde la sanación, la comunidad y la tradición se encuentran. Durante este evento especial, revelaremos las instalaciones de la casa, compartiremos momentos de alegría y celebraremos juntos la vida, la amistad y los nuevos comienzos.'
                    : 'This new space is more than a home; it is a refuge where healing, community and tradition come together. During this special event, we will reveal the house, share moments of joy and celebrate life, friendship and new beginnings together.'}
                </p>
                <p className="font-semibold text-amber-700">
                  {language === 'es'
                    ? 'Únete a nosotros para una noche inolvidable llena de música tradicional, comida deliciosa, conexión y mucho amor. ¡Te espero!'
                    : 'Join us for an unforgettable evening filled with traditional music, delicious food, connection and lots of love. I look forward to seeing you!'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-stone-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Music className="text-amber-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {language === 'es' ? 'Música en Vivo' : 'Live Music'}
                </h3>
                <p className="text-stone-600">
                  {language === 'es'
                    ? 'Disfruta de música tradicional y contemporánea'
                    : 'Enjoy traditional and contemporary music'}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-stone-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Gift className="text-amber-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {language === 'es' ? 'Celebración' : 'Celebration'}
                </h3>
                <p className="text-stone-600">
                  {language === 'es'
                    ? 'Inauguración de casa y cumpleaños'
                    : 'House warming and birthday'}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-stone-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Flame className="text-amber-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {language === 'es' ? 'Comida Deliciosa' : 'Delicious Food'}
                </h3>
                <p className="text-stone-600">
                  {language === 'es'
                    ? 'Platillos tradicionales y más'
                    : 'Traditional dishes and more'}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-12 text-center shadow-2xl">
              <PartyPopper className="inline-block text-white mb-6" size={48} />
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                {language === 'es'
                  ? '¡Te Espero!'
                  : 'I Look Forward to Seeing You!'}
              </h3>
              <p className="text-xl text-amber-50 mb-8">
                {language === 'es'
                  ? 'Acompáñanos presencialmente o en línea para celebrar este momento especial'
                  : 'Join us in person or online to celebrate this special moment'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/12063932804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-amber-700 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {language === 'es' ? 'Reservar por WhatsApp' : 'Reserve via WhatsApp'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-stone-900 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-amber-400" size={28} />
            <h3 className="text-2xl font-serif font-bold text-white">
              Xochitl Garcia
            </h3>
            <Sparkles className="text-amber-400" size={28} />
          </div>
          <p className="text-amber-200 text-lg mb-2">
            {language === 'es'
              ? 'Te espero con los brazos abiertos'
              : 'I await you with open arms'}
          </p>
          <p className="text-amber-300 text-base">
            El Colorado, San Pedro - Puchutla, Oaxaca
          </p>
        </div>
      </section>
    </div>
  );
}
