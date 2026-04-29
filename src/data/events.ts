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

export const events: Event[] = [];
