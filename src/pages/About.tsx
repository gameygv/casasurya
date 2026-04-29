import { useLanguage } from '../context/LanguageContext';
import { Heart, Eye, Target, Sun, Star, Sparkles } from 'lucide-react';
import PodcastStyleHero from '../components/PodcastStyleHero';

export default function About() {
  const { language } = useLanguage();

  const heroGalleryImages = [
    '/media/g05.jpeg',
    '/media/g12.jpeg',
    '/media/g81.jpeg',
    '/media/g34.jpeg',
  ];

  const values = [
    {
      icon: Target,
      image: '/media/mision.png',
      title: language === 'es' ? 'Mision' : 'Mission',
      text: language === 'es'
        ? 'Proveer herramientas holísticas para la autorrealización individual y colectiva de la comunidad latina en el estado de Washington. Nos comprometemos a ofrecer terapias accesibles que honren nuestras raíces culturales, creando espacios seguros donde cada persona pueda reconectarse con su esencia y encontrar el camino hacia su bienestar integral. A través de prácticas ancestrales y técnicas modernas de sanación, acompañamos a nuestra comunidad en su viaje de transformación personal y colectiva.'
        : 'Provide holistic tools for individual and collective self-realization of the Latino community in the state of Washington. We are committed to offering accessible therapies that honor our cultural roots, creating safe spaces where each person can reconnect with their essence and find the path to their integral wellbeing. Through ancestral practices and modern healing techniques, we accompany our community on their journey of personal and collective transformation.',
    },
    {
      icon: Eye,
      image: '/media/vision.png',
      title: language === 'es' ? 'Visión' : 'Vision',
      text: language === 'es'
        ? 'Visualizamos una comunidad latina resiliente, próspera y autocontenida, donde cada individuo tenga acceso a recursos de sanación que respeten su herencia cultural. Soñamos con un futuro donde las prácticas ancestrales de nuestros abuelos sean valoradas y transmitidas a las nuevas generaciones, fortaleciendo los lazos comunitarios y preservando la sabiduría que nos define como pueblo. Aspiramos a ser un faro de luz y esperanza para quienes buscan reconectarse con sus raíces y encontrar equilibrio en sus vidas.'
        : 'We envision a resilient, prosperous and self-contained Latino community, where each individual has access to healing resources that respect their cultural heritage. We dream of a future where the ancestral practices of our grandparents are valued and transmitted to new generations, strengthening community bonds and preserving the wisdom that defines us as a people. We aspire to be a beacon of light and hope for those seeking to reconnect with their roots and find balance in their lives.',
    },
    {
      icon: Heart,
      image: '/media/proposito.png',
      title: language === 'es' ? 'Propósito' : 'Purpose',
      text: language === 'es'
        ? 'Atender la necesidad de salud holística en la comunidad Latina, reconociendo que el bienestar abarca cuerpo, mente y espíritu. Entendemos que nuestra comunidad enfrenta desafíos únicos y merece espacios de sanación que comprendan su contexto cultural y lingüístico. Nuestro propósito es ser ese puente entre la medicina tradicional de nuestros ancestros y las necesidades contemporáneas, ofreciendo un refugio donde la sanación sea accesible, respetuosa y profundamente transformadora.'
        : 'Address the need for holistic health in the Latino community, recognizing that wellbeing encompasses body, mind and spirit. We understand that our community faces unique challenges and deserves healing spaces that understand their cultural and linguistic context. Our purpose is to be that bridge between the traditional medicine of our ancestors and contemporary needs, offering a refuge where healing is accessible, respectful and deeply transformative.',
    },
  ];

  return (
    <div>
      <PodcastStyleHero
        titleTag={language === 'es' ? 'Nuestra historia' : 'Our story'}
        title={language === 'es' ? 'Nosotros' : 'About Us'}
        subtitle={language === 'es' ? 'Comunidad, sanación y tradición' : 'Community, healing and tradition'}
        galleryImages={heroGalleryImages}
        imagePositions={['top', 'center', 'center', 'center']}
      />

      <section className="py-24 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="text-amber-600" size={24} />
                  <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
                    {language === 'es' ? 'Quienes somos' : 'Who we are'}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">
                  {language === 'es'
                    ? 'La casa donde sale el sol'
                    : 'The house where the sun rises'}
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-stone-700 leading-relaxed">
                    {language === 'es'
                      ? 'Casa Surya Healing es una organización de base sin fines de lucro que brinda terapias holísticas para apoyar el proceso de sanación en el estado de Washington. Nuestro nombre, "Surya", proviene del sánscrito y significa "sol", simbolizando la luz, la energía vital y el renacimiento que buscamos traer a cada persona que cruza nuestras puertas.'
                      : 'Casa Surya Healing is a grassroots non-profit organization that provides holistic therapies to support the healing process in the state of Washington. Our name, "Surya", comes from Sanskrit and means "sun", symbolizing the light, vital energy and rebirth we seek to bring to everyone who crosses our doors.'}
                  </p>
                  <p className="text-xl text-stone-700 leading-relaxed">
                    {language === 'es'
                      ? 'Nos dedicamos a apoyar a la comunidad latina a través de terapias holísticas con el fin de conectar con prácticas ancestrales y culturales para así construir una comunidad más fuerte y resiliente. Creemos firmemente que la sanación es un derecho de todos, no un privilegio, y trabajamos incansablemente para hacer estas terapias accesibles a quienes más las necesitan.'
                      : 'We are dedicated to supporting the Latino community through holistic therapies in order to connect with ancestral and cultural practices to build a stronger and more resilient community. We firmly believe that healing is a right for all, not a privilege, and we work tirelessly to make these therapies accessible to those who need them most.'}
                  </p>
                  <p className="text-xl text-stone-700 leading-relaxed">
                    {language === 'es'
                      ? 'En Casa Surya, cada sesión es un encuentro sagrado donde se honra la sabiduría de nuestros antepasados mientras se integran técnicas contemporáneas de bienestar. Ofrecemos un espacio libre de juicio donde puedes explorar tu camino de sanación con el apoyo de terapeutas comprometidos y una comunidad acogedora que te acompaña en cada paso.'
                      : 'At Casa Surya, each session is a sacred encounter where the wisdom of our ancestors is honored while integrating contemporary wellness techniques. We offer a judgment-free space where you can explore your healing path with the support of committed therapists and a welcoming community that accompanies you every step of the way.'}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-amber-200 to-stone-200 rounded-3xl blur-xl opacity-50" />
                  <img
                    src="/media/h01.jpeg"
                    alt="Casa Surya Community"
                    className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-stone-800 to-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(217, 119, 6, 0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(217, 119, 6, 0.3) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="absolute top-10 left-10 opacity-10">
          <Star size={80} className="text-amber-400" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <Star size={60} className="text-amber-400" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="text-amber-400" size={24} />
              <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">
                {language === 'es' ? 'Nuestros pilares' : 'Our pillars'}
              </span>
              <Sparkles className="text-amber-400" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              {language === 'es' ? 'Lo que nos guia' : 'What guides us'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-amber-500/20 to-stone-800/50 flex items-center justify-center p-8">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="max-w-full max-h-full object-contain filter drop-shadow-lg"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                      <value.icon size={24} className="text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-stone-300 leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Sun className="text-amber-600" size={24} />
                  <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
                    {language === 'es' ? 'Fundadora' : 'Founder'}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                  Xochitl Garcia
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-8" />
                <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                  <p>
                    {language === 'es'
                      ? 'Xochitl Garcia es una sanadora y guía espiritual dedicada al servicio de la comunidad latina en Washington. Su nombre, que en náhuatl significa "flor", refleja la belleza y delicadeza con la que aborda cada proceso de sanación. Con más de dos décadas de experiencia en prácticas holísticas y ancestrales, ha dedicado su vida a preservar y compartir las tradiciones de sanación que le fueron transmitidas por sus mayores y que ella, a su vez, continúa transmitiendo con amor y reverencia.'
                      : 'Xochitl Garcia is a healer and spiritual guide dedicated to serving the Latino community in Washington. Her name, which in Nahuatl means "flower", reflects the beauty and delicacy with which she approaches each healing process. With over two decades of experience in holistic and ancestral practices, she has dedicated her life to preserving and sharing the healing traditions that were passed down to her by her elders and that she, in turn, continues to transmit with love and reverence.'}
                  </p>
                  <p>
                    {language === 'es'
                      ? 'Formada en diversas modalidades de sanación que incluyen Reiki, Quantum Balance, ceremonias de temazcal y limpias energéticas tradicionales, Xochitl combina el conocimiento ancestral con técnicas modernas para ofrecer un enfoque integral de bienestar. Su camino de sanación comenzó como una búsqueda personal que se transformó en un llamado a servir a su comunidad.'
                      : 'Trained in various healing modalities including Reiki, Quantum Balance, temazcal ceremonies and traditional energy cleansings, Xochitl combines ancestral knowledge with modern techniques to offer a comprehensive approach to wellbeing. Her healing path began as a personal quest that transformed into a calling to serve her community.'}
                  </p>
                  <p>
                    {language === 'es'
                      ? 'Su visión de crear un espacio seguro y acogedor para la sanación colectiva llevó a la fundación de Casa Surya Healings. Aquí, Xochitl continúa facilitando ceremonias de temazcal, sesiones de sanación individuales y grupales, y círculos de palabra que honran las raíces culturales de nuestra comunidad. Su calidez, sabiduría y compromiso genuino con cada persona que busca sanación la han convertido en un pilar fundamental para cientos de familias en Washington.'
                      : 'Her vision of creating a safe and welcoming space for collective healing led to the foundation of Casa Surya Healings. Here, Xochitl continues to facilitate temazcal ceremonies, individual and group healing sessions, and talking circles that honor the cultural roots of our community. Her warmth, wisdom and genuine commitment to each person seeking healing have made her a fundamental pillar for hundreds of families in Washington.'}
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-amber-300 to-amber-500 rounded-3xl blur-2xl opacity-30" />
                  <div className="absolute -inset-3 bg-gradient-to-br from-stone-200 to-amber-200 rounded-3xl" />
                  <img
                    src="/media/xochitl_garcia_fundadora.jpg"
                    alt="Xochitl Garcia"
                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-stone-900 to-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23d97706' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='25' fill='none' stroke='%23d97706' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='10' fill='none' stroke='%23d97706' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Sun size={64} className="text-amber-400 mx-auto mb-8 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              {language === 'es'
                ? 'Únete a nuestra comunidad'
                : 'Join our community'}
            </h2>
            <p className="text-xl text-stone-300 mb-10">
              {language === 'es'
                ? 'Te invitamos a ser parte de este camino de sanación y transformación.'
                : 'We invite you to be part of this path of healing and transformation.'}
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
                href="/contacto"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all border border-white/20"
              >
                {language === 'es' ? 'Contactanos' : 'Contact us'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
