export interface Event {
  slug: string;
  title: string;
  titleEN: string;
  category: 'gratuitos' | 'pagados';
  dateStart: string;
  timeStart: string;
  timeEnd?: string;
  locationName: string;
  address: string;
  description: string;
  descriptionEN: string;
  image: string;
  featured: boolean;
  price?: number;
}

export const events: Event[] = [
  {
    slug: 'cantos-medicina',
    title: 'Cantos Medicina',
    titleEN: 'Medicine Songs',
    category: 'gratuitos',
    dateStart: '2026-02-01',
    timeStart: '19:00',
    timeEnd: '21:00',
    locationName: 'Casa Surya',
    address: '614 SW 136th St Burien 98166, Washington USA',
    description: 'Canto y palabra te invita a un circulo sagrado de medicina a traves del canto. En este espacio abierto y familiar, nos reunimos en comunidad para elevar nuestras voces, sanar nuestros corazones y honrar las tradiciones ancestrales. Los cantos medicina son una poderosa herramienta de sanacion que nos conecta con nuestra esencia, con la tierra y con el espiritu colectivo. No se requiere experiencia previa en canto - solo trae tu corazon abierto y tus ganas de participar. Este evento es completamente gratuito y abierto a toda la familia. Reserva tu lugar y unete a esta hermosa ceremonia de sanacion comunitaria!',
    descriptionEN: 'Song and word invites you to a sacred circle of medicine through song. In this open and family-friendly space, we gather in community to raise our voices, heal our hearts and honor ancestral traditions. Medicine songs are a powerful healing tool that connects us with our essence, with the earth and with the collective spirit. No previous singing experience required - just bring your open heart and willingness to participate. This event is completely free and open to the whole family. Reserve your place and join this beautiful community healing ceremony!',
    image: '/media/eventos_cantosmedicina.jpg',
    featured: true,
  },
];
